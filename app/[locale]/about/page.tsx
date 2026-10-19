import { getTranslations } from 'next-intl/server'
import { BookButton, CTAButton } from '@/components/ui/CTAButton'
import { SITE } from '@/lib/constants'
import { SudanFlagIcon } from '@/components/ui/Icons'
import { ContactQR } from '@/components/ui/ContactQR'
import { personSchema } from '@/lib/seo'
import { PageMotion } from '@/components/layout/PageMotion'
import { FadeIn, MotionSection } from '@/components/motion'
import type { Metadata } from 'next'

type Props = { params: Promise<{ locale: string }> }

type TimelineItem   = { year: string; role: string; jobTitle: string; org: string; detail: string }
type EducationItem  = { institution: string; credential: string; period: string; detail: string }
type CertItem       = { name: string; issuer: string; date: string }
type SkillGroup     = { category: string; items: string[] }
type CardInfoItem   = { label: string; value: string; flag?: boolean }

const skillColors = [
  { color: 'text-[#00ffaa]', border: 'border-[rgba(0,255,170,0.12)]', dot: 'bg-[#00ffaa]' },
  { color: 'text-[#ffb340]', border: 'border-[rgba(255,179,64,0.12)]', dot: 'bg-[#ffb340]' },
  { color: 'text-cyan',      border: 'border-[rgba(0,198,255,0.15)]',  dot: 'bg-cyan'      },
  { color: 'text-purple',    border: 'border-[rgba(123,97,255,0.15)]', dot: 'bg-purple'    },
]

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'about' })
  return {
    title: t('heroLabel'),
    description: t('tagline'),
  }
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'about' })

  const timeline     = t.raw('timeline')     as TimelineItem[]
  const education    = t.raw('education')    as EducationItem[]
  const certifications = t.raw('certifications') as CertItem[]
  const skills       = t.raw('skills')       as SkillGroup[]
  const cardInfo     = t.raw('cardInfo')     as CardInfoItem[]

  return (
    <PageMotion>
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* ═══ HERO ════════════════════════════════════════════════ */}
      <section className="relative py-24 px-6 overflow-hidden" aria-label={t('heroLabel')}>
        <div className="absolute inset-0 bg-cyber-grid opacity-[0.25] pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <FadeIn delay={0.05}>
          <div>
            <p className="text-xs font-mono text-cyan tracking-[0.2em] uppercase mb-4">{t('whoIAm')}</p>
            <h1 className="text-4xl md:text-5xl font-bold font-sans text-[#f0f0fa] tracking-tight leading-tight mb-6">
              {locale === 'ar' ? 'أحمد جوبس' : 'Ahmed Djobs'}
            </h1>
            <p className="text-lg text-purple font-mono mb-6">{t('tagline')}</p>
            <p className="text-[#9898b8] leading-relaxed mb-4">{t('heroP1')}</p>
            <p className="text-[#9898b8] leading-relaxed mb-8">{t('heroP2')}</p>
            <div className="flex gap-3">
              <BookButton size="lg" />
              <CTAButton href={`mailto:${SITE.email}`} variant="ghost" size="lg" external>
                {t('getInTouch')}
              </CTAButton>
            </div>
          </div>
          </FadeIn>

          {/* Card */}
          <FadeIn delay={0.2}>
          <div className="bg-[#0e0e1c] border border-[rgba(255,255,255,0.07)] rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-7 pb-7 border-b border-[rgba(255,255,255,0.06)]">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan/30 to-purple/30 border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-2xl font-bold text-[#f0f0fa] font-mono">
                AD
              </div>
              <div>
                <p className="text-[#f0f0fa] font-bold text-lg">{locale === 'ar' ? 'أحمد جوبس' : 'Ahmed Djobs'}</p>
                <p className="text-[#5a5a7a] text-sm font-mono">@AhmedDjobs</p>
              </div>
            </div>
            <dl className="flex flex-col gap-5">
              {cardInfo.map(item => (
                <div key={item.label}>
                  <dt className="text-[0.65rem] font-mono text-[#6e6e8e] tracking-widest uppercase mb-1">{item.label}</dt>
                  <dd className="text-sm text-[#9898b8] flex items-center gap-1.5">
                    {item.value}
                    {item.flag && <SudanFlagIcon size={14} />}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ PHILOSOPHY ══════════════════════════════════════════ */}
      <section className="py-16 px-6 border-t border-[rgba(255,255,255,0.05)]" aria-label={t('philosophyLabel')}>
        <MotionSection className="max-w-[800px] mx-auto text-center">
          <p className="text-xs font-mono text-purple tracking-[0.2em] uppercase mb-4">{t('philosophyTitle')}</p>
          <blockquote className="text-2xl md:text-3xl font-bold font-sans text-[#f0f0fa] leading-snug mb-6">
            {t('philosophyQuote')}
          </blockquote>
          <p className="text-[#9898b8] text-[1rem] max-w-lg mx-auto">{t('philosophySub')}</p>
        </MotionSection>
      </section>

      {/* ═══ SKILLS ══════════════════════════════════════════════ */}
      <section className="py-20 px-6 border-t border-[rgba(255,255,255,0.05)]" aria-label={t('expertiseTag')}>
        <div className="max-w-[1100px] mx-auto">
          <MotionSection className="text-center mb-14">
            <p className="text-xs font-mono text-cyan tracking-[0.2em] uppercase mb-3">{t('expertiseTag')}</p>
            <h2 className="text-3xl font-bold font-sans text-[#f0f0fa]">{t('skillsTitle')}</h2>
          </MotionSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {skills.map((group, i) => {
              const c = skillColors[i % skillColors.length]
              return (
                <MotionSection key={group.category} delay={i * 0.08}>
                  <div className={`bg-[#0e0e1c] border rounded-2xl p-7 ${c.border}`}>
                    <h3 className={`text-sm font-bold font-mono uppercase tracking-widest mb-5 ${c.color}`}>
                      {group.category}
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {group.items.map(item => (
                        <li key={item} className="flex items-start gap-2.5 text-[0.875rem] text-[#9898b8]">
                          <span className={`w-1 h-1 rounded-full flex-shrink-0 mt-[0.45rem] ${c.dot}`} aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </MotionSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══ TIMELINE ════════════════════════════════════════════ */}
      <section className="py-20 px-6 border-t border-[rgba(255,255,255,0.05)]" aria-label={t('journeyTag')}>
        <div className="max-w-[800px] mx-auto">
          <MotionSection className="text-center mb-14">
            <p className="text-xs font-mono text-cyan tracking-[0.2em] uppercase mb-3">{t('journeyTag')}</p>
            <h2 className="text-3xl font-bold font-sans text-[#f0f0fa]">{t('timelineTitle')}</h2>
          </MotionSection>
          <ol className="relative border-s border-[rgba(255,255,255,0.08)] flex flex-col gap-10 ps-8">
            {timeline.map((item, i) => (
              <MotionSection key={i} delay={i * 0.06}>
                <li className="relative">
                  <span className="absolute -start-[2.35rem] top-1 w-3 h-3 rounded-full bg-[#0e0e1c] border-2 border-cyan" aria-hidden="true" />
                  <p className="text-xs font-mono text-cyan mb-1">{item.year}</p>
                  <p className="text-[1rem] font-bold text-[#f0f0fa] mb-1">{item.role}</p>
                  <p className="text-xs text-purple font-mono mb-2">{item.org}</p>
                  <p className="text-[0.875rem] text-[#9898b8] leading-relaxed">{item.detail}</p>
                </li>
              </MotionSection>
            ))}
          </ol>
        </div>
      </section>

      {/* ═══ EDUCATION ═══════════════════════════════════════════ */}
      <section className="py-20 px-6 border-t border-[rgba(255,255,255,0.05)]" aria-label={t('credentialsTag')}>
        <div className="max-w-[800px] mx-auto">
          <MotionSection className="text-center mb-14">
            <p className="text-xs font-mono text-purple tracking-[0.2em] uppercase mb-3">{t('credentialsTag')}</p>
            <h2 className="text-3xl font-bold font-sans text-[#f0f0fa]">{t('educationTitle')}</h2>
          </MotionSection>
          <div className="flex flex-col gap-6">
            {education.map((item, i) => (
              <MotionSection key={i} delay={i * 0.1}>
              <div className="bg-[#0e0e1c] border border-[rgba(255,255,255,0.07)] rounded-2xl p-7">
                <div className="flex items-start justify-between gap-4 mb-1">
                  <p className="text-[1rem] font-bold text-white">{item.institution}</p>
                  {item.period && (
                    <span className="text-xs font-mono text-[#6e6e8e] whitespace-nowrap mt-1">{item.period}</span>
                  )}
                </div>
                <p className="text-sm font-mono text-[#b8a8ff] mb-3">{item.credential}</p>
                <p className="text-[0.875rem] text-[#9898b8] leading-relaxed">{item.detail}</p>
              </div>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CERTIFICATIONS ══════════════════════════════════════ */}
      <section className="py-20 px-6 border-t border-[rgba(255,255,255,0.05)]" aria-label={t('licensesTag')}>
        <div className="max-w-[800px] mx-auto">
          <MotionSection className="text-center mb-14">
            <p className="text-xs font-mono text-cyan tracking-[0.2em] uppercase mb-3">{t('licensesTag')}</p>
            <h2 className="text-3xl font-bold font-sans text-[#f0f0fa]">{t('certificationsTitle')}</h2>
          </MotionSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <MotionSection key={i} delay={i * 0.06}>
                <div className="bg-[#0e0e1c] border border-[rgba(255,255,255,0.07)] rounded-xl p-5 flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-cyan flex-shrink-0 mt-[0.35rem]" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold text-[#f0f0fa] mb-0.5">{cert.name}</p>
                    <p className="text-xs font-mono text-purple">{cert.issuer}</p>
                    <p className="text-xs font-mono text-[#6e6e8e] mt-0.5">{cert.date}</p>
                  </div>
                </div>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ════════════════════════════════════════════════ */}
      <section className="py-24 px-6 border-t border-[rgba(255,255,255,0.05)]" aria-label={t('ctaLabel')}>
        <MotionSection className="max-w-[700px] mx-auto text-center">
          <p className="text-xs font-mono text-cyan tracking-[0.2em] uppercase mb-4">{t('ctaTag')}</p>
          <h2 className="text-3xl font-bold font-sans text-[#f0f0fa] mb-4">{t('ctaTitle')}</h2>
          <p className="text-[#c0c0d8] mb-10 max-w-md mx-auto">{t('ctaSub')}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <BookButton size="xl" />
            <CTAButton href={`/${locale}/services`} variant="ghost" size="xl">{t('viewServices')}</CTAButton>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-[0.65rem] font-mono text-[#6e6e8e] tracking-widest uppercase">{t('scanQr')}</p>
            <div className="inline-block rounded-xl overflow-hidden border border-[rgba(0,198,255,0.2)] p-2 bg-[#0a0a18]">
              <ContactQR size={110} />
            </div>
          </div>
        </MotionSection>
      </section>
    </>
    </PageMotion>
  )
}
