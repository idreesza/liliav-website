import { Link } from 'react-router';
import { useLang } from '@/i18n';

export function Monogram({ className = 'h-8 w-8', dark = false }: { className?: string; dark?: boolean }) {
  const stroke = dark ? '#1C1C1C' : '#C9A876';
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="21" stroke={stroke} strokeWidth="1.4" />
      <circle cx="24" cy="24" r="13" stroke={stroke} strokeWidth="0.8" opacity="0.5" />
      <path d="M24 8v32M8 24h32" stroke={stroke} strokeWidth="0.6" opacity="0.35" />
      <path d="M18 12v22h14" stroke={stroke} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="24" cy="24" r="2" fill={stroke} />
    </svg>
  );
}

export function Wordmark({ dark = false, compact = false }: { dark?: boolean; compact?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="Liliav home">
      <Monogram dark={dark} className={compact ? 'h-7 w-7' : 'h-8 w-8'} />
      <span className={`font-serif text-2xl tracking-wide transition-colors ${dark ? 'text-charcoal group-hover:text-gold-deep' : 'text-sand group-hover:text-gold'}`}>
        Liliav
      </span>
    </Link>
  );
}

export function SectionHead({ eyebrow, title, intro, dark = true, center = false, teal = false }: {
  eyebrow: string; title: React.ReactNode; intro?: string; dark?: boolean; center?: boolean; teal?: boolean;
}) {
  return (
    <div className={`reveal ${center ? 'text-center mx-auto' : ''} max-w-2xl`}>
      <p className={teal ? 'eyebrow-teal' : 'eyebrow'}>{eyebrow}</p>
      <h2 className={`h-serif mt-4 text-3xl md:text-[2.75rem] ${dark ? 'text-sand' : 'text-charcoal'}`}>{title}</h2>
      <div className={`mt-6 ${teal ? 'hairline-teal' : 'hairline'} ${center ? 'mx-auto' : ''}`} />
      {intro && <p className={`mt-6 leading-relaxed ${dark ? 'text-sand/65' : 'text-charcoal/70'}`}>{intro}</p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, intro, image }: { eyebrow: string; title: React.ReactNode; intro?: string; image?: string }) {
  return (
    <section className="relative overflow-hidden bg-ink pt-36 pb-20 md:pt-44 md:pb-28">
      {image && (
        <>
          <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/40" />
        </>
      )}
      <div className="container-lux relative">
        <p className="eyebrow reveal">{eyebrow}</p>
        <h1 className="h-serif reveal mt-5 max-w-3xl text-4xl md:text-6xl text-sand text-balance">{title}</h1>
        {intro && <p className="reveal mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-sand/65">{intro}</p>}
      </div>
    </section>
  );
}

export function TrustBar({ light = false }: { light?: boolean }) {
  const { t } = useLang();
  const items = [t.trust.board, t.trust.jci, t.trust.hipaa, t.trust.concierge];
  return (
    <div className={`border-y ${light ? 'border-charcoal/10 bg-cream-dark/40' : 'border-sand/10 bg-white/[0.02]'}`}>
      <div className="container-lux grid grid-cols-2 gap-y-4 py-6 md:grid-cols-4">
        {items.map((label, i) => (
          <div key={label} className="flex items-center gap-3 px-2">
            <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-teal" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              {i === 0 && <><circle cx="12" cy="12" r="9" /><path d="M8.5 12.5l2.5 2.5 4.5-5" /></>}
              {i === 1 && <><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" /></>}
              {i === 2 && <><rect x="4" y="10" width="16" height="10" rx="1" /><path d="M8 10V7a4 4 0 018 0v3" /></>}
              {i === 3 && <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></>}
            </svg>
            <span className={`text-[11px] uppercase tracking-[0.14em] ${light ? 'text-charcoal/60' : 'text-sand/55'}`}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DisclaimerNote({ light = false, className = '' }: { light?: boolean; className?: string }) {
  return (
    <p className={`text-xs leading-relaxed ${light ? 'text-charcoal/50' : 'text-sand/40'} ${className}`}>
      Information on this page is general in nature and does not constitute medical advice. Outcomes vary by individual.
      Final guidance, candidacy assessment, and pricing always come from a licensed consulting surgeon.
    </p>
  );
}
