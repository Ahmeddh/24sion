'use client'
import { useReducedMotion } from 'framer-motion'
import { DURATION, EASE, SCALE, OPACITY, ELEVATION, REDUCED_TOKENS } from './tokens'

export function useMotionTokens() {
  const reduce = useReducedMotion()

  if (reduce) {
    return {
      duration:  REDUCED_TOKENS.duration,
      ease:      REDUCED_TOKENS.ease,
      scale:     REDUCED_TOKENS.scale,
      opacity:   OPACITY,
      elevation: ELEVATION,
    }
  }

  return { duration: DURATION, ease: EASE, scale: SCALE, opacity: OPACITY, elevation: ELEVATION }
}
