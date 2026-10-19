'use client'
import { useState, useCallback } from 'react'

/* Single-focus state manager.
   Enforces hierarchy rule: only one element is "active focus" at a time.
   All other elements are implicitly dimmed when focus !== null.          */

export function useFocusState<T extends string | number>() {
  const [focused, setFocused] = useState<T | null>(null)

  const focus  = useCallback((id: T)  => setFocused(id),   [])
  const blur   = useCallback(()       => setFocused(null),  [])
  const toggle = useCallback((id: T)  => setFocused(prev => prev === id ? null : id), [])

  const isFocused   = useCallback((id: T) => focused === id,              [focused])
  const isDimmed    = useCallback((id: T) => focused !== null && focused !== id, [focused])
  const hasAnyFocus = focused !== null

  return { focused, focus, blur, toggle, isFocused, isDimmed, hasAnyFocus }
}
