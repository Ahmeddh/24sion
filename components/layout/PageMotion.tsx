'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { dm } from '@/lib/dms/tokens'

/* ═══════════════════════════════════════════════════════════════
   DMS-1 Page Entry Wrapper

   Apply to ALL pages. No page may define its own entry transition.

   key={pathname} forces Framer Motion to remount and replay the
   initial→animate sequence on every client-side navigation. Without
   it, React sees the same component type at the same tree position
   and skips the mount animation entirely.

   Spec: opacity 0→1 + y 24→0, --motion-slow, easeOut
═══════════════════════════════════════════════════════════════ */

interface Props {
  children: React.ReactNode
}

export function PageMotion({ children }: Props) {
  const reduce   = useReducedMotion()
  const pathname = usePathname()

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: reduce ? 0 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
