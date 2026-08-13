# Korista Printing Hub — Landing Page

Next.js 15 (App Router) + Tailwind CSS + TypeScript.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. This needs an internet connection on first run —
the display/body/mono fonts load from Google Fonts at build time.

To ship it:

```bash
npm run build
npm run start
```

## What's here

This is the **Home / landing page only**, per the one-page-at-a-time build
plan. Sections currently live as anchors on a single page (`#about`,
`#services`, `#work`, `#process`, `#contact`) — matching the current live
site's structure. When About, Services, Portfolio, etc. become real
standalone pages, the corresponding sections here should shrink into teasers
that link out to them instead of anchoring in place.

## Design system

Tokens live in `tailwind.config.ts`:

- **Color** — `ink` (deep navy, primary), `press` (spot-color red, accent),
  `approve` (stamp green, used only for WhatsApp/go-ahead actions), `paper`
  (background), `surface` (cards), plus text/border/state colors.
- **Type** — Big Shoulders (display/poster headlines), Inter (body), Space
  Mono (eyebrows, labels, the "job ticket" data fields).
- **Signature motif** — registration/crop marks and a CMYK dot cluster
  (`components/RegistrationMark.tsx`, `components/CmykDots.tsx`), echoing
  print production. Used sparingly (hero only) rather than everywhere.

## Pages

- **Home** (`/`) — the landing page.
- **Catalog** (`/catalog`) — product/pricing browser, filterable by category.
  Currently empty (see "Catalog data" below) with a link out to Korista's
  live WhatsApp catalog in the meantime.

## Content & facts — read before editing

All business facts (phone, email, address, hours, M-Pesa till) live in
`content/site.ts`, clearly marked `PLACEHOLDER — REPLACE` where unverified.
**Do not put real or invented business facts directly into components** —
update them in this one file so future edits stay consistent.

**Real contact details currently in place:**
- Phone / WhatsApp: 0113 994 040
- M-Pesa Buy Goods till: 4511834
- Email: `kph.ldtpress@gmail.co` — ⚠️ **please confirm this spelling.** It's
  missing the "m" in ".com" unless that's deliberate; using exactly as given
  for now.

**Still placeholder / unconfirmed:**
- Exact street address / landmark in Suneka (for the map)
- Opening hours (currently a guess: Mon–Sat 8–7, Sun closed)
- Prices for every service item (all show "Price on request")

Two deliberate content decisions, per the project's accuracy rule:

- **The old "0+ Jobs / 0+ Years / 0% Happy Clients" stat counters were
  removed**, not just left at zero. They're replaced by `trustPoints` in
  `content/site.ts` — non-numeric, true-by-construction trust signals. Swap
  in real numbers (and bring the counters back) once you have them.
- **Testimonials were dropped entirely.** The ones on the live site
  (Brian O., Mercy N., Dennis K., Faith A.) aren't verifiable from what I
  was given, so I didn't carry them over. Send real, attributable
  testimonials/reviews and I'll add a testimonials section back in.

## Catalog data

`content/catalog.ts` defines the shape for catalog items but ships empty.
**I can't read your WhatsApp catalog automatically** — `wa.me/c/...` links
open inside the WhatsApp app itself, not a normal webpage my tools can
fetch, and per the project's accuracy rules I don't invent products or
prices. To populate `/catalog`, send me either:
- the photos + a price list (any format — text, spreadsheet, screenshots), or
- an export from WhatsApp (open the catalog in WhatsApp Business → tap an
  item → Share, repeated per item, or a screen recording scrolling through it)

and I'll add each item to `content/catalog.ts` in the documented shape.
Until then, the page links out to the live WhatsApp catalog so visitors
aren't stuck with an empty page.

## Images

Hero, services, and portfolio images link directly to the real photography
already hosted on the current live site (`korista.afripixelprojects.com`)
rather than stock or AI-generated images, per the design brief. Swap the
URLs in `content/site.ts` → `media` as better/replacement photos come in.
Several service categories only have 1 real photo where the gallery has
room for 5 — the extra slots show a dashed "Add photo" placeholder rather
than stock imagery.

## Quote form

`components/Contact.tsx` sends quote requests two ways, both with zero
backend required:
- **Send via WhatsApp** (primary) — opens WhatsApp with the form contents
  pre-filled as a message to Korista's real number. It lands as a normal
  WhatsApp message — no dashboard to check, no missed notifications.
- **Email Instead** — opens the visitor's email client with the same
  details pre-filled, addressed to the business email above.

If you'd rather have submissions land in an inbox automatically without the
visitor doing anything (i.e. a real background form-to-email service), that
needs a small third-party integration (e.g. Formspree, Web3Forms) which
requires you to sign up and give me an access key — let me know if you want
that instead/also.

## Next pages

Per the master prompt, build one page at a time from here: About, Services,
Printing, Branding & Signage, Promotional Products, Cyber Services,
Portfolio, Request a Quote, Contact — reusing `Header`, `Footer`, `Button`,
and the design tokens already established.
