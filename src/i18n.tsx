import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Lang = 'en' | 'ar' | 'tr';

const dict = {
  en: {
    nav: { procedures: 'Procedures', destinations: 'Destinations', surgeons: 'Surgeon Network', journey: 'The Journey', results: 'Results', about: 'About', journal: 'Journal', contact: 'Contact', consultation: 'Begin Your Consultation', menu: 'Menu' },
    cta: { consult: 'Begin Your Consultation', request: 'Request a Private Consultation', explore: 'Explore Procedures', whatsapp: 'Message us on WhatsApp', call: 'Call our concierge' },
    footer: { tagline: 'Beauty Without Borders', newsletter: 'Private notes on aesthetic travel, a few times a year.', subscribe: 'Subscribe', email: 'Your email address', legal: 'Legal', explore: 'Explore', company: 'Company', rights: 'All rights reserved.', disclaimer: 'Liliav is an independent brokerage and concierge service. We do not provide medical advice, perform surgery, or guarantee outcomes. All procedures are performed by independent, licensed surgeons at accredited facilities. Information on this site is general in nature; final guidance comes from your consulting surgeon.' },
    form: { name: 'Full name', email: 'Email', phone: 'Phone / WhatsApp', country: 'Country of residence', procedure: 'Procedure(s) of interest', destination: 'Preferred destination', message: 'Your message', send: 'Request My Private Consultation', sent: 'Thank you. Your request has been noted — a coordinator will reach out within one business day.', step: 'Step', of: 'of', next: 'Continue', back: 'Back', any: 'No preference — advise me' },
    trust: { board: 'Board-certified surgeon network', jci: 'JCI / ISAPS-accredited partners', hipaa: 'HIPAA-compliant data handling', concierge: '24/7 trilingual concierge' },
  },
  ar: {
    nav: { procedures: 'العمليات', destinations: 'الوجهات', surgeons: 'شبكة الجراحين', journey: 'الرحلة', results: 'النتائج', about: 'من نحن', journal: 'المجلة', contact: 'اتصل بنا', consultation: 'ابدأ استشارتك', menu: 'القائمة' },
    cta: { consult: 'ابدأ استشارتك', request: 'اطلب استشارة خاصة', explore: 'استكشف العمليات', whatsapp: 'راسلنا عبر واتساب', call: 'اتصل بكونسيرج' },
    footer: { tagline: 'الجمال بلا حدود', newsletter: 'ملاحظات خاصة حول السفر العلاجي، عدة مرات في السنة.', subscribe: 'اشترك', email: 'بريدك الإلكتروني', legal: 'قانوني', explore: 'استكشف', company: 'الشركة', rights: 'جميع الحقوق محفوظة.', disclaimer: 'ليلياف شركة وساطة وكونسيرج مستقلة. نحن لا نقدم استشارات طبية ولا نجري عمليات جراحية ولا نضمن النتائج. جميع العمليات يجريها جراحون مستقلون مرخصون في منشآت معتمدة. المعلومات على هذا الموقع عامة؛ التوجيه النهائي يأتي من الجراح المشرف.' },
    form: { name: 'الاسم الكامل', email: 'البريد الإلكتروني', phone: 'الهاتف / واتساب', country: 'بلد الإقامة', procedure: 'العملية المطلوبة', destination: 'الوجهة المفضلة', message: 'رسالتك', send: 'اطلب استشارتي الخاصة', sent: 'شكراً لك. تم تسجيل طلبك — سيتواصل معك منسق خلال يوم عمل واحد.', step: 'الخطوة', of: 'من', next: 'متابعة', back: 'رجوع', any: 'لا تفضيل — انصحني' },
    trust: { board: 'شبكة جراحين معتمدين', jci: 'شركاء معتمدون من JCI / ISAPS', hipaa: 'حماية بيانات وفق HIPAA', concierge: 'كونسيرج ثلاثي اللغات ٢٤/٧' },
  },
  tr: {
    nav: { procedures: 'Prosedürler', destinations: 'Destinasyonlar', surgeons: 'Cerrah Ağı', journey: 'Yolculuk', results: 'Sonuçlar', about: 'Hakkımızda', journal: 'Dergi', contact: 'İletişim', consultation: 'Danışmanlığa Başlayın', menu: 'Menü' },
    cta: { consult: 'Danışmanlığa Başlayın', request: 'Özel Danışmanlık Talep Edin', explore: 'Prosedürleri Keşfedin', whatsapp: 'WhatsApp’tan yazın', call: 'Konsiyerjimizi arayın' },
    footer: { tagline: 'Sınırların Ötesinde Güzellik', newsletter: 'Estetik seyahat üzerine özel notlar, yılda birkaç kez.', subscribe: 'Abone Ol', email: 'E-posta adresiniz', legal: 'Yasal', explore: 'Keşfet', company: 'Şirket', rights: 'Tüm hakları saklıdır.', disclaimer: 'Liliav bağımsız bir aracılık ve konsiyerj hizmetidir. Tıbbi tavsiye vermez, ameliyat yapmaz ve sonuç garantisi vermez. Tüm işlemler, akredite tesislerde bağımsız ve lisanslı cerrahlar tarafından gerçekleştirilir. Bu sitedeki bilgiler genel niteliktedir; nihai yönlendirme danışan cerrahınızdan gelir.' },
    form: { name: 'Ad Soyad', email: 'E-posta', phone: 'Telefon / WhatsApp', country: 'İkamet ülkesi', procedure: 'İlgilendiğiniz prosedür(ler)', destination: 'Tercih edilen destinasyon', message: 'Mesajınız', send: 'Özel Danışmanlığımı Talep Ediyorum', sent: 'Teşekkürler. Talebiniz alındı — bir koordinatör bir iş günü içinde size ulaşacak.', step: 'Adım', of: '/', next: 'Devam', back: 'Geri', any: 'Tercihim yok — bana önerin' },
    trust: { board: 'Kurul sertifikalı cerrah ağı', jci: 'JCI / ISAPS akrediteli ortaklar', hipaa: 'HIPAA uyumlu veri koruması', concierge: '7/24 üç dilli konsiyerj' },
  },
} as const;

export type Dict = (typeof dict)['en'];

interface LangCtx { lang: Lang; setLang: (l: Lang) => void; t: Dict; rtl: boolean }

const Ctx = createContext<LangCtx>({ lang: 'en', setLang: () => {}, t: dict.en, rtl: false });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');
  const rtl = lang === 'ar';
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = rtl ? 'rtl' : 'ltr';
  }, [lang, rtl]);
  return <Ctx.Provider value={{ lang, setLang, t: dict[lang] as Dict, rtl }}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);

export const LANGS: { id: Lang; label: string }[] = [
  { id: 'en', label: 'EN' },
  { id: 'ar', label: 'عربي' },
  { id: 'tr', label: 'TR' },
];
