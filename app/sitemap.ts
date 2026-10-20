import { MetadataRoute } from 'next'
import { SITE } from '@/lib/constants'
import { articles } from '@/content/articles'

const locales = ['en', 'ar']

const slugs = Object.keys(articles)

function alternates(path: string) {
  return {
    languages: {
      en: `${SITE.url}/en${path}`,
      ar: `${SITE.url}/ar${path}`,
    },
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url
  const entries: MetadataRoute.Sitemap = []

  for (const locale of locales) {
    entries.push(
      { url: `${base}/${locale}`,                         lastModified: new Date(), changeFrequency: 'weekly'  as const, priority: 1.0,  alternates: alternates('') },
      { url: `${base}/${locale}/services`,                lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.95, alternates: alternates('/services') },
      { url: `${base}/${locale}/about`,                   lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9,  alternates: alternates('/about') },
      { url: `${base}/${locale}/projects`,                lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.85, alternates: alternates('/projects') },
      { url: `${base}/${locale}/insights`,                lastModified: new Date(), changeFrequency: 'weekly'  as const, priority: 0.85, alternates: alternates('/insights') },
      { url: `${base}/${locale}/privacy-policy`,          lastModified: new Date(), changeFrequency: 'yearly'  as const, priority: 0.3,  alternates: alternates('/privacy-policy') },
      { url: `${base}/${locale}/terms-and-conditions`,    lastModified: new Date(), changeFrequency: 'yearly'  as const, priority: 0.3,  alternates: alternates('/terms-and-conditions') },
      { url: `${base}/${locale}/cookie-policy`,           lastModified: new Date(), changeFrequency: 'yearly'  as const, priority: 0.3,  alternates: alternates('/cookie-policy') },
      ...slugs.map(slug => ({
        url:             `${base}/${locale}/insights/${slug}`,
        lastModified:    new Date(articles[slug].updated ?? articles[slug].date),
        changeFrequency: 'monthly' as const,
        priority:        slug === 'bitcoin-200-week-ma-dca-plan' ? 0.9 : 0.75,
        alternates:      alternates(`/insights/${slug}`),
      })),
    )
  }

  return entries
}
