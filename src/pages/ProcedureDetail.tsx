import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router';
import { ArrowRight, Check, ChevronDown } from 'lucide-react';
import { useSEO, useRevealObserver, useJsonLd } from '@/hooks/useSEO';
import { procedureJsonLd } from '@/seo';
import { PageHero, DisclaimerNote, SectionHead } from '@/components/common';
import { procedureBySlug, CATEGORIES, proceduresByCategory } from '@/data/procedures';
import { useLang } from '@/i18n';

function Faq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-charcoal/10">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between gap-6 py-5 text-left">
        <span className="font-serif text-lg text-charcoal">{q}</span>
        <ChevronDown className={`h-4 w-4 shrink-0 text-gold-deep transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <p className="pb-6 text-sm leading-relaxed text-charcoal/65">{a}</p>}
    </div>
  );
}

export default function ProcedureDetail() {
  const { slug } = useParams();
  const { t } = useLang();
  const p = slug ? procedureBySlug(slug) : undefined;
  useSEO(
    p ? `${p.name} — USA, Turkey & Lebanon | Liliav` : 'Procedure | Liliav',
    p ? `${p.name} abroad or at home: ${p.tagline} Compare vetted, board-certified surgeons and indicative prices across the USA, Turkey, and Lebanon with Liliav's private concierge.` : undefined,
  );
  useRevealObserver();
  useJsonLd('ld-procedure', p ? procedureJsonLd(p) : null);
  if (!p) return <Navigate to="/procedures" replace />;
  const cat = CATEGORIES.find((c) => c.id === p.category)!;
  const siblings = proceduresByCategory(p.category).filter((x) => x.slug !== p.slug).slice(0, 4);

  return (
    <>
      <PageHero eyebrow={`${cat.name} — Liliav Network`} title={<>{p.name.split('(')[0].trim()} <em className="font-serif italic text-gold">{p.name.includes('(') ? `(${p.name.split('(')[1]}` : ''}</em></>} intro={p.tagline} />

      <section className="bg-cream py-20 text-charcoal md:py-28">
        <div className="container-lux grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="reveal">
              <h2 className="eyebrow-teal">Overview</h2>
              <p className="mt-5 text-lg leading-relaxed text-charcoal/80">{p.description}</p>
            </div>

            <div className="reveal mt-14">
              <h2 className="eyebrow-teal">The Ideal Candidate</h2>
              <ul className="mt-6 space-y-4">
                {p.idealCandidate.map((c) => (
                  <li key={c} className="flex gap-3 text-[15px] leading-relaxed text-charcoal/75">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-gold-deep" /> {c}
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal mt-14">
              <h2 className="eyebrow-teal">Recovery Timeline</h2>
              <div className="mt-8 space-y-0 border-l border-charcoal/15 pl-8">
                {p.recovery.map((r) => (
                  <div key={r.phase} className="relative pb-8 last:pb-0">
                    <span className="absolute -left-[37px] top-1.5 h-2 w-2 rounded-full bg-gold" />
                    <p className="font-serif text-lg text-charcoal">{r.phase}</p>
                    <p className="mt-1 text-sm leading-relaxed text-charcoal/65">{r.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal mt-14">
              <h2 className="eyebrow-teal">Frequently Asked</h2>
              <div className="mt-4">
                {p.faqs.map((f) => <Faq key={f.q} {...f} />)}
              </div>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="reveal sticky top-28 border border-charcoal/10 bg-white p-8">
              <h2 className="eyebrow-teal">Indicative Investment</h2>
              <p className="mt-2 text-xs text-charcoal/50">Varies by clinic, surgeon, and technique — written quotes always precede any commitment.</p>
              <dl className="mt-6 space-y-5">
                {([['United States', p.price.usa], ['Turkey', p.price.turkey], ['Lebanon', p.price.lebanon]] as const).map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between border-b border-charcoal/10 pb-4">
                    <dt className="text-[11px] uppercase tracking-[0.18em] text-charcoal/55">{k}</dt>
                    <dd className="font-serif text-xl text-charcoal">{v}</dd>
                  </div>
                ))}
              </dl>
              <Link to={`/contact?procedure=${encodeURIComponent(p.name)}`} className="btn-gold-solid mt-8 w-full !normal-case !tracking-[0.14em]">
                {t.cta.request} <ArrowRight className="h-4 w-4" />
              </Link>
              <DisclaimerNote light className="mt-6" />
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-ink py-20">
        <div className="container-lux">
          <SectionHead eyebrow="Continue Exploring" title={<>More in <em className="font-serif italic text-gold">{cat.name}.</em></>} />
          <div className="mt-10 grid gap-x-10 md:grid-cols-2 lg:grid-cols-4">
            {siblings.map((s) => (
              <Link key={s.slug} to={`/procedures/${s.slug}`} className="group border-t border-sand/10 py-5 transition-colors hover:border-gold">
                <h3 className="font-serif text-lg text-sand group-hover:text-gold transition-colors">{s.name}</h3>
                <p className="mt-1 text-[13px] text-sand/50">{s.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
