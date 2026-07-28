import { Link, Navigate, useParams } from 'react-router';
import { ArrowRight, Check } from 'lucide-react';
import { useSEO, useRevealObserver } from '@/hooks/useSEO';
import { PageHero, SectionHead, TrustBar } from '@/components/common';
import { DESTINATIONS, destinationBySlug } from '@/data/destinations';
import { useLang } from '@/i18n';

export function DestinationsHub() {
  useSEO('Destinations — Plastic Surgery in the USA, Turkey & Lebanon | Liliav',
    'Compare plastic surgery destinations: the USA, Turkey, and Lebanon. Accreditation standards, clinic vetting, travel logistics and recovery environments — presented honestly.');
  useRevealObserver();
  return (
    <>
      <PageHero
        eyebrow="Destinations"
        title={<>Where would you like <em className="font-serif italic text-gold">to be cared for?</em></>}
        intro="Three regions, three characters of care — the world's strictest regulation, the world's deepest experience, and the Mediterranean's warmest boutique tradition. The standard of vetting never changes."
      />
      <div className="bg-ink pb-24">
        {DESTINATIONS.map((d, i) => (
          <section key={d.slug} className={`reveal container-lux grid items-center gap-10 py-14 md:py-20 lg:grid-cols-2 ${i % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
            <div className="relative overflow-hidden">
              <img src={d.image} alt={d.name} className="aspect-[16/10] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
            </div>
            <div>
              <p className="eyebrow">0{i + 1}</p>
              <h2 className="h-serif mt-3 text-3xl text-sand md:text-5xl">{d.name}</h2>
              <p className="mt-4 font-serif italic text-lg text-gold/85">{d.tagline}</p>
              <p className="mt-5 max-w-lg leading-relaxed text-sand/60">{d.heroStatement}</p>
              <Link to={`/destinations/${d.slug}`} className="btn-gold mt-8">Explore {d.name} <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}

export function DestinationDetail() {
  const { slug } = useParams();
  const { t } = useLang();
  const d = slug ? destinationBySlug(slug) : undefined;
  useSEO(
    d ? `${d.name === 'Turkey' ? 'Plastic Surgery Turkey' : d.name === 'Lebanon' ? 'Cosmetic Surgery Lebanon' : 'Plastic Surgery USA'} — Vetted Clinics | Liliav` : 'Destination | Liliav',
    d ? `${d.heroStatement} Learn how Liliav vets clinics, arranges travel, and supports your recovery in ${d.name}.` : undefined,
  );
  useRevealObserver();
  if (!d) return <Navigate to="/destinations" replace />;

  return (
    <>
      <PageHero eyebrow="Destination" title={<>{d.name}. <em className="font-serif italic text-gold">{d.tagline}</em></>} intro={d.heroStatement} image={d.image} />
      <TrustBar />

      <section className="bg-cream py-20 text-charcoal md:py-28">
        <div className="container-lux">
          <SectionHead dark={false} eyebrow="Why Patients Choose It" title={<>The case for <em className="font-serif italic text-gold-deep">{d.name}.</em></>} />
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {d.why.map((w, i) => (
              <div key={w.title} className="reveal border-t-2 border-gold/50 pt-6">
                <span className="font-serif text-2xl text-teal-deep/60">0{i + 1}</span>
                <h3 className="mt-3 font-serif text-xl">{w.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/65">{w.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="marble-dark py-20 md:py-28">
        <div className="container-lux grid gap-16 lg:grid-cols-2">
          <div className="reveal">
            <SectionHead eyebrow="Standards" title={<>Accreditation <em className="font-serif italic text-gold">we require.</em></>} />
            <ul className="mt-8 space-y-4">
              {d.accreditation.map((a) => (
                <li key={a} className="flex gap-3 text-[15px] text-sand/75">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-teal-soft" /> {a}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal">
            <SectionHead eyebrow="The Vetting Process" title={<>How a clinic <em className="font-serif italic text-gold">earns the network.</em></>} />
            <ol className="mt-8 space-y-4">
              {d.vetting.map((v, i) => (
                <li key={v} className="flex gap-4 text-[15px] text-sand/75">
                  <span className="font-serif text-lg text-gold/70">{String(i + 1).padStart(2, '0')}</span> {v}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 text-charcoal md:py-28">
        <div className="container-lux">
          <SectionHead dark={false} eyebrow="Travel & Recovery" title={<>The practicalities, <em className="font-serif italic text-gold-deep">handled.</em></>} />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {d.logistics.map((l) => (
              <div key={l.title} className="reveal bg-white p-8 shadow-sm">
                <h3 className="font-serif text-xl">{l.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/65">{l.detail}</p>
              </div>
            ))}
          </div>
          <div className="reveal mt-12 flex flex-wrap items-center gap-3">
            {d.trustSignals.map((s) => (
              <span key={s} className="border border-teal/30 px-4 py-2 text-[11px] uppercase tracking-[0.14em] text-teal-deep">{s}</span>
            ))}
          </div>
          <div className="reveal mt-14 flex flex-col items-start gap-6 border-t border-charcoal/10 pt-10 md:flex-row md:items-center md:justify-between">
            <p className="max-w-xl font-serif text-xl italic text-charcoal/80">Best suited for: {d.bestFor}</p>
            <Link to={`/contact?destination=${encodeURIComponent(d.name)}`} className="btn-gold-solid">{t.cta.request} <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
