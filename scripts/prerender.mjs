import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { renderToStaticMarkup } from 'react-dom/server'
import { createServer } from 'vite'

const projectRoot = process.cwd()
const distDir = path.join(projectRoot, 'dist')
const configFile = fileURLToPath(new URL('../vite.config.js', import.meta.url))
const manifestPath = path.join(distDir, '.vite', 'manifest.json')

const resolveHtmlPath = (routePath) => {
  if (routePath === '/') {
    return path.join(distDir, 'index.html')
  }

  return path.join(distDir, routePath.replace(/^\//, ''), 'index.html')
}

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

const stripInitialMotionStyles = (markup) =>
  markup.replace(/\sstyle="([^"]*)"/g, (_, rawStyles) => {
    const cleaned = rawStyles
      .replace(/(^|;)\s*opacity:\s*0(?:\.\d+)?\s*(?=;|$)/gi, '$1')
      .replace(/(^|;)\s*transform:\s*translateY\([^)]*\)\s*(?=;|$)/gi, '$1')
      .replace(/(^|;)\s*transform:\s*translateX\([^)]*\)\s*(?=;|$)/gi, '$1')
      .replace(/(^|;)\s*transform:\s*translate3d\([^)]*\)\s*(?=;|$)/gi, '$1')
      .replace(/^;+|;+$/g, '')
      .replace(/;{2,}/g, ';')
      .trim()

    return cleaned ? ` style="${cleaned}"` : ''
  })

const vite = await createServer({
  configFile,
  appType: 'custom',
  server: { middlewareMode: true, hmr: false, watch: null },
})

try {
  const [{ routeManifest }, { renderSeoHead }] = await Promise.all([
    vite.ssrLoadModule('/src/seo/routes.js'),
    vite.ssrLoadModule('/src/seo/head.js'),
  ])
  const manifest = JSON.parse(await fs.readFile(manifestPath, 'utf8'))
  const assetEntries = Object.entries(manifest)
    .filter(([key, value]) => key.startsWith('src/assets/') && value.file)
    .map(([key, value]) => [`/${key}`, `/${value.file}`])

  await Promise.all(
    routeManifest.map(async (route) => {
      const htmlPath = resolveHtmlPath(route.path)
      const html = await fs.readFile(htmlPath, 'utf8')
      let appMarkup = renderToStaticMarkup(route.render())
      const seoHead = renderSeoHead(route)

      for (const [from, to] of assetEntries) {
        appMarkup = appMarkup.replace(new RegExp(escapeRegExp(from), 'g'), to)
      }

      appMarkup = stripInitialMotionStyles(appMarkup)

      const nextHtml = html
        .replace('<!-- SEO_HEAD -->', seoHead)
        .replace('<!-- APP_HTML -->', appMarkup)

      await fs.writeFile(htmlPath, nextHtml)
    }),
  )
} finally {
  await vite.close()
}
