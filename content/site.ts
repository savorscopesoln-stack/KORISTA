// ---------------------------------------------------------------------------
// SITE CONTENT CONFIG
// ---------------------------------------------------------------------------
// Every fact below that is not independently verifiable is marked
// "PLACEHOLDER — REPLACE". Swap these for Korista's real details before
// launch. Nothing in the components should hardcode business facts directly —
// pull them from here so future edits happen in one place.
// ---------------------------------------------------------------------------

export const business = {
  name: "Korista Printing Hub",
  tagline: "Printing, Branding & Digital Solutions",
  location: {
    town: "Suneka",
    county: "Kisii County",
    country: "Kenya",
    // PLACEHOLDER — REPLACE with the exact physical address / landmark
    address: "Suneka, Kisii County, Kenya",
  },
  contact: {
    // PLACEHOLDER — REPLACE with the real business line
    phoneDisplay: "+254 707 185 119",
    phoneHref: "tel:+254707185119",
    // PLACEHOLDER — REPLACE with the real WhatsApp business number
    whatsappHref: "https://wa.me/254707185119",
    whatsappDisplay: "+254 707 185 119",
    // PLACEHOLDER — REPLACE with the real business email
    email: "dokiambe@gmail.com",
  },
  hours: [
    // PLACEHOLDER — REPLACE with confirmed opening hours
    { days: "Sunday – Friday", time: "8:00 AM – 7:00 PM" },
    { days: "Sartuday", time: "Closed" },
  ],
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
  // PLACEHOLDER pricing — leave undefined until a real rate is confirmed.
  // The UI shows "Price on request" instead of guessing a figure.
  price?: string;
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
      { name: "Funeral Programs" },
      { name: "Invitations" },
      { name: "Receipt & Invoice Books" },
      { name: "Diaries & Notebooks" },
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
      { name: "Banners & Roll-Up Banners" },
      { name: "X-Stands" },
      { name: "Branded Stickers" },
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
  "Serving Suneka, Kisii and surrounding areas",
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
  { step: "04", title: "Delivery", body: "Collected in Suneka or delivered across Kisii County." },
];

export const portfolio = [
  { title: "Corporate Banners", category: "Large Format", image: media.bannerPrinting },
  { title: "Shop Branding", category: "Signage", image: media.signage },
  { title: "Promotional Merchandise", category: "Branded Gifts", image: media.merchandise },
  { title: "Print Production", category: "Digital Print", image: media.printWorkspace },
];
