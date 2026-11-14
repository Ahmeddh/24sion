import { getTranslations } from 'next-intl/server'
import { BookButton, CTAButton } from '@/components/ui/CTAButton'
import { SITE } from '@/lib/constants'
import { ShieldIcon, ChainIcon, MobileIcon, RocketIcon } from '@/components/ui/Icons'
import { serviceSchema } from '@/lib/seo'
import { PageMotion } from '@/components/layout/PageMotion'
import { FadeIn, MotionSection } from '@/components/motion'
import type { Metadata } from 'next'

type Props = { params: Promise<{ locale: string }> }

type ServiceDef = {
  id: 'digital' | 'webmobile' | 'cybersecurity' | 'blockchain'
  num: string
  title: string
  tagline: string
  seoHeadline: string
  description: string
  body: string
  deliverables: string[]
  idealFor: string[]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'services' })
  return {
    title: t('heroTitle'),
    description: t('heroSub'),
  }
}

const svcIcons = {
  digital:       RocketIcon,
  webmobile:     MobileIcon,
  cybersecurity: ShieldIcon,
  blockchain:    ChainIcon,
} as const

const svcColors = {
  digital:       { accent: 'text-[#F7B766]', border: 'border-[rgba(247,183,102,0.18)]',  glow: 'shadow-[0_0_40px_rgba(247,183,102,0.06)]',  badge: 'bg-[rgba(247,183,102,0.08)] text-[#F7B766] border-[rgba(247,183,102,0.2)]',   hr: 'bg-[#F7B766]', bullet: 'bg-[#F7B766]' },
  webmobile:     { accent: 'text-[#7FB8E8]', border: 'border-[rgba(127,184,232,0.18)]',   glow: 'shadow-[0_0_40px_rgba(127,184,232,0.06)]',   badge: 'bg-[rgba(127,184,232,0.08)] text-[#7FB8E8] border-[rgba(127,184,232,0.2)]',   hr: 'bg-[#7FB8E8]', bullet: 'bg-[#7FB8E8]' },
  cybersecurity: { accent: 'text-cyan',      border: 'border-[rgba(238,148,39,0.2)]',    glow: 'shadow-[0_0_40px_rgba(238,148,39,0.08)]',   badge: 'bg-[rgba(238,148,39,0.1)] text-cyan border-[rgba(238,148,39,0.25)]',        hr: 'bg-cyan',      bullet: 'bg-cyan'      },
  blockchain:    { accent: 'text-purple',    border: 'border-[rgba(77,159,220,0.2)]',   glow: 'shadow-[0_0_40px_rgba(77,159,220,0.08)]',  badge: 'bg-[rgba(77,159,220,0.1)] text-purple border-[rgba(77,159,220,0.25)]',   hr: 'bg-purple',    bullet: 'bg-purple'    },
}

