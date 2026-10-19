import Link from 'next/link'

type Section = {
  heading: string
  content: string | string[]
}

type Props = {
  title: string
  lastUpdated: string
  sections: Section[]
  locale: string
}

export function LegalPageLayout({ title, lastUpdated, sections, locale }: Props) {
  const isAr = locale === 'ar'
  const lastUpdatedLabel = isAr ? 'آخر تحديث' : 'Last Updated'
  const tocLabel = isAr ? 'المحتويات' : 'Contents'
  const backLabel = isAr ? 'العودة للرئيسية' : 'Back to Home'
  const contactLabel = isAr ? 'تواصل معنا' : 'Contact Us'
  const privacySettingsLabel = isAr ? 'إعدادات الخصوصية' : 'Manage Privacy Settings'

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 px-6 border-b border-[rgba(255,255,255,0.05)]">
        <div className="absolute inset-0 bg-cyber-grid opacity-[0.15] pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[900px] mx-auto">
          <p className="text-xs font-mono text-cyan tracking-[0.2em] uppercase mb-4">Legal</p>
          <h1 className="text-3xl md:text-4xl font-bold font-sans text-[#f0f0fa] tracking-tight mb-4">
            {title}
          </h1>
          <p className="text-sm font-mono text-[#5a5a7a]">
            {lastUpdatedLabel}: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 px-6">
        <div className="max-w-[900px] mx-auto lg:grid lg:grid-cols-[220px_1fr] lg:gap-16">

          {/* Sidebar TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <p className="text-xs font-mono text-[#5a5a7a] tracking-[0.15em] uppercase mb-4">{tocLabel}</p>
              <nav aria-label="Table of contents">
                <ul className="flex flex-col gap-2">
                  {sections.map((s, i) => (
                    <li key={i}>
                      <a
                        href={`#section-${i}`}
                        className="text-xs text-[#5a5a7a] hover:text-[#9898b8] transition-colors font-mono leading-relaxed block"
                      >
                        {s.heading}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-10 pt-6 border-t border-[rgba(255,255,255,0.05)] flex flex-col gap-3">
                <Link
                  href={`/${locale}`}
                  className="text-xs font-mono text-[#5a5a7a] hover:text-[#9898b8] transition-colors"
                >
                  ← {backLabel}
                </Link>
                <a
                  href="mailto:contact@djobs.net"
                  className="text-xs font-mono text-cyan hover:text-[#22d4ff] transition-colors"
                >
                  {contactLabel}
                </a>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <article className="prose prose-invert max-w-none">
            {sections.map((s, i) => (
              <section key={i} id={`section-${i}`} className="mb-12 scroll-mt-24">
                <h2 className="text-xl font-bold font-sans text-[#f0f0fa] mb-4 pb-2 border-b border-[rgba(255,255,255,0.05)]">
                  {s.heading}
                </h2>
                {typeof s.content === 'string' ? (
                  <p className="text-[0.9375rem] text-[#9898b8] leading-relaxed">{s.content}</p>
                ) : (
                  <ul className="flex flex-col gap-3">
                    {s.content.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-[0.9375rem] text-[#9898b8] leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan flex-shrink-0 mt-2" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {/* Footer links */}
            <div className="mt-12 pt-8 border-t border-[rgba(255,255,255,0.05)]">
              <p className="text-sm text-[#5a5a7a] font-mono mb-4">
                {isAr
                  ? 'للاستفسار أو ممارسة حقوقك، تواصل معنا: contact@djobs.net'
                  : 'Questions? Contact us at contact@djobs.net'}
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-mono">
                <Link href={`/${locale}/privacy-policy`} className="text-[#5a5a7a] hover:text-[#9898b8] transition-colors">
                  {isAr ? 'سياسة الخصوصية' : 'Privacy Policy'}
                </Link>
                <Link href={`/${locale}/terms-and-conditions`} className="text-[#5a5a7a] hover:text-[#9898b8] transition-colors">
                  {isAr ? 'الشروط والأحكام' : 'Terms & Conditions'}
                </Link>
                <Link href={`/${locale}/cookie-policy`} className="text-[#5a5a7a] hover:text-[#9898b8] transition-colors">
                  {isAr ? 'سياسة ملفات الارتباط' : 'Cookie Policy'}
                </Link>
                <span className="text-[#5a5a7a]">·</span>
                <span
                  role="button"
                  tabIndex={0}
                  className="text-[#5a5a7a] hover:text-[#9898b8] transition-colors cursor-pointer"
                  onClick={undefined}
                >
                  {privacySettingsLabel}
                </span>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}
