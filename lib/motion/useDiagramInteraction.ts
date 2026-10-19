'use client'
import { useRef, useEffect } from 'react'
import { useReducedMotion } from 'framer-motion'

/* Post-mount SVG group interaction system.
   Manages hover + tap + keyboard focus for top-level <g> elements.

   Interaction model:
   - Desktop: mouseenter → temporary highlight, mouseleave → restore;
              click → pin highlight (persists on mouseleave); second click → unpin.
   - Mobile:  tap (click) → pin; second tap → unpin.
   - Keyboard: Tab → focus, Enter/Space → pin, Escape → unpin + blur.

   Token values (inline strings so the hook stays framework-agnostic): */

const T = {
  opacity:   { dim: '0.4',    full: '1' },
  scale:     { focus: '1.06', dim: '0.98', reset: 'none' },
  transition: {
    on:  `opacity 360ms cubic-bezier(0.34,1.08,0.64,1),
          transform 360ms cubic-bezier(0.34,1.08,0.64,1)`,
    off: 'none',
  },
} as const

export function useDiagramInteraction(svgContent: string) {
  const svgRef = useRef<SVGSVGElement>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    const groups = Array.from(svg.querySelectorAll<SVGGElement>(':scope > g'))
    if (groups.length < 2) return

    type Listener = { el: Element; event: string; fn: EventListener }
    const listeners: Listener[] = []
    const on = (el: Element, event: string, fn: EventListener) => {
      el.addEventListener(event, fn)
      listeners.push({ el, event, fn })
    }

    /* Track pinned node (persists across mouseleave) */
    let pinned: SVGGElement | null = null

    /* Init group accessibility attributes + transitions */
    groups.forEach(g => {
      g.setAttribute('tabindex', '0')
      g.setAttribute('role', 'group')
      g.style.transition   = reduce ? T.transition.off : T.transition.on
      g.style.transformOrigin = 'center'
      g.style.cursor = 'pointer'
    })

    /* ── State application ─────────────────────────────── */
    const applyFocus = (target: SVGGElement) => {
      groups.forEach(g => {
        const focused = g === target
        g.style.opacity   = focused ? T.opacity.full : T.opacity.dim
        g.style.transform = reduce  ? T.scale.reset
                          : focused ? `scale(${T.scale.focus})`
                          :           `scale(${T.scale.dim})`
      })
    }

    const resetAll = () => {
      groups.forEach(g => {
        g.style.opacity   = T.opacity.full
        g.style.transform = T.scale.reset
      })
    }

    /* ── Event handlers ────────────────────────────────── */
    groups.forEach(g => {
      /* Desktop hover: temporary unless pinned */
      on(g, 'mouseenter', () => applyFocus(g))

      on(g, 'mouseleave', () => {
        if (pinned) applyFocus(pinned)   /* restore pin highlight */
        else        resetAll()
      })

      /* Click / tap: toggle pin */
      on(g, 'click', () => {
        if (pinned === g) { pinned = null; resetAll() }
        else              { pinned = g;    applyFocus(g) }
      })

      /* Keyboard focus mirrors hover */
      on(g, 'focus', () => applyFocus(g))
      on(g, 'blur',  () => {
        if (pinned) applyFocus(pinned)
        else        resetAll()
      })

      on(g, 'keydown', (e: Event) => {
        const ke = e as KeyboardEvent
        if (ke.key === 'Enter' || ke.key === ' ') {
          ke.preventDefault()
          if (pinned === g) { pinned = null; resetAll() }
          else              { pinned = g;    applyFocus(g) }
        }
        if (ke.key === 'Escape') {
          pinned = null
          resetAll()
          ;(g as unknown as HTMLElement).blur()
        }
      })
    })

    return () => {
      listeners.forEach(({ el, event, fn }) => el.removeEventListener(event, fn))
      groups.forEach(g => {
        g.removeAttribute('tabindex')
        g.removeAttribute('role')
        g.style.transition      = ''
        g.style.transform       = ''
        g.style.opacity         = ''
        g.style.cursor          = ''
        g.style.transformOrigin = ''
      })
    }
  }, [svgContent, reduce])

  return { svgRef }
}
