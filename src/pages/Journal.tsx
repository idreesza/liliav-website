import { Link, Navigate, useParams } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { useSEO, useRevealObserver } from '@/hooks/useSEO';
import { PageHero, DisclaimerNote } from '@/components/common';
import { LuxImg } from '@/components/LuxImg';
import { ARTICLES, articleBySlug } from '@/data/destinations';
import { useLang } from '@/i18n';

export function Journal() {
  useSEO('Journal — Notes on Aesthetic Travel | Liliav',
    'Editorial notes on medical tourism, plastic surgery destinations, consultations, and recovery — written like a magazine, not a marketing blog.');
  useRevealObserver();
  return (
    <>
      <PageHero
        eyebrow="The Journal"
        title={<>Notes on the art <em className="font-serif italic text-gold">of aesthetic travel.</em></>}
        intro="Essays and honest guidance from our coordinators and medical advisors — written to be read slowly, like the decisions they describe."
      />
      <section className="bg-cream py-20 text-charcoal md:py-28">
        <div className="container-lux grid gap-x-10 gap-y-16 md:grid-cols-2">
          {ARTICLES.map((a, i) => (
            <Link key={a.slug} to={`/journal/${a.slug}`} className={`reveal group ${i === 0 ? 'md:col-span-2' : ''}`}>
              <div className="overflow-hidden">
                <LuxImg base={a.image} alt={`${a.title} — Liliav Journal, plastic surgery and medical concierge insights`} sizes={i === 0 ? '100vw' : '(min-width: 768px) 50vw, 100vw'} className={`w-full object-cover transition-transform [transition-duration:1.2s] group-hover:scale-[1.03] ${i === 0 ? 'aspect-[21/9]' : 'aspect-[16/10]'}`} />
              </div>
              <div className="mt-6 flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-teal-deep">
                <span>{a.category}</span><span className="h-px w-6 bg-gold" /><span>{a.date}</span><span>·</span><span>{a.readTime}</span>
              </div>
              <h2 className={`h-serif mt-3 text-charcoal transition-colors group-hover:text-gold-deep ${i === 0 ? 'text-3xl md:text-4xl' : 'text-2xl'}`}>{a.title}</h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-charcoal/60">{a.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export function Article() {
  const { slug } = useParams();
  const { t } = useLang();
  const a = slug ? articleBySlug(slug) : undefined;
  useSEO(a ? `${a.title} | Liliav Journal` : 'Journal | Liliav', a?.excerpt);
  useRevealObserver();
  if (!a) return <Navigate to="/journal" replace />;
  const others = ARTICLES.filter((x) => x.slug !== a.slug).slice(0, 2);

  return (
    <>
      <section className="relative overflow-hidden bg-ink pt-36 pb-0 md:pt-44">
        <div className="container-lux max-w-3xl pb-14">
          <div className="reveal flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-teal-soft">
            <span>{a.category}</span><span className="h-px w-6 bg-gold" /><span>{a.date}</span><span>·</span><span>{a.readTime}</span>
          </div>
          <h1 className="h-serif reveal mt-6 text-4xl text-sand text-balance md:text-6xl">{a.title}</h1>
        </div>
        <LuxImg base={a.image} alt={`${a.title} — Liliav Journal`} eager className="h-[42vh] w-full object-cover opacity-90 md:h-[52vh]" />
      </section>

      <article className="bg-cream py-16 text-charcoal md:py-24">
        <div className="container-lux max-w-3xl">
          {a.body.map((sec, i) => (
            <div key={i} className="reveal mb-10">
              {sec.heading && <h2 className="h-serif mb-5 mt-12 text-2xl md:text-3xl">{sec.heading}</h2>}
              {sec.paragraphs.map((p, j) => (
                <p key={j} className={`mb-5 leading-[1.85] text-charcoal/80 ${i === 0 && j === 0 ? 'text-lg first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-6xl first-letter:leading-[0.85] first-letter:text-gold-deep' : ''}`}>{p}</p>
              ))}
            </div>
          ))}
          <DisclaimerNote light className="mt-12 border-t border-charcoal/10 pt-8" />
          <div className="mt-10 text-center">
            <Link to="/contact" className="btn-gold-solid">{t.cta.request} <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </article>

      <section className="bg-ink py-20">
        <div className="container-lux grid gap-10 md:grid-cols-2">
          {others.map((o) => (
            <Link key={o.slug} to={`/journal/${o.slug}`} className="group">
              <div className="overflow-hidden"><LuxImg base={o.image} alt={`${o.title} — Liliav Journal`} sizes="(min-width: 768px) 50vw, 100vw" className="aspect-[16/8] w-full object-cover transition-transform [transition-duration:1.2s] group-hover:scale-[1.03]" /></div>
              <p className="mt-5 text-[10px] uppercase tracking-[0.2em] text-teal-soft">{o.category} · {o.readTime}</p>
              <h3 className="mt-2 font-serif text-2xl text-sand transition-colors group-hover:text-gold">{o.title}</h3>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
