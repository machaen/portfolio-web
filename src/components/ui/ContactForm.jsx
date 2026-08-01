import { useState } from 'react';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { sendContactMessage } from '../../lib/api';
import { getRecaptchaToken } from '../../lib/recaptcha';

const EMPTY = { name: '', email: '', message: '', company: '' };

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState('idle'); // idle | sending | ok | error
  const [error, setError] = useState('');

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setError('');
    try {
      const recaptchaToken = await getRecaptchaToken('contact_submit');
      await sendContactMessage({ ...form, recaptchaToken });
      setStatus('ok');
      setForm(EMPTY);
    } catch (err) {
      setStatus('error');
      setError(err.message || "Couldn't reach the server. Please email me directly.");
    }
  };

  return (
    <form onSubmit={submit} noValidate className="flex flex-col gap-3.5">
      <div>
        <label htmlFor="cf-name" className="field-label">Name</label>
        <input id="cf-name" value={form.name} onChange={update('name')} required className="field-input" />
      </div>

      <div>
        <label htmlFor="cf-email" className="field-label">Email</label>
        <input
          id="cf-email"
          type="email"
          value={form.email}
          onChange={update('email')}
          required
          className="field-input"
        />
      </div>

      <div>
        <label htmlFor="cf-message" className="field-label">Message</label>
        <textarea
          id="cf-message"
          value={form.message}
          onChange={update('message')}
          required
          className="field-input min-h-[120px] resize-y leading-[1.55]"
        />
      </div>

      {/* Honeypot — hidden from humans, tempting to bots. */}
      <div className="hp" aria-hidden="true">
        <label htmlFor="cf-company">Company</label>
        <input
          id="cf-company"
          tabIndex={-1}
          autoComplete="off"
          value={form.company}
          onChange={update('company')}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn btn-primary mt-1 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'sending' ? (
          <>
            <Loader2 size={15} className="animate-spin" /> Sending…
          </>
        ) : (
          <>
            <Send size={15} /> Send message
          </>
        )}
      </button>

      {status === 'ok' && (
        <div className="mt-0.5 flex items-center gap-2 font-mono text-[13px] text-teal">
          <CheckCircle2 size={15} /> Thanks — your message is on its way.
        </div>
      )}
      {status === 'error' && (
        <div className="mt-0.5 flex items-center gap-2 font-mono text-[13px] text-ink-dim">
          <AlertCircle size={15} /> {error}
        </div>
      )}

      <p className="mt-1 text-[11px] leading-snug text-ink-faint">
        This site is protected by reCAPTCHA and the Google{' '}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="underline hover:text-ink-dim">
          Privacy Policy
        </a>{' '}
        and{' '}
        <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer" className="underline hover:text-ink-dim">
          Terms of Service
        </a>{' '}
        apply.
      </p>
    </form>
  );
}
