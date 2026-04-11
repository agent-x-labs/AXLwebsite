import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_THEME_COLOR, SITE_URL } from './site'

const escapeHtml = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')

const absoluteUrl = (value) => new URL(value, SITE_URL).toString()

export const renderSeoHead = (route) => {
  const canonical = absoluteUrl(route.path)
  const ogImage = absoluteUrl(route.ogImage || DEFAULT_OG_IMAGE)
  const title = route.title
  const description = route.socialDescription || route.description
  const schemaMarkup = (route.schemas || [])
    .map(
      (schema) =>
        `<script type="application/ld+json">${JSON.stringify(schema, null, 0)}</script>`,
    )
    .join('\n')

  return [
    `<title>${escapeHtml(title)}</title>`,
    `<meta name="description" content="${escapeHtml(route.description)}" />`,
    `<meta name="theme-color" content="${SITE_THEME_COLOR}" />`,
    `<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />`,
    `<link rel="canonical" href="${canonical}" />`,
    `<link rel="apple-touch-icon" sizes="180x180" href="/axl-apple-touch-icon.png" />`,
    `<link rel="icon" type="image/png" sizes="32x32" href="/axl-favicon-32x32.png" />`,
    `<link rel="icon" type="image/png" sizes="16x16" href="/axl-favicon-16x16.png" />`,
    `<link rel="shortcut icon" href="/axl-favicon.ico" />`,
    `<link rel="manifest" href="/axl-site.webmanifest" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta property="og:type" content="${route.ogType || 'website'}" />`,
    `<meta property="og:title" content="${escapeHtml(title)}" />`,
    `<meta property="og:description" content="${escapeHtml(description)}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:image" content="${ogImage}" />`,
    `<meta property="og:image:alt" content="${escapeHtml(route.ogImageAlt || title)}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(description)}" />`,
    `<meta name="twitter:image" content="${ogImage}" />`,
    schemaMarkup,
  ]
    .filter(Boolean)
    .join('\n    ')
}
