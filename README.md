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

## Content & facts — read before editing

All business facts (phone, email, address, hours) live in
`content/site.ts`, clearly marked `PLACEHOLDER — REPLACE`. **Do not put
real or invented business facts directly into components** — update them in
this one file so future edits stay consistent.

Two deliberate content decisions, per the project's accuracy rule:

- **The old "0+ Jobs / 0+ Years / 0% Happy Clients" stat counters were
  removed**, not just left at zero. They're replaced by `trustPoints` in
  `content/site.ts` — non-numeric, true-by-construction trust signals. Swap
  in real numbers (and bring the counters back) once you have them.
- **Testimonials were dropped entirely.** The ones on the live site
  (Brian O., Mercy N., Dennis K., Faith A.) aren't verifiable from what I
  was given, so I didn't carry them over. Send real, attributable
  testimonials/reviews and I'll add a testimonials section back in.

## Images

Hero, services, and portfolio images link directly to the real photography
already hosted on the current live site (`korista.afripixelprojects.com`)
rather than stock or AI-generated images, per the design brief. Swap the
URLs in `content/site.ts` → `media` as better/replacement photos come in.

## Form

The quote request form in `components/Contact.tsx` validates client-side
and shows a success state, but isn't wired to a real submission endpoint
yet — see the `TODO` in that file. That'll need a backend (API route, email
service, or CRM) in a later pass.

## Next pages

Per the master prompt, build one page at a time from here: About, Services,
Printing, Branding & Signage, Promotional Products, Cyber Services,
Portfolio, Request a Quote, Contact — reusing `Header`, `Footer`, `Button`,
and the design tokens already established.
