import { createContext, useContext, useEffect, useState } from 'react';
import { strings } from './strings';

const LocaleContext = createContext(null);
const STORAGE_KEY = 'locale';
export const SUPPORTED_LOCALES = ['en', 'es'];

function detectInitialLocale() {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (SUPPORTED_LOCALES.includes(stored)) return stored;

  const browser = window.navigator.language?.slice(0, 2);
  return SUPPORTED_LOCALES.includes(browser) ? browser : 'en';
}

export function LocaleProvider({ children }) {
  const [locale, setLocaleState] = useState(detectInitialLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  const setLocale = (next) => {
    if (SUPPORTED_LOCALES.includes(next)) setLocaleState(next);
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
