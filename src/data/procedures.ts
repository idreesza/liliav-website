export interface PriceRange { usa: string; turkey: string; lebanon: string }
export interface Faq { q: string; a: string }

export interface Procedure {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  idealCandidate: string[];
  recovery: { phase: string; detail: string }[];
  price: PriceRange;
  priceNote?: string;
  faqs: Faq[];
}

export const CATEGORIES = [
  { id: 'face', name: 'Face & Head', blurb: 'Rhinoplasty, facelifts, eyelid surgery and refined facial contouring by surgeons who specialize in natural, structural results.' },
  { id: 'breast', name: 'Breast', blurb: 'Augmentation, lifts, reductions and revisions — planned around proportion, comfort and long-term wellbeing.' },
  { id: 'body', name: 'Body', blurb: 'Liposuction, abdominoplasty, lifts and full-body contouring with recovery planned as carefully as the surgery itself.' },
  { id: 'hair', name: 'Hair Restoration', blurb: 'FUE and DHI transplantation from clinics that treat hairlines as design, not volume.' },
  { id: 'non-surgical', name: 'Non-Surgical', blurb: 'Injectables, thread lifts and advanced skin treatments with little or no downtime.' },
] as const;

export type CategoryId = (typeof CATEGORIES)[number]['id'];

const standardFaqs = (name: string): Faq[] => [
  {
    q: `How do I choose between the USA, Turkey, and Lebanon for ${name.toLowerCase()}?`,
    a: 'Each region offers excellent, accredited care. Turkey is known for high-volume specialist experience and value, Lebanon for boutique, surgeon-led practices and Middle Eastern hospitality, and the USA for proximity if you are based there. Your Liliav coordinator will present surgeon profiles and quotes from all three so you can compare calmly.',
  },
  {
    q: 'Are the prices shown final?',
    a: 'No. The ranges shown are indicative starting points gathered across our partner network. Your final quote depends on the clinic, the surgeon, the technique, and your individual anatomy. You will always receive a written, itemized quote before committing to anything.',
  },
  {
    q: 'Who performs the surgery?',
    a: 'Liliav does not perform surgery. We are an independent brokerage that connects you with vetted, board-certified surgeons at accredited clinics and hospitals. Your procedure is performed by the licensed surgeon you choose.',
  },
  {
    q: 'What support do I receive while abroad?',
    a: 'A dedicated, trilingual coordinator (English, Arabic, Turkish), airport pickup, translator support at appointments, vetted accommodation or recovery-retreat options, and scheduled aftercare check-ins — before, during, and long after you return home.',
  },
];

const std = (a: string, b: string, c: string): PriceRange => ({ usa: a, turkey: b, lebanon: c });

