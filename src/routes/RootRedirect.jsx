import { Navigate } from 'react-router-dom';
import { detectPreferredLocale } from '../i18n/LocaleContext';

export default function RootRedirect() {
  return <Navigate to={`/${detectPreferredLocale()}`} replace />;
}
