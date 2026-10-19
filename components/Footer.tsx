import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import { Logo } from './ui/Logo'
import { SITE } from '@/lib/constants'
import { NewsletterForm } from '@/app/components/NewsletterForm'
import { ContactQR } from './ui/ContactQR'
import {
  LinkedInIcon, XIcon, GitHubIcon, EmailIcon,
  LocationIcon, SudanFlagIcon,
} from './ui/Icons'
import { PrivacySettingsButton } from './consent/PrivacySettingsButton'

type Props = { locale: string }

export async function Footer({ locale }: Props) {
  const t = await getTranslations('footer')
  const n = await getTranslations('nav')

  const services = [
    { label: locale === 'ar' ? 'إستراتيجيات التحول الرقمي'          : 'Digital Transformation',            href: `/${locale}/services#digital`       },
    { label: locale === 'ar' ? 'تطوير التطبيقات (ويب وموبايل)'  : 'Web & Mobile Digital Product Mgmt', href: `/${locale}/services#webmobile`     },
    { label: locale === 'ar' ? 'استشارات الأمن السيبراني'              : 'Cybersecurity Consulting',           href: `/${locale}/services#cybersecurity` },
    { label: locale === 'ar' ? 'استشارات البلوكتشين'                   : 'Blockchain Strategy',                href: `/${locale}/services#blockchain`    },
  ]

  const navigate = [
    { label: n('home'),     href: `/${locale}`           },
    { label: n('about'),    href: `/${locale}/about`    },
    { label: n('services'), href: `/${locale}/services` },
    { label: n('insights'), href: `/${locale}/insights` },
    { label: n('projects'), href: `/${locale}/projects` },
  ]

  return (
    <footer className="border-t border-[rgba(255,255,255,0.06)] pt-16 pb-8" aria-label="Site footer">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Newsletter band */}
        <div className="mb-14 pb-12 border-b border-[rgba(255,255,255,0.05)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xs font-mono text-cyan tracking-[0.18em] uppercase mb-2">{t('newsletterLabel')}</p>
              <h2 className="text-xl font-bold font-sans text-[#f0f0fa] mb-1">{t('newsletterTitle')}</h2>
              <p className="text-sm text-[#5a5a7a] leading-relaxed">{t('newsletterSub')}</p>
            </div>
            <div>
              <NewsletterForm layout="inline" />
            </div>
          </div>
        </div>

        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div>
            <Logo className="mb-4" />
            <p className="text-sm text-[#9898b8] leading-relaxed max-w-[260px] mb-6">
              {t('tagline')}
            </p>
            <div className="flex gap-2">
              {[
                { href: SITE.linkedin, Icon: LinkedInIcon, size: 14, label: 'LinkedIn' },
                { href: SITE.twitter,  Icon: XIcon,        size: 13, label: 'X / Twitter' },
                { href: SITE.github,   Icon: GitHubIcon,   size: 14, label: 'GitHub' },
                { href: `mailto:${SITE.email}`, Icon: EmailIcon, size: 14, label: 'Email' },
              ].map(({ href, Icon, size, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="w-9 h-9 rounded-[9px] bg-[#141428] border border-[rgba(255,255,255,0.09)] flex items-center justify-center text-[#5a5a7a] hover:text-cyan hover:border-[rgba(0,198,255,0.3)] transition-all"
                  aria-label={label}
                >
                  <Icon size={size} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold text-[#f0f0fa] tracking-[0.08em] uppercase font-mono mb-5">{t('servicesTitle')}</h3>
            <ul className="flex flex-col gap-3">
              {services.map(s => (
                <li key={s.href}>
                  <Link href={s.href} className="text-[0.875rem] text-[#5a5a7a] hover:text-[#f0f0fa] transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigate */}
          <div>
            <h3 className="text-xs font-bold text-[#f0f0fa] tracking-[0.08em] uppercase font-mono mb-5">{t('navigateTitle')}</h3>
            <ul className="flex flex-col gap-3">
              {navigate.map(nav => (
                <li key={nav.href}>
                  <Link href={nav.href} className="text-[0.875rem] text-[#5a5a7a] hover:text-[#f0f0fa] transition-colors">
                    {nav.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + QR */}
          <div>
            <h3 className="text-xs font-bold text-[#f0f0fa] tracking-[0.08em] uppercase font-mono mb-5">{t('contactTitle')}</h3>
            <ul className="flex flex-col gap-3 mb-6">
              <li>
                <a href={`mailto:${SITE.email}`} className="text-[0.875rem] text-[#5a5a7a] hover:text-[#f0f0fa] transition-colors">
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="text-[0.875rem] text-[#5a5a7a] hover:text-[#f0f0fa] transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={SITE.twitter} target="_blank" rel="noopener noreferrer" className="text-[0.875rem] text-[#5a5a7a] hover:text-[#f0f0fa] transition-colors">
                  X / Twitter
                </a>
              </li>
              <li>
                <a href={SITE.cal} target="_blank" rel="noopener noreferrer" className="text-[0.875rem] text-cyan font-semibold hover:text-[#22d4ff] transition-colors">
                  {t('bookSession')}
                </a>
              </li>
            </ul>
            <div className="mt-1">
              <p className="text-[0.6rem] font-mono text-[#6e6e8e] tracking-widest uppercase mb-2">{t('scanQr')}</p>
              <div className="inline-block rounded-lg overflow-hidden border border-[rgba(0,198,255,0.2)] p-1.5 bg-[#0a0a18]">
                <ContactQR size={100} />
              </div>
            </div>
          </div>
        </div>

        {/* Compliance links */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 py-5 border-t border-[rgba(255,255,255,0.05)]">
          <Link href={`/${locale}/privacy-policy`} className="text-xs text-[#5a5a7a] hover:text-[#9898b8] transition-colors font-mono">
            {locale === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
          </Link>
          <Link href={`/${locale}/terms-and-conditions`} className="text-xs text-[#5a5a7a] hover:text-[#9898b8] transition-colors font-mono">
            {locale === 'ar' ? 'الشروط والأحكام' : 'Terms & Conditions'}
          </Link>
          <Link href={`/${locale}/cookie-policy`} className="text-xs text-[#5a5a7a] hover:text-[#9898b8] transition-colors font-mono">
            {locale === 'ar' ? 'سياسة ملفات الارتباط' : 'Cookie Policy'}
          </Link>
          <PrivacySettingsButton label={locale === 'ar' ? 'إعدادات الخصوصية' : 'Privacy Settings'} />
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-[rgba(255,255,255,0.06)] gap-3">
          <p className="text-xs text-[#5a5a7a] font-mono">{t('copyright')}</p>
          <p className="text-xs text-[#5a5a7a] font-mono flex items-center gap-1.5">
            <LocationIcon size={11} className="text-[#5a5a7a]" />
            {t('location')}
            <SudanFlagIcon size={14} />
          </p>
        </div>

      </div>
    </footer>
  )
}
