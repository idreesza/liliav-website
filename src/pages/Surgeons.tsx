import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { useSEO, useRevealObserver } from '@/hooks/useSEO';
import { PageHero, SectionHead, TrustBar } from '@/components/common';
import { useLang } from '@/i18n';

const CRITERIA = [
  { title: 'Board certification, verified at source', text: 'American Board of Plastic Surgery, Turkish and Lebanese specialist boards — confirmed directly with the issuing body, never taken on trust.' },
  { title: 'A decade of practice, minimum', text: 'We accept only surgeons with at least ten years of independent practice and a deep annual case volume in your specific procedure.' },
  { title: 'Accredited facilities only', text: 'JCI, AAAASF, or national-equivalent accreditation for every operating facility — plus audited anesthesia staffing and ICU backup.' },
  { title: 'Ethics we can audit', text: 'Honest refusal rates, conservative technique, transparent pricing, and complication protocols reviewed by our medical advisory board before acceptance.' },
];

const SAMPLE_PROFILES = [
  { focus: 'Facial Aesthetics & Rhinoplasty', region: 'Istanbul Network Partner', years: '18+ Years', cases: '3,000+ rhinoplasties' },
  { focus: 'Breast & Body Contouring', region: 'Beirut Network Partner', years: '15+ Years', cases: 'University-hospital affiliated' },
  { focus: 'Facelift & Deep-Plane Surgery', region: 'Los Angeles Network Partner', years: '22+ Years', cases: 'ABPS certified, AAAASF facility' },
  { focus: 'Hair Restoration', region: 'Istanbul Network Partner', years: '14+ Years', cases: 'Surgeon-performed FUE & DHI' },
  { focus: 'Post-Weight-Loss Body Lifting', region: 'New York Network Partner', years: '16+ Years', cases: 'ABPS certified, staged-surgery specialist' },
  { focus: 'Non-Surgical & Skin', region: 'Beirut Network Partner', years: '12+ Years', cases: 'Dermatology & aesthetic medicine' },
];

export default function Surgeons() {
  const { t } = useLang();
  useSEO('Our Surgeon Network — Vetting Standards | Liliav',
    'How Liliav vets plastic surgeons: board certification verified at source, 10+ years in practice, accredited facilities, audited ethics. Meet the standard behind the network.');
  useRevealObserver();
  return (
    <>
      <PageHero
        eyebrow="Our Surgeon Network"
        title={<>Fewer than a third <em className="font-serif italic text-gold">make it in.</em></>}
        intro="We are not a directory. Every surgeon in the Liliav network has passed a vetting process designed by people who have spent their careers inside operating rooms — and every one is re-reviewed annually."
        image="clinic"
        imageAlt="Vetted luxury aesthetic clinic interior — Liliav board-certified surgeon network partner"
      />
      <TrustBar />

      <section className="bg-cream py-20 text-charcoal md:py-28">
        <div className="container-lux">
          <SectionHead dark={false} eyebrow="The Standard" title={<>What “vetted” <em className="font-serif italic text-gold-deep">actually means.</em></>} />
          <div className="mt-14 grid gap-px bg-charcoal/10 md:grid-cols-2">
            {CRITERIA.map((c, i) => (
              <div key={c.title} className="reveal bg-cream p-10">
                <span className="font-serif text-3xl text-gold-deep/60">0{i + 1}</span>
                <h3 className="mt-4 font-serif text-xl md:text-2xl">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/65">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="marble-dark py-20 md:py-28">
        <div className="container-lux">
          <SectionHead
            eyebrow="The Network, In Profile"
            title={<>Surgeons you will know <em className="font-serif italic text-gold">before you fly.</em></>}
            intro="Partner profiles are shared in full — names, credentials, outcomes — once you begin a private consultation. Until our partners' public profiles launch, these representative profiles illustrate the caliber of the network."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SAMPLE_PROFILES.map((s) => (
              <div key={s.focus} className="reveal border border-sand/10 bg-ink/60 p-8 backdrop-blur-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40">
                  <span className="font-serif text-lg text-gold">L</span>
                </div>
                <h3 className="mt-6 font-serif text-xl text-sand">Board-Certified Surgeon</h3>
                <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-teal-soft">{s.years} · {s.region}</p>
                <div className="mt-5 border-t border-sand/10 pt-4">
                  <p className="text-sm text-sand/70">{s.focus}</p>
                  <p className="mt-1 text-[13px] text-sand/60">{s.cases}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="reveal mt-10 text-xs text-sand/55">Illustrative placeholder profiles. Named surgeon profiles with full credentials will be published as partnership agreements finalize.</p>
          <div className="reveal mt-10">
            <Link to="/contact" className="btn-gold">{t.cta.request} <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
