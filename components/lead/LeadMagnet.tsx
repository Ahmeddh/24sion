'use client'

import { createContext, useCallback, useContext, useMemo, useState, useTransition } from 'react'
import Link from 'next/link'
import * as Dialog from '@radix-ui/react-dialog'
import { useLocale, useTranslations } from 'next-intl'
import { submitLead, type LeadResult, type LeadField } from '@/app/actions/leads'
import { PLAN_ARTICLE_SLUG } from '@/lib/plan'
import { cn } from '@/lib/utils'

/* ══════════════════════════════════════════════════════════
   Lead magnet popup: "Get the free 200-Week Cycle Plan"
   <LeadMagnetProvider> sits once in the locale layout.
   Any client component opens it with useLeadMagnet().open('where')
   or by rendering <LeadMagnetButton source="where" />.
══════════════════════════════════════════════════════════ */

type Ctx = { open: (source: string) => void }
const LeadMagnetContext = createContext<Ctx>({ open: () => {} })

export function useLeadMagnet() {
  return useContext(LeadMagnetContext)
}

export function LeadMagnetProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [source, setSource] = useState('unknown')

  const open = useCallback((from: string) => {
    setSource(from)
    setIsOpen(true)
  }, [])

  const value = useMemo(() => ({ open }), [open])

  return (
    <LeadMagnetContext.Provider value={value}>
      {children}
      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[60] bg-[rgba(4,4,10,0.78)] backdrop-blur-sm" />
          <Dialog.Content
            className={cn(
              'fixed z-[61] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
              'w-[calc(100vw-32px)] max-w-[460px] max-h-[calc(100vh-32px)] overflow-y-auto',
              'rounded-2xl border border-[rgba(238,148,39,0.22)] bg-[#0e0e1a] p-6 sm:p-7',
              'shadow-[0_24px_80px_rgba(0,0,0,0.6)] focus:outline-none',
            )}
          >
            <LeadForm source={source} onClose={() => setIsOpen(false)} />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </LeadMagnetContext.Provider>
  )
}

