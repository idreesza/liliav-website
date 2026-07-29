import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { useLang, LANGS } from '@/i18n';
import { Wordmark } from './common';

export const PHONE = '+1 (254) 435-5877';
export const WA_LINK = 'https://wa.me/12544355877';

function LangSwitch() {
  const { lang, setLang } = useLang();
  return (
    <div className="flex items-center gap-1 text-[11px] tracking-[0.14em]">
      {LANGS.map((l) => (
        <button
          key={l.id}
          onClick={() => setLang(l.id)}
          className={`px-2 py-1 transition-colors ${lang === l.id ? 'text-gold' : 'text-sand/60 hover:text-sand'}`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}

const NAV_MAIN = [
  { to: '/procedures', key: 'procedures' },
  { to: '/destinations', key: 'destinations' },
  { to: '/surgeons', key: 'surgeons' },
  { to: '/journey', key: 'journey' },
] as const;

const NAV_MORE = [
  { to: '/results', key: 'results' },
  { to: '/about', key: 'about' },
  { to: '/journal', key: 'journal' },
  { to: '/contact', key: 'contact' },
] as const;

export function Header() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  useEffect(() => { setOpen(false); }, [loc.pathname]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || open ? 'bg-ink/90 backdrop-blur-md border-b border-sand/10' : 'bg-transparent'}`}>
      <div className="container-lux flex h-[72px] items-center justify-between gap-4">
        <Wordmark />
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_MAIN.map(({ to, key }) => (
            <NavLink key={to} to={to} className={({ isActive }) => `link-quiet ${isActive ? 'text-gold' : ''}`}>
              {t.nav[key]}
            </NavLink>
          ))}
          <button onClick={() => setOpen(!open)} className="link-quiet flex items-center gap-2" aria-label={t.nav.menu}>
            {t.nav.menu} {open ? <X className="h-3.5 w-3.5" /> : <Menu className="h-3.5 w-3.5" />}
          </button>
        </nav>
        <div className="hidden lg:flex items-center gap-5">
          <LangSwitch />
          <a href={`tel:${PHONE.replace(/[^+\d]/g, '')}`} className="hidden xl:flex items-center gap-2 whitespace-nowrap text-[12px] tracking-[0.12em] text-sand/60 hover:text-gold transition-colors">
            <Phone className="h-3.5 w-3.5" /> {PHONE}
          </a>
          <Link to="/contact" className="btn-gold !px-5 !py-2.5">{t.nav.consultation}</Link>
        </div>
        <button className="lg:hidden text-sand" onClick={() => setOpen(!open)} aria-label={t.nav.menu}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-sand/10 bg-ink/95 backdrop-blur-md lg:hidden">
          <div className="container-lux flex flex-col gap-1 py-6">
            {[...NAV_MAIN, ...NAV_MORE].map(({ to, key }) => (
              <NavLink key={to} to={to} className={({ isActive }) => `py-3 text-sm uppercase tracking-[0.18em] ${isActive ? 'text-gold' : 'text-sand/70'}`}>
                {t.nav[key]}
              </NavLink>
            ))}
            <div className="mt-4 flex items-center justify-between border-t border-sand/10 pt-5">
              <LangSwitch />
              <a href={`tel:${PHONE.replace(/[^+\d]/g, '')}`} className="text-sm text-sand/70">{PHONE}</a>
            </div>
            <Link to="/contact" className="btn-gold-solid mt-5">{t.nav.consultation}</Link>
          </div>
        </div>
      )}

      {open && (
        <div className="hidden lg:block border-t border-sand/10 bg-ink/95 backdrop-blur-md">
          <div className="container-lux grid grid-cols-4 gap-8 py-10">
            {NAV_MORE.map(({ to, key }) => (
              <NavLink key={to} to={to} className="group border-l border-sand/10 pl-5">
                <span className="block font-serif text-xl text-sand group-hover:text-gold transition-colors">{t.nav[key]}</span>
                <span className="mt-1 block text-[11px] uppercase tracking-[0.16em] text-sand/55">Liliav</span>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  const { t } = useLang();
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  return (
    <footer className="bg-ink border-t border-sand/10">
      <div className="container-lux py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Wordmark />
            <p className="mt-4 font-serif italic text-lg text-gold/90">{t.footer.tagline}</p>
            <p className="mt-4 text-sm leading-relaxed text-sand/50">
              A private brokerage connecting international patients with vetted, board-certified plastic surgery clinics across the United States, Turkey, and Lebanon.
            </p>
          </div>
          <div className="md:col-span-2">
            <p className="mb-5 text-[11px] font-medium uppercase tracking-widest2 text-[#8FB0C2]">{t.footer.explore}</p>
            <ul className="space-y-3 text-sm text-sand/55">
              <li><Link className="hover:text-gold transition-colors" to="/procedures">{t.nav.procedures}</Link></li>
              <li><Link className="hover:text-gold transition-colors" to="/destinations">{t.nav.destinations}</Link></li>
              <li><Link className="hover:text-gold transition-colors" to="/results">{t.nav.results}</Link></li>
              <li><Link className="hover:text-gold transition-colors" to="/journal">{t.nav.journal}</Link></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="mb-5 text-[11px] font-medium uppercase tracking-widest2 text-[#8FB0C2]">{t.footer.company}</p>
            <ul className="space-y-3 text-sm text-sand/55">
              <li><Link className="hover:text-gold transition-colors" to="/about">{t.nav.about}</Link></li>
              <li><Link className="hover:text-gold transition-colors" to="/surgeons">{t.nav.surgeons}</Link></li>
              <li><Link className="hover:text-gold transition-colors" to="/journey">{t.nav.journey}</Link></li>
              <li><Link className="hover:text-gold transition-colors" to="/contact">{t.nav.contact}</Link></li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <p className="mb-5 text-[11px] font-medium uppercase tracking-widest2 text-[#8FB0C2]">Journal</p>
            <p className="text-sm text-sand/55">{t.footer.newsletter}</p>
            {done ? (
              <p className="mt-4 text-sm text-gold">Thank you — you are on the list.</p>
            ) : (
              <form className="mt-4 flex" onSubmit={(e) => { e.preventDefault(); if (email) setDone(true); }}>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required placeholder={t.footer.email} className="input-lux !border-r-0" />
                <button className="shrink-0 border border-gold px-5 text-[11px] uppercase tracking-[0.2em] text-gold hover:bg-gold hover:text-ink transition-colors">{t.footer.subscribe}</button>
              </form>
            )}
            <div className="mt-6 flex gap-5 text-sand/60">
              {['Instagram', 'Facebook', 'LinkedIn', 'YouTube'].map((s) => (
                <a key={s} href="#" aria-label={s} className="text-[11px] uppercase tracking-[0.14em] hover:text-gold transition-colors">{s}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-14 border-t border-sand/10 pt-8">
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-[11px] uppercase tracking-[0.16em] text-sand/60">
            <Link to="/legal/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="/legal/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
            <Link to="/legal/disclaimer" className="hover:text-gold transition-colors">Medical Disclaimer</Link>
          </div>
          <p className="mt-6 text-xs leading-relaxed text-sand/55">{t.footer.disclaimer}</p>
          <p className="mt-4 text-xs text-sand/55">© {new Date().getFullYear()} Liliav · liliav.com — {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppBubble() {
  const { t } = useLang();
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noreferrer"
      aria-label={t.cta.whatsapp}
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full border border-gold/40 bg-ink/90 py-3 pl-4 pr-4 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all hover:border-gold hover:pr-5"
    >
      <MessageCircle className="h-5 w-5 text-gold" />
      <span className="max-w-0 overflow-hidden text-[11px] uppercase tracking-[0.16em] text-sand/80 transition-all duration-300 group-hover:max-w-[160px]">
        {t.cta.whatsapp}
      </span>
    </a>
  );
}

export function Layout() {
  return (
    <div className="min-h-screen bg-ink">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppBubble />
    </div>
  );
}
