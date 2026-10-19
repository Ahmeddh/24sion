import { buildMeta } from '@/lib/seo'
import { privacyPolicy } from '@/content/legal'
import { LegalPageLayout } from '@/components/legal/LegalPageLayout'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  const doc = privacyPolicy(locale as 'en' | 'ar')
  return buildMeta({
    title: doc.title,
    description:
      locale === 'ar'
        ? 'تعرّف على كيفية جمع بياناتك الشخصية واستخدامها وحمايتها على موقع djobs.net.'
        : 'Learn how djobs.net collects, uses, and protects your personal data.',
    path: `/${locale}/privacy-policy`,
    noindex: false,
  })
}

export default async function PrivacyPolicyPage({ params }: Props) {
  const { locale } = await params
  const doc = privacyPolicy(locale as 'en' | 'ar')

  return (
    <LegalPageLayout
      title={doc.title}
      lastUpdated={doc.lastUpdated}
      sections={doc.sections}
      locale={locale}
    />
  )
}
