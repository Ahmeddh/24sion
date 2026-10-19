import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & { size?: number }

const base = (size = 20): SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
})

export function ShieldIcon({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M12 2L3.5 6v5.5c0 4.75 3.5 9.2 8.5 10.5 5-1.3 8.5-5.75 8.5-10.5V6L12 2z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  )
}

export function ChainIcon({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <rect x="3" y="8" width="5" height="8" rx="2" />
      <rect x="16" y="8" width="5" height="8" rx="2" />
      <line x1="8" y1="12" x2="16" y2="12" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function MobileIcon({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <line x1="6" y1="6" x2="18" y2="6" />
      <line x1="6" y1="18" x2="18" y2="18" />
      <circle cx="12" cy="20.5" r="0.5" fill="currentColor" stroke="none" />
      <rect x="9" y="9" width="6" height="1.5" rx="0.5" fill="currentColor" stroke="none" />
      <rect x="9" y="12" width="4" height="1.5" rx="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function RocketIcon({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M12 2c0 0 4 2 4 8l-4 3-4-3c0-6 4-8 4-8z" />
      <path d="M8 10l-3 5h3v4l4-3 4 3v-4h3l-3-5" />
    </svg>
  )
}

export function SearchIcon({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <circle cx="11" cy="11" r="7" />
      <line x1="16.5" y1="16.5" x2="21" y2="21" />
      <line x1="8" y1="11" x2="14" y2="11" />
      <line x1="11" y1="8" x2="11" y2="14" />
    </svg>
  )
}

export function LockIcon({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <rect x="4" y="11" width="16" height="11" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
      <circle cx="12" cy="16.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function GlobeIcon({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="4" ry="9" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="3" y1="15" x2="21" y2="15" />
    </svg>
  )
}

export function ClipboardIcon({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <rect x="8" y="2" width="8" height="3" rx="1" />
      <path d="M6 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1" />
      <line x1="9" y1="11" x2="15" y2="11" />
      <line x1="9" y1="15" x2="13" y2="15" />
    </svg>
  )
}

export function LayersIcon({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <polygon points="12 2 22 8.5 12 15 2 8.5" />
      <polyline points="2 14.5 12 21 22 14.5" />
      <polyline points="2 11.5 12 18 22 11.5" />
    </svg>
  )
}

export function LocationIcon({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  )
}

export function EmailIcon({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <polyline points="2 5 12 13 22 5" />
    </svg>
  )
}

export function LinkedInIcon({ size, ...p }: IconProps) {
  return (
    <svg {...{ ...base(size), fill: 'currentColor', stroke: 'none' }} {...p}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export function XIcon({ size, ...p }: IconProps) {
  return (
    <svg {...{ ...base(size), fill: 'currentColor', stroke: 'none' }} {...p}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.731-8.835L2.063 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  )
}

export function GitHubIcon({ size, ...p }: IconProps) {
  return (
    <svg {...{ ...base(size), fill: 'currentColor', stroke: 'none' }} {...p}>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

export function CalendarIcon({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

export function SudanFlagIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={Math.round(size * 0.6)} viewBox="0 0 30 18" aria-hidden="true">
      <rect width="30" height="6" fill="#d21034" />
      <rect y="6" width="30" height="6" fill="#fff" />
      <rect y="12" width="30" height="6" fill="#000" />
      <polygon points="0,0 12,9 0,18" fill="#007a3d" />
    </svg>
  )
}

export const SERVICE_ICONS: Record<string, React.ComponentType<IconProps>> = {
  cybersecurity: ShieldIcon,
  blockchain:    ChainIcon,
  webmobile:     MobileIcon,
  digital:       RocketIcon,
}
