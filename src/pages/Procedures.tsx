import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { useSEO, useRevealObserver } from '@/hooks/useSEO';
import { PageHero, TrustBar } from '@/components/common';
import { CATEGORIES, proceduresByCategory } from '@/data/procedures';

export default function Procedures() {
  useSEO('Procedures — Face, Breast, Body, Hair & Non-Surgical | Liliav',
    'Explore 24+ procedures across vetted clinics in the USA, Turkey, and Lebanon: rhinoplasty, facelift, breast augmentation, tummy tuck, BBL, hair transplant and more, with transparent price guidance.');
  useRevealObserver();
  return (
    <>
      <PageHero
        eyebrow="Procedures"
        title={<>Every procedure, <em className="font-serif italic text-gold">considered.</em></>}
        intro="Twenty-four procedures across five disciplines — each performed only by surgeons in our vetted network, each supported by the full Liliav journey from first question to final follow-up."
      />
      <TrustBar />
      <div className="bg-cream py-20 text-charcoal md:py-28">
        <div className="container-lux space-y-20">
          {CATEGORIES.map((c) => (
            <section key={c.id} className="reveal">
              <div className="flex flex-col gap-3 border-b border-charcoal/10 pb-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="eyebrow-teal">{String(proceduresByCategory(c.id).length).padStart(2, '0')} procedures</p>
                  <h2 className="h-serif mt-2 text-3xl md:text-4xl">{c.name}</h2>
                </div>
                <p className="max-w-xl text-sm leading-relaxed text-charcoal/70">{c.blurb}</p>
              </div>
              <div className="mt-2 grid gap-x-12 md:grid-cols-2 lg:grid-cols-3">
                {proceduresByCategory(c.id).map((p) => (
                  <Link key={p.slug} to={`/procedures/${p.slug}`} className="group border-b border-charcoal/10 py-6 transition-colors hover:border-gold">
                    <h3 className="font-serif text-lg text-charcoal transition-colors group-hover:text-gold-deep md:text-xl">{p.name}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-charcoal/70">{p.tagline}</p>
                    <span className="mt-3 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-teal-deep opacity-0 transition-opacity group-hover:opacity-100">
                      View procedure <ArrowRight className="h-3 w-3" />
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
