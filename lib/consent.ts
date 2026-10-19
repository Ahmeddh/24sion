export const CONSENT_KEY = 'djobs_consent_v1'
export const CONSENT_VERSION = '1.0'

export type ConsentCategories = {
  essential: true
  analytics: boolean
  functional: boolean
  marketing: boolean
}

export type ConsentRecord = {
  version: string
  timestamp: string
  categories: ConsentCategories
}

export function getStoredConsent(): ConsentRecord | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(CONSENT_KEY)
    if (!raw) return null
    return JSON.parse(raw) as ConsentRecord
  } catch {
    return null
  }
}

export function setStoredConsent(
  categories: Omit<ConsentCategories, 'essential'>
): ConsentRecord {
  const record: ConsentRecord = {
    version: CONSENT_VERSION,
    timestamp: new Date().toISOString(),
    categories: { essential: true, ...categories },
  }
  localStorage.setItem(CONSENT_KEY, JSON.stringify(record))
  return record
}

export function clearConsent(): void {
  if (typeof window === 'undefined') return
  localStorage.removeItem(CONSENT_KEY)
}
