'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { DURATION, EASE } from '@/lib/motion/tokens'

interface Props {
  children:   React.ReactNode
  className?: string
  delay?:     number
  y?:         number
}

/* Mount-time fade + translate for page-level content blocks.
   Uses --motion-medium + --ease-out-soft.                    */
export function FadeIn({ children, className, delay = 0, y = 16 }: Props) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: DURATION.medium, ease: EASE.outSoft, delay }}
    >
      {children}
    </motion.div>
  )
}