function LeadForm({ source, onClose }: { source: string; onClose: () => void }) {
  const t      = useTranslations('lead')
  const locale = useLocale()
  const [result, setResult]          = useState<LeadResult | null>(null)
  const [isPending, startTransition] = useTransition()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    startTransition(async () => {
      try {
        setResult(await submitLead(data))
      } catch {
        setResult({ ok: false, code: 'server' })
      }
    })
  }

  const closeButton = (
    <Dialog.Close
      className="absolute top-4 end-4 text-[#5a5a7a] hover:text-[#f0f0fa] transition-colors text-lg leading-none"
      aria-label={t('close')}
    >
      ✕
    </Dialog.Close>
  )

  /* ── Success: hand over the plan right away ── */
  if (result?.ok) {
    return (
      <div className="relative">
        {closeButton}
        <Dialog.Title className="text-xl font-bold text-[#f0f0fa] mb-2 pe-8">{t('successTitle')}</Dialog.Title>
        <Dialog.Description className="text-sm text-[#9898b8] leading-relaxed mb-6">
          {t('successSub')}
        </Dialog.Description>
        <div className="flex flex-col gap-2.5">
          <Link
            href={`/${locale}/insights/${PLAN_ARTICLE_SLUG}`}
            onClick={onClose}
            className="inline-flex items-center justify-center px-5 py-3 rounded-[10px] bg-cyan text-[#06060f] text-sm font-semibold hover:bg-[#F7B766] transition-colors duration-200"
          >
            {t('successPlan')}
          </Link>
          <Link
            href={`/${locale}/dca-calculator`}
            onClick={onClose}
            className="inline-flex items-center justify-center px-5 py-3 rounded-[10px] border border-[rgba(255,255,255,0.12)] text-[#f0f0fa] text-sm font-semibold hover:border-cyan hover:text-cyan transition-colors duration-200"
          >
            {t('successCalculator')}
          </Link>
        </div>
      </div>
    )
  }

  const errorFor = (field: LeadField) =>
    result && !result.ok && result.field === field ? t(`errors.${field}_${result.code}`) : null
  const generalError =
    result && !result.ok && !result.field ? t(`errors.${result.code}`) : null

  return (
    <div className="relative">
      {closeButton}
      <p className="text-[0.7rem] font-mono tracking-widest uppercase text-cyan mb-3">{t('eyebrow')}</p>
      <Dialog.Title className="text-[1.35rem] font-bold leading-snug text-[#f0f0fa] mb-2 pe-8">
        {t('title')}
      </Dialog.Title>
      <Dialog.Description className="text-sm text-[#9898b8] leading-relaxed mb-4">
        {t('sub')}
      </Dialog.Description>

      <ul className="mb-5 space-y-1.5">
        {(t.raw('bullets') as string[]).map(b => (
          <li key={b} className="flex gap-2 text-sm text-[#c8c8e0]">
            <span className="text-cyan" aria-hidden="true">✓</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
        {/* Honeypot (hidden from real users) */}
        <input
          name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true"
          style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', width: 0, height: 0 }}
        />
        <input type="hidden" name="locale" value={locale} />
        <input type="hidden" name="source" value={source} />

        <Field id="lead-name" name="name" type="text" autoComplete="name"
          label={t('name')} placeholder={t('namePlaceholder')} error={errorFor('name')} disabled={isPending} />
        <Field id="lead-email" name="email" type="email" autoComplete="email" dir="ltr"
          label={t('email')} placeholder="you@example.com" error={errorFor('email')} disabled={isPending} />
        <Field id="lead-whatsapp" name="whatsapp" type="tel" autoComplete="tel" dir="ltr"
          label={t('whatsapp')} hint={t('whatsappHint')} placeholder="+971 50 123 4567"
          error={errorFor('whatsapp')} disabled={isPending} />

        <label className="flex items-start gap-2.5 text-xs text-[#9898b8] leading-relaxed cursor-pointer mt-1">
          <input type="checkbox" name="consent" className="mt-0.5 accent-[#EE9427]" disabled={isPending} />
          <span>
            {t('consent')}{' '}
            <Link href={`/${locale}/privacy-policy`} className="underline hover:text-[#f0f0fa]" onClick={onClose}>
              {t('privacy')}
            </Link>
          </span>
        </label>
        {errorFor('consent') && <p role="alert" className="text-xs text-rose-400 font-mono">{errorFor('consent')}</p>}

        <button
          type="submit"
          disabled={isPending}
          className={cn(
            'mt-1 inline-flex items-center justify-center px-5 py-3 rounded-[10px]',
            'bg-cyan text-[#06060f] text-sm font-semibold transition-all duration-200',
            'hover:bg-[#F7B766] hover:shadow-[0_4px_16px_rgba(238,148,39,0.3)]',
            'disabled:opacity-60 disabled:cursor-not-allowed',
          )}
        >
          {isPending ? t('sending') : t('submit')}
        </button>

        {generalError && <p role="alert" className="text-xs text-rose-400 font-mono">{generalError}</p>}
        <p className="text-[0.7rem] text-[#5a5a7a] leading-relaxed">{t('disclaimer')}</p>
      </form>
    </div>
  )
}

function Field({
  id, name, type, label, hint, placeholder, error, disabled, autoComplete, dir,
}: {
  id: string; name: string; type: string; label: string; hint?: string; placeholder?: string
  error: string | null; disabled?: boolean; autoComplete?: string; dir?: 'ltr' | 'rtl'
}) {
  return (
    <div>
      <label htmlFor={id} className="flex items-baseline justify-between text-xs font-medium text-[#c8c8e0] mb-1.5">
        <span>{label}</span>
        {hint && <span className="text-[#5a5a7a] font-normal">{hint}</span>}
      </label>
      <input
        id={id} name={name} type={type} dir={dir} autoComplete={autoComplete}
        placeholder={placeholder} disabled={disabled}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          'w-full bg-[#0a0a14] border text-[#f0f0fa] placeholder-[#6e6e8e]',
          'text-sm rounded-[10px] px-4 py-2.5 outline-none transition-all duration-200',
          'focus:border-cyan focus:ring-1 focus:ring-cyan/30 disabled:opacity-50',
          error ? 'border-rose-500/60' : 'border-[rgba(255,255,255,0.09)]',
        )}
      />
      {error && <p id={`${id}-error`} role="alert" className="text-xs text-rose-400 font-mono mt-1">{error}</p>}
    </div>
  )
}

/* ── Button that opens the popup ── */
export function LeadMagnetButton({
  source, size = 'xl', className, children,
}: {
  source: string; size?: 'md' | 'lg' | 'xl'; className?: string; children?: React.ReactNode
}) {
  const t        = useTranslations('lead')
  const { open } = useLeadMagnet()
  const sizes = {
    md: 'px-4 py-2 text-[0.82rem] rounded-[9px]',
    lg: 'px-5 py-2.5 text-[0.9rem] rounded-[10px]',
    xl: 'px-6 py-3 text-[0.95rem] rounded-[11px]',
  }
  return (
    <button
      type="button"
      onClick={() => open(source)}
      className={cn(
        'inline-flex items-center gap-1.5 font-semibold font-sans leading-none whitespace-nowrap cursor-pointer select-none',
        'bg-cyan text-[#06060f] hover:bg-[#F7B766] hover:scale-[1.02] hover:shadow-[0_6px_20px_rgba(238,148,39,0.35)]',
        'transition-[transform,box-shadow,background-color] duration-[120ms] ease-[cubic-bezier(0.2,0,0,1)] active:scale-[0.98]',
        sizes[size],
        className,
      )}
    >
      {children ?? t('cta')}
    </button>
  )
}
