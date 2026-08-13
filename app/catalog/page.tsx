import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CatalogGrid from "@/components/CatalogGrid";
import StampBadge from "@/components/StampBadge";
import { business } from "@/content/site";

export const metadata: Metadata = {
  title: "Catalog | Korista Printing Hub",
  description:
    "Browse printing, branding, promotional products and cyber service items from Korista Printing Hub, Suneka, Kisii County.",
};

export default function CatalogPage() {
  return (
    <main>
      <Header />

      <section className="relative overflow-hidden border-b border-border bg-ink text-text-onDark">
        <StampBadge className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rotate-12 text-white/[0.06] sm:h-64 sm:w-64" />
        <div className="relative mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
          <p className="eyebrow mb-3 text-press">Catalog</p>
          <h1 className="font-display text-3xl font-black uppercase leading-[0.95] tracking-tight text-text-onDark sm:text-5xl">
            Products &amp; Pricing
          </h1>
          <p className="mt-4 max-w-lg font-body text-base text-text-onDarkMuted">
            Browse what {business.name} offers by category. Tap Order on any
            item to send a WhatsApp message straight to us.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
          <CatalogGrid />
        </div>
      </section>

      <Footer />
    </main>
  );
}
