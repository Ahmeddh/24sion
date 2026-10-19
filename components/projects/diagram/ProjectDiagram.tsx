'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { useDiagramInteraction } from '@/lib/motion/useDiagramInteraction'
import { DURATION, EASE, SCALE } from '@/lib/motion/tokens'

interface Props {
  svgContent:   string
  svgViewBox:   string
  diagramTitle: string
  borderClass:  string
  bgClass:      string
  glowClass:    string
}

export function ProjectDiagram({
  svgContent,
  svgViewBox,
  diagramTitle,
  borderClass,
  bgClass,
  glowClass,
}: Props) {
  const { svgRef } = useDiagramInteraction(svgContent)
  const reduce     = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, scale: reduce ? 1 : SCALE.active }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: DURATION.slow, ease: EASE.spring }}
      className={`rounded-2xl border p-4 ${borderClass} ${bgClass} ${glowClass}`}
    >
      <p className="text-[0.65rem] font-mono text-[#6e6e8e] mb-3 tracking-wide select-none">
        {diagramTitle}
      </p>
      <svg
        ref={svgRef}
        viewBox={svgViewBox}
        className="w-full h-auto focus-within:outline-none"
        aria-label={diagramTitle}
        role="img"
        dangerouslySetInnerHTML={{ __html: svgContent }}
      />
    </motion.div>
  )
}
