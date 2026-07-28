import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { useSEO, useRevealObserver } from '@/hooks/useSEO';
import { PageHero, SectionHead, TrustBar } from '@/components/common';
import { useLang } from '@/i18n';

const VALUES = [
  { title: 'Honesty before enthusiasm', text: 'If a procedure is wrong for you, we say so — even when it costs us the journey. Our advisors are paid to counsel, never to close.' },
  { title: 'Transparency as architecture', text: 'Credentials published, prices itemized, vetting criteria on this site for anyone to read. Trust should not require faith.' },
  { title: 'Discretion as default', text: 'From unbranded cars to HIPAA-compliant records, privacy is not an upgrade at Liliav. It is the floor.' },
  { title: 'The long arc of care', text: 'A surgery lasts hours; a result lasts a lifetime. Our responsibility extends across the full year of aftercare — and beyond.' },
];

export default function About() {
  const { t } = useLang();
  useSEO('About Liliav — Beauty Without Borders | Liliav',
    'The story of Liliav: a private brokerage bridging patients across the USA, Turkey, and Lebanon with safe, transparent, world-class cosmetic care.');
  useRevealObserver();
  return (
    <>
      <PageHero
        eyebrow="About Liliav"
        title={<>Where confidence <em className="font-serif italic text-gold">begins.</em></>}
        intro="Liliav was founded on a simple observation: the world's best aesthetic surgeons are scattered across three continents, and finding them safely should not require luck."
        image="about"
        imageAlt="Brass compass on dark marble — Liliav cosmetic surgery concierge bridging patients across borders"
      />
      <TrustBar />

      <section className="bg-cream py-20 text-charcoal md:py-28">
        <div className="container-lux grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHead dark={false} eyebrow="Our Story" title={<>A bridge, <em className="font-serif italic text-gold-deep">built carefully.</em></>} />
          </div>
          <div className="lg:col-span-7">
            <div className="reveal space-y-6 leading-relaxed text-charcoal/75">
              <p>Liliav began at a dinner table in Beirut, where a surgeon friend described a patient who had flown to him from Texas — chosen from a glossy Instagram advertisement, quoted one price and charged another, and left at the airport with no aftercare plan at all. Her result, happily, was good. Her journey should have been better.</p>
              <p>That conversation became a question: what would it look like if the person arranging the journey answered to the patient alone — not to a clinic's marketing budget? Liliav is the answer. An independent brokerage, paid transparently, that vets surgeons the way a teaching hospital would, presents options without preference, and stays for the year of aftercare that most of the industry treats as an afterthought.</p>
              <p>Today our network spans three regions we know intimately — the United States, Turkey, and Lebanon — chosen not at random but because each offers something the others cannot: America's regulatory rigor, Turkey's unmatched depth of experience, and Lebanon's boutique, surgeon-led tradition. Between them, virtually every patient can find their right fit.</p>
              <p>We remain deliberately small. Every journey is handled by a named coordinator, every surgeon relationship is personal, and every patient can reach the founders. That is the luxury we actually sell: being known.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="marble-dark py-20 md:py-28">
        <div className="container-lux">
          <SectionHead eyebrow="What We Hold To" title={<>Four commitments, <em className="font-serif italic text-gold">unnegotiable.</em></>} />
          <div className="mt-14 grid gap-px bg-sand/10 md:grid-cols-2">
            {VALUES.map((v, i) => (
              <div key={v.title} className="reveal bg-ink p-10">
                <span className="font-serif text-3xl text-teal-soft/70">0{i + 1}</span>
                <h3 className="mt-4 font-serif text-xl text-sand md:text-2xl">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-sand/60">{v.text}</p>
              </div>
            ))}
          </div>
          <div className="reveal mt-14 text-center">
            <p className="mx-auto max-w-2xl font-serif italic text-xl leading-relaxed text-sand/80 md:text-2xl">
              “Your transformation, trusted across borders.”
            </p>
            <Link to="/contact" className="btn-gold mt-10">{t.cta.consult} <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
