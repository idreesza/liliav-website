import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { useSEO, useRevealObserver } from '@/hooks/useSEO';
import { PageHero, SectionHead } from '@/components/common';
import { useLang } from '@/i18n';

const TIMELINE = [
  { phase: 'Week 0', title: 'Private Inquiry', text: 'You reach out — by form, phone, or WhatsApp — in English, Arabic, or Turkish. Within one business day a dedicated coordinator replies. No call centers, no scripts: a named person who will stay with you for the entire journey.' },
  { phase: 'Week 1', title: 'Consultation & Matching', text: 'A confidential intake conversation, then secure photo review by surgeons in our network. You receive one to three curated matches with verified credentials, honest assessments, and itemized written quotes from each.' },
  { phase: 'Weeks 1–3', title: 'Decision, On Your Timeline', text: 'Video consultations in your language. Questions answered without pressure. Second opinions arranged if you want them. We advise every patient to reflect for at least a week — the decision must be entirely yours.' },
  { phase: 'Weeks 3–6', title: 'Travel, Arranged', text: 'Once you commit: flights advised, visa guidance provided, airport pickup confirmed, and accommodation reserved — a vetted hotel near your clinic or a private recovery retreat. You receive a single itinerary covering everything.' },
  { phase: 'Procedure Day', title: 'Arrival & Surgery', text: 'Met at the airport by an unbranded car. Pre-operative consultations and tests at the clinic with a translator present. Surgery by your chosen surgeon at an accredited facility, with anesthesia and recovery to hospital standard.' },
  { phase: 'Week 1–2', title: 'Recovery, Cared For', text: 'Hotel or retreat recovery with scheduled nurse visits and surgeon reviews. Transfers to every follow-up. Meals, medications, and quiet — everything considered so you can simply heal.' },
  { phase: 'Homecoming', title: 'The Journey Home', text: 'Fit-to-fly clearance from your surgeon, compression and medication for the flight, all documentation in hand — operative notes, implant cards, aftercare instructions in your language.' },
  { phase: 'Year 1', title: 'Aftercare That Outlasts the Trip', text: 'Scheduled video reviews with your surgeon at 2 weeks, 6 weeks, 6 months, and 12 months. A local-care escalation path if anything concerns you between check-ins. Your coordinator remains one message away.' },
];

const CONCIERGE = [
  { title: 'Airport pickup & unbranded transfers', text: 'A private car meets you on arrival and carries you to every appointment — discreet by default.' },
  { title: 'Translator support', text: 'A medical translator at every consultation and consent conversation. Nothing about your body should ever be approximate.' },
  { title: 'Hotel partnerships', text: 'Recovery-friendly hotels minutes from each partner clinic — late checkout, soft menus, and staff briefed on discretion.' },
  { title: 'Recovery retreats', text: 'Private suites with nursing cover for patients traveling alone or wanting complete quiet in the first week.' },
  { title: 'Aftercare check-ins', text: 'A fixed calendar of surgeon reviews across your first year — scheduled at booking, kept without you asking.' },
  { title: '24/7 coordinator line', text: 'One number, your language, any hour. If it matters to you at 3 a.m., it matters to us at 3 a.m.' },
];

export default function Journey() {
  const { t } = useLang();
  useSEO('The Liliav Journey — From Inquiry to Aftercare | Liliav',
    'Step by step through a Liliav surgical journey: private inquiry, curated surgeon matching, concierge travel, recovery retreats, and a full year of scheduled aftercare.');
  useRevealObserver();
  return (
    <>
      <PageHero
        eyebrow="The Liliav Journey"
        title={<>Choreographed, <em className="font-serif italic text-gold">so you don’t have to be.</em></>}
        intro="Eight movements from first message to final follow-up. Here is exactly what happens, and when — because trust is built on specifics, not adjectives."
        image="/images/journey.jpg"
      />

      <section className="bg-cream py-20 text-charcoal md:py-28">
        <div className="container-lux max-w-4xl">
          {TIMELINE.map((s, i) => (
            <div key={s.title} className="reveal relative grid gap-3 border-l-2 border-gold/40 pb-14 pl-10 last:pb-0 md:grid-cols-12 md:gap-8">
              <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-gold bg-cream" />
              <div className="md:col-span-3">
                <p className="text-[11px] uppercase tracking-[0.2em] text-teal-deep">{s.phase}</p>
                <p className="mt-1 font-serif text-2xl text-gold-deep/70">{String(i + 1).padStart(2, '0')}</p>
              </div>
              <div className="md:col-span-9">
                <h2 className="font-serif text-2xl md:text-3xl">{s.title}</h2>
                <p className="mt-3 leading-relaxed text-charcoal/70">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative h-[48vh] min-h-[320px] overflow-hidden">
        <img src="/images/recovery.jpg" alt="A serene recovery suite at dusk" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="container-lux relative flex h-full items-center">
          <p className="reveal max-w-md font-serif italic text-2xl leading-relaxed text-sand md:text-3xl">
            “The week after mattered as much as the day itself.”
          </p>
        </div>
      </section>

      <section className="marble-dark py-20 md:py-28">
        <div className="container-lux">
          <SectionHead eyebrow="Concierge Services" title={<>Everything around <em className="font-serif italic text-gold">the surgery.</em></>} intro="The operation is your surgeon's. Everything else — every car, key, translation, and check-in — is ours." />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CONCIERGE.map((c) => (
              <div key={c.title} className="reveal border border-sand/10 bg-ink/60 p-8 backdrop-blur-sm">
                <h3 className="font-serif text-xl text-sand">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-sand/60">{c.text}</p>
              </div>
            ))}
          </div>
          <div className="reveal mt-14 text-center">
            <Link to="/contact" className="btn-gold-solid">{t.cta.consult} <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
