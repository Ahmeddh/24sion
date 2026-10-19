import type { Variants } from 'framer-motion'
import { DURATION, EASE } from '@/lib/motion/tokens'

/* ── Scroll-reveal (whileInView) ────────────────────────────── */

export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 8 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: DURATION.medium, ease: EASE.outSoft },
  },
}

export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.base, ease: EASE.outSoft },
  },
}

export const staggerContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.04 } },
}

/* Stagger child item — pair with staggerContainer */
export const staggerItem: Variants = {
  hidden:  { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION.medium, ease: EASE.outSoft } },
}

/* ── Panel transition (AnimatePresence) ─────────────────────── */

export const panelVariants = {
  initial:    { opacity: 0, y: 6  } as const,
  animate:    { opacity: 1, y: 0  } as const,
  exit:       { opacity: 0, y: -4 } as const,
  transition: { duration: DURATION.base, ease: EASE.inOut },
}

/* Reduced-motion: translate zeroed, pure opacity */
export const panelVariantsReduced = {
  initial:    { opacity: 0 } as const,
  animate:    { opacity: 1 } as const,
  exit:       { opacity: 0 } as const,
  transition: { duration: DURATION.fast },
}
