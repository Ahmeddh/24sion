/* ── Motion token mirror ─────────────────────────────────────
   Mirrors styles/motion-tokens.css for use in Framer Motion.
   Duration values are in seconds (FM convention).
   Keep in sync with the CSS file.
──────────────────────────────────────────────────────────── */

export const DURATION = {
  fast:   0.12,   /* 120ms — micro-interactions */
  base:   0.18,   /* 180ms — standard UI        */
  medium: 0.26,   /* 260ms — layout / cards     */
  slow:   0.36,   /* 360ms — section / diagram  */
} as const

export const EASE = {
  outSoft: [0.2,  0,    0,    1   ] as [number, number, number, number],
  inSoft:  [0.4,  0,    1,    1   ] as [number, number, number, number],
  inOut:   [0.4,  0,    0.2,  1   ] as [number, number, number, number],
  spring:  [0.34, 1.08, 0.64, 1   ] as [number, number, number, number],
} as const

export const SCALE = {
  hover:  1.02,
  focus:  1.06,
  active: 0.98,
} as const

export const OPACITY = {
  dim:   0.4,
  muted: 0.6,
  full:  1,
} as const

export const ELEVATION = {
  rest:  'none',
  hover: '0 4px 20px rgba(0,0,0,0.4)',
  focus: '0 8px 36px rgba(0,0,0,0.55)',
} as const

/* Reduced-motion safe override: zeroes duration, flattens scale */
export const REDUCED_TOKENS = {
  duration: { fast: 0, base: 0, medium: 0, slow: 0 },
  ease:     { outSoft: EASE.inOut, inSoft: EASE.inOut, inOut: EASE.inOut, spring: EASE.inOut },
  scale:    { hover: 1, focus: 1, active: 1 },
  opacity:  OPACITY,
  elevation: ELEVATION,
} as const