const schemas = [
  serviceSchema({ name: 'Cybersecurity Consulting', description: 'End-to-end cybersecurity advisory including risk assessments, security architecture design, CISO-as-a-service, and incident response planning.', provider: 'Ahmed Djobs' }),
  serviceSchema({ name: 'Blockchain Strategy Consulting', description: 'Blockchain architecture guidance, smart contract consulting, Web3 product strategy, tokenomics design, and DeFi advisory.', provider: 'Ahmed Djobs' }),
  serviceSchema({ name: 'Web & Mobile Digital Product Management', description: 'Senior digital product management and delivery leadership for web and mobile platforms.', provider: 'Ahmed Djobs' }),
  serviceSchema({ name: 'Digital Strategy & Transformation', description: 'Digital transformation advisory and technology strategy for ecosystem modernization with security built in.', provider: 'Ahmed Djobs' }),
]

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'services' })
  const services = t.raw('list') as ServiceDef[]

  return (
    <PageMotion>
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      {/* ═══ HERO ══════════════════════════════════════════════ */}
      <section className="relative py-24 px-6 text-center overflow-hidden" aria-label={t('heroLabel')}>
        <div className="absolute inset-0 bg-cyber-grid opacity-[0.3] pointer-events-none" aria-hidden="true" />
        <FadeIn className="relative max-w-3xl mx-auto">
          <p className="text-xs font-mono text-cyan tracking-[0.2em] uppercase mb-4">{t('whatIOffer')}</p>
          <h1 className="text-4xl md:text-5xl font-bold font-sans text-[#f0f0fa] tracking-tight mb-5">
            {t('heroTitle')}
          </h1>
          <p className="text-lg text-[#9898b8] max-w-xl mx-auto leading-relaxed">
            {t('heroSub')}
          </p>
        </FadeIn>
      </section>

      {/* ═══ SERVICE SECTIONS ══════════════════════════════════ */}
      {services.map((svc, idx) => {
        const color = svcColors[svc.id]
        const Icon  = svcIcons[svc.id]
        return (
          <section
            key={svc.id}
            id={svc.id}
            className={`py-20 px-6 scroll-mt-24 ${idx % 2 === 1 ? 'bg-[rgba(255,255,255,0.015)]' : ''}`}
            aria-label={svc.title}
          >
            <div className="max-w-[1100px] mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                {/* Left: Text */}
                <MotionSection>
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className={color.accent}><Icon size={28} /></span>
                    <span className={`text-[0.65rem] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full border ${color.badge}`}>
                      {t('serviceLabel')} {svc.num}
                    </span>
                  </div>

                  <h2 className={`text-3xl md:text-[2.2rem] font-bold font-sans ${color.accent} mb-2`}>
                    {svc.title}
                  </h2>
                  <p className="text-sm font-mono text-[#5a5a7a] mb-5">{svc.tagline}</p>

                  <div className={`h-px w-12 ${color.hr} mb-7`} />

                  <h3 className="text-[1rem] font-bold text-[#f0f0fa] mb-3">{svc.seoHeadline}</h3>
                  <p className="text-[#9898b8] text-[0.9rem] leading-relaxed mb-4">{svc.description}</p>
                  <p className="text-[#9898b8] text-[0.9rem] leading-relaxed mb-8">{svc.body}</p>

                  <div className="mb-8">
                    <p className="text-xs font-mono text-[#5a5a7a] tracking-widest uppercase mb-3">{t('idealFor')}</p>
                    <div className="flex flex-wrap gap-2">
                      {svc.idealFor.map(label => (
                        <span key={label} className="text-[0.72rem] px-3 py-1 rounded-full border border-[rgba(255,255,255,0.07)] text-[#9898b8] bg-[rgba(255,255,255,0.03)]">
                          {label}
                        </span>
                      ))}
                    </div>
                  </div>

                  <BookButton size="lg" />
                </div>
                </MotionSection>

                {/* Right: Deliverables */}
                <MotionSection delay={0.15}>
                <div className={`bg-[#0e0e1c] border rounded-2xl p-8 ${color.border} ${color.glow}`}>
                  <p className="text-xs font-mono text-[#5a5a7a] tracking-widest uppercase mb-6">
                    {t('whatYouGet')}
                  </p>
                  <ul className="flex flex-col gap-4">
                    {svc.deliverables.map(item => (
                      <li key={item} className="flex items-start gap-3 text-[0.875rem] text-[#9898b8]">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${color.bullet}`} aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                </MotionSection>
              </div>
            </div>
          </section>
        )
      })}

      {/* ═══ CTA ════════════════════════════════════════════════ */}
      <section className="py-24 px-6 border-t border-[rgba(255,255,255,0.05)]" aria-label={t('ctaLabel')}>
        <MotionSection className="max-w-[800px] mx-auto text-center">
          <p className="text-xs font-mono text-cyan tracking-[0.2em] uppercase mb-4">{t('ctaTag')}</p>
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-[#f0f0fa] mb-4">
            {t('ctaTitle')}
          </h2>
          <p className="text-[#c0c0d8] max-w-md mx-auto mb-10">
            {t('ctaSub')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <BookButton size="xl" />
            <CTAButton href={`mailto:${SITE.email}`} variant="ghost" size="xl" external>
              {t('sendBrief')}
            </CTAButton>
          </div>
        </MotionSection>
      </section>
    </>
    </PageMotion>
  )
}
