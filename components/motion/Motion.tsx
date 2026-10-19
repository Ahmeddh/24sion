'use client'
import { motion } from 'framer-motion'
import { useMotion } from '@/lib/dms/useMotion'
import { assertVariant, assertState } from '@/lib/dms/guard'
import type { MotionVariant, MotionState } from '@/lib/dms/tokens'
import type { MotionDir } from '@/lib/dms/direction'

/* ═══════════════════════════════════════════════════════════════
   DMS-1 Universal Motion Wrapper

   Rules:
   1. ALL animated UI components MUST use this wrapper.
   2. Never use <motion.*> directly in page/UI components.
      Raw framer-motion is only permitted inside /components/motion/.
   3. variant is REQUIRED — it determines allowed tokens.
   4. state is optional:
      - Omitted → auto-managed (hover/tap/focus via gestures, no React re-render)
      - Provided → parent drives the state (diagram focus, tab active, etc.)

   Usage:
     Auto:     <Motion variant="card"><Card /></Motion>
     Explicit: <Motion variant="diagram-node" state={focused ? "focus" : "idle"}>
═══════════════════════════════════════════════════════════════ */

interface MotionProps {
  variant:    MotionVariant
  state?:     MotionState
  dir?:       MotionDir       /* pass for slide-aware variants; safe-zone variants ignore it */
  children:   React.ReactNode
  className?: string
  layoutId?:  string
}

export function Motion({ variant, state, dir, children, className, layoutId }: MotionProps) {
  /* Dev-time enforcement — throws on unknown variant, corrects invalid state */
  assertVariant(variant)
  const safeState = state != null ? assertState(state) : undefined

  const { animate, transition, whileHover, whileTap, whileFocus } =
    useMotion(variant, safeState)

  return (
    <motion.div
      className={className}
      layoutId={layoutId}
      animate={animate}
      transition={transition}
      whileHover={whileHover}
      whileTap={whileTap}
      whileFocus={whileFocus}
      style={{ transformOrigin: 'center' }}
    >
      {children}
    </motion.div>
  )
}
