import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales:         ['en', 'ar'],
  defaultLocale:   'en',
  localeDetection: false,   // never auto-redirect based on Accept-Language header
})
