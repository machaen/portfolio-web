import { Link } from 'react-router-dom';
import { useLocale } from '../../i18n/LocaleContext';

const LABELS = { en: 'EN', es: 'ES' };

export default function LanguageSwitch() {
  const { locale, supported } = useLocale();

  return (
    <div className="flex items-center gap-1.5 font-mono text-xs text-ink-dim">
      {supported.map((code, i) => (
        <span key={code} className="flex items-center gap-1.5">
          {i > 0 && <span className="text-ink-faint">/</span>}
          <Link
            to={`/${code}`}
            aria-current={locale === code}
            aria-label={`Switch to ${LABELS[code]}`}
            className={'transition-colors ' + (locale === code ? 'text-amber' : 'hover:text-amber')}
          >
            {LABELS[code]}
          </Link>
        </span>
      ))}
    </div>
  );
}
