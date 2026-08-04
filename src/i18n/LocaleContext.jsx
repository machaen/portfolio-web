import { createContext, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { strings } from './strings';
import { updateSeoTags } from './seo';

const LocaleContext = createContext(null);
const STORAGE_KEY = 'locale';
export const SUPPORTED_LOCALES = ['en', 'es'];
export const DEFAULT_LOCALE = 'en';

/** Used by RootRedirect to send "/" to the visitor's saved or browser-detected language. */
export function detectPreferredLocale() {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (SUPPORTED_LOCALES.includes(stored)) return stored;

  const browser = window.navigator.language?.slice(0, 2);
  return SUPPORTED_LOCALES.includes(browser) ? browser : DEFAULT_LOCALE;
}

// locale comes from the URL (see routes/LocalePage.jsx), not internal state —
// so /en and /es are real, bookmarkable, crawlable pages.
export function LocaleProvider({ locale, children }) {
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem(STORAGE_KEY, locale);
    updateSeoTags(locale, SUPPORTED_LOCALES);
  }, [locale]);

  const setLocale = (next) => {
    if (SUPPORTED_LOCALES.includes(next) && next !== locale) navigate(`/${next}`);
  };

  const t = (path) => {
    const dict = strings[locale] ?? strings.en;
    return path.split('.').reduce((node, key) => node?.[key], dict) ?? path;
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, supported: SUPPORTED_LOCALES, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used within a LocaleProvider');
  return ctx;
}
