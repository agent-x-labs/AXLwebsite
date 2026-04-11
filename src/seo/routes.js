import React from 'react'
import App from '../App'
import PrivacyPolicyPage from '../legal/PrivacyPolicyPage'
import TermsOfServicePage from '../legal/TermsOfServicePage'
import ServicePage from '../pages/ServicePage'
import { servicePages } from '../content/servicePages'
import {
  DEFAULT_OG_IMAGE,
  DEFAULT_OG_IMAGE_ALT,
  ORGANIZATION_SCHEMA,
  SITE_NAME,
  SITE_URL,
  SOCIAL_DESCRIPTION,
} from './site'

const makeUrl = (path) => new URL(path, SITE_URL).toString()

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
}

const homepageSchema = {
  '@context': 'https://schema.org',
  '@type': 'OfferCatalog',
  name: 'Agent X Labs AI Agent Services',
  itemListElement: servicePages.map((service, index) => ({
    '@type': 'Offer',
    position: index + 1,
    itemOffered: {
      '@type': 'Service',
      name: service.title,
      url: makeUrl(service.path),
      description: service.heroDescription,
      provider: {
        '@type': 'Organization',
        name: SITE_NAME,
        url: SITE_URL,
      },
      areaServed: {
        '@type': 'Country',
        name: 'United Kingdom',
      },
    },
  })),
}

const legalPageSchema = (name, path, description) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name,
  url: makeUrl(path),
  description,
  about: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
  },
})

const serviceSchema = (service) => [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    serviceType: service.title,
    url: makeUrl(service.path),
    description: service.heroDescription,
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    audience: {
      '@type': 'Audience',
      audienceType: 'UK service businesses',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: SITE_NAME,
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: service.title,
        item: makeUrl(service.path),
      },
    ],
  },
]

const baseRoute = (route) => ({
  ogImage: DEFAULT_OG_IMAGE,
  ogImageAlt: DEFAULT_OG_IMAGE_ALT,
  ogType: 'website',
  includeInSitemap: true,
  ...route,
})

export const routeManifest = [
  baseRoute({
    id: 'home',
    path: '/',
    htmlFile: 'index.html',
    title: 'AI Agents for UK Service Businesses | Agent X Labs',
    description: SOCIAL_DESCRIPTION,
    socialDescription: SOCIAL_DESCRIPTION,
    render: () => React.createElement(App),
    schemas: [ORGANIZATION_SCHEMA, websiteSchema, homepageSchema],
  }),
  baseRoute({
    id: 'privacy-policy',
    path: '/privacy-policy/',
    htmlFile: 'privacy-policy/index.html',
    title: 'Privacy Policy | Agent X Labs LTD',
    description: "Read Agent X Labs LTD's Privacy Policy for how we handle personal data in line with UK GDPR and PECR.",
    socialDescription: "Read Agent X Labs LTD's Privacy Policy for how we handle personal data in line with UK GDPR and PECR.",
    render: () => React.createElement(PrivacyPolicyPage),
    schemas: [
      legalPageSchema(
        'Privacy Policy | Agent X Labs LTD',
        '/privacy-policy/',
        "Read Agent X Labs LTD's Privacy Policy for how we handle personal data in line with UK GDPR and PECR.",
      ),
    ],
  }),
  baseRoute({
    id: 'terms-of-service',
    path: '/terms-of-service/',
    htmlFile: 'terms-of-service/index.html',
    title: 'Terms of Service | Agent X Labs LTD',
    description:
      'Read the Terms of Service for Agent X Labs LTD, including website use, intellectual property, disclaimers, and governing law.',
    socialDescription:
      'Read the Terms of Service for Agent X Labs LTD, including website use, intellectual property, disclaimers, and governing law.',
    render: () => React.createElement(TermsOfServicePage),
    schemas: [
      legalPageSchema(
        'Terms of Service | Agent X Labs LTD',
        '/terms-of-service/',
        'Read the Terms of Service for Agent X Labs LTD, including website use, intellectual property, disclaimers, and governing law.',
      ),
    ],
  }),
  ...servicePages.map((service) =>
    baseRoute({
      id: service.slug,
      path: service.path,
      htmlFile: `${service.slug}/index.html`,
      title: service.seoTitle,
      description: service.seoDescription,
      socialDescription: service.seoDescription,
      render: () => React.createElement(ServicePage, { service }),
      schemas: serviceSchema(service),
    }),
  ),
]

export const sitemapRoutes = routeManifest.filter((route) => route.includeInSitemap)
