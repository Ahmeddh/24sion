import QRCode from 'qrcode'
import { SITE } from '@/lib/constants'

const vCard = [
  'BEGIN:VCARD',
  'VERSION:3.0',
  'FN:Ahmed Djobs',
  'N:Djobs;Ahmed;;;',
  `EMAIL:${SITE.email}`,
  `URL;type=LinkedIn:${SITE.linkedin}`,
  `URL;type=GitHub:${SITE.github}`,
  `URL;type=X:${SITE.twitter}`,
  'END:VCARD',
].join('\n')

export async function ContactQR({ size = 120 }: { size?: number }) {
  const svgString = await QRCode.toString(vCard, {
    type: 'svg',
    margin: 1,
    color: { dark: '#00c6ff', light: '#0a0a18' },
    errorCorrectionLevel: 'M',
  })

  return (
    <div
      title="Scan to save contact"
      style={{ width: size, height: size, flexShrink: 0 }}
      dangerouslySetInnerHTML={{ __html: svgString }}
    />
  )
}
