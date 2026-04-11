import { companyDetails } from '../legal/companyDetails'

export const SITE_URL = 'https://agentxlabs.com'
export const SITE_NAME = 'Agent X Labs'
export const SITE_THEME_COLOR = '#060606'
export const DEFAULT_OG_IMAGE = '/og-default.png'
export const DEFAULT_OG_IMAGE_ALT = 'Agent X Labs — AI agents for UK service businesses'
export const SOCIAL_DESCRIPTION =
  'AI agents for UK service businesses that answer calls, follow up leads, generate reviews, and keep your pipeline moving. Book a free strategy call.'

export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  legalName: companyDetails.legalName,
  url: SITE_URL,
  logo: `${SITE_URL}/axl-favicon-32x32.png`,
  email: companyDetails.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: companyDetails.address,
    addressCountry: 'GB',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United Kingdom',
  },
}
