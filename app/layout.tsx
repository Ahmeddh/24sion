// Root layout — provides a fallback NextIntlClientProvider (en) so that
// 'use client' components calling useTranslations work on non-locale routes.
// The [locale] layout nests its own provider which overrides these messages
// with the correct locale.
import { NextIntlClientProvider } from 'next-intl'
import enMessages from '@/messages/en.json'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <NextIntlClientProvider locale="en" messages={enMessages}>
      {children as React.JSX.Element}
    </NextIntlClientProvider>
  )
}
