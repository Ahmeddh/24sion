import { buildMeta } from '@/lib/seo'
import { termsAndConditions } from '@/content/legal'
import { LegalPageLayout } from '@/components/legal/LegalPageLayout'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  const doc = termsAndConditions(locale as 'en' | 'ar')
  return buildMeta({
    title: doc.title,
    description:
      locale === 'ar'
        ? 'اقرأ الشروط والأحكام الخاصة باستخدام موقع djobs.net وخدمات أحمد جوبس الاستشارية.'
        : 'Read the terms and conditions governing use of djobs.net and Ahmed Djobs consulting services.',
    path: `/${locale}/terms-and-conditions`,
    noindex: false,
  })
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params
  const doc = termsAndConditions(locale as 'en' | 'ar')

  return (
    <LegalPageLayout
      title={doc.title}
      lastUpdated={doc.lastUpdated}
      sections={doc.sections}
      locale={locale}
    />
  )
}
