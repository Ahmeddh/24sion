'use client'

type Props = {
  label: string
}

export function PrivacySettingsButton({ label }: Props) {
  return (
    <button
      onClick={() => window.dispatchEvent(new CustomEvent('djobs:open-consent'))}
      className="text-xs text-[#5a5a7a] hover:text-[#9898b8] transition-colors font-mono"
    >
      {label}
    </button>
  )
}
