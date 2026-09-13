import nodemailer from "nodemailer";

// ─── Email: optional SMTP for admin password recovery ───────────────────
// Enable by setting these env vars (any SMTP provider works — Gmail with an
// App Password, Zoho, cPanel mail, etc.):
//   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM
// While unset, reset requests fall back to showing a one-time link on
// screen — enough to recover access without any mail server configured.

export function smtpConfigured(): boolean {
  return !!(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
}

function transporter() {
  const port = Number(process.env.SMTP_PORT || 587);
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: {
      user: process.env.SMTP_USER as string,
      pass: process.env.SMTP_PASS as string,
    },
  });
}

export async function sendResetEmail(to: string, resetUrl: string, expiresMin: number) {
  if (!smtpConfigured()) throw new Error("SMTP is not configured");
  const from = process.env.SMTP_FROM || `JPBA Admin <${process.env.SMTP_USER}>`;

  const html = `
  <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;background:#FDF8EF;border:1px solid #E2D9C8;border-radius:12px;overflow:hidden">
    <div style="background:#0A2F1D;padding:24px 32px">
      <p style="margin:0;color:#C9A84C;font-size:12px;font-weight:bold;letter-spacing:2px;text-transform:uppercase">JPBA Admin Panel</p>
      <h1 style="margin:6px 0 0;color:#FFFFFF;font-size:20px">Password reset requested</h1>
    </div>
    <div style="padding:28px 32px">
      <p style="margin:0 0 14px;color:#1A1A1A;font-size:14px;line-height:1.6">
        We received a request to reset the admin password for the Jharkhand Para Boccia Association website.
        Click the button below to choose a new password.
      </p>
      <p style="text-align:center;margin:24px 0">
        <a href="${resetUrl}" style="background:#C9A84C;color:#0A2F1D;font-weight:bold;font-size:14px;padding:14px 28px;border-radius:8px;text-decoration:none;display:inline-block">
          Reset my password
        </a>
      </p>
      <p style="margin:0 0 8px;color:#5C5C5C;font-size:12px;line-height:1.6">
        Or paste this link into your browser:<br/>
        <a href="${resetUrl}" style="color:#1B4E33;word-break:break-all">${resetUrl}</a>
      </p>
      <p style="margin:18px 0 0;color:#8A8A8A;font-size:12px;line-height:1.6">
        This link is valid for ${expiresMin} minutes and can be used only once.
        If you didn't request this, you can safely ignore this email — your password stays unchanged.
      </p>
    </div>
    <div style="background:#F4EDDD;padding:16px 32px;border-top:1px solid #E2D9C8">
      <p style="margin:0;color:#8A8A8A;font-size:11px">Jharkhand Para Boccia Association · Automated message — do not reply</p>
    </div>
  </div>`;

  await transporter().sendMail({
    from,
    to,
    subject: "Reset your JPBA admin password",
    html,
  });
}
