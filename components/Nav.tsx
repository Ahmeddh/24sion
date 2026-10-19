'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Logo } from './ui/Logo'
import { BookButton } from './ui/CTAButton'
import { LanguageSwitcher } from './ui/LanguageSwitcher'
import { SITE } from '@/lib/constants'
import { cn } from '@/lib/utils'

type Props = { locale: string }

export function Nav({ locale }: Props) {
  const t        = useTranslations('nav')
  const pathname = usePathname()
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen, setMobileOpen]   = useState(false)

  const navLinks = [
    { href: `/${locale}`,           label: t('home')     },
    { href: `/${locale}/about`,     label: t('about')    },
    { href: `/${locale}/services`,  label: t('services') },
    { href: `/${locale}/insights`,  label: t('insights') },
    { href: `/${locale}/projects`,  label: t('projects') },
  ]

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 inset-x-0 z-50 h-16 flex items-center px-6 transition-all duration-300',
          scrolled
            ? 'bg-[rgba(8,8,16,0.95)] border-b border-[rgba(255,255,255,0.1)]'
            : 'bg-[rgba(8,8,16,0.55)] border-b border-[rgba(255,255,255,0.05)]',
          'backdrop-blur-xl',
        )}
        role="banner"
      >
        <div className="max-w-[1200px] mx-auto w-full flex items-center justify-between">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-9" aria-label="Main navigation">
            {navLinks.map(link => {
              const isHome   = link.href === `/${locale}`
              const active   = isHome ? pathname === link.href : pathname.startsWith(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-sm font-medium tracking-wide transition-colors duration-200 relative',
                    active ? 'text-[#f0f0fa]' : 'text-[#9898b8] hover:text-[#f0f0fa]',
                    'after:absolute after:bottom-[-3px] after:start-0 after:h-px after:bg-cyan after:transition-all after:duration-200',
                    active ? 'after:w-full' : 'after:w-0 hover:after:w-full',
                  )}
                  aria-current={active ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-2.5">
            <LanguageSwitcher locale={locale} />
            <a
              href={`mailto:${SITE.email}`}
              className="text-sm font-medium text-[#9898b8] hover:text-[#f0f0fa] transition-colors px-3 py-2"
            >
              {t('contact')}
            </a>
            <BookButton size="md" />
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-1 bg-transparent border-none cursor-pointer"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(v => !v)}
          >
            <span className={cn('block w-5 h-[2px] bg-[#9898b8] rounded transition-all duration-200', mobileOpen && 'rotate-45 translate-y-[7px]')} />
            <span className={cn('block w-5 h-[2px] bg-[#9898b8] rounded transition-all duration-200', mobileOpen && 'opacity-0')} />
            <span className={cn('block w-5 h-[2px] bg-[#9898b8] rounded transition-all duration-200', mobileOpen && '-rotate-45 -translate-y-[7px]')} />
          </button>
        </div>
      </header>

      {/* Mobile nav overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[rgba(8,8,16,0.97)] backdrop-blur-2xl flex flex-col items-center justify-center gap-7"
            aria-label="Mobile navigation"
          >
            <button
              className="absolute top-5 end-6 text-[1.4rem] text-[#5a5a7a] bg-transparent border-none cursor-pointer hover:text-[#f0f0fa] transition-colors"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              ✕
            </button>

            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  href={link.href}
                  className="text-[1.3rem] font-semibold text-[#9898b8] hover:text-[#f0f0fa] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.36 }}
              className="flex flex-col items-center gap-3 mt-2"
            >
              <BookButton size="lg" />
              <LanguageSwitcher locale={locale} />
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
