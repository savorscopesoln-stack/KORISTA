// ---------------------------------------------------------------------------
// PRODUCT CATALOG
// ---------------------------------------------------------------------------
// Populated by hand, not scraped — WhatsApp Business catalog links
// (wa.me/c/...) open inside the WhatsApp app itself and can't be read by
// automated tools, and prices/products are never invented (see project
// content-accuracy rules). To add real items, send the photos + prices —
// either exported from WhatsApp (Catalog → tap an item → Share), or just a
// plain list — and fill in entries below in this shape:
//
// {
//   id: "biz-cards-001",
//   name: "Business Cards (100 pcs)",
//   category: "printing",   // one of CatalogCategory below
//   price: "KSh 1,000",     // omit entirely if not yet confirmed
//   image: "https://...",   // real photo URL — omit if none yet
//   description: "Matte or gloss finish, single or double-sided.",
// }
// ---------------------------------------------------------------------------

export type CatalogCategory = "printing" | "branding" | "promo" | "cyber";

export type CatalogItem = {
  id: string;
  name: string;
  category: CatalogCategory;
  price?: string;
  image?: string;
  description?: string;
};

export const catalogCategories: { key: CatalogCategory; label: string }[] = [
  { key: "printing", label: "Printing" },
  { key: "branding", label: "Branding & Signage" },
  { key: "promo", label: "Promotional Products" },
  { key: "cyber", label: "Cyber Services" },
];

// Empty until real catalog data comes in — see the note above.
export const catalogItems: CatalogItem[] = [];