export const PROCEDURES: Procedure[] = [
  // ————— FACE & HEAD —————
  {
    slug: 'rhinoplasty', name: 'Rhinoplasty', category: 'face',
    tagline: 'Nose reshaping, refined to your face — never a template.',
    description: 'Rhinoplasty reshapes the bone and cartilage of the nose to bring it into quiet harmony with the rest of the face. Our partner surgeons favor structural, preservation-minded techniques that protect breathing function and age gracefully, whether your goal is subtle refinement, correction of a previous surgery, or improved airflow.',
    idealCandidate: ['Adults in good general health with fully developed nasal structure', 'Concerned by a dorsal hump, asymmetry, a wide or drooping tip, or breathing difficulty', 'Seeking improvement rather than a "different" nose', 'Realistic about healing — final refinement can take 12 months'],
    recovery: [
      { phase: 'Days 1–7', detail: 'Splint in place; swelling and bruising around the eyes peak at 48–72 hours. Rest with the head elevated.' },
      { phase: 'Week 2', detail: 'Splint and any external sutures removed. Most patients feel comfortable appearing in public; desk work resumes.' },
      { phase: 'Weeks 3–6', detail: 'Bruising resolves; light exercise resumes. The nose already looks presentable though internal swelling persists.' },
      { phase: 'Months 3–12', detail: 'Subtle swelling — especially at the tip — gradually settles. Final refinement is typically judged at one year.' },
    ],
    price: std('$7,500 – $15,000+', '$2,500 – $5,500', '$2,000 – $4,500'),
    faqs: standardFaqs('rhinoplasty'),
  },
  {
    slug: 'facelift', name: 'Facelift (Rhytidectomy)', category: 'face',
    tagline: 'Lifting structure, not stretching skin.',
    description: 'A modern facelift repositions the deeper layers of the face — the SMAS and deep plane — rather than simply tightening skin. The result is a rested, unoperated look: jawline definition restored, midface gently elevated, with scars concealed around the ear and hairline.',
    idealCandidate: ['Typically 45–70 with sagging along the jawline, jowls, or neck', 'Good skin elasticity and bone structure', 'Non-smoker or willing to stop well before surgery', 'Seeking to look refreshed — like themselves on a very good year'],
    recovery: [
      { phase: 'Days 1–10', detail: 'Dressings and drains (if used) removed early; swelling and tightness are expected. Quiet rest at your hotel or retreat.' },
      { phase: 'Week 2–3', detail: 'Sutures out; bruising fades. Most patients return to social life with light camouflage makeup.' },
      { phase: 'Weeks 4–6', detail: 'Return to exercise. Numbness around the ears gradually recedes.' },
      { phase: 'Months 3–12', detail: 'Scars soften and fade; the final, settled result emerges.' },
    ],
    price: std('$12,000 – $30,000+', '$4,500 – $9,000', '$4,000 – $8,000'),
    faqs: standardFaqs('facelift surgery'),
  },
  {
    slug: 'blepharoplasty', name: 'Blepharoplasty (Eyelid Surgery)', category: 'face',
    tagline: 'The smallest surgery with the largest effect on how rested you look.',
    description: 'Upper and lower blepharoplasty removes or repositions excess skin and fat around the eyes, softening heaviness and under-eye bags. Done well, nobody knows you had surgery — they only notice you look well-rested.',
    idealCandidate: ['Hooded upper lids or persistent under-eye bags', 'Vision unaffected by medical eye conditions', 'Realistic expectations about scars (hidden in the lid crease)', 'Non-smoker preferred for clean healing'],
    recovery: [
      { phase: 'Days 1–5', detail: 'Cool compresses; swelling and mild bruising peak early. Reading and screens are fine within days.' },
      { phase: 'Week 1–2', detail: 'Stitches removed around day 5–7. Most return to work within 10 days.' },
      { phase: 'Weeks 3–6', detail: 'Incisions fade from pink to barely visible; exercise resumes.' },
      { phase: 'Month 3+', detail: 'Final contour settled; scars continue to refine for up to a year.' },
    ],
    price: std('$4,000 – $9,000', '$1,800 – $3,500', '$1,500 – $3,000'),
    faqs: standardFaqs('eyelid surgery'),
  },
  {
    slug: 'brow-lift', name: 'Brow Lift', category: 'face',
    tagline: 'Opening the eyes by lifting what time has lowered.',
    description: 'A brow lift elevates a heavy or low-set brow, softening forehead lines and restoring openness to the upper face. Endoscopic techniques allow our partner surgeons to work through small, hidden incisions with minimal downtime.',
    idealCandidate: ['Low or asymmetric brow creating a tired or stern look', 'Deep forehead creases or frown lines', 'Often combined thoughtfully with blepharoplasty', 'Good general health and realistic expectations'],
    recovery: [
      { phase: 'Days 1–7', detail: 'Forehead swelling and tightness; keep the head elevated. Temporary numbness is common.' },
      { phase: 'Week 2', detail: 'Clips or sutures removed; most return to desk work.' },
      { phase: 'Weeks 3–6', detail: 'Sensation gradually returns; light exercise resumes.' },
      { phase: 'Month 3+', detail: 'Final brow position settled; hairline incisions fade.' },
    ],
    price: std('$6,000 – $12,000', '$2,200 – $4,500', '$2,000 – $4,000'),
    faqs: standardFaqs('a brow lift'),
  },
  {
    slug: 'neck-lift', name: 'Neck Lift', category: 'face',
    tagline: 'A clean jawline, quietly restored.',
    description: 'A neck lift addresses loose skin, banding, and fullness beneath the chin — often through platysmaplasty and precise liposuction. The goal is a defined cervicomental angle that reads as fitness and good genes, not surgery.',
    idealCandidate: ['Loose neck skin, banding, or fullness under the chin', 'Stable weight and good skin quality', 'Often paired with a lower facelift for harmony', 'Non-smoker for optimal healing'],
    recovery: [
      { phase: 'Days 1–7', detail: 'Compression garment worn; swelling and a feeling of tightness are normal.' },
      { phase: 'Week 2', detail: 'Sutures removed; most patients presentable for work.' },
      { phase: 'Weeks 3–6', detail: 'Contour sharpens as swelling recedes; exercise resumes.' },
      { phase: 'Month 3+', detail: 'Final definition visible; small incisions under the chin fade.' },
    ],
    price: std('$7,000 – $14,000', '$2,800 – $5,500', '$2,500 – $5,000'),
    faqs: standardFaqs('a neck lift'),
  },
  {
    slug: 'genioplasty', name: 'Chin & Jaw Contouring', category: 'face',
    tagline: 'Profile architecture, in balance.',
    description: 'Genioplasty and jaw contouring refine the lower third of the face — advancing, reducing, or reshaping the chin and sharpening the jawline. Approaches range from sliding genioplasty to custom implants and precision liposuction.',
    idealCandidate: ['Recessed, prominent, or asymmetric chin', 'Desire for a stronger or more refined jawline', 'Stable dental health; bite assessed where relevant', 'Often combined with rhinoplasty for profile balance'],
    recovery: [
      { phase: 'Days 1–7', detail: 'Swelling of the lower face; soft diet if intraoral incisions are used.' },
      { phase: 'Week 2', detail: 'Most swelling subsides; return to desk work.' },
      { phase: 'Weeks 3–6', detail: 'Normal diet and exercise resume; contour refines.' },
      { phase: 'Month 3+', detail: 'Final bony and soft-tissue contour settled.' },
    ],
    price: std('$6,000 – $14,000', '$2,500 – $5,500', '$2,200 – $5,000'),
    faqs: standardFaqs('chin and jaw contouring'),
  },
  {
    slug: 'otoplasty', name: 'Otoplasty (Ear Surgery)', category: 'face',
    tagline: 'A small change, carried with quiet confidence.',
    description: 'Otoplasty reshapes or repositions prominent ears, setting them closer to the head through incisions hidden behind the ear. It is one of the most satisfying, low-downtime procedures in aesthetic surgery — for adults and, in some practices, children.',
    idealCandidate: ['Prominent or asymmetric ears', 'Good general health; cartilage assessed at consultation', 'Adults, or children once ear cartilage is sufficiently developed', 'Seeking natural positioning, not "pinned" ears'],
    recovery: [
      { phase: 'Days 1–7', detail: 'Head bandage worn initially, then a headband at night. Mild soreness managed easily.' },
      { phase: 'Week 2', detail: 'Return to work or school; swelling recedes.' },
      { phase: 'Weeks 3–6', detail: 'Contact sports paused; the headband continues at night.' },
      { phase: 'Month 3+', detail: 'Final position stable; scars hidden behind the ear fade.' },
    ],
    price: std('$4,000 – $8,000', '$1,500 – $3,000', '$1,400 – $2,800'),
    faqs: standardFaqs('ear surgery'),
  },
  {
    slug: 'buccal-fat-removal', name: 'Buccal Fat Removal', category: 'face',
    tagline: 'Sculpting the midface with restraint.',
    description: 'Buccal fat removal reduces fullness in the lower cheek through a small incision inside the mouth — no visible scar. Our partner surgeons approach it conservatively, removing only what the face can spare, so results age well.',
    idealCandidate: ['Persistent lower-cheek fullness despite a healthy weight', 'Good skin elasticity', 'Understands the face naturally loses volume with age — restraint matters', 'Non-smoker preferred'],
    recovery: [
      { phase: 'Days 1–5', detail: 'Internal swelling and a soft diet; dissolvable sutures inside the mouth.' },
      { phase: 'Week 2', detail: 'Most external swelling gone; normal routine resumes.' },
      { phase: 'Weeks 3–6', detail: 'Cheek contour gradually refines.' },
      { phase: 'Month 3–6', detail: 'Final slimming effect visible as residual swelling settles.' },
    ],
    price: std('$3,500 – $7,000', '$1,200 – $2,500', '$1,100 – $2,200'),
    faqs: standardFaqs('buccal fat removal'),
  },
  // ————— BREAST —————
  {
    slug: 'breast-augmentation', name: 'Breast Augmentation', category: 'breast',
    tagline: 'Proportion first. Always.',
    description: 'Breast augmentation enhances volume and shape with implants or, in select cases, fat transfer. Our partner surgeons plan from your chest anatomy outward — implant profile, placement, and incision chosen for a result that belongs to your frame.',
    idealCandidate: ['Adults in good health seeking enhanced volume or symmetry', 'Fully developed breast tissue', 'Realistic about implant maintenance over a lifetime', 'Non-smoker or willing to pause around surgery'],
    recovery: [
      { phase: 'Days 1–5', detail: 'Tightness and soreness managed with medication; a support bra worn continuously.' },
      { phase: 'Week 1–2', detail: 'Return to desk work; driving once off pain medication.' },
      { phase: 'Weeks 3–6', detail: 'Implants begin to settle ("drop and fluff"); exercise phased back in.' },
      { phase: 'Month 3+', detail: 'Final position and softness achieved; scars continue to fade.' },
    ],
    price: std('$6,500 – $12,000+', '$3,000 – $5,500', '$2,800 – $5,000'),
    faqs: standardFaqs('breast augmentation'),
  },
  {
    slug: 'breast-lift', name: 'Breast Lift (Mastopexy)', category: 'breast',
    tagline: 'Restoring the shape you remember.',
    description: 'A mastopexy elevates and reshapes the breast — repositioning the nipple, tightening the envelope, restoring upper-pole fullness. It can be performed alone or combined with a modest implant for volume.',
    idealCandidate: ['Sagging or deflated shape after pregnancy, weight change, or time', 'Nipples sitting at or below the breast fold', 'Stable weight', 'Finished with breastfeeding for at least six months'],
    recovery: [
      { phase: 'Days 1–7', detail: 'Support garment worn; swelling and tightness expected.' },
      { phase: 'Week 2', detail: 'Most patients return to non-physical work.' },
      { phase: 'Weeks 3–6', detail: 'Swelling recedes; shape refines; exercise resumes gradually.' },
      { phase: 'Month 3–12', detail: 'Scars soften from pink to pale; final shape settled.' },
    ],
    price: std('$8,000 – $15,000', '$3,200 – $6,000', '$3,000 – $5,500'),
    faqs: standardFaqs('a breast lift'),
  },
  {
    slug: 'breast-reduction', name: 'Breast Reduction', category: 'breast',
    tagline: 'Relief you can feel; proportion you can see.',
    description: 'Breast reduction removes excess tissue and skin to relieve neck, shoulder, and back strain while creating a lighter, lifted shape. For many patients it is as much a quality-of-life procedure as an aesthetic one.',
    idealCandidate: ['Physical discomfort — neck, back, shoulder grooves, rashes', 'Activity limited by breast size', 'Stable weight and good general health', 'Understanding of scarring and possible changes to sensation or breastfeeding'],
    recovery: [
      { phase: 'Days 1–7', detail: 'Rest with a support bra; immediate relief from weight is often noticed at once.' },
      { phase: 'Week 2', detail: 'Return to light work; swelling and bruising fade.' },
      { phase: 'Weeks 3–6', detail: 'Gradual return to exercise; shape settles upward.' },
      { phase: 'Month 3–12', detail: 'Scars mature and fade; final size stable.' },
    ],
    price: std('$8,000 – $16,000', '$3,000 – $5,800', '$2,800 – $5,200'),
    faqs: standardFaqs('breast reduction'),
  },
  {
    slug: 'breast-implant-revision', name: 'Breast Implant Revision', category: 'breast',
    tagline: 'Second surgery, done once — properly.',
    description: 'Revision surgery replaces, repositions, or removes implants — addressing capsular contracture, rupture, malposition, or simply a change of mind. It demands more planning than a first augmentation, and our partner surgeons treat it accordingly.',
    idealCandidate: ['Capsular contracture, rupture, rippling, or malposition', 'Desire to change size or switch implant type', 'Older implants approaching exchange age', 'Willingness for a detailed surgical plan — revisions are bespoke'],
    recovery: [
      { phase: 'Days 1–7', detail: 'Similar to a first augmentation; possibly easier if the pocket already exists.' },
      { phase: 'Week 2', detail: 'Return to desk work; support bra continues.' },
      { phase: 'Weeks 3–6', detail: 'Exercise phased back in; new contour settles.' },
      { phase: 'Month 3+', detail: 'Final result judged; scars (often using old incision lines) fade.' },
    ],
    price: std('$8,000 – $18,000', '$3,500 – $7,000', '$3,200 – $6,500'),
    faqs: standardFaqs('implant revision'),
  },
  // ————— BODY —————
  {
    slug: 'liposuction', name: 'Liposuction', category: 'body',
    tagline: 'Sculpting what diet cannot reach.',
    description: 'Liposuction removes stubborn, diet-resistant fat — abdomen, flanks, thighs, arms, chin — through fine cannulas and tiny incisions. Modern techniques (VASER, power-assisted) allow smoother contours and gentler recovery.',
    idealCandidate: ['Near a stable, healthy weight with localized fat pockets', 'Good skin elasticity for smooth re-draping', 'Not a weight-loss method — a contouring one', 'Committed to compression garments during recovery'],
    recovery: [
      { phase: 'Days 1–7', detail: 'Compression garment worn; swelling, bruising, and fluid drainage are normal.' },
      { phase: 'Week 2', detail: 'Return to desk work; walking encouraged from day one.' },
      { phase: 'Weeks 3–6', detail: 'Bruising fades; exercise resumes; early contour visible.' },
      { phase: 'Month 3–6', detail: 'Final contour emerges as residual swelling resolves.' },
    ],
    price: std('$5,000 – $12,000', '$2,000 – $4,500', '$1,800 – $4,000'),
    faqs: standardFaqs('liposuction'),
  },
  {
    slug: 'tummy-tuck', name: 'Tummy Tuck (Abdominoplasty)', category: 'body',
    tagline: 'Restoring the core — inside and out.',
    description: 'Abdominoplasty removes loose skin, repairs separated abdominal muscles (diastasis recti), and recontours the waist. It is the definitive procedure after pregnancy or major weight change, and recovery is planned with real care.',
    idealCandidate: ['Loose abdominal skin or muscle separation after pregnancy or weight loss', 'Stable weight near goal', 'Not planning further pregnancies (ideally)', 'Prepared for a genuine two-week recovery'],
    recovery: [
      { phase: 'Days 1–10', detail: 'Walking slightly flexed at the waist; drains typically removed within the first week or two.' },
      { phase: 'Week 2–3', detail: 'Standing straight; return to desk work.' },
      { phase: 'Weeks 4–8', detail: 'Core engagement returns gradually; scar care begins.' },
      { phase: 'Month 3–12', detail: 'Scar flattens and fades; final flat contour visible.' },
    ],
    price: std('$8,000 – $18,000', '$3,000 – $6,500', '$2,800 – $6,000'),
    faqs: standardFaqs('a tummy tuck'),
  },
  {
    slug: 'bbl', name: 'Brazilian Butt Lift (BBL)', category: 'body',
    tagline: 'Your own tissue, artfully re-placed.',
    description: 'A BBL harvests fat by liposuction — typically from the abdomen, flanks, and back — and transfers it to the buttocks for natural volume and shape. Safety protocols matter enormously here; our partner clinics follow strict ultrasound-guided, subcutaneous-only injection standards.',
    idealCandidate: ['Sufficient donor fat for harvest', 'Desire for improved hip-to-waist proportion', 'Stable weight', 'Committed to the sitting restrictions of early recovery'],
    recovery: [
      { phase: 'Days 1–14', detail: 'No direct sitting on the buttocks; a BBL pillow and side/stomach sleeping.' },
      { phase: 'Week 2–3', detail: 'Return to desk work with pillow modifications.' },
      { phase: 'Weeks 4–8', detail: 'Gradual normal sitting; swelling recedes; garment continues.' },
      { phase: 'Month 3–6', detail: 'Fat survival stabilizes — the lasting result becomes clear.' },
    ],
    price: std('$8,000 – $16,000', '$3,500 – $7,000', '$3,200 – $6,500'),
    faqs: standardFaqs('a Brazilian butt lift'),
  },
  {
    slug: 'mommy-makeover', name: 'Mommy Makeover', category: 'body',
    tagline: 'One anesthesia. One recovery. Your body, returned.',
    description: 'A mommy makeover combines procedures — typically a tummy tuck, breast lift or augmentation, and liposuction — into a single operation and recovery. It is planned conservatively, staged when safety requires, and supported by full concierge care.',
    idealCandidate: ['Finished with childbearing and breastfeeding', 'Multiple concerns across abdomen and breasts', 'Good general health for a longer combined operation', 'Support at home (or a recovery retreat) for the first two weeks'],
    recovery: [
      { phase: 'Days 1–10', detail: 'The most demanding window — rest, help at home, drains and garments as directed.' },
      { phase: 'Week 2–3', detail: 'Moving comfortably; return to light desk work.' },
      { phase: 'Weeks 4–8', detail: 'Exercise phased back; lifting restrictions lift gradually.' },
      { phase: 'Month 3–12', detail: 'All contours settle; scars mature over the year.' },
    ],
    price: std('$15,000 – $30,000+', '$6,000 – $12,000', '$5,500 – $11,000'),
    faqs: standardFaqs('a mommy makeover'),
  },
  {
    slug: 'body-lift', name: 'Body Lift', category: 'body',
    tagline: 'The final chapter of a weight-loss journey.',
    description: 'A circumferential body lift removes redundant skin around the abdomen, waist, hips, and buttocks — most often after major weight loss. It is transformative surgery, planned with serious attention to safety and staging.',
    idealCandidate: ['Significant loose skin after massive weight loss', 'Weight stable for 6–12 months', 'Good nutrition and protein status', 'Realistic about the circumferential scar and longer recovery'],
    recovery: [
      { phase: 'Weeks 1–2', detail: 'Genuine rest; drains, garments, and careful positioning.' },
      { phase: 'Week 3–4', detail: 'Walking normally; return to light work.' },
      { phase: 'Weeks 6–12', detail: 'Exercise rebuilds gradually; swelling continues to settle.' },
      { phase: 'Month 6–18', detail: 'Scars mature across a long arc; final silhouette stable.' },
    ],
    price: std('$15,000 – $35,000+', '$6,500 – $13,000', '$6,000 – $12,000'),
    faqs: standardFaqs('a body lift'),
  },
  {
    slug: 'arm-lift', name: 'Arm Lift (Brachioplasty)', category: 'body',
    tagline: 'Sleeveless, without a second thought.',
    description: 'Brachioplasty removes loose skin and fat from the upper arm, restoring a firm line from shoulder to elbow. The trade-off — a scar along the inner arm — is discussed candidly at consultation.',
    idealCandidate: ['Loose upper-arm skin after weight change or aging', 'Stable weight', 'Understands and accepts the inner-arm scar', 'Good general health'],
    recovery: [
      { phase: 'Days 1–7', detail: 'Compression sleeves worn; arms elevated when resting.' },
      { phase: 'Week 2', detail: 'Return to desk work; lifting restricted.' },
      { phase: 'Weeks 3–6', detail: 'Fuller activity resumes; swelling recedes.' },
      { phase: 'Month 6–12', detail: 'Scar fades along the inner arm over the year.' },
    ],
    price: std('$6,000 – $12,000', '$2,500 – $5,000', '$2,200 – $4,500'),
    faqs: standardFaqs('an arm lift'),
  },
  {
    slug: 'thigh-lift', name: 'Thigh Lift', category: 'body',
    tagline: 'A firm, clean line from hip to knee.',
    description: 'A thigh lift removes loose skin of the inner or outer thigh — common after weight loss — tightening the contour and ending the discomfort of chafing. Incisions are placed to hide within natural creases wherever possible.',
    idealCandidate: ['Loose inner- or outer-thigh skin', 'Stable weight after loss', 'Committed to scar care and compression', 'Realistic about a measured recovery'],
    recovery: [
      { phase: 'Days 1–10', detail: 'Compression garment; walking gently from day one; avoid wide movements.' },
      { phase: 'Week 2–3', detail: 'Return to desk work; swelling peaks then recedes.' },
      { phase: 'Weeks 4–8', detail: 'Exercise phased back; contour refines.' },
      { phase: 'Month 6–12', detail: 'Scars mature; final contour stable.' },
    ],
    price: std('$7,000 – $14,000', '$2,800 – $5,500', '$2,500 – $5,000'),
    faqs: standardFaqs('a thigh lift'),
  },
  // ————— HAIR —————
  {
    slug: 'fue-hair-transplant', name: 'FUE Hair Transplant', category: 'hair',
    tagline: 'Follicle by follicle. Hairline as design.',
    description: 'Follicular Unit Extraction moves individual grafts from the donor zone to thinning areas with no linear scar. Turkey is the world capital of this craft; our partner clinics are chosen for design sense and graft survival, not volume claims.',
    idealCandidate: ['Pattern hair loss with a stable donor area', 'Realistic density expectations', 'Committed to post-op care and, where advised, medical therapy', 'Age and loss pattern assessed honestly at consultation'],
    recovery: [
      { phase: 'Days 1–7', detail: 'Tiny crusts at graft sites; saline sprays; sleeping elevated. No touching.' },
      { phase: 'Week 2', detail: 'Crusts shed; most return to work; gentle washing normal.' },
      { phase: 'Weeks 3–8', detail: 'Transplanted hairs shed — expected. Follicles rest before regrowth.' },
      { phase: 'Month 6–12', detail: 'Visible regrowth builds; final density judged at 12–18 months.' },
    ],
    price: std('$6,000 – $15,000', '$1,800 – $4,000', '$1,800 – $3,800'),
    faqs: standardFaqs('an FUE hair transplant'),
  },
  {
    slug: 'dhi-hair-transplant', name: 'DHI Hair Transplant', category: 'hair',
    tagline: 'Precision placement, one graft at a time.',
    description: 'Direct Hair Implantation places each graft with an implanter pen — no pre-made incisions — allowing precise control of angle, direction, and density. Often preferred for hairline refinement and unshaven sessions.',
    idealCandidate: ['Hairline or part-line refinement goals', 'Desire for an unshaven or partially shaven session', 'Moderate graft counts where precision matters most', 'Stable donor supply'],
    recovery: [
      { phase: 'Days 1–7', detail: 'Crusting and mild swelling; strict no-touch protocol; elevated sleep.' },
      { phase: 'Week 2', detail: 'Crusts gone; presentable in public; gentle washing.' },
      { phase: 'Weeks 3–8', detail: 'Expected shedding of transplanted hairs.' },
      { phase: 'Month 6–12', detail: 'Regrowth thickens; final result at 12–18 months.' },
    ],
    price: std('$7,000 – $16,000', '$2,200 – $4,500', '$2,000 – $4,200'),
    faqs: standardFaqs('a DHI hair transplant'),
  },
  {
    slug: 'beard-eyebrow-transplant', name: 'Beard & Eyebrow Transplant', category: 'hair',
    tagline: 'The frame of the face, restored.',
    description: 'Facial hair transplantation rebuilds patchy beards and thinning brows using fine FUE grafts placed to match natural direction and flow. Small session, remarkable effect on the architecture of the face.',
    idealCandidate: ['Patchy beard growth or thinning eyebrows', 'Adequate donor hair at the scalp', 'Realistic about density building over months', 'No active skin conditions in the area'],
    recovery: [
      { phase: 'Days 1–7', detail: 'Tiny crusts in the treated area; no shaving or rubbing.' },
      { phase: 'Week 2', detail: 'Crusts shed; appearance normal.' },
      { phase: 'Weeks 3–8', detail: 'Transplanted hairs shed before regrowth — expected.' },
      { phase: 'Month 6–12', detail: 'Fuller, natural growth; grooming resumes normally.' },
    ],
    price: std('$4,000 – $9,000', '$1,500 – $3,200', '$1,400 – $3,000'),
    faqs: standardFaqs('a beard or eyebrow transplant'),
  },
  // ————— NON-SURGICAL —————
  {
    slug: 'botox-fillers', name: 'Botox & Dermal Fillers', category: 'non-surgical',
    tagline: 'The art of looking like you simply slept well.',
    description: 'Neuromodulators soften expression lines; fillers restore volume and contour. In skilled hands the result is invisible — colleagues notice you look rested, never that you "had work done." Ideal as a standalone refresh or a surgical adjunct.',
    idealCandidate: ['Expression lines, volume loss, or early sagging', 'Wanting improvement without downtime', 'Pregnant or breastfeeding? Wait.', 'Committed to conservative, layered treatment'],
    recovery: [
      { phase: 'Day 1', detail: 'Tiny injection marks settle within hours; no rubbing the area.' },
      { phase: 'Days 3–14', detail: 'Neuromodulator effect builds; filler settles.' },
      { phase: 'Week 2', detail: 'Full result visible; review and fine-tuning if needed.' },
      { phase: 'Months 4–18', detail: 'Duration varies by product and area; maintenance planned ahead.' },
    ],
    price: std('$400 – $2,000 / session', '$200 – $800 / session', '$180 – $700 / session'),
    faqs: standardFaqs('injectable treatments'),
  },
  {
    slug: 'thread-lift', name: 'Thread Lift', category: 'non-surgical',
    tagline: 'A gentle lift, over lunch.',
    description: 'Dissolvable threads reposition mild sagging of the midface, jawline, or brow and stimulate collagen as they dissolve. It is a subtle, interim option — honest practitioners will tell you what it can and cannot do compared with surgery.',
    idealCandidate: ['Mild to moderate sagging, typically 35–55', 'Not ready for — or not needing — a facelift', 'Accepting of a subtle, temporary result (12–24 months)', 'Good skin quality'],
    recovery: [
      { phase: 'Days 1–3', detail: 'Mild swelling and tenderness; avoid wide facial movements.' },
      { phase: 'Week 1–2', detail: 'Most swelling gone; results visible as tissues settle.' },
      { phase: 'Month 1–3', detail: 'Collagen response builds; the lift refines.' },
      { phase: 'Months 12–24', detail: 'Threads dissolve; effect gradually softens.' },
    ],
    price: std('$2,000 – $6,000', '$900 – $2,500', '$800 – $2,200'),
    faqs: standardFaqs('a thread lift'),
  },
  {
    slug: 'skin-resurfacing', name: 'Skin Resurfacing & Laser', category: 'non-surgical',
    tagline: 'Texture, tone, and light — renewed.',
    description: 'From fractional CO₂ and erbium lasers to medical peels and microneedling, resurfacing rebuilds skin quality — softening lines, scars, and sun damage. Protocols are matched carefully to your skin type, especially for deeper skin tones.',
    idealCandidate: ['Fine lines, acne scarring, sun damage, or uneven tone', 'Realistic about social downtime for deeper treatments', 'Skin type assessed for safe laser selection', 'Committed to sun protection after treatment'],
    recovery: [
      { phase: 'Days 1–5', detail: 'Redness and peeling, like a strong sunburn, for deeper sessions.' },
      { phase: 'Week 1–2', detail: 'Skin re-epithelializes; makeup resumes.' },
      { phase: 'Weeks 3–8', detail: 'Pinkness fades; texture improves steadily.' },
      { phase: 'Month 3–6', detail: 'Collagen remodeling peaks; series sessions planned if needed.' },
    ],
    price: std('$1,000 – $5,000 / session', '$400 – $1,800 / session', '$350 – $1,500 / session'),
    faqs: standardFaqs('skin resurfacing'),
  },
];

export const procedureBySlug = (slug: string) => PROCEDURES.find((p) => p.slug === slug);
export const proceduresByCategory = (cat: string) => PROCEDURES.filter((p) => p.category === cat);
