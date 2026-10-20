import { Resend } from 'resend'

/* ── Singleton Resend instance (server-side only) ──────────── */
let _resend: Resend | null = null

export function getResend(): Resend {
  if (_resend) return _resend

  const key = process.env.RESEND_API_KEY
  if (!key) {
    throw new Error(
      'Missing RESEND_API_KEY. Set it in .env.local'
    )
  }

  _resend = new Resend(key)
  return _resend
}

/* ── Welcome email HTML template ───────────────────────────── */
export function welcomeEmailHtml(email: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Welcome to Ahmed Djobs Insights</title>
</head>
<body style="margin:0;padding:0;background:#080810;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#080810;min-height:100vh;">
    <tr>
      <td align="center" style="padding:48px 24px;">
        <table width="560" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;width:100%;">

          <!-- Logo / Brand -->
          <tr>
            <td style="padding-bottom:36px;">
              <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding-right:12px;">
                    <!-- 4-node mark (inline SVG fallback as colored squares) -->
                    <table cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="padding:2px;">
                          <div style="width:10px;height:10px;border:1.5px solid #EE9427;border-radius:3px;"></div>
                        </td>
                        <td style="padding:2px;">
                          <div style="width:10px;height:10px;border:1.5px solid #4D9FDC;border-radius:3px;"></div>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:2px;">
                          <div style="width:10px;height:10px;border:1.5px solid #4D9FDC;border-radius:3px;"></div>
                        </td>
                        <td style="padding:2px;">
                          <div style="width:10px;height:10px;border:1.5px solid #EE9427;border-radius:3px;"></div>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td>
                    <span style="font-size:17px;font-weight:700;color:#f0f0fa;letter-spacing:-0.02em;">Ahmed Djobs</span><br/>
                    <span style="font-size:11px;color:#5a5a7a;font-family:monospace;">djobs.net</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background:#0e0e1c;border:1px solid rgba(255,255,255,0.07);border-radius:16px;padding:40px 40px 36px;">

              <!-- Accent bar -->
              <div style="width:40px;height:3px;background:linear-gradient(90deg,#EE9427,#4D9FDC);border-radius:2px;margin-bottom:28px;"></div>

              <h1 style="margin:0 0 12px;font-size:24px;font-weight:700;color:#f0f0fa;letter-spacing:-0.02em;line-height:1.2;">
                You're in.
              </h1>
              <p style="margin:0 0 20px;font-size:15px;color:#9898b8;line-height:1.65;">
                Thanks for subscribing. You'll receive occasional updates on cybersecurity,
                blockchain strategy, project delivery, and digital transformation. No noise,
                no spam. Just the thinking worth reading.
              </p>
              <p style="margin:0 0 32px;font-size:15px;color:#9898b8;line-height:1.65;">
                In the meantime, explore the latest insights on the site.
              </p>

              <!-- CTA button -->
              <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="background:#EE9427;border-radius:10px;">
                    <a href="https://djobs.net/insights"
                       style="display:inline-block;padding:12px 24px;font-size:14px;font-weight:600;color:#06060f;text-decoration:none;letter-spacing:0.01em;">
                      Read Latest Insights →
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding-top:28px;text-align:center;">
              <p style="margin:0;font-size:11px;color:#6e6e8e;font-family:monospace;line-height:1.8;">
                You subscribed with <span style="color:#5a5a7a;">${email}</span><br/>
                <a href="https://djobs.net/unsubscribe?email=${encodeURIComponent(email)}"
                   style="color:#5a5a7a;text-decoration:underline;">Unsubscribe</a>
                &nbsp;·&nbsp;
                <a href="https://djobs.net" style="color:#5a5a7a;text-decoration:underline;">djobs.net</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim()
}

/* ── Plain-text fallback ────────────────────────────────────── */
export function welcomeEmailText(email: string): string {
  return `
You're subscribed to Ahmed Djobs Insights.

Thanks for subscribing. You'll receive occasional updates on cybersecurity,
blockchain strategy, project delivery, and digital transformation. No spam.
Just the thinking worth reading.

Read the latest: https://djobs.net/insights

---
Subscribed as: ${email}
Unsubscribe: https://djobs.net/unsubscribe?email=${encodeURIComponent(email)}
djobs.net
  `.trim()
}
