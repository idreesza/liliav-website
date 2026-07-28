import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { useSEO, useRevealObserver } from '@/hooks/useSEO';
import { PageHero, SectionHead } from '@/components/common';
import { useLang } from '@/i18n';

const REFLECTIONS = [
  { area: 'Profile & Balance', text: 'Rhinoplasty and facial contouring, rendered as shifting lines — the quiet realignment of a profile with its owner.' },
  { area: 'Rested & Open', text: 'Eyelid, brow, and facelift work — not a different face, but the same one after a year of good sleep.' },
  { area: 'Proportion & Ease', text: 'Breast and body procedures — comfort restored, clothing fitting as it should, movement unconsidered again.' },
  { area: 'Frame & Density', text: 'Hair restoration — the slow, patient return of the frame of the face, follicle by follicle.' },
];

const QUOTES = [
  { text: 'I did not want to look different. I wanted to look like myself, earlier. That is exactly what I see now.', who: 'A., 52 — facelift, New York' },
  { text: 'Nine months on, I catch my reflection and simply feel… aligned. There is no better word for it.', who: 'L., 29 — rhinoplasty, Istanbul' },
  { text: 'The change is quiet enough that friends assume I have been on holiday. Perhaps that is the highest compliment surgery can receive.', who: 'N., 44 — blepharoplasty, Beirut' },
];

export default function Results() {
  const { t } = useLang();
  useSEO('Results — Transformation, Tastefully Told | Liliav',
    'An understated look at aesthetic transformation: artistic silhouette studies and patient reflections from the Liliav network across the USA, Turkey, and Lebanon.');
  useRevealObserver();
  return (
    <>
      <PageHero
        eyebrow="Results"
        title={<>Transformation, <em className="font-serif italic text-gold">tastefully told.</em></>}
        intro="We do not publish before-and-after photography. Instead, transformation here is rendered as art — silhouette studies and the words of patients — because dignity outlasts curiosity."
      />

      <section className="bg-ink py-20 md:py-28">
        <div className="container-lux">
          <div className="reveal relative overflow-hidden">
            <img src="/images/silhouette.jpg" alt="Abstract silhouette study of transformation" className="w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/30" />
            <p className="absolute bottom-6 left-6 right-6 max-w-lg font-serif italic text-lg text-sand/85 md:text-xl">
              “Every line in its right place.” — a study of transformation, in gold on charcoal.
            </p>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-3">
            {[
              { img: '/images/portrait-1.jpg', label: 'Beirut · 40s' },
              { img: '/images/portrait-2.jpg', label: 'Istanbul · 30s' },
              { img: '/images/portrait-3.jpg', label: 'Los Angeles · 20s' },
            ].map((p) => (
              <figure key={p.img} className="reveal group relative overflow-hidden">
                <img src={p.img} alt="" className="aspect-[2/3] w-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                <figcaption className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.2em] text-sand/80">{p.label}</figcaption>
              </figure>
            ))}
          </div>
          <p className="reveal mt-4 text-xs text-sand/35">Illustrative AI-generated portraits in the spirit of our patient community — not real individuals.</p>

          <div className="mt-20 grid gap-x-12 gap-y-14 md:grid-cols-2">
            {REFLECTIONS.map((r, i) => (
              <div key={r.area} className="reveal flex gap-6 border-t border-sand/10 pt-8">
                <span className="font-serif text-3xl text-gold/50">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h2 className="font-serif text-2xl text-sand">{r.area}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-sand/60">{r.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 text-charcoal md:py-28">
        <div className="container-lux max-w-4xl">
          <SectionHead dark={false} center eyebrow="In Their Words" title={<>Quiet outcomes, <em className="font-serif italic text-gold-deep">quietly described.</em></>} />
          <div className="mt-16 space-y-14">
            {QUOTES.map((q) => (
              <figure key={q.who} className="reveal text-center">
                <span className="font-serif text-6xl leading-none text-gold/60">“</span>
                <blockquote className="mx-auto -mt-4 max-w-2xl font-serif text-xl leading-relaxed text-charcoal/85 md:text-2xl">{q.text}</blockquote>
                <figcaption className="mt-5 text-[11px] uppercase tracking-[0.2em] text-teal-deep">{q.who}</figcaption>
              </figure>
            ))}
          </div>
          <p className="reveal mt-14 text-center text-xs leading-relaxed text-charcoal/45">
            Illustrative sample testimonials, to be replaced with verified patient reviews. Individual outcomes vary; no result is guaranteed.
            Candidacy and realistic expectations are always determined in consultation with a licensed surgeon.
          </p>
          <div className="reveal mt-12 text-center">
            <Link to="/contact" className="btn-dark">{t.cta.request} <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
