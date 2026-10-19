/* ═══════════════════════════════════════════════════════════════
   DMS-1 — Motion Design System Token Engine
   Single source of truth. Components MUST import from here.
   Raw values (hardcoded ms, raw cubic-bezier strings) are FORBIDDEN
   in UI components — use these tokens exclusively.
═══════════════════════════════════════════════════════════════ */

/* ── Variant + State enums ────────────────────────────────────── */

export type MotionVariant =
  | 'text'          /* headings, body copy reveal               */
  | 'card'          /* project/service/article cards            */
  | 'button'        /* CTAs, tab controls                       */
  | 'diagram-node'  /* architecture diagram layer groups        */
  | 'diagram-edge'  /* connector lines between nodes            */
  | 'tab'           /* tab bar indicators                       */
  | 'section'       /* section-level containers, diagram shell  */

export type MotionState =
  | 'idle'          /* baseline — element is visible, no focus  */
  | 'hover'         /* cursor over element (desktop only)       */
  | 'active'        /* press / tap feedback                     */
  | 'focus'         /* primary interactive focus                */

/* ── Tokens ───────────────────────────────────────────────────── */

export const dm = {
  /* Duration (ms) — convert to seconds for Framer Motion */
  duration: {
    fast:   120,   /* micro: hover, tap, focus ring            */
    base:   180,   /* standard UI: buttons, tabs               */
    medium: 260,   /* layout: card reveals, expansions         */
    slow:   360,   /* section transitions, diagram focus       */
  },

  /* Easing — array format accepted by Framer Motion + CSS */
  easing: {
    outSoft: [0.16, 1, 0.3, 1]     as [number, number, number, number],
    inSoft:  [0.4,  0, 1,   1]     as [number, number, number, number],
    inOut:   [0.4,  0, 0.2, 1]     as [number, number, number, number],
    /* spring: Framer Motion object — use for focus/diagram interactions */
    spring:  { type: 'spring', stiffness: 260, damping: 26 } as const,
    /* springCss: CSS string approximation for DOM-manipulated SVG nodes */
    springCss: 'cubic-bezier(0.34, 1.08, 0.64, 1)',
  },

  /* Scale — only ONE scale level active per element at any time */
  scale: {
    hover:  1.02,   /* subtle emphasis                         */
    focus:  1.06,   /* primary interaction focus               */
    active: 0.98,   /* press feedback                          */
  },

  /* Opacity — used for hierarchy / dim system */
  opacity: {
    dim:   0.4,     /* de-emphasized (non-focused siblings)    */
    muted: 0.6,     /* secondary content                       */
    full:  1,       /* full visibility                         */
  },

  /* Elevation (box-shadow) */
  elevation: {
    rest:  'none',
    hover: '0 4px 20px rgba(0,0,0,0.40)',
    focus: '0 8px 36px rgba(0,0,0,0.55)',
  },
} as const

/* ── Figma sync annotation ────────────────────────────────────── */

export interface DMSAnnotation {
  figmaComponent: string    /* e.g. "Projects / Diagram / NodeCard" */
  variant:        MotionVariant
}

/* Helper: attach as static `.dms` on any component
   export const MyCard = (…) => <…/>
   MyCard.dms = dmsAnnotation('Projects / Card', 'card')         */
export function dmsAnnotation(figmaComponent: string, variant: MotionVariant): DMSAnnotation {
  return { figmaComponent, variant }
}
