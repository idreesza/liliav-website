import { Navigate, useParams } from 'react-router';
import { useSEO, useRevealObserver } from '@/hooks/useSEO';
import { PageHero } from '@/components/common';

const DOCS: Record<string, { title: string; updated: string; sections: { h: string; p: string[] }[] }> = {
  privacy: {
    title: 'Privacy Policy',
    updated: 'Last updated: July 2026',
    sections: [
      { h: 'Who we are', p: ['Liliav ("we," "our") is an independent medical-travel brokerage and concierge service operating at liliav.com. We connect patients with independent, licensed surgeons and accredited clinics in the United States, Turkey, and Lebanon. We are not a medical provider.'] },
      { h: 'What we collect', p: ['Contact details you provide (name, email, phone, country of residence), the procedures and destinations you ask about, and — only with your explicit consent — photographs and relevant medical history shared for surgeon review. We also collect standard technical data (browser, device, pages visited) to operate and improve the site.'] },
      { h: 'How we use it', p: ['To respond to your inquiry, match you with suitable surgeons, arrange consultations and travel logistics at your request, and provide aftercare coordination. Photographs and medical details are shared only with the specific surgeons you agree to consult, through HIPAA-compliant channels, and are never used for marketing.'] },
      { h: 'What we never do', p: ['We do not sell your data. We do not publish patient imagery. We do not share your details with clinics you have not agreed to consult. Testimonials and imagery on this site are illustrative samples until replaced with verified, consented material.'] },
      { h: 'Retention & your rights', p: ['Inquiry data is retained for up to 24 months, then deleted unless a journey is in progress. You may request access, correction, export, or deletion of your data at any time by writing to privacy@liliav.com. Depending on your jurisdiction (GDPR, CCPA, KVKK, or Lebanese law), additional rights may apply, and we honor them across all regions we serve.'] },
      { h: 'Security', p: ['Data is encrypted in transit and at rest, access is limited to your coordinator and the surgeons you choose, and all staff and partners are bound by confidentiality agreements. Health-related information is handled to HIPAA standards regardless of where you live.'] },
      { h: 'Contact', p: ['Questions about this policy: privacy@liliav.com.'] },
    ],
  },
  terms: {
    title: 'Terms of Service',
    updated: 'Last updated: July 2026',
    sections: [
      { h: 'The service', p: ['Liliav provides brokerage and concierge services: information, surgeon and clinic introductions, quote coordination, travel arrangement assistance, and aftercare coordination. Liliav does not provide medical advice, diagnosis, or treatment, and does not perform or supervise any medical procedure.'] },
      { h: 'No medical relationship', p: ['Use of this site or our services does not create a doctor–patient relationship with Liliav. Your medical relationship is solely with the independent, licensed surgeon and facility you choose. All medical decisions, consent processes, and outcomes are between you and them.'] },
      { h: 'Quotes & pricing', p: ['Price ranges shown on this site are indicative only. Binding quotes are issued in writing by the clinic or surgeon. Liliav’s coordination fee structure is disclosed to you before any commitment; we do not add hidden margins to medical quotes.'] },
      { h: 'Your responsibilities', p: ['You agree to provide accurate health information to consulting surgeons, to follow pre- and post-operative guidance from your medical team, and to make your decision freely. You must be 18 or older to use our services.'] },
      { h: 'Limitation of liability', p: ['To the maximum extent permitted by law, Liliav is not liable for medical outcomes, the acts or omissions of independent clinics and surgeons, or travel disruptions beyond our reasonable control. Our total liability in connection with our coordination services is limited to the fees you paid to Liliav for those services.'] },
      { h: 'Content', p: ['All content on this site — text, imagery, and design — is owned by Liliav and provided for personal, non-commercial use. Imagery on this site is AI-generated artistic material and does not depict real patients or guarantee any aesthetic result.'] },
      { h: 'Governing terms', p: ['These terms are governed by the laws of the State of Delaware, USA, without regard to conflict-of-law rules. Disputes will be resolved through good-faith negotiation first, then binding arbitration. If any clause is unenforceable, the remainder stands.'] },
    ],
  },
  disclaimer: {
    title: 'Medical Disclaimer',
    updated: 'Last updated: July 2026',
    sections: [
      { h: 'Liliav is a facilitator, not a medical provider', p: ['Liliav is an independent brokerage and concierge service. We do not practice medicine, employ the surgeons in our network, own the clinics we introduce, or supervise any procedure. Every medical service is delivered by independent, licensed professionals at independently accredited facilities.'] },
      { h: 'General information only', p: ['Everything on this site — procedure descriptions, recovery timelines, price ranges, and journal articles — is general educational information. It is not medical advice, not a diagnosis, and not a treatment plan. It must not be used to make decisions without consulting a licensed physician.'] },
      { h: 'Outcomes vary; none are guaranteed', p: ['All surgery carries risk, including the risk of unsatisfactory results, complications, and the need for revision. Individual outcomes depend on anatomy, health, technique, and healing, and no outcome is promised or guaranteed by Liliav. Imagery on this site is AI-generated artistic material; it does not depict real patients or achievable results for any individual. Testimonials shown are illustrative samples pending verified reviews.'] },
      { h: 'Candidacy is determined by surgeons only', p: ['Only a licensed consulting surgeon, after examining you and reviewing your history, can determine whether any procedure is appropriate for you. If a surgeon advises against a procedure, that advice governs — regardless of anything written here.'] },
      { h: 'Emergencies', p: ['If you experience a medical emergency at any point before, during, or after a journey, contact local emergency services immediately. Our concierge line supports logistics and coordination; it is not a medical emergency service.'] },
      { h: 'Questions', p: ['Questions about this disclaimer: legal@liliav.com.'] },
    ],
  },
};

export default function Legal() {
  const { doc } = useParams();
  const d = doc ? DOCS[doc] : undefined;
  useSEO(d ? `${d.title} | Liliav` : 'Legal | Liliav', d ? `${d.title} — Liliav, private plastic surgery brokerage.` : undefined);
  useRevealObserver();
  if (!d) return <Navigate to="/" replace />;
  return (
    <>
      <PageHero eyebrow="Legal" title={d.title} intro={d.updated} />
      <section className="bg-cream py-16 text-charcoal md:py-24">
        <div className="container-lux max-w-3xl">
          {d.sections.map((s) => (
            <div key={s.h} className="reveal mb-10">
              <h2 className="font-serif text-2xl">{s.h}</h2>
              {s.p.map((p, i) => <p key={i} className="mt-4 text-[15px] leading-relaxed text-charcoal/70">{p}</p>)}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
