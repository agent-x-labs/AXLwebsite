import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createServer } from 'vite'

const distDir = path.join(process.cwd(), 'dist')
const configFile = fileURLToPath(new URL('../vite.config.js', import.meta.url))
const today = new Date().toISOString()

const vite = await createServer({
  configFile,
  appType: 'custom',
  server: { middlewareMode: true, hmr: false, watch: null },
})

try {
  const [{ sitemapRoutes }, { SITE_URL }] = await Promise.all([
    vite.ssrLoadModule('/src/seo/routes.js'),
    vite.ssrLoadModule('/src/seo/site.js'),
  ])

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapRoutes
  .map(
    (route) => `  <url>
    <loc>${new URL(route.path, SITE_URL).toString()}</loc>
    <lastmod>${today}</lastmod>
  </url>`,
  )
  .join('\n')}
</urlset>
`

  await fs.writeFile(path.join(distDir, 'sitemap.xml'), xml)
} finally {
  await vite.close()
}
