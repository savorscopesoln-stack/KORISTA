// ---------------------------------------------------------------------------
// PRODUCT CATALOG
// ---------------------------------------------------------------------------
// Sourced from screenshots of Korista's real WhatsApp Business catalog
// (Aug 2026). Names, prices and descriptions are transcribed as shown —
// where the WhatsApp catalog's own description text was cut off with "…",
// that's preserved here rather than guessed at. A few items below have a
// NOTE comment flagging something worth double-checking in the source
// catalog (a likely typo, a price that doesn't match its own description,
// or an apparent duplicate listing) — nothing was silently corrected.
//
// Photos: real product/job photos supplied by Korista (from their WhatsApp
// catalogue), cropped down from the raw WhatsApp viewer screenshots and
// stored in /public/catalog. A couple of catalogue items still have no
// confirmed photo (e.g. calendar printing) — `image` is left unset for
// those rather than reusing an unrelated photo.
//
// To add more items, follow this shape:
// {
//   id: "biz-cards-001",
//   name: "Business Cards (100 pcs)",
//   category: "printing",     // one of CatalogCategory below
//   price: "KSh 1,000",       // omit if not yet confirmed
//   originalPrice: "KSh 1,200", // omit if there's no discount
//   image: "/catalog/your-photo.jpg", // real photo — omit if none yet
//   description: "Matte or gloss finish, single or double-sided.",
// }
// ---------------------------------------------------------------------------

export type CatalogCategory = "printing" | "branding" | "promo" | "cyber";

export type CatalogItem = {
  id: string;
  name: string;
  category: CatalogCategory;
  price?: string;
  originalPrice?: string;
  image?: string;
  description?: string;
};

export const catalogCategories: { key: CatalogCategory; label: string }[] = [
  { key: "printing", label: "Printing" },
  { key: "branding", label: "Branding & Signage" },
  { key: "promo", label: "Promotional Products" },
  { key: "cyber", label: "Cyber Services" },
];

export const catalogItems: CatalogItem[] = [
  {
    id: "banners-stickers",
    name: "Banners & Stickers",
    category: "branding",
    price: "KES 700 / m²",
    originalPrice: "KES 800 / m²",
    image: "/catalog/suneka-west-banner.jpg",
    description: "Banner and sticker printing.",
  },
  // NOTE: the description text ("Ksh 7,000") doesn't match the listed
  // price/discount (KES 5,500, was 6,000) — likely two different variants
  // (broadbase vs narrow-based) priced differently. Please confirm both figures.
  {
    id: "rollup-stands",
    name: "Roll-Up Stands",
    category: "branding",
    price: "KES 5,500",
    originalPrice: "KES 6,000",
    image: "/catalog/rollup-belmont-hotel.jpg",
    description: "Both broadbase and narrow-based available, at Ksh 7,000 an…",
  },
  {
    id: "xstand-banner",
    name: "X-Stand Banner",
    category: "branding",
    price: "KES 3,500",
    originalPrice: "KES 4,500",
    image: "/catalog/xstand-kph.jpg",
    description: "Designing, printing plus the stand, all included. Can also be hired for eve…",
  },
  {
    id: "work-tags",
    name: "Work Tags",
    category: "printing",
    price: "From KES 100",
    image: "/catalog/worktags-lanyards.jpg",
    description: "For staff — Ksh 100, Ksh 200, or Ksh 300 depending on the quality o…",
  },
  {
    id: "pen-branding",
    name: "Pen Branding",
    category: "promo",
    price: "KES 40",
    image: "/catalog/pen-branding.jpg",
    description: "Ordinary pens branded — Ksh 40 for orders under 50, Ksh 30 for orders ab…",
  },
  // NOTE: no confirmed photo for this item yet — the WhatsApp catalogue
  // screenshots we received didn't include a calendar shot. Left unset
  // rather than reusing an unrelated photo; send one and it can go in.
  {
    id: "calendar-printing",
    name: "Calendar Printing",
    category: "printing",
    price: "KES 60",
    description: "For orders under 100, Ksh 60; above 100, Ksh 50. A5, A4 and A3 available.",
  },
  // NOTE: title reads "Diaries A4 and A4" in the source catalog (possibly
  // meant "A4 and A5"?) and the listed price (KES 800) doesn't match the
  // Ksh 1,300 / 1,400 figures in its own description — please confirm.
  {
    id: "diaries-a4",
    name: "Diaries A4 and A4",
    category: "printing",
    price: "KES 800",
    image: "/catalog/diaries-stack.jpg",
    description: "A4 sizes at Ksh 1,300 for 50+ copies designed, Ksh 1,400 for less …",
  },
  {
    id: "notebook-a4",
    name: "Notebook Designing A4",
    category: "printing",
    price: "KES 1,300",
    image: "/catalog/notebook-a4-cover.jpg",
    description: "Executive notebooks. Orders of 50+: Ksh 1,300. Orders less th…",
  },
  {
    id: "notebook-a5",
    name: "Notebook Designing A5",
    category: "printing",
    price: "KES 800",
    image: "/catalog/notebook-a5-director.jpg",
    description: "A5 size. Orders of 50+: Ksh 800. Orders less than 50: Ksh 900 …",
  },
  {
    id: "receipt-invoice-books",
    name: "Receipt / Invoice Books",
    category: "printing",
    price: "KES 500",
    image: "/catalog/receipt-books.jpg",
    description: "Depending on number of pages — both carbonated and non-carbon…",
  },
  {
    id: "funeral-programs",
    name: "Funeral Programs",
    category: "printing",
    price: "KES 20",
    image: "/catalog/funeral-programs.jpg",
    description: "A4 four pages: Ksh 20. A4 eight pages: Ksh 40 (plain paper). A3 trice A4 pri…",
  },
  // NOTE: this looks like it may duplicate "Banners & Stickers" above (same
  // per-m² pricing) — possibly a second listing in the source catalog. Given
  // its own distinct photo here (Korista's own banners outside their shop).
  {
    id: "stickers-banner-printing",
    name: "Stickers & Banner Printing",
    category: "branding",
    price: "KES 700 / m²",
    image: "/catalog/shopfront-banners.jpg",
    description: "Per metre square.",
  },
  // NOTE: source catalog lists this as "Screen Shooting" — almost certainly
  // an autocorrect typo for "Screen Printing", corrected here. Please confirm.
  {
    id: "screen-printing",
    name: "Screen Printing",
    category: "promo",
    price: "KES 50",
    image: "/catalog/tshirt-screen-printing.jpg",
    description: "One-side printing — Ksh 50 for orders of more than ten; Ksh 100 for orders les…",
  },
];
