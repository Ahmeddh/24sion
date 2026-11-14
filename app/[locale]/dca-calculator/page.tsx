import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { buildMeta } from '@/lib/seo'
import { PageMotion } from '@/components/layout/PageMotion'
import { FadeIn } from '@/components/motion'
import { DcaCalculator } from '@/components/calculator/DcaCalculator'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'calculator' })
  return buildMeta({
    title:       t('metaTitle'),
    description: t('metaDescription'),
    path:        '/dca-calculator',
    locale,
  })
}

function CalculatorContent() {
  const t = useTranslations('calculator')
  return (
    <PageMotion>
      <section className="px-6 pt-16 pb-24">
        <div className="max-w-[820px] mx-auto">
          <FadeIn delay={0.05}>
            <p className="text-xs font-mono tracking-widest uppercase text-cyan mb-4">{t('eyebrow')}</p>
            <h1 className="text-[2.2rem] md:text-[3rem] font-bold leading-[1.1] tracking-[-0.02em] text-[#f0f0fa] mb-4">
              {t('title')}
            </h1>
            <p className="text-lg text-[#9898b8] leading-relaxed max-w-2xl mb-10 font-light">{t('sub')}</p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <DcaCalculator />
          </FadeIn>
        </div>
      </section>
    </PageMotion>
  )
}

export default async function CalculatorPage() {
  return <CalculatorContent />
}
