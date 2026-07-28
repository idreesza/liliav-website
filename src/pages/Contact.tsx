import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router';
import { ArrowLeft, ArrowRight, Check, MessageCircle, Phone } from 'lucide-react';
import { useSEO, useRevealObserver } from '@/hooks/useSEO';
import { PageHero, DisclaimerNote } from '@/components/common';
import { CATEGORIES, PROCEDURES } from '@/data/procedures';
import { DESTINATIONS } from '@/data/destinations';
import { useLang } from '@/i18n';
import { LuxSelect } from '@/components/LuxSelect';
import { PHONE, WA_LINK } from '@/components/layout';

const STEPS = 3;

export default function Contact() {
  const { t } = useLang();
  const [params] = useSearchParams();
  const [step, setStep] = useState(1);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', country: '',
    procedure: params.get('procedure') ?? '',
    destination: params.get('destination') ?? '',
    message: '', consent: false,
  });
  useSEO('Private Consultation — Contact Liliav',
    'Request a free private consultation. Liliav’s trilingual concierge replies within one business day — English, Arabic, or Turkish.');
  useRevealObserver();

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value });

  const valid = useMemo(() => {
    if (step === 1) return form.name.trim().length > 1 && /\S+@\S+\.\S+/.test(form.email);
    if (step === 2) return true;
    return form.consent;
  }, [step, form]);

  const inputCls = 'input-lux-light';
  const labelCls = 'mb-2 block text-[10px] uppercase tracking-[0.2em] text-teal-deep';

  return (
    <>
      <PageHero
        eyebrow="Private Consultation"
        title={<>Begin, <em className="font-serif italic text-gold">quietly.</em></>}
        intro="Three short steps. A coordinator replies within one business day — in English, Arabic, or Turkish. Free of charge, free of pressure."
      />

      <section className="bg-cream py-20 text-charcoal md:py-28">
        <div className="container-lux grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="reveal space-y-10">
              <div>
                <p className="eyebrow-teal">What happens next</p>
                <ol className="mt-6 space-y-5">
                  {['Your request reaches a named coordinator — never a call center.', 'A confidential intake conversation, in your language, within one business day.', 'Secure photo review by surgeons, then curated matches with written quotes.'].map((s, i) => (
                    <li key={s} className="flex gap-4 text-sm leading-relaxed text-charcoal/70">
                      <span className="font-serif text-lg text-gold-deep/70">{String(i + 1).padStart(2, '0')}</span> {s}
                    </li>
                  ))}
                </ol>
              </div>
              <div className="border-t border-charcoal/10 pt-8">
                <p className="eyebrow-teal">Prefer to talk now?</p>
                <a href={`tel:${PHONE.replace(/[^+\d]/g, '')}`} className="mt-4 flex items-center gap-3 text-charcoal/80 hover:text-gold-deep transition-colors">
                  <Phone className="h-4 w-4 text-gold-deep" /> <span className="font-serif text-xl">{PHONE}</span>
                </a>
                <a href={WA_LINK} target="_blank" rel="noreferrer" className="mt-3 flex items-center gap-3 text-charcoal/80 hover:text-gold-deep transition-colors">
                  <MessageCircle className="h-4 w-4 text-gold-deep" /> <span className="text-sm">{t.cta.whatsapp}</span>
                </a>
                <p className="mt-4 text-xs text-charcoal/50">Available around the clock · English / العربية / Türkçe</p>
              </div>
              <DisclaimerNote light />
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="reveal bg-white p-8 shadow-[0_20px_60px_rgba(28,28,28,0.08)] md:p-12">
              {sent ? (
                <div className="py-16 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold">
                    <Check className="h-6 w-6 text-gold-deep" />
                  </div>
                  <h2 className="h-serif mt-6 text-3xl">Received, with thanks.</h2>
                  <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-charcoal/65">{t.form.sent}</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); if (step < STEPS) setStep(step + 1); else setSent(true); }}>
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-teal-deep">{t.form.step} {step} {t.form.of} {STEPS}</p>
                    <div className="flex gap-1.5">
                      {Array.from({ length: STEPS }).map((_, i) => (
                        <span key={i} className={`h-1 w-10 ${i < step ? 'bg-gold' : 'bg-charcoal/10'}`} />
                      ))}
                    </div>
                  </div>

                  {step === 1 && (
                    <div className="mt-8 grid gap-6 md:grid-cols-2">
                      <div className="md:col-span-2"><label className={labelCls}>{t.form.name} *</label><input required value={form.name} onChange={set('name')} className={inputCls} placeholder="Amelia Haddad" /></div>
                      <div><label className={labelCls}>{t.form.email} *</label><input required type="email" value={form.email} onChange={set('email')} className={inputCls} placeholder="you@example.com" /></div>
                      <div><label className={labelCls}>{t.form.phone}</label><input value={form.phone} onChange={set('phone')} className={inputCls} placeholder="+1 …" /></div>
                      <div className="md:col-span-2"><label className={labelCls}>{t.form.country}</label><input value={form.country} onChange={set('country')} className={inputCls} placeholder="United States, UAE, France…" /></div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="mt-8 grid gap-6 md:grid-cols-2">
                      <div>
                        <label className={labelCls}>{t.form.procedure}</label>
                        <LuxSelect
                          tone="light"
                          value={form.procedure}
                          onChange={(v) => setForm({ ...form, procedure: v })}
                          placeholder="Not sure yet — advise me"
                          ariaLabel={t.form.procedure}
                          groups={CATEGORIES.map((c) => ({
                            label: c.name,
                            options: PROCEDURES.filter((p) => p.category === c.id).map((p) => ({ value: p.name, label: p.name })),
                          }))}
                        />
                      </div>
                      <div>
                        <label className={labelCls}>{t.form.destination}</label>
                        <LuxSelect
                          tone="light"
                          value={form.destination}
                          onChange={(v) => setForm({ ...form, destination: v })}
                          placeholder={t.form.any}
                          ariaLabel={t.form.destination}
                          groups={[{ options: DESTINATIONS.map((d) => ({ value: d.name, label: d.name })) }]}
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className={labelCls}>{t.form.message}</label>
                        <textarea rows={5} value={form.message} onChange={set('message')} className={inputCls} placeholder="Tell us what you are considering, your timeline, and anything you would like us to know. Confidential, always." />
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="mt-8 space-y-6">
                      <dl className="grid gap-x-8 gap-y-4 border border-charcoal/10 bg-cream/60 p-6 text-sm md:grid-cols-2">
                        {([['Name', form.name], ['Email', form.email], ['Phone', form.phone || '—'], ['Country', form.country || '—'], ['Procedure', form.procedure || 'To be advised'], ['Destination', form.destination || 'No preference']] as const).map(([k, v]) => (
                          <div key={k}><dt className="text-[10px] uppercase tracking-[0.18em] text-charcoal/45">{k}</dt><dd className="mt-1 text-charcoal/85">{v}</dd></div>
                        ))}
                      </dl>
                      <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-charcoal/70">
                        <input type="checkbox" checked={form.consent} onChange={set('consent')} className="mt-1 accent-[#C9A876]" />
                        <span>I consent to Liliav contacting me about my inquiry and handling my details as described in the Privacy Policy. I understand Liliav is a brokerage, not a medical provider.</span>
                      </label>
                    </div>
                  )}

                  <div className="mt-10 flex items-center justify-between">
                    {step > 1 ? (
                      <button type="button" onClick={() => setStep(step - 1)} className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-charcoal/55 hover:text-charcoal">
                        <ArrowLeft className="h-3.5 w-3.5" /> {t.form.back}
                      </button>
                    ) : <span />}
                    <button disabled={!valid} className="btn-gold-solid disabled:cursor-not-allowed disabled:opacity-40">
                      {step < STEPS ? t.form.next : t.form.send} <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
