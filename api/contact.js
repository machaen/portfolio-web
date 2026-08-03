import nodemailer from 'nodemailer';

const RECAPTCHA_VERIFY_URL = 'https://www.google.com/recaptcha/api/siteverify';
const RECAPTCHA_ACTION = 'contact_submit';
const DEFAULT_MIN_SCORE = 0.5;

// User-facing messages only — the email sent to CONTACT_TO stays in English
// regardless of visitor locale, since that's for the site owner, not them.
const MESSAGES = {
  en: {
    success: 'Thanks — your message is on its way.',
    invalidName: 'Please enter a valid name.',
    invalidEmail: 'Please enter a valid email.',
    invalidMessage: 'Message must be between 10 and 3000 characters.',
    recaptchaFailed: 'reCAPTCHA verification failed.',
    sendFailed: 'Could not send your message right now. Please try again later.',
  },
  es: {
    success: 'Gracias — tu mensaje va en camino.',
    invalidName: 'Por favor ingresa un nombre válido.',
    invalidEmail: 'Por favor ingresa un correo electrónico válido.',
    invalidMessage: 'El mensaje debe tener entre 10 y 3000 caracteres.',
    recaptchaFailed: 'La verificación de reCAPTCHA falló.',
    sendFailed: 'No se pudo enviar tu mensaje en este momento. Por favor intenta de nuevo más tarde.',
  },
};

const messagesFor = (locale) => MESSAGES[locale] ?? MESSAGES.en;

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const escapeHtml = (s) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/**
 * Verifies a v3 token against Google's siteverify endpoint. No-ops if
 * RECAPTCHA_SECRET_KEY isn't set, so local dev works without one — matches
 * the frontend, which skips issuing a token when it has no site key.
 */
async function verifyRecaptcha(token, msg) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) return;

  if (!token) {
    throw Object.assign(new Error(msg.recaptchaFailed), { status: 400 });
  }

  const minScore = Number(process.env.RECAPTCHA_MIN_SCORE ?? DEFAULT_MIN_SCORE);

  const res = await fetch(RECAPTCHA_VERIFY_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ secret, response: token }),
  });
  const data = await res.json();

  if (!data.success || data.action !== RECAPTCHA_ACTION || (data.score ?? 0) < minScore) {
    throw Object.assign(new Error(msg.recaptchaFailed), { status: 400 });
  }
}

let transporter;
function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });
  }
  return transporter;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ message: 'Method not allowed.' });
  }

  const { name, email, message, company, recaptchaToken, locale } = req.body ?? {};
  const msg = messagesFor(locale);

  // Honeypot — pretend success, send nothing. Checked before reCAPTCHA so
  // obvious bots don't cost a siteverify call.
  if (company && String(company).trim().length > 0) {
    return res.status(200).json({ ok: true, message: msg.success });
  }

  if (typeof name !== 'string' || name.trim().length < 2 || name.trim().length > 100) {
    return res.status(400).json({ message: msg.invalidName });
  }
  if (typeof email !== 'string' || email.length > 254 || !isValidEmail(email)) {
    return res.status(400).json({ message: msg.invalidEmail });
  }
  if (typeof message !== 'string' || message.trim().length < 10 || message.trim().length > 3000) {
    return res.status(400).json({ message: msg.invalidMessage });
  }

  try {
    await verifyRecaptcha(recaptchaToken, msg);
  } catch (err) {
    return res.status(err.status ?? 400).json({ message: err.message });
  }

  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();

  try {
    await getTransporter().sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.CONTACT_TO,
      replyTo: `${trimmedName} <${trimmedEmail}>`,
      subject: `Portfolio contact — ${trimmedName}`,
      text: `New portfolio contact\n\nName: ${trimmedName}\nEmail: ${trimmedEmail}\n\n${trimmedMessage}`,
      html: `
        <div style="font-family:system-ui,sans-serif;line-height:1.6;color:#111">
          <h2 style="margin:0 0 12px">New portfolio contact</h2>
          <p><strong>Name:</strong> ${escapeHtml(trimmedName)}<br/>
             <strong>Email:</strong> <a href="mailto:${escapeHtml(trimmedEmail)}">${escapeHtml(trimmedEmail)}</a></p>
          <p style="white-space:pre-wrap;border-left:3px solid #3E3228;padding-left:12px">${escapeHtml(trimmedMessage)}</p>
        </div>`,
    });
  } catch (err) {
    console.error('Failed to send mail:', err?.message ?? err);
    return res.status(500).json({ message: msg.sendFailed });
  }

  return res.status(200).json({ ok: true, message: msg.success });
}
