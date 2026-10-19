/**
 * i18n configuration
 *
 * To activate a new locale:
 * 1. Add its code to `locales`
 * 2. Create `messages/<locale>.json` with translated strings
 * 3. Update middleware.ts matcher to include the new locale
 * 4. Wire `getDictionary(locale)` into app/layout.tsx and page components
 */

export const locales = ['en', 'ar'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

/** Locales that use right-to-left script */
export const rtlLocales: Locale[] = ['ar']

/** Returns true if the locale renders right-to-left */
export function isRtl(locale: Locale): boolean {
  return rtlLocales.includes(locale)
}

/** Human-readable locale labels (for a future language switcher) */
export const localeLabels: Record<Locale, string> = {
  en: 'English',
  ar: 'العربية',
}
