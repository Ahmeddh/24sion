'use client'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import { SITE } from '@/lib/constants'

type Variant = 'primary' | 'ghost' | 'outline' | 'secondary'
type Size    = 'sm' | 'md' | 'lg' | 'xl'

interface CTAButtonProps {
  href?:      string
  variant?:   Variant
  size?:      Size
  external?:  boolean
  children:   React.ReactNode
  className?: string
  icon?:      React.ReactNode
  onClick?:   () => void
  type?:      'button' | 'submit'
}

/* Scale tokens: hover → 1.02 (--scale-hover), active → 0.98 (--scale-active)
   Duration: 120ms (--motion-fast), easing: --ease-out-soft               */
const variants: Record<Variant, string> = {
  primary:   'bg-cyan text-white hover:bg-[#22d4ff] hover:scale-[1.02] hover:shadow-[0_6px_20px_rgba(0,198,255,0.35)]',
  ghost:     'bg-transparent text-[#9898b8] border border-[rgba(255,255,255,0.09)] hover:text-[#f0f0fa] hover:border-[rgba(0,198,255,0.3)] hover:bg-[rgba(0,198,255,0.08)] hover:scale-[1.02]',
  outline:   'bg-transparent text-[#f0f0fa] border border-[rgba(255,255,255,0.09)] hover:border-cyan hover:text-cyan hover:scale-[1.02]',
  secondary: 'bg-[#141428] text-[#9898b8] border border-[rgba(255,255,255,0.09)] hover:bg-[#1a1a30] hover:text-[#f0f0fa] hover:scale-[1.02]',
}

const sizes: Record<Size, string> = {
  sm: 'px-3.5 py-1.5 text-xs rounded-lg',
  md: 'px-4    py-2   text-[0.82rem] rounded-[9px]',
  lg: 'px-5    py-2.5 text-[0.9rem]  rounded-[10px]',
  xl: 'px-6    py-3   text-[0.95rem] rounded-[11px]',
}

const ArrowIcon = () => (
  <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

export function CTAButton({
  href, variant = 'primary', size = 'md', external, children, className, icon, onClick, type = 'button',
}: CTAButtonProps) {
  const base = cn(
    'inline-flex items-center gap-1.5 font-semibold font-sans leading-none whitespace-nowrap cursor-pointer select-none',
    'transition-[transform,box-shadow,background-color,border-color,color] duration-[120ms] ease-[cubic-bezier(0.2,0,0,1)]',
    'active:scale-[0.98]',  /* --scale-active on press */
    variants[variant],
    sizes[size],
    className,
  )

  const content = (
    <>
      {children}
      {icon !== undefined ? icon : (variant === 'primary' && size !== 'sm') ? <ArrowIcon /> : null}
    </>
  )

  // Booking CTA — always new tab
  if (href === 'booking' || href === SITE.cal) {
    return (
      <a href={SITE.cal} target="_blank" rel="noopener noreferrer" className={base}>
        {content}
      </a>
    )
  }

  if (!href) {
    return (
      <button type={type} className={base} onClick={onClick}>
        {content}
      </button>
    )
  }

  if (external || href.startsWith('http') || href.startsWith('mailto:')) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
        {content}
      </a>
    )
  }

  return (
    <Link href={href} className={base}>
      {content}
    </Link>
  )
}

/* ─── Convenience booking button ─── */
export function BookButton({ size = 'md', className }: { size?: Size; className?: string }) {
  const t = useTranslations('common')
  return (
    <CTAButton href="booking" variant="primary" size={size} className={className}>
      {t('bookSession')}
    </CTAButton>
  )
}
