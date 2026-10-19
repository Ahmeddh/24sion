import type { Metadata } from 'next'
import { SITE } from './constants'

export function buildMeta(opts: {
  title:       string
  description: string
  path?:       string
  noindex?:    boolean
  image?:      string
}): Metadata {
  const url   = `${SITE.url}${opts.path ?? ''}`
  const image = opts.image ?? `${SITE.url}/og-image.png`

  return {
    title:       `${opts.title} | Ahmed Djobs`,
    description: opts.description,
    metadataBase: new URL(SITE.url),
    alternates:  { canonical: url },
    robots: opts.noindex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: {
      type:        'website',
      url,
      title:       opts.title,
      description: opts.description,
      siteName:    SITE.name,
      images:      [{ url: image, width: 1200, height: 630, alt: opts.title }],
    },
    twitter: {
      card:        'summary_large_image',
      site:        SITE.twitterHandle,
      creator:     SITE.twitterHandle,
      title:       opts.title,
      description: opts.description,
      images:      [image],
    },
  }
}

/* ─── Schema helpers ─── */
export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name:        'Ahmed Djobs',
  url:         SITE.url,
  jobTitle:    'Cybersecurity Advisor, Technical Product Strategist & Blockchain Advisor',
  description: SITE.description,
  sameAs: [SITE.linkedin, SITE.twitter, SITE.github],
  knowsAbout: [
    'Fractional CISO', 'Cybersecurity Strategy', 'Security Architecture',
    'ISO 27001', 'SOC 2', 'HIPAA', 'PCI-DSS',
    'Blockchain Architecture', 'Hyperledger Fabric', 'Self-Sovereign Identity',
    'Smart Contracts', 'Web3 Strategy', 'Enterprise Blockchain',
    'Digital Product Strategy', 'Enterprise Delivery', 'Digital Transformation',
    'Fintech Infrastructure', 'Government Identity Systems',
  ],
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name:    'Ahmed Djobs — Enterprise Consulting',
  url:     SITE.url,
  logo:    `${SITE.url}/favicon.svg`,
  email:   SITE.email,
  description: SITE.description,
  areaServed: 'Worldwide',
  serviceType: [
    'Fractional CISO & Security Leadership',
    'Digital Product Strategy & Delivery',
    'Blockchain & Web3 Architecture Advisory',
    'Enterprise Digital Transformation',
  ],
  founder: { '@type': 'Person', name: 'Ahmed Djobs' },
  sameAs:  [SITE.linkedin, SITE.twitter],
}

export function serviceSchema(opts: {
  name:        string
  description: string
  url?:        string
  provider?:   string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name:        opts.name,
    description: opts.description,
    url:         opts.url ?? `${SITE.url}/services`,
    provider: { '@type': 'Person', name: opts.provider ?? 'Ahmed Djobs', url: SITE.url },
    areaServed: 'Worldwide',
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: SITE.cal,
    },
  }
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export const faqSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
})

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Ahmed Djobs',
  url: SITE.url,
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${SITE.url}/insights?q={search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
}

import { SERVICES } from './constants'

export const serviceSchemas = SERVICES.map(svc =>
  serviceSchema({
    name: svc.title,
    description: svc.description,
    url: `${SITE.url}/services#${svc.id}`,
  })
)

export function articleSchema(opts: {
  title:     string
  excerpt:   string
  slug:      string
  date:      string
  category:  string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline:       opts.title,
    description:    opts.excerpt,
    url:            `${SITE.url}/insights/${opts.slug}`,
    datePublished:  opts.date,
    dateModified:   opts.date,
    articleSection: opts.category,
    author: {
      '@type': 'Person',
      name:    'Ahmed Djobs',
      url:     SITE.url,
    },
    publisher: {
      '@type': 'Organization',
      name:    'Ahmed Djobs',
      url:     SITE.url,
      logo: { '@type': 'ImageObject', url: `${SITE.url}/favicon.svg` },
    },
  }
}
