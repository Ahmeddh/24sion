/* ═══════════════════════════════════════════════════════════════
   DMS-1 — Direction Utility (RTL/LTR-Aware Motion)

   RULE: ALL directional transforms (x, translateX) MUST use tokens
   from getMotionDirection(). Hardcoded x: -20 / x: 20 are forbidden.

   Safe-zone animations (scale, opacity, elevation, glow) are always
   direction-agnostic — do NOT apply dir logic to them.
═══════════════════════════════════════════════════════════════ */

export type MotionDir = 'ltr' | 'rtl'

/* Motion x-offsets for enter/exit slide transitions.
   enterX → where the element starts before animating in
   exitX  → where the element goes when animating out     */
export function getMotionDirection(dir: MotionDir) {
  return {
    enterX: dir === 'rtl' ? 20 : -20,
    exitX:  dir === 'rtl' ? -20 : 20,
  }
}

/* Derive direction from Next.js locale string.
   Extend this map if new RTL locales are added.          */
export function dirFromLocale(locale: string | undefined): MotionDir {
  return locale === 'ar' ? 'rtl' : 'ltr'
}
