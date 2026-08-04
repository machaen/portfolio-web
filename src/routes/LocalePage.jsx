import { Navigate, useParams } from 'react-router-dom';
import { LocaleProvider, SUPPORTED_LOCALES } from '../i18n/LocaleContext';
import Site from '../Site';

export default function LocalePage() {
  const { lang } = useParams();

  if (!SUPPORTED_LOCALES.includes(lang)) {
    return <Navigate to="/" replace />;
  }

  return (
    <LocaleProvider locale={lang}>
      <Site />
    </LocaleProvider>
  );
}
