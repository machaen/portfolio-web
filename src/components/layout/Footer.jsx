import { useLocale } from '../../i18n/LocaleContext';
import { profile } from '../../data/profile';

export default function Footer() {
  const { locale, t } = useLocale();

  return (
    <footer className="pb-16 font-mono text-[11.5px] text-ink-faint">
      © {new Date().getFullYear()} {profile.name} · {profile.title[locale]} · {t('footer.builtWith')}
    </footer>
  );
}
