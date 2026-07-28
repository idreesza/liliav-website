import { Routes, Route } from 'react-router';
import { LanguageProvider } from '@/i18n';
import { Layout } from '@/components/layout';
import Home from '@/pages/Home';
import Procedures from '@/pages/Procedures';
import ProcedureDetail from '@/pages/ProcedureDetail';
import { DestinationsHub, DestinationDetail } from '@/pages/Destinations';
import Surgeons from '@/pages/Surgeons';
import Journey from '@/pages/Journey';
import Results from '@/pages/Results';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import { Journal, Article } from '@/pages/Journal';
import Legal from '@/pages/Legal';
import NotFound from '@/pages/NotFound';

export default function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="procedures" element={<Procedures />} />
          <Route path="procedures/:slug" element={<ProcedureDetail />} />
          <Route path="destinations" element={<DestinationsHub />} />
          <Route path="destinations/:slug" element={<DestinationDetail />} />
          <Route path="surgeons" element={<Surgeons />} />
          <Route path="journey" element={<Journey />} />
          <Route path="results" element={<Results />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="journal" element={<Journal />} />
          <Route path="journal/:slug" element={<Article />} />
          <Route path="legal/:doc" element={<Legal />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </LanguageProvider>
  );
}
