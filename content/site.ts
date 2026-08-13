// ---------------------------------------------------------------------------
// SITE CONTENT CONFIG
// ---------------------------------------------------------------------------
// Every fact below that is not independently verifiable is marked
// "PLACEHOLDER — REPLACE". Swap these for Korista's real details before
// launch. Nothing in the components should hardcode business facts directly —
// pull them from here so future edits happen in one place.
// ---------------------------------------------------------------------------

export type BusinessLocation = {
  label: string;
  town: string;
  county: string;
  country: string;
  address: string;
};

// Korista operates from two confirmed locations.
export const locations: BusinessLocation[] = [
  {
    label: "Suneka",
    town: "Suneka",
    county: "Kisii County",
    country: "Kenya",
    address: "Suneka, Kisii County, Kenya",
  },
  {
    label: "Homabay (Sophia)",
    town: "Sophia, Homabay",
    county: "Homabay County",
    country: "Kenya",
    address: "Sophia, Homabay County, Kenya",
  },
];

export const business = {
  name: "Korista Printing Hub",
  tagline: "Printing, Branding & Digital Solutions",
  // Primary/first location — kept for components that only need one line
  // (hero eyebrow, about copy). Use `locations` directly wherever both
  // branches should be listed (footer, contact).
  location: locations[0],
  contact: {
    phoneDisplay: "0113 994 040",
    phoneHref: "tel:+254113994040",
    whatsappHref: "https://wa.me/254113994040",
    whatsappDisplay: "0113 994 040",
    email: "kph.ldtpress@gmail.com",
  },
  payment: {
    // M-Pesa Buy Goods and Services till number
    mpesaTill: "4511834",
  },
  hours: [
    // PLACEHOLDER — REPLACE with confirmed opening hours
    { days: "Monday – Saturday", time: "8:00 AM – 7:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
};

// Korista Training College — a training/education branch alongside the
// printing business. Course names, fees, durations and requirements are
// intentionally left out here until the college confirms them; the UI
// shows an honest "details coming soon, contact admissions" message
// instead of guessing. Swap `highlights` copy for real programme info
// once it's available, and add a `courses` array here when that's ready.
export const college = {
  name: "Korista Training College",
  tagline: "Practical, career-focused training — a Korista branch",
  blurb:
    "Alongside our printing and branding business, Korista also runs a training college offering practical, career-focused programmes. Full course listings, fees and entry requirements are being finalized — reach out to admissions for the latest details.",
  highlights: [
    { icon: "BookOpen", title: "Programmes", body: "Career-focused certificate and diploma courses." },
    { icon: "Clock3", title: "Duration", body: "Flexible programme lengths to suit students." },
    { icon: "Wallet", title: "Fees", body: "Clear fee information — contact admissions to confirm." },
    { icon: "ClipboardCheck", title: "Admissions", body: "Simple application process, start on WhatsApp." },
  ],
  whatsappMessage:
    "Hello Korista Training College Admissions, I'd like more information about your courses.",
};

// Real photography reused from the existing Korista site — no stock or
// AI-generated imagery. Swap paths here as better/replacement photos come in.
export const media = {
  printWorkspace:
    "https://korista.afripixelprojects.com/assets/print-workspace-BPLyMCxP.jpg",
  cyberCafe:
    "https://korista.afripixelprojects.com/assets/cyber-cafe-D_sXtyup.jpg",
  merchandise:
    "https://korista.afripixelprojects.com/assets/merchandise-BSptuiDr.jpg",
  bannerPrinting:
    "https://korista.afripixelprojects.com/assets/banner-printing-pVDG4_EQ.jpg",
  signage:
    "https://korista.afripixelprojects.com/assets/signage-bV-WCoBy.jpg",
};

export type ServiceItem = {
  name: string;
  // Sourced from the same WhatsApp/Google Business price list as
  // content/catalog.ts (Aug 2026). Left undefined where no confirmed rate
  // exists yet — the UI shows "Price on request" instead of guessing.
  price?: string;
  // Set only where the source listing showed a struck-through original
  // price alongside a discounted current price.
  wasPrice?: string;
};

export type Service = {
  key: string;
  code: string;
  label: string;
  summary: string;
  items: ServiceItem[];
  // Real photography only. The gallery UI fills any slots below
  // MIN_GALLERY_IMAGES with clearly-labelled "add photo" placeholders
  // rather than stock or AI imagery.
  images: string[];
  href: string;
};

// Minimum gallery slots to display per service tab — filled with real
// photos where we have them, and honest placeholders where we don't.
export const MIN_GALLERY_IMAGES = 5;

export const services: Service[] = [
  {
    key: "printing",
    code: "PRINT",
    label: "Printing Services",
    summary: "Sharp, colour-accurate print work delivered on schedule.",
    items: [
      { name: "Business Cards" },
      { name: "Flyers & Posters" },
      { name: "Brochures" },
      { name: "Certificates" },
      { name: "Funeral Programs", price: "KSh 20" },
      { name: "Invitations" },
      { name: "Receipt & Invoice Books", price: "KSh 500" },
      { name: "Diaries (A4 & A5)", price: "KSh 800" },
      { name: "Notebook Designing (A4)", price: "KSh 1,300" },
      { name: "Notebook Designing (A5)", price: "KSh 800" },
      { name: "Calendar Printing", price: "KSh 60" },
      { name: "Work Tags", price: "From KSh 100" },
    ],
    images: [media.printWorkspace],
    // Anchor for now — point at a dedicated /services/printing route once it exists.
    href: "#contact",
  },
  {
    key: "branding",
    code: "BRAND",
    label: "Branding & Signage",
    summary: "Large-format visibility that makes your brand hard to miss.",
    items: [
      { name: "Banners & Stickers (per m²)", price: "KSh 700 / m²", wasPrice: "KSh 800 / m²" },
      { name: "Roll-Up Stands", price: "KSh 5,500", wasPrice: "KSh 6,000" },
      { name: "X-Stand Banner", price: "KSh 3,500", wasPrice: "KSh 4,500" },
      { name: "3D Signage & Light Boxes" },
      { name: "Corporate Branding" },
      { name: "Vehicle Branding" },
      { name: "Shop Branding" },
    ],
    images: [media.signage, media.bannerPrinting],
    href: "#contact",
  },
  {
    key: "promo",
    code: "PROMO",
    label: "Promotional Products",
    summary: "Everyday items turned into lasting brand impressions.",
    items: [
      { name: "Branded T-Shirts" },
      { name: "Caps" },
      { name: "Mugs & Cups" },
      { name: "Gift Items" },
      { name: "Pen Branding", price: "KSh 40" },
      { name: "Screen Printing", price: "From KSh 50" },
    ],
    images: [media.merchandise],
    href: "#contact",
  },
  {
    key: "cyber",
    code: "CYBER",
    label: "Cyber Services",
    summary: "A full service desk for documents, applications and internet needs.",
    items: [
      { name: "Printing & Photocopying" },
      { name: "Document Scanning" },
      { name: "Passport Photo Assistance" },
      { name: "Government Service Applications" },
    ],
    images: [media.cyberCafe],
    href: "#contact",
  },
];

// Non-numeric trust signals — used instead of fabricated stat counters
// (e.g. "0+ jobs delivered") which must never ship without verified numbers.
export const trustPoints = [
  "One local shop for print, branding, merchandise & cyber services",
  "Design support included on request",
  "Order and follow up over WhatsApp",
  "Serving Suneka (Kisii County) and Sophia, Homabay (Homabay County)",
];

// Who Korista serves — used in the capability marquee. Descriptive, not a
// claimed client list (no logos or names implied).
export const clientTypes = [
  "Businesses",
  "Schools & Colleges",
  "Churches",
  "NGOs",
  "Corporate Clients",
  "Events",
  "Individuals",
  "Institutions",
];

export const whyChoose = [
  { icon: "Printer", title: "Premium Print Quality", body: "Crisp colour and finishing on every job." },
  { icon: "Truck", title: "Fast Delivery", body: "Quick turnaround without cutting corners." },
  { icon: "Wallet", title: "Affordable Pricing", body: "Honest rates for individuals and institutions." },
  { icon: "Users", title: "Experienced Team", body: "Designers and print operators who know the craft." },
  { icon: "Cpu", title: "Modern Equipment", body: "Digital and large-format machines in-house." },
  { icon: "Headset", title: "Reliable Support", body: "Clear communication from quote to delivery." },
];

export const process = [
  { step: "01", title: "Consultation", body: "We listen to your brief, quantities and deadline." },
  { step: "02", title: "Design & Approval", body: "Artwork is prepared and shared for your sign-off." },
  { step: "03", title: "Production", body: "Your job is printed and finished with careful checks." },
  { step: "04", title: "Delivery", body: "Collected from Suneka or Sophia, Homabay, or delivered nearby." },
];

export const portfolio = [
  { title: "Corporate Banners", category: "Large Format", image: media.bannerPrinting },
  { title: "Shop Branding", category: "Signage", image: media.signage },
  { title: "Promotional Merchandise", category: "Branded Gifts", image: media.merchandise },
  { title: "Print Production", category: "Digital Print", image: media.printWorkspace },
];
