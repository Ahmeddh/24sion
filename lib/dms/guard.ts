/* ═══════════════════════════════════════════════════════════════
   DMS-1 Guard — dev-time enforcement layer.
   All checks are stripped in production (NODE_ENV !== 'development').
═══════════════════════════════════════════════════════════════ */

import type { MotionVariant, MotionState } from './tokens'

const DEV = process.env.NODE_ENV === 'development'
const TAG = '[DMS-1]'

export const VALID_VARIANTS: readonly MotionVariant[] = [
  'text', 'card', 'button', 'diagram-node', 'diagram-edge', 'tab', 'section',
]

export const VALID_STATES: readonly MotionState[] = [
  'idle', 'hover', 'active', 'focus',
]

/* Throws in dev if variant is not in the approved enum.
   Silent no-op in production.                           */
export function assertVariant(v: string): void {
  if (!DEV) return
  if (!VALID_VARIANTS.includes(v as MotionVariant)) {
    throw new Error(
      `${TAG} Unknown motion variant: "${v}". ` +
      `Allowed: ${VALID_VARIANTS.join(', ')}\n` +
      `→ Every animated component must declare a valid variant.`
    )
  }
}

/* Warns and returns 'idle' if state is not in the approved enum.
   Silent pass-through in production.                            */
export function assertState(s: string): MotionState {
  if (!DEV) return s as MotionState
  if (!VALID_STATES.includes(s as MotionState)) {
    console.warn(
      `${TAG} Invalid motion state: "${s}". Falling back to "idle". ` +
      `Allowed: ${VALID_STATES.join(', ')}`
    )
    return 'idle'
  }
  return s as MotionState
}

/* Call inside any component that uses raw motion.* directly.
   Signals a DMS violation — migrate to <Motion variant="…">.  */
export function warnDirectAnimation(componentName: string): void {
  if (!DEV) return
  console.warn(
    `${TAG} VIOLATION — Direct animation in "${componentName}". ` +
    `Use <Motion variant="…"> from @/components/motion/Motion instead. ` +
    `Raw framer-motion usage is only permitted inside /components/motion/.`
  )
}

/* Warn if a component exports no .dms Figma annotation.
   Call in dev-mode component factory / storybook only.  */
export function warnMissingAnnotation(componentName: string): void {
  if (!DEV) return
  console.warn(
    `${TAG} Component "${componentName}" is missing a .dms Figma annotation. ` +
    `Add: MyComponent.dms = dmsAnnotation("Figma/Path", "variant")`
  )
}
