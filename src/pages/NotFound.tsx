import { Link } from 'react-router';
import { useSEO } from '@/hooks/useSEO';

export default function NotFound() {
  useSEO('Page Not Found | Liliav');
  return (
    <section className="flex min-h-[70vh] items-center bg-ink pt-24">
      <div className="container-lux text-center">
        <p className="eyebrow">404</p>
        <h1 className="h-serif mt-4 text-4xl text-sand md:text-6xl">This page has <em className="font-serif italic text-gold">traveled elsewhere.</em></h1>
        <p className="mx-auto mt-6 max-w-md text-sand/60">The page you are looking for does not exist — but your journey can still begin.</p>
        <Link to="/" className="btn-gold mt-10">Return Home</Link>
      </div>
    </section>
  );
}
