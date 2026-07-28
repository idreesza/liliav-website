export interface Destination {
  slug: string;
  name: string;
  tagline: string;
  image: string;
  heroStatement: string;
  why: { title: string; detail: string }[];
  accreditation: string[];
  vetting: string[];
  logistics: { title: string; detail: string }[];
  trustSignals: string[];
  bestFor: string;
}

export const DESTINATIONS: Destination[] = [
  {
    slug: 'usa',
    name: 'United States',
    tagline: 'Home-ground excellence, from Beverly Hills to Manhattan.',
    image: '/images/dest-usa.jpg',
    heroStatement: 'For patients based in North America — or those who simply want the world’s most regulated aesthetic market — our US network spans elite private practices in Los Angeles, New York, and Miami.',
    why: [
      { title: 'The strictest regulatory environment', detail: 'American board certification (ABPS) and AAAASF/AAAHC-accredited surgical facilities represent the most demanding credentialing standard in the world.' },
      { title: 'No language barrier, no jet lag', detail: 'For patients already in North America, world-class surgery may be a domestic flight away — with follow-up care close to home.' },
      { title: 'Sub-specialist depth', detail: 'Revision rhinoplasty, complex facial surgery, and reconstructive-adjacent work benefit from deep sub-specialization in major US centers.' },
    ],
    accreditation: ['American Board of Plastic Surgery (ABPS)', 'AAAASF & AAAHC facility accreditation', 'ISAPS international membership', 'State medical board verification, checked annually'],
    vetting: ['Board certification verified directly with the ABPS', 'Minimum 10 years in independent practice', 'Malpractice and disciplinary history reviewed', 'Facility accreditation confirmed on-site', 'Patient outcome reviews sampled by our medical advisory board'],
    logistics: [
      { title: 'Getting there', detail: 'Direct flights from most global hubs into LAX, JFK, and MIA. Our coordinators arrange airport pickup on request.' },
      { title: 'Staying', detail: 'Partnerships with discreet recovery-friendly hotels and private aftercare suites near each partner practice.' },
      { title: 'Follow-up', detail: 'In-person follow-up is easiest here — ideal for procedures with longer review arcs.' },
    ],
    trustSignals: ['ABPS-certified surgeons only', 'Accredited surgical facilities', 'Transparent US-standard pricing', 'HIPAA-compliant records handling'],
    bestFor: 'Patients in North America, revision cases, and those who prioritize the world’s most regulated surgical environment.',
  },
  {
    slug: 'turkey',
    name: 'Turkey',
    tagline: 'The world’s capital of aesthetic surgery — at honest prices.',
    image: '/images/dest-turkey.jpg',
    heroStatement: 'Istanbul performs more aesthetic procedures than any city on earth. Within that scale, we select only the clinics whose outcomes, accreditations, and ethics would satisfy the most demanding international patient.',
    why: [
      { title: 'Unmatched case volume', detail: 'Turkish partner surgeons perform hundreds of rhinoplasties, hair transplants, and body procedures annually — repetition that refines craft.' },
      { title: 'Exceptional value', detail: 'Typically 50–70% below US pricing for equivalent or superior surgeon experience — with no compromise on facility standards at our vetted partners.' },
      { title: 'A complete hospitality ecosystem', detail: 'JCI-accredited hospitals, five-star recovery hotels, and a medical-tourism infrastructure built over decades.' },
    ],
    accreditation: ['Joint Commission International (JCI)', 'Turkish Society of Plastic, Reconstructive & Aesthetic Surgery', 'ISAPS international membership', 'Ministry of Health medical-tourism authorization'],
    vetting: ['Board certification and specialist training verified', 'Operating privileges at JCI-accredited hospitals confirmed', 'Minimum 10 years and high annual case volume', 'Anesthesia team and ICU backup audited', 'Outcome photography and complication protocols reviewed'],
    logistics: [
      { title: 'Getting there', detail: 'Istanbul is one of the world’s best-connected hubs — direct flights from 300+ cities. Visas are simple e-visas for most nationalities.' },
      { title: 'Staying', detail: 'Partner hotels and recovery suites in Nişantaşı and along the Bosphorus, minutes from our partner clinics.' },
      { title: 'Follow-up', detail: 'Scheduled video follow-ups with your surgeon at 2 weeks, 6 weeks, 6 months, and 1 year.' },
    ],
    trustSignals: ['JCI-accredited hospitals', 'Surgeon-led consultations only', 'All-inclusive written quotes', 'Trilingual patient coordinators'],
    bestFor: 'Rhinoplasty, hair restoration, and body contouring — patients seeking elite experience and value together.',
  },
  {
    slug: 'lebanon',
    name: 'Lebanon',
    tagline: 'Boutique, surgeon-led care in the heart of the Mediterranean.',
    image: '/images/dest-lebanon.jpg',
    heroStatement: 'Beirut has been the aesthetic capital of the Middle East for half a century. Its culture of discreet, surgeon-led boutique practice suits patients who want a named surgeon, a private setting, and warm Arabic hospitality.',
    why: [
      { title: 'A boutique tradition', detail: 'Lebanese aesthetic surgery is built on named surgeons with personal practices — you are a patient of your surgeon, not a clinic volume.' },
      { title: 'Cultural and linguistic ease', detail: 'For Arabic-speaking patients, consultations, consent, and aftercare happen natively in Arabic — nothing is lost in translation.' },
      { title: 'A recovery worth having', detail: 'The Mediterranean coast, mountain retreats, and a legendary hospitality culture make Beirut a genuinely pleasant place to heal.' },
    ],
    accreditation: ['Lebanese Society of Plastic, Reconstructive & Aesthetic Surgery', 'University-hospital affiliations (AUBMC, LAU Medical Center)', 'ISAPS international membership', 'Ministry of Public Health licensure'],
    vetting: ['Specialist certification verified with the Lebanese Order of Physicians', 'Hospital affiliations and operating privileges confirmed', 'Minimum 10 years in practice', 'Anesthesia and facility standards audited in person', 'Reputation cross-checked within the regional surgical community'],
    logistics: [
      { title: 'Getting there', detail: 'Direct flights from across the Gulf, Europe, and beyond into Beirut–Rafic Hariri International. Our team assists with visa guidance where needed.' },
      { title: 'Staying', detail: 'Boutique hotels and serviced apartments in Achrafieh, Downtown, and the coastal corniche — plus mountain recovery retreats.' },
      { title: 'Follow-up', detail: 'In-person reviews for regional patients; structured video follow-up for those further afield.' },
    ],
    trustSignals: ['Named surgeon, named practice', 'Arabic-native consultations', 'Discreet boutique settings', 'Family hospitality culture'],
    bestFor: 'Arabic-speaking patients, facial aesthetics, and anyone who values a personal, surgeon-led boutique experience.',
  },
];

