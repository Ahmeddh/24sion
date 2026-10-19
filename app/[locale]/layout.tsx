import type { Metadata, Viewport } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import '../globals.css'
import { Nav }    from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { SITE }   from '@/lib/constants'
import { routing } from '@/i18n/routing'
import { organizationSchema, personSchema, websiteSchema } from '@/lib/seo'
import { ConsentBanner } from '@/components/consent/ConsentBanner'
import { ScrollToTop } from '@/components/ui/ScrollToTop'

const GA_ID = 'G-X89XZE17WL'

export const viewport: Viewport = {
  themeColor:   '#080810',
  colorScheme:  'dark',
  width:        'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default:  SITE.title,
    template: '%s | Ahmed Djobs',
  },
  description: SITE.description,
  keywords: [
    'fractional CISO', 'CISO as a service', 'cybersecurity consultant',
    'cybersecurity consulting', 'security architecture consultant',
    'ISO 27001 consultant', 'SOC 2 compliance', 'HIPAA security',
    'blockchain consultant', 'enterprise blockchain strategy',
    'Hyperledger Fabric consultant', 'web3 strategist',
    'Self-Sovereign Identity SSI', 'smart contract advisor',
    'digital product strategist', 'enterprise product management',
    'digital transformation advisor', 'enterprise technology strategy',
    'Ahmed Djobs', 'djobs.net', 'Zero Bytes cybersecurity',
    'استشاري أمن سيبراني', 'استشاري بلوكتشين', 'استشاري رقمي',
  ],
  authors:   [{ name: 'Ahmed Djobs', url: SITE.url }],
  creator:   'Ahmed Djobs',
  publisher: 'Ahmed Djobs',
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type:        'website',
    url:          SITE.url,
    siteName:     SITE.name,
    title:        SITE.title,
    description:  SITE.description,
    images: [{
      url:    `${SITE.url}/opengraph-image`,
      width:  1200,
      height: 630,
      alt:    'Ahmed Djobs: Cybersecurity & Blockchain Consultant',
      type:   'image/png',
    }],
  },
  twitter: {
    card:        'summary_large_image',
    site:        SITE.twitterHandle,
    creator:     SITE.twitterHandle,
    title:       SITE.title,
    description: SITE.description,
    images: [{ url: `${SITE.url}/opengraph-image`, alt: 'Ahmed Djobs' }],
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
  manifest: '/site.webmanifest',
  verification: { google: 'your-google-site-verification-token' },
}

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  if (!routing.locales.includes(locale as 'en' | 'ar')) {
    notFound()
  }

  const messages = await getMessages()
  const isRtl    = locale === 'ar'

  return (
    <html
      lang={locale}
      dir={isRtl ? 'rtl' : 'ltr'}
      className="scroll-smooth"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@300;400;500&family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Tajawal:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        {/* hreflang for multilingual SEO */}
        <link rel="alternate" hrefLang="en" href={`${SITE.url}/en`} />
        <link rel="alternate" hrefLang="ar" href={`${SITE.url}/ar`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE.url}/en`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </head>
      <body className="bg-base text-[#f0f0fa] antialiased">
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          var _c = null;
          try { _c = JSON.parse(localStorage.getItem('djobs_consent_v1')); } catch(e) {}
          if (_c && _c.categories) {
            gtag('consent', 'default', {
              'analytics_storage': _c.categories.analytics ? 'granted' : 'denied',
              'ad_storage': _c.categories.marketing ? 'granted' : 'denied',
              'ad_user_data': _c.categories.marketing ? 'granted' : 'denied',
              'ad_personalization': _c.categories.marketing ? 'granted' : 'denied'
            });
          } else {
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'wait_for_update': 500
            });
          }
        `}} />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { page_path: window.location.pathname });
        `}</Script>

        <NextIntlClientProvider messages={messages}>
          <Nav locale={locale} />
          <main className="pt-16">
            {children}
          </main>
          <Footer locale={locale} />
        </NextIntlClientProvider>
        <ConsentBanner />
        <ScrollToTop />
      </body>
    </html>
  )
}
