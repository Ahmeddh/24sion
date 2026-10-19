'use client'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { useLocale } from 'next-intl'

interface LogoProps {
  className?: string
  size?: number
  showWordmark?: boolean
}

export function Logo({ className, size = 28, showWordmark = true }: LogoProps) {
  const locale = useLocale()
  const displayName = locale === 'ar' ? 'أحمد جوبس' : 'Ahmed Djobs'

  return (
    <Link
      href="/"
      className={cn('flex items-center gap-2.5 group', className)}
      aria-label={`${displayName}: Home`}
    >
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: size, height: size, flexShrink: 0 }}
        aria-hidden="true"
        className="transition-all duration-300 group-hover:[filter:drop-shadow(0_0_8px_rgba(0,198,255,0.6))]"
      >
        <rect x="2"  y="2"  width="14" height="14" rx="3" stroke="white" strokeWidth="1.8" fill="none"/>
        <rect x="24" y="2"  width="14" height="14" rx="3" stroke="white" strokeWidth="1.8" fill="none"/>
        <rect x="2"  y="24" width="14" height="14" rx="3" stroke="white" strokeWidth="1.8" fill="none" opacity="0.5"/>
        <rect x="24" y="24" width="14" height="14" rx="3" stroke="white" strokeWidth="1.8" fill="none"/>
        <line x1="16" y1="9"  x2="24" y2="9"  stroke="white" strokeWidth="1.4" opacity="0.6"/>
        <line x1="9"  y1="16" x2="9"  y2="24" stroke="white" strokeWidth="1.4" opacity="0.5"/>
        <line x1="31" y1="16" x2="31" y2="24" stroke="white" strokeWidth="1.4" opacity="0.6"/>
        <line x1="16" y1="31" x2="24" y2="31" stroke="white" strokeWidth="1.4" opacity="0.4"/>
      </svg>
      {showWordmark && (
        <span className="text-[1.05rem] font-bold tracking-tight text-[#f0f0fa]">
          {displayName}
        </span>
      )}
    </Link>
  )
}
