'use client'
import { useReducedMotion } from 'framer-motion'
import { dm, type MotionVariant, type MotionState } from './tokens'

/* ── Per-variant animation overrides ─────────────────────────────
   Most variants share the same token values.
   Overrides here are variant-specific exceptions.                */
const VARIANT_OVERRIDES: Partial<Record<MotionVariant, { disableScale?: boolean }>> = {
  'text':         { disableScale: true },   /* text never scales — only opacity/y */
  'diagram-edge': { disableScale: true },   /* edges: opacity fade only           */
}

/* ── Transition builders ──────────────────────────────────────── */
const tFast   = (reduce: boolean) =>
  reduce ? { duration: 0 } : { duration: dm.duration.fast   / 1000, ease: dm.easing.outSoft }

const tMedium = (reduce: boolean) =>
  reduce ? { duration: 0 } : { duration: dm.duration.medium / 1000, ease: dm.easing.outSoft }

const tSpring = (reduce: boolean) =>
  reduce ? { duration: 0 } : dm.easing.spring

/* ── Main hook ────────────────────────────────────────────────── */

export type MotionConfig = {
  /* Spread onto <motion.*> when state is externally driven */
  animate:    { scale: number; opacity: number }
  transition: object
  /* Spread for auto-managed gesture interactions (undefined = disabled) */
  whileHover: { scale: number; transition: object } | undefined
  whileTap:   { scale: number; transition: object } | undefined
  whileFocus: { scale: number; transition: object } | undefined
}

export function useMotion(variant: MotionVariant, state?: MotionState): MotionConfig {
  const reduce   = useReducedMotion() ?? false
  const override = VARIANT_OVERRIDES[variant] ?? {}

  const scaleOf = (s: MotionState): number => {
    if (reduce || override.disableScale) return 1
    if (s === 'focus')  return dm.scale.focus
    if (s === 'hover')  return dm.scale.hover
    if (s === 'active') return dm.scale.active
    return 1
  }

  /* ── External state mode (parent drives state) ── */
  if (state) {
    const scale   = scaleOf(state)
    const opacity = state === 'idle' ? dm.opacity.dim : dm.opacity.full
    const trans   = state === 'focus' ? tSpring(reduce) : tFast(reduce)

    return {
      animate:    { scale, opacity },
      transition: trans,
      whileHover: undefined,
      whileTap:   undefined,
      whileFocus: undefined,
    }
  }

  /* ── Auto-managed gesture mode ── */
  /* Idle baseline: full opacity, neutral scale */
  const idle = { scale: 1, opacity: dm.opacity.full }

  return {
    animate:    idle,
    transition: tFast(reduce),
    whileHover: reduce ? undefined : {
      scale:      override.disableScale ? 1 : dm.scale.hover,
      transition: tFast(reduce),
    },
    whileTap: reduce ? undefined : {
      scale:      override.disableScale ? 1 : dm.scale.active,
      transition: tFast(reduce),
    },
    whileFocus: reduce ? undefined : {
      scale:      override.disableScale ? 1 : dm.scale.focus,
      transition: tSpring(reduce),   /* focus always springs */
    },
  }
}
