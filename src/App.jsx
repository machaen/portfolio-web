import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootRedirect from './routes/RootRedirect';
import LocalePage from './routes/LocalePage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootRedirect />} />
        <Route path="/:lang" element={<LocalePage />} />
        <Route path="*" element={<RootRedirect />} />
      </Routes>
    </BrowserRouter>
  );
}
