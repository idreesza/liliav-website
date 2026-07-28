import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { useSEO, useRevealObserver } from '@/hooks/useSEO';
import { SectionHead, TrustBar } from '@/components/common';
import { CATEGORIES, PROCEDURES } from '@/data/procedures';
import { DESTINATIONS } from '@/data/destinations';
import { useLang } from '@/i18n';

function Hero() {
  const { t } = useLang();
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink">
      <img src="/images/hero.jpg" alt="" className="absolute inset-0 h-full w-full object-cover object-[70%_center] opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />
      <div className="container-lux relative pb-28 pt-40 md:pb-36">
        <p className="eyebrow reveal">A private surgical concierge · USA — Turkey — Lebanon</p>
        <h1 className="h-serif reveal mt-6 max-w-3xl text-5xl leading-[1.05] text-sand md:text-7xl">
          Your transformation,<br />
          <em className="gold-gradient-text not-italic font-serif italic">trusted across borders.</em>
        </h1>
        <p className="reveal mt-7 max-w-xl text-base leading-relaxed text-sand/65 md:text-lg">
          Liliav connects you with vetted, board-certified plastic surgeons in three countries —
          and quietly arranges everything around them. We do not perform surgery. We perfect everything else.
        </p>
        <div className="reveal mt-10">
          <Link to="/contact" className="btn-gold-solid">{t.cta.consult}<ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sand/40">
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </div>
    </section>
  );
}

function SearchBar() {
  const { t } = useLang();
  const navigate = useNavigate();
  const [proc, setProc] = useState('');
  const [dest, setDest] = useState('');
  return (
    <section className="relative z-10 -mt-14">
      <div className="container-lux">
        <form
          onSubmit={(e) => { e.preventDefault(); navigate(`/contact?procedure=${encodeURIComponent(proc)}&destination=${encodeURIComponent(dest)}`); }}
          className="reveal grid gap-px border border-sand/10 bg-sand/10 shadow-[0_30px_80px_rgba(0,0,0,0.55)] md:grid-cols-[1fr_1fr_auto]"
        >
          <label className="bg-ink-soft px-6 py-5">
            <span className="block text-[10px] uppercase tracking-[0.22em] text-teal-soft">What are you considering?</span>
            <select value={proc} onChange={(e) => setProc(e.target.value)} className="mt-2 w-full bg-transparent font-serif text-lg text-sand outline-none [&>option]:text-charcoal">
              <option value="">Choose a procedure…</option>
              {CATEGORIES.map((c) => (
                <optgroup key={c.id} label={c.name}>
                  {PROCEDURES.filter((p) => p.category === c.id).map((p) => <option key={p.slug} value={p.name}>{p.name}</option>)}
                </optgroup>
              ))}
            </select>
          </label>
          <label className="bg-ink-soft px-6 py-5">
            <span className="block text-[10px] uppercase tracking-[0.22em] text-teal-soft">Where would you like to go?</span>
            <select value={dest} onChange={(e) => setDest(e.target.value)} className="mt-2 w-full bg-transparent font-serif text-lg text-sand outline-none [&>option]:text-charcoal">
              <option value="">No preference yet…</option>
              {DESTINATIONS.map((d) => <option key={d.slug} value={d.name}>{d.name}</option>)}
            </select>
          </label>
          <button className="bg-gold px-10 text-[12px] font-medium uppercase tracking-[0.22em] text-ink transition-colors hover:bg-gold-soft">
            {t.cta.consult}
          </button>
        </form>
      </div>
    </section>
  );
}

const JOURNEY_STEPS = [
  { n: 'I', title: 'Private Consultation', text: 'A confidential conversation — in English, Arabic, or Turkish — about what you hope for and what is honestly possible. Photographs reviewed by surgeons, never by sales staff.' },
  { n: 'II', title: 'Curated Clinic Match', text: 'One to three surgeons, selected for your procedure and your profile, with verified credentials and itemized written quotes. You compare; you choose; you take your time.' },
  { n: 'III', title: 'Concierge Travel & Care', text: 'Flights advised, airport pickup arranged, vetted hotels or recovery retreats reserved, translators at every appointment. You simply arrive.' },
  { n: 'IV', title: 'Recovery & Aftercare', text: 'Scheduled check-ins across your first year — video reviews with your surgeon at 2 weeks, 6 weeks, 6 months, and beyond. The relationship outlasts the journey.' },
];

