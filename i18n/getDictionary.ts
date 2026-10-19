import type { Locale } from './config'

/**
 * Loads the message dictionary for a given locale.
 *
 * Usage (server component or generateMetadata):
 *   const t = await getDictionary(locale)
 *   t.nav.home  // → "Home" (en) | "الرئيسية" (ar)
 *
 * Next iteration: pass `locale` from the [locale] route segment param.
 */
export async function getDictionary(locale: Locale) {
  // Dynamic import keeps each language bundle in its own chunk
  const dict = await import(`../messages/${locale}.json`)
  return dict.default as Dictionary
}

/**
 * Shape of a messages file.
 * Extend this interface whenever you add new translation keys.
 */
export interface Dictionary {
  nav: {
    home: string
    about: string
    services: string
    insights: string
    projects: string
  }
  hero: {
    badge: string
    headline: string
    sub: string
    ctaPrimary: string
    ctaSecondary: string
  }
  services: {
    sectionLabel: string
    sectionTitle: string
    sectionSub: string
  }
  footer: {
    newsletter: {
      label: string
      headline: string
      sub: string
    }
    tagline: string
    copyright: string
    scanQr: string
    bookSession: string
  }
  cta: {
    headline: string
    sub: string
    primary: string
    secondary: string
  }
  common: {
    readMore: string
    viewAll: string
    bookSession: string
    learnMore: string
  }
}
