'use client'

import { useRef, useState, useTransition } from 'react'
import { useTranslations } from 'next-intl'
import { subscribeToNewsletter, type SubscribeResult } from '@/app/actions/newsletter'
import { cn } from '@/lib/utils'

interface NewsletterFormProps {
  /** 'inline' = single-row input+button (footer), 'stacked' = full-width block (section) */
  layout?: 'inline' | 'stacked'
  className?: string
}

export function NewsletterForm({ layout = 'inline', className }: NewsletterFormProps) {
  const formRef             = useRef<HTMLFormElement>(null)
  const [result, setResult] = useState<SubscribeResult | null>(null)
  const [isPending, startTransition] = useTransition()
  const t = useTranslations('common')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)

    startTransition(async () => {
      try {
        const res = await subscribeToNewsletter(data)
        setResult(res)
        if (res.ok) formRef.current?.reset()
      } catch {
        setResult({ ok: false, message: 'Something went wrong. Please try again.' })
      }
    })
  }

  /* ── Success state ─────────────────────────────────────── */
  if (result?.ok) {
    return (
      <div
        className={cn(
          'flex items-center gap-3 px-5 py-3.5 rounded-xl',
          'bg-[rgba(127,184,232,0.07)] border border-[rgba(127,184,232,0.2)]',
          className,
        )}
        role="status"
        aria-live="polite"
      >
        <span className="text-[#7FB8E8] text-lg" aria-hidden="true">✓</span>
        <p className="text-sm font-medium text-[#7FB8E8]">{result.message}</p>
      </div>
    )
  }

  /* ── Form ──────────────────────────────────────────────── */
  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className={cn(
        layout === 'stacked' ? 'flex flex-col gap-3 w-full max-w-md' : 'flex flex-col sm:flex-row gap-2',
        className,
      )}
      aria-label="Newsletter subscription"
    >
      {/* ── Honeypot (hidden from real users) ── */}
      <input
        name="website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', width: 0, height: 0 }}
      />

      {/* ── Email field ── */}
      <div className={cn('relative', layout === 'stacked' ? 'w-full' : 'flex-1')}>
        <label htmlFor="newsletter-email" className="sr-only">Email address</label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          disabled={isPending}
          aria-invalid={result?.ok === false && result.field === 'email' ? 'true' : undefined}
          aria-describedby={result?.ok === false ? 'newsletter-error' : undefined}
          className={cn(
            'w-full bg-[#0e0e1c] border text-[#f0f0fa] placeholder-[#6e6e8e]',
            'text-sm font-mono rounded-[10px] outline-none transition-all duration-200',
            'focus:border-cyan focus:ring-1 focus:ring-cyan/30',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            layout === 'stacked' ? 'px-4 py-3' : 'px-4 py-2.5',
            result?.ok === false && result.field === 'email'
              ? 'border-rose-500/60 focus:border-rose-500'
              : 'border-[rgba(255,255,255,0.09)]',
          )}
        />
      </div>

      {/* ── Submit button ── */}
      <button
        type="submit"
        disabled={isPending}
        className={cn(
          'inline-flex items-center justify-center gap-2 font-semibold text-sm',
          'bg-cyan text-[#06060f] rounded-[10px] transition-all duration-200',
          'hover:bg-[#F7B766] hover:-translate-y-px hover:shadow-[0_4px_16px_rgba(238,148,39,0.3)]',
          'active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none',
          'whitespace-nowrap select-none',
          layout === 'stacked' ? 'w-full px-5 py-3' : 'px-5 py-2.5',
        )}
      >
        {isPending ? (
          <>
            <Spinner />
            {t('subscribing')}
          </>
        ) : (
          t('subscribe')
        )}
      </button>

      {/* ── Error message ── */}
      {result?.ok === false && (
        <p
          id="newsletter-error"
          role="alert"
          aria-live="assertive"
          className={cn(
            'text-xs text-rose-400 font-mono mt-0.5',
            layout === 'inline' && 'sm:col-span-2',
          )}
        >
          {result.message}
        </p>
      )}
    </form>
  )
}

/* ── Tiny inline spinner ─────────────────────────────────── */
function Spinner() {
  return (
    <svg
      className="animate-spin"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      aria-hidden="true"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" />
      <path className="opacity-75" d="M4 12a8 8 0 018-8" strokeLinecap="round" />
    </svg>
  )
}