function Journey() {
  return (
    <section className="marble-dark py-24 md:py-36">
      <div className="container-lux">
        <SectionHead eyebrow="The Liliav Journey" title={<>Four movements, <em className="font-serif italic text-gold">one quiet arc.</em></>} intro="From the first message to the final follow-up, every step is choreographed — so the only thing you ever have to think about is your decision." />
        <div className="mt-16 md:mt-24">
          {JOURNEY_STEPS.map((s, i) => (
            <div key={s.n} className="reveal group grid gap-4 border-t border-sand/10 py-10 md:grid-cols-12 md:gap-8 md:py-14">
              <div className="md:col-span-2">
                <span className="font-serif text-4xl text-gold/50 transition-colors group-hover:text-gold md:text-5xl">{s.n}</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-serif text-2xl text-sand md:text-3xl">{s.title}</h3>
                <span className="mt-3 block text-[10px] uppercase tracking-[0.22em] text-teal-soft">Step 0{i + 1} of 04</span>
              </div>
              <p className="leading-relaxed text-sand/60 md:col-span-6">{s.text}</p>
            </div>
          ))}
        </div>
        <div className="reveal mt-8">
          <Link to="/journey" className="link-quiet inline-flex items-center gap-2 !text-gold/80 hover:!text-gold">
            The journey in detail <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

const FEATURED = ['rhinoplasty', 'breast-augmentation', 'tummy-tuck', 'fue-hair-transplant', 'facelift', 'liposuction'];

function FeaturedProcedures() {
  const { t } = useLang();
  return (
    <section className="bg-cream py-24 text-charcoal md:py-32">
      <div className="container-lux">
        <SectionHead dark={false} eyebrow="Featured Procedures" title={<>Considered work, <em className="font-serif italic text-gold-deep">honestly priced.</em></>} intro="Indicative starting ranges across our partner network. Your written quote is always itemized, always before you commit — and always from the surgeon, not from us." />
        <div className="mt-16 grid gap-x-10 gap-y-2 md:grid-cols-2">
          {FEATURED.map((slug) => {
            const p = PROCEDURES.find((x) => x.slug === slug)!;
            return (
              <Link key={slug} to={`/procedures/${p.slug}`} className="reveal group flex items-baseline justify-between gap-6 border-b border-charcoal/10 py-6 transition-colors hover:border-gold">
                <div>
                  <h3 className="font-serif text-xl md:text-2xl text-charcoal transition-colors group-hover:text-gold-deep">{p.name}</h3>
                  <p className="mt-1 text-sm text-charcoal/55">{p.tagline}</p>
                </div>
                <span className="shrink-0 text-right text-[11px] uppercase tracking-[0.14em] text-teal-deep">from {p.price.turkey.split('–')[0].trim()}</span>
              </Link>
            );
          })}
        </div>
        <div className="reveal mt-12">
          <Link to="/procedures" className="btn-dark">{t.cta.explore}<ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  );
}

function Destinations() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="container-lux">
        <SectionHead eyebrow="Destinations" title={<>Three countries. <em className="font-serif italic text-gold">One standard.</em></>} />
      </div>
      <div className="mt-16 space-y-2">
        {DESTINATIONS.map((d, i) => (
          <Link key={d.slug} to={`/destinations/${d.slug}`} className="reveal group relative block h-[46vh] min-h-[320px] overflow-hidden md:h-[54vh]">
            <img src={d.image} alt={d.name} className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.04]" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/35 to-transparent" />
            <div className={`container-lux relative flex h-full flex-col justify-center ${i % 2 ? 'items-end text-right' : ''}`}>
              <span className="eyebrow">0{i + 1} — {d.slug === 'usa' ? 'Los Angeles · New York · Miami' : d.slug === 'turkey' ? 'Istanbul' : 'Beirut'}</span>
              <h3 className="h-serif mt-3 text-4xl text-sand md:text-6xl">{d.name}</h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-sand/70 md:text-base">{d.tagline}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-gold opacity-0 transition-all duration-500 group-hover:opacity-100">
                Discover {d.name} <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

const QUOTES = [
  { text: 'I compared three surgeons across two countries without a single sales call. When I finally chose, it felt like my decision — because it was.', who: 'R., 41 — rhinoplasty, Istanbul' },
  { text: 'The surgery was excellent. But what I still talk about is the week after: the quiet hotel, the check-ins, someone always answering in Arabic.', who: 'M., 36 — tummy tuck, Beirut' },
  { text: 'Every price was in writing before I booked a flight. Every promise was kept. That is rarer than it should be.', who: 'S., 48 — facelift, Los Angeles' },
];

function Testimonials() {
  return (
    <section className="bg-cream py-24 text-charcoal md:py-32">
      <div className="container-lux max-w-4xl">
        <SectionHead dark={false} center eyebrow="Quiet Words" title={<>What patients tell us <em className="font-serif italic text-gold-deep">afterward.</em></>} />
        <div className="mt-16 space-y-14">
          {QUOTES.map((q) => (
            <figure key={q.who} className="reveal text-center">
              <span className="font-serif text-6xl leading-none text-gold/60">“</span>
              <blockquote className="mx-auto -mt-4 max-w-2xl font-serif text-xl leading-relaxed text-charcoal/85 md:text-2xl">{q.text}</blockquote>
              <figcaption className="mt-5 text-[11px] uppercase tracking-[0.2em] text-teal-deep">{q.who}</figcaption>
            </figure>
          ))}
        </div>
        <p className="reveal mt-14 text-center text-xs text-charcoal/45">
          Illustrative sample testimonials, shown with permission of style rather than substance — they will be replaced with verified patient reviews as our first journeys complete.
        </p>
      </div>
    </section>
  );
}

const WHY = [
  { title: 'A vetted surgeon network', text: 'Board certification verified at source, facility accreditation confirmed on-site, a decade minimum in practice. Fewer than a third of applicant clinics are accepted.' },
  { title: 'Full price transparency', text: 'Itemized written quotes from every surgeon we present. No hidden fees, no inflated "packages," no surprises at the clinic door.' },
  { title: 'A trilingual concierge', text: 'English, Arabic, and Turkish — your consultations, consent, and aftercare in the language you dream in. Available around the clock.' },
  { title: 'Private & discreet by design', text: 'HIPAA-compliant data handling, unbranded transfers, staff bound by confidentiality. Your journey is yours; it is no one else’s business.' },
];

function WhyLiliav() {
  const { t } = useLang();
  return (
    <section className="marble-dark py-24 md:py-32">
      <div className="container-lux">
        <SectionHead eyebrow="Why Liliav" title={<>Quietly rigorous, <em className="font-serif italic text-gold">by design.</em></>} />
        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {WHY.map((w, i) => (
            <div key={w.title} className="reveal flex gap-6">
              <span className="font-serif text-3xl text-teal-soft/70">0{i + 1}</span>
              <div>
                <h3 className="font-serif text-xl text-sand md:text-2xl">{w.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-sand/60">{w.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="reveal mt-16 text-center">
          <Link to="/contact" className="btn-gold">{t.cta.consult}<ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  useSEO('Liliav — Private Plastic Surgery Concierge | USA · Turkey · Lebanon',
    'A premium plastic surgery broker connecting international patients with vetted, board-certified clinics. Plastic surgery Turkey, cosmetic surgery Lebanon, plastic surgery USA — medical tourism, done privately.');
  useRevealObserver();
  return (
    <>
      <Hero />
      <SearchBar />
      <div className="mt-16"><TrustBar /></div>
      <Journey />
      <FeaturedProcedures />
      <Destinations />
      <Testimonials />
      <WhyLiliav />
    </>
  );
}
