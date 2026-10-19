'use client'
import { usePathname, useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { cn } from '@/lib/utils'

type Props = { locale: string; className?: string }

export function LanguageSwitcher({ locale, className }: Props) {
  const pathname  = usePathname()
  const router    = useRouter()
  const [pending, startTransition] = useTransition()

  function switchTo(next: string) {
    if (next === locale) return
    // Replace locale segment: /en/about → /ar/about
    const segments = pathname.split('/')
    segments[1]    = next
    startTransition(() => router.push(segments.join('/') || '/'))
  }

  return (
    <div
      className={cn(
        'flex items-center gap-0 rounded-lg border border-[rgba(255,255,255,0.09)] overflow-hidden text-xs font-mono',
        pending && 'opacity-60 pointer-events-none',
        className,
      )}
      aria-label="Language switcher"
    >
      {(['en', 'ar'] as const).map(l => (
        <button
          key={l}
          onClick={() => switchTo(l)}
          className={cn(
            'px-2.5 py-1 transition-colors duration-150 uppercase tracking-widest cursor-pointer',
            l === locale
              ? 'bg-cyan text-white font-semibold'
              : 'text-[#5a5a7a] hover:text-[#f0f0fa] bg-transparent',
          )}
          aria-current={l === locale ? 'true' : undefined}
        >
          {l}
        </button>
      ))}
    </div>
  )
}
