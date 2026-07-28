import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router';
import { LanguageProvider } from '@/i18n';
import { Layout } from '@/components/layout';
import Home from '@/pages/Home';

const Procedures = lazy(() => import('@/pages/Procedures'));
const ProcedureDetail = lazy(() => import('@/pages/ProcedureDetail'));
const DestinationsHub = lazy(() => import('@/pages/Destinations').then((m) => ({ default: m.DestinationsHub })));
const DestinationDetail = lazy(() => import('@/pages/Destinations').then((m) => ({ default: m.DestinationDetail })));
const Surgeons = lazy(() => import('@/pages/Surgeons'));
const Journey = lazy(() => import('@/pages/Journey'));
const Results = lazy(() => import('@/pages/Results'));
const About = lazy(() => import('@/pages/About'));
const Contact = lazy(() => import('@/pages/Contact'));
const Journal = lazy(() => import('@/pages/Journal').then((m) => ({ default: m.Journal })));
const Article = lazy(() => import('@/pages/Journal').then((m) => ({ default: m.Article })));
const Legal = lazy(() => import('@/pages/Legal'));
const NotFound = lazy(() => import('@/pages/NotFound'));

export default function App() {
  return (
    <LanguageProvider>
      <Suspense fallback={<div className="min-h-screen bg-ink" />}>
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
      </Suspense>
    </LanguageProvider>
  );
}
