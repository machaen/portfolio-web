import { useEffect, useState } from 'react';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { sendContactMessage } from '../../lib/api';
import { getRecaptchaToken } from '../../lib/recaptcha';
import { useLocale } from '../../i18n/LocaleContext';
import { useRequestModal } from '../../context/RequestModalContext';
import { services } from '../../data/services';

const EMPTY = {
  name: '',
  email: '',
  phone: '',
  company: '',
  projectType: '',
  budget: '',
  timeline: '',
  message: '',
  website: '', // honeypot — named "website" since "company" is now a real field
};

export default function ProjectRequestForm() {
  const { locale, t } = useLocale();
  const { tierId, closeModal } = useRequestModal();
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState('idle'); // idle | sending | ok | error
  const [error, setError] = useState('');

  const tierNames = services[locale].map((s) => s.name);

  // Pre-select the bundle when arriving via a Services CTA; blank for the
  // generic Contact section CTA (tierId === null).
  useEffect(() => {
    const preselected = services[locale].find((s) => s.id === tierId)?.name ?? '';
    setForm((f) => ({ ...f, projectType: preselected }));
  }, [tierId, locale]);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setError('');
    try {
      const recaptchaToken = await getRecaptchaToken('contact_submit');
      await sendContactMessage({ ...form, recaptchaToken, locale });
      setStatus('ok');
      setForm(EMPTY);
    } catch (err) {
      setStatus('error');
      setError(err.message || t('form.genericError'));
    }
  };

  if (status === 'ok') {
    return (
      <div className="flex flex-col items-center gap-2 py-8 text-center">
        <CheckCircle2 size={28} className="text-amber" />
        <p className="font-mono text-[13px] text-ink">{t('form.success')}</p>
        <button type="button" onClick={closeModal} className="btn btn-ghost mt-3">
          {t('modal.close')}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="flex flex-col gap-3.5">
      <h3 id="request-modal-title" className="mb-1 font-display text-[1.3rem] font-semibold tracking-tight">
        {t('modal.title')}
      </h3>

      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
        <div>
          <label htmlFor="rf-name" className="field-label">{t('form.nameLabel')}</label>
          <input id="rf-name" value={form.name} onChange={update('name')} required className="field-input" />
        </div>
        <div>
          <label htmlFor="rf-email" className="field-label">{t('form.emailLabel')}</label>
          <input
            id="rf-email"
            type="email"
            value={form.email}
            onChange={update('email')}
            required
            className="field-input"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
        <div>
          <label htmlFor="rf-phone" className="field-label">{t('form.phoneLabel')}</label>
          <input id="rf-phone" type="tel" value={form.phone} onChange={update('phone')} className="field-input" />
        </div>
        <div>
          <label htmlFor="rf-company" className="field-label">{t('form.companyLabel')}</label>
          <input id="rf-company" value={form.company} onChange={update('company')} className="field-input" />
        </div>
      </div>

      <div>
        <label htmlFor="rf-project-type" className="field-label">{t('form.projectTypeLabel')}</label>
        <select id="rf-project-type" value={form.projectType} onChange={update('projectType')} className="field-input">
          <option value="">{t('form.selectPlaceholder')}</option>
          {tierNames.map((name) => (
            <option key={name} value={name}>{name}</option>
          ))}
          <option value={t('form.projectTypeNotSure')}>{t('form.projectTypeNotSure')}</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
        <div>
          <label htmlFor="rf-budget" className="field-label">{t('form.budgetLabel')}</label>
          <select id="rf-budget" value={form.budget} onChange={update('budget')} className="field-input">
            <option value="">{t('form.selectPlaceholder')}</option>
            {t('form.budgetOptions').map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="rf-timeline" className="field-label">{t('form.timelineLabel')}</label>
          <select id="rf-timeline" value={form.timeline} onChange={update('timeline')} className="field-input">
            <option value="">{t('form.selectPlaceholder')}</option>
            {t('form.timelineOptions').map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="rf-message" className="field-label">{t('form.messageLabel')}</label>
        <textarea
          id="rf-message"
          value={form.message}
          onChange={update('message')}
          required
          className="field-input min-h-[100px] resize-y leading-[1.55]"
        />
      </div>

      {/* Honeypot — hidden from humans, tempting to bots. */}
      <div className="hp" aria-hidden="true">
        <label htmlFor="rf-website">Website</label>
        <input
          id="rf-website"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={update('website')}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn btn-primary mt-1 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'sending' ? (
          <>
            <Loader2 size={15} className="animate-spin" /> {t('form.sending')}
          </>
        ) : (
          <>
            <Send size={15} /> {t('form.send')}
          </>
        )}
      </button>

      {status === 'error' && (
        <div className="mt-0.5 flex items-center gap-2 font-mono text-[13px] text-ink-dim">
          <AlertCircle size={15} /> {error}
        </div>
      )}

      <p className="mt-1 text-[11px] leading-snug text-ink-faint">
        {t('form.recaptchaPrefix')}{' '}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="underline hover:text-ink-dim">
          {t('form.recaptchaPrivacy')}
        </a>{' '}
        {t('form.recaptchaMiddle')}{' '}
        <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer" className="underline hover:text-ink-dim">
          {t('form.recaptchaTerms')}
        </a>{' '}
        {t('form.recaptchaSuffix')}
      </p>
    </form>
  );
}
