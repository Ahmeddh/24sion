'use client'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { DURATION, EASE } from '@/lib/motion/tokens'

interface Props {
  children:   React.ReactNode
  className?: string
  delay?:     number
}

/* Viewport-triggered section reveal.
   Uses --motion-medium + --ease-out-soft per the header animation spec.

   Triggers on the element's leading edge, never on a fraction of its
   height. A fractional `amount` is unreachable once a section grows
   taller than roughly 1/amount viewports, which leaves the content
   stuck at opacity 0 with no way to reveal it by scrolling. Long
   article bodies hit exactly that. Shrinking the detection area from
   the bottom instead keeps the reveal feeling the same for ordinary
   sections while staying height-independent.                        */
export function MotionSection({ children, className, delay = 0 }: Props) {
  const reduce = useReducedMotion()

  const variants: Variants = {
    hidden:  { opacity: 0, y: reduce ? 0 : 16 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: DURATION.medium, ease: EASE.outSoft, delay },
    },
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 'some', margin: '0px 0px -64px 0px' }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}
