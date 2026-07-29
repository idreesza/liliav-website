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
const LegacyRedirect = lazy(() => import('@/pages/LegacyRedirect'));

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
            <Route path="video/*" element={<LegacyRedirect />} />
          <Route path="tags/*" element={<LegacyRedirect />} />
          <Route path="user/*" element={<LegacyRedirect />} />
          <Route path="upload/*" element={<LegacyRedirect />} />
          <Route path="embed/*" element={<LegacyRedirect />} />
          <Route path="static/*" element={<LegacyRedirect />} />
          <Route path="feeds/*" element={<LegacyRedirect />} />
          <Route path=".well-known/*" element={<LegacyRedirect />} />
          <Route path="new-1.html" element={<LegacyRedirect />} />
          <Route path="new-2.html" element={<LegacyRedirect />} />
          <Route path="new-3.html" element={<LegacyRedirect />} />
          <Route path="new-4.html" element={<LegacyRedirect />} />
          <Route path="new-5.html" element={<LegacyRedirect />} />
          <Route path="new-6.html" element={<LegacyRedirect />} />
          <Route path="new-7.html" element={<LegacyRedirect />} />
          <Route path="new-8.html" element={<LegacyRedirect />} />
          <Route path="new-9.html" element={<LegacyRedirect />} />
          <Route path="new-10.html" element={<LegacyRedirect />} />
          <Route path="new-11.html" element={<LegacyRedirect />} />
          <Route path="new-12.html" element={<LegacyRedirect />} />
          <Route path="new-13.html" element={<LegacyRedirect />} />
          <Route path="new-14.html" element={<LegacyRedirect />} />
          <Route path="new-15.html" element={<LegacyRedirect />} />
          <Route path="new-16.html" element={<LegacyRedirect />} />
          <Route path="new-17.html" element={<LegacyRedirect />} />
          <Route path="new-18.html" element={<LegacyRedirect />} />
          <Route path="new-19.html" element={<LegacyRedirect />} />
          <Route path="new-20.html" element={<LegacyRedirect />} />
          <Route path="new-21.html" element={<LegacyRedirect />} />
          <Route path="new-22.html" element={<LegacyRedirect />} />
          <Route path="new-23.html" element={<LegacyRedirect />} />
          <Route path="new-24.html" element={<LegacyRedirect />} />
          <Route path="new-25.html" element={<LegacyRedirect />} />
          <Route path="new-26.html" element={<LegacyRedirect />} />
          <Route path="new-27.html" element={<LegacyRedirect />} />
          <Route path="new-28.html" element={<LegacyRedirect />} />
          <Route path="new-29.html" element={<LegacyRedirect />} />
          <Route path="new-30.html" element={<LegacyRedirect />} />
          <Route path="new-31.html" element={<LegacyRedirect />} />
          <Route path="new-32.html" element={<LegacyRedirect />} />
          <Route path="new-33.html" element={<LegacyRedirect />} />
          <Route path="new-34.html" element={<LegacyRedirect />} />
          <Route path="new-35.html" element={<LegacyRedirect />} />
          <Route path="new-36.html" element={<LegacyRedirect />} />
          <Route path="new-37.html" element={<LegacyRedirect />} />
          <Route path="new-38.html" element={<LegacyRedirect />} />
          <Route path="new-39.html" element={<LegacyRedirect />} />
          <Route path="new-40.html" element={<LegacyRedirect />} />
          <Route path="new-41.html" element={<LegacyRedirect />} />
          <Route path="new-42.html" element={<LegacyRedirect />} />
          <Route path="new-43.html" element={<LegacyRedirect />} />
          <Route path="new-44.html" element={<LegacyRedirect />} />
          <Route path="new-45.html" element={<LegacyRedirect />} />
          <Route path="new-46.html" element={<LegacyRedirect />} />
          <Route path="new-47.html" element={<LegacyRedirect />} />
          <Route path="new-48.html" element={<LegacyRedirect />} />
          <Route path="new-49.html" element={<LegacyRedirect />} />
          <Route path="new-50.html" element={<LegacyRedirect />} />
          <Route path="new-51.html" element={<LegacyRedirect />} />
          <Route path="new-52.html" element={<LegacyRedirect />} />
          <Route path="new-53.html" element={<LegacyRedirect />} />
          <Route path="new-54.html" element={<LegacyRedirect />} />
          <Route path="new-55.html" element={<LegacyRedirect />} />
          <Route path="new-56.html" element={<LegacyRedirect />} />
          <Route path="new-57.html" element={<LegacyRedirect />} />
          <Route path="new-58.html" element={<LegacyRedirect />} />
          <Route path="new-59.html" element={<LegacyRedirect />} />
          <Route path="new-60.html" element={<LegacyRedirect />} />
          <Route path="new-61.html" element={<LegacyRedirect />} />
          <Route path="new-62.html" element={<LegacyRedirect />} />
          <Route path="new-63.html" element={<LegacyRedirect />} />
          <Route path="new-64.html" element={<LegacyRedirect />} />
          <Route path="new-65.html" element={<LegacyRedirect />} />
          <Route path="new-66.html" element={<LegacyRedirect />} />
          <Route path="new-67.html" element={<LegacyRedirect />} />
          <Route path="new-68.html" element={<LegacyRedirect />} />
          <Route path="new-69.html" element={<LegacyRedirect />} />
          <Route path="new-70.html" element={<LegacyRedirect />} />
          <Route path="new-71.html" element={<LegacyRedirect />} />
          <Route path="new-72.html" element={<LegacyRedirect />} />
          <Route path="new-73.html" element={<LegacyRedirect />} />
          <Route path="new-74.html" element={<LegacyRedirect />} />
          <Route path="new-75.html" element={<LegacyRedirect />} />
          <Route path="new-76.html" element={<LegacyRedirect />} />
          <Route path="new-77.html" element={<LegacyRedirect />} />
          <Route path="new-78.html" element={<LegacyRedirect />} />
          <Route path="new-79.html" element={<LegacyRedirect />} />
          <Route path="new-80.html" element={<LegacyRedirect />} />
          <Route path="new-81.html" element={<LegacyRedirect />} />
          <Route path="new-82.html" element={<LegacyRedirect />} />
          <Route path="new-83.html" element={<LegacyRedirect />} />
          <Route path="new-84.html" element={<LegacyRedirect />} />
          <Route path="new-85.html" element={<LegacyRedirect />} />
          <Route path="new-86.html" element={<LegacyRedirect />} />
          <Route path="new-87.html" element={<LegacyRedirect />} />
          <Route path="new-88.html" element={<LegacyRedirect />} />
          <Route path="new-89.html" element={<LegacyRedirect />} />
          <Route path="new-90.html" element={<LegacyRedirect />} />
          <Route path="new-91.html" element={<LegacyRedirect />} />
          <Route path="new-92.html" element={<LegacyRedirect />} />
          <Route path="new-93.html" element={<LegacyRedirect />} />
          <Route path="new-94.html" element={<LegacyRedirect />} />
          <Route path="new-95.html" element={<LegacyRedirect />} />
          <Route path="new-96.html" element={<LegacyRedirect />} />
          <Route path="new-97.html" element={<LegacyRedirect />} />
          <Route path="new-98.html" element={<LegacyRedirect />} />
          <Route path="new-99.html" element={<LegacyRedirect />} />
          <Route path="new-100.html" element={<LegacyRedirect />} />
          <Route path="new-101.html" element={<LegacyRedirect />} />
          <Route path="new-102.html" element={<LegacyRedirect />} />
          <Route path="new-103.html" element={<LegacyRedirect />} />
          <Route path="new-104.html" element={<LegacyRedirect />} />
          <Route path="new-105.html" element={<LegacyRedirect />} />
          <Route path="hot.html" element={<LegacyRedirect />} />
          <Route path="like.html" element={<LegacyRedirect />} />
          <Route path="new.html" element={<LegacyRedirect />} />
          <Route path="tags.html" element={<LegacyRedirect />} />
          <Route path="feed" element={<LegacyRedirect />} />
          <Route path="feed.xml" element={<LegacyRedirect />} />
          <Route path="atom.xml" element={<LegacyRedirect />} />
          <Route path="index.xml" element={<LegacyRedirect />} />
          <Route path="ads.txt" element={<LegacyRedirect />} />
          <Route path="app-ads.txt" element={<LegacyRedirect />} />
          <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </LanguageProvider>
  );
}
