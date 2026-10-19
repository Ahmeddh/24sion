import { buildMeta } from '@/lib/seo'
import { cookiePolicy } from '@/content/legal'
import { LegalPageLayout } from '@/components/legal/LegalPageLayout'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  const doc = cookiePolicy(locale as 'en' | 'ar')
  return buildMeta({
    title: doc.title,
    description:
      locale === 'ar'
        ? 'تعرّف على ملفات الارتباط التي يستخدمها موقع djobs.net وكيفية إدارة تفضيلاتك.'
        : 'Learn about the cookies used by djobs.net and how to manage your preferences.',
    path: `/${locale}/cookie-policy`,
    noindex: false,
  })
}

export default async function CookiePolicyPage({ params }: Props) {
  const { locale } = await params
  const doc = cookiePolicy(locale as 'en' | 'ar')

  return (
    <LegalPageLayout
      title={doc.title}
      lastUpdated={doc.lastUpdated}
      sections={doc.sections}
      locale={locale}
    />
  )
}