export const destinationBySlug = (slug: string) => DESTINATIONS.find((d) => d.slug === slug);

export interface Article {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  body: { heading?: string; paragraphs: string[] }[];
}

export const ARTICLES: Article[] = [
  {
    slug: 'comparing-recovery-environments',
    title: 'Turkey vs. USA vs. Lebanon: Comparing Recovery Environments',
    category: 'Destinations',
    date: 'July 2026',
    readTime: '7 min read',
    excerpt: 'Where you recover matters almost as much as where you are operated on. A quiet comparison of three very different — and very good — places to heal.',
    image: '/images/journal-1.jpg',
    body: [
      { paragraphs: ['Ask anyone who has had surgery abroad what they remember most, and they rarely mention the operating room. They remember the room they woke up in, the view from the window in the week that followed, and how cared for they felt when they were at their most vulnerable.', 'Recovery environment is not a luxury consideration. Rest, nutrition, low stress, and easy access to your surgical team all measurably influence healing. Here is how our three regions compare, honestly.'] },
      { heading: 'Istanbul: infrastructure built for this', paragraphs: ['No city on earth has more experience hosting surgical recovery. Recovery-oriented hotels near Nişantaşı and the Bosphorus understand drain-friendly pillows, soft-food room service, and discretion. Your coordinator is never more than a few minutes away, and clinics are accustomed to seeing international patients daily in the first week.', 'The trade-off: Istanbul is vast and energetic. Choose accommodation close to your clinic, and let the concierge shield you from the logistics.'] },
      { heading: 'Beirut: recovery as hospitality', paragraphs: ['Lebanon’s boutique scale becomes its advantage after surgery. Surgeons see their own patients for every dressing change. Hotels are small and personal. And the Mediterranean itself — the corniche at dusk, mountain air forty minutes away — offers a kind of rest that is hard to manufacture.', 'For Arabic-speaking patients there is a deeper comfort: every conversation about your body happens in your own language.'] },
      { heading: 'The United States: the comfort of the familiar', paragraphs: ['For North American patients, the strongest recovery environment is often their own home — with the surgical team a short drive away. US aftercare suites and recovery-friendly hotels serve those traveling domestically, but the real advantage is long-term: every follow-up for a year can be in person.', 'The trade-off is cost, and the fact that "recovery at home" too easily becomes "laundry at home." We counsel patients to protect the first week as fiercely abroad as they would at home.'] },
      { heading: 'Our honest advice', paragraphs: ['Choose the environment you can genuinely rest in. Then let structure do the rest: transfers arranged, meals planned, follow-ups scheduled, a coordinator on call. That is what the concierge is for.', 'Wherever you recover, your Liliav aftercare plan travels with you — check-ins at set intervals across the first year, in your language.'] },
    ],
  },
  {
    slug: 'what-to-expect-private-consultation',
    title: 'What to Expect During Your Private Consultation',
    category: 'The Process',
    date: 'June 2026',
    readTime: '5 min read',
    excerpt: 'No pressure, no sales script. Here is exactly what happens — and what should happen — in a first consultation arranged through Liliav.',
    image: '/images/consult.jpg',
    body: [
      { paragraphs: ['A consultation is not a commitment. It is a conversation — the first honest exchange between you and a surgeon about what is possible, what is sensible, and what is not advisable. Here is how ours work.'] },
      { heading: 'Before you speak to a surgeon', paragraphs: ['Your Liliav coordinator first listens: your goals, your history, your timeline, your budget. We then match you with one to three surgeons whose practice genuinely fits — and share their credentials, not our marketing.', 'You send photographs securely through our HIPAA-compliant channel. They are reviewed by the surgeon, never by sales staff.'] },
      { heading: 'The consultation itself', paragraphs: ['Most first consultations happen by video, in your language. Expect the surgeon to examine, ask about your health in detail, and — crucially — to tell you what they would not do. A surgeon who agrees with everything is not consulting; they are selling.', 'You should leave with a clear recommendation, a realistic sense of results, an honest account of risks, and an itemized written quote. All four are non-negotiable in our network.'] },
      { heading: 'After', paragraphs: ['Take your time. We advise every patient to sit with a quote for at least a week. Your coordinator answers questions, arranges second opinions, and never pressures. When you are ready — and only then — we begin planning travel.'] },
    ],
  },
  {
    slug: 'art-of-natural-rhinoplasty',
    title: 'The Art of the Natural Rhinoplasty',
    category: 'Procedures',
    date: 'May 2026',
    readTime: '6 min read',
    excerpt: 'The best nose surgery is the one nobody notices. On preservation techniques, ethnic harmony, and why "smaller" is rarely the brief.',
    image: '/images/texture-silk.jpg',
    body: [
      { paragraphs: ['There is a particular look people fear: the over-operated nose — pinched, upturned, borrowed from someone else’s face. Modern rhinoplasty has moved decisively away from it. The contemporary goal is structural and quiet: a nose that suits your face so completely that it reads as genetics.'] },
      { heading: 'Preservation over reduction', paragraphs: ['Traditional rhinoplasty often removed the dorsal hump and rebuilt the profile. Preservation techniques instead lower and reshape the nose’s own structures, keeping the natural dorsal lines and stronger long-term support. Where suitable, our partner surgeons favor them.', 'The functional dimension matters equally: a beautiful nose that breathes poorly is a failure. Septum, valves, and turbinates are assessed at every consultation in our network.'] },
      { heading: 'Harmony is personal', paragraphs: ['Middle Eastern, Mediterranean, and mixed-heritage faces carry distinctive nasal structures and skin thicknesses. The surgeons we work with across Istanbul, Beirut, and the US bring specific experience in ethnic rhinoplasty — refining while respecting identity.', 'The question is never "what nose do you want?" It is "what does your face need?" The answer emerges from imaging, simulation, and an unhurried conversation.'] },
      { heading: 'A note on patience', paragraphs: ['Rhinoplasty results unfold over a full year, and tip swelling is the last to settle. Patients who understand this timeline are consistently the happiest. Your aftercare plan includes reviews at each stage, so you are never guessing alone.'] },
    ],
  },
  {
    slug: 'traveling-for-surgery-safely',
    title: 'Traveling for Surgery, Safely: A Checklist',
    category: 'Guidance',
    date: 'April 2026',
    readTime: '8 min read',
    excerpt: 'Flights, blood clots, consent forms, companion planning — the unglamorous details that make surgical travel genuinely safe.',
    image: '/images/journey.jpg',
    body: [
      { paragraphs: ['Medical travel is safe when it is planned like medicine and not like tourism. This is the checklist our coordinators work through with every patient — shared here because transparency is the whole point.'] },
      { heading: 'Before you book anything', paragraphs: ['Verify the surgeon, not just the clinic: board certification, hospital privileges, years in practice. Verify the facility: JCI or national accreditation, anesthesia staffing, ICU backup. Get every quote in writing, itemized. If any of these is resisted, walk away — from us or anyone.'] },
      { heading: 'Timing the flight', paragraphs: ['Flying too soon after surgery raises clot risk. Typical minimums we plan around: 5–7 days for facial procedures and hair transplants, 10–14 days for body contouring, with compression stockings and movement on the flight itself. Your surgeon’s clearance governs — always.'] },
      { heading: 'While you are there', paragraphs: ['Bring a companion if you can; if you cannot, use a recovery retreat with nursing cover. Keep your coordinator’s number pinned. Attend every scheduled follow-up before you fly home. Keep all documentation — operative notes, implant cards, medication lists — in your hand luggage.'] },
      { heading: 'When you are home', paragraphs: ['The aftercare arc is where brokerages earn or lose trust. Ours is scheduled at 2 weeks, 6 weeks, 6 months, and 12 months — video reviews with your surgeon, plus a local-care escalation path if anything concerns you between them.'] },
    ],
  },
];

export const articleBySlug = (slug: string) => ARTICLES.find((a) => a.slug === slug);
