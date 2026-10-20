import { MetadataRoute } from 'next'
import { SITE, IS_PRODUCTION } from '@/lib/constants'

export default function robots(): MetadataRoute.Robots {
  if (!IS_PRODUCTION) return { rules: [{ userAgent: '*', disallow: '/' }] }
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: [
          '/en/',
          '/ar/',
          '/en/privacy-policy',
          '/en/terms-and-conditions',
          '/en/cookie-policy',
          '/ar/privacy-policy',
          '/ar/terms-and-conditions',
          '/ar/cookie-policy',
        ],
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/auth/',
          '/dashboard/',
          '/internal/',
          '/docs/',
          '/*/opengraph-image',
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: ['/en/', '/ar/'],
        disallow: ['/api/', '/_next/', '/admin/', '/auth/', '/dashboard/', '/internal/', '/docs/'],
      },
      {
        userAgent: '*',
        allow: ['/en/', '/ar/', '/'],
        disallow: [
          '/api/',
          '/_next/static/',
          '/_next/image/',
          '/admin/',
          '/auth/',
          '/dashboard/',
          '/internal/',
          '/docs/',
        ],
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  }
}
