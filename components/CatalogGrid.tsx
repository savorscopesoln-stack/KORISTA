"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera, ExternalLink, MessageCircle } from "lucide-react";
import { catalogItems, catalogCategories, CatalogCategory } from "@/content/catalog";
import { business } from "@/content/site";

const WHATSAPP_CATALOG_URL = "https://wa.me/c/156659418705925";

export default function CatalogGrid() {
  const [filter, setFilter] = useState<CatalogCategory | "all">("all");

  const visible =
    filter === "all" ? catalogItems : catalogItems.filter((item) => item.category === filter);

  return (
    <div>
      {/* Filter pills */}
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setFilter("all")}
          className={`rounded-pill px-4 py-2 font-body text-sm font-semibold transition-colors ${
            filter === "all" ? "bg-ink text-white" : "border border-border bg-surface text-text-muted hover:text-ink"
          }`}
        >
          All
        </button>
        {catalogCategories.map((cat) => (
          <button
            key={cat.key}
            type="button"
            onClick={() => setFilter(cat.key)}
            className={`rounded-pill px-4 py-2 font-body text-sm font-semibold transition-colors ${
              filter === cat.key
                ? "bg-ink text-white"
                : "border border-border bg-surface text-text-muted hover:text-ink"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <div className="mt-10 flex flex-col items-center gap-4 rounded-md border border-dashed border-border bg-paper-alt px-6 py-16 text-center">
          <Camera size={28} className="text-text-muted" strokeWidth={1.5} aria-hidden="true" />
          <div className="max-w-md">
            <p className="font-display text-lg font-bold uppercase tracking-tight text-ink">
              Catalog items coming soon
            </p>
            <p className="mt-2 font-body text-sm leading-relaxed text-text-muted">
              We&apos;re moving Korista&apos;s full price list onto the site
              item by item. In the meantime, browse the complete catalog —
              with photos and prices — directly on WhatsApp.
            </p>
          </div>
          <a
            href={WHATSAPP_CATALOG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 rounded-pill bg-approve px-6 py-3 font-body text-sm font-semibold text-white transition-colors hover:bg-approve-600"
          >
            <MessageCircle size={16} strokeWidth={2} aria-hidden="true" />
            View Full Catalog on WhatsApp
            <ExternalLink size={14} strokeWidth={2} aria-hidden="true" />
          </a>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item) => {
            const waText = encodeURIComponent(
              `Hi, I'd like to order: ${item.name}${item.price ? ` (${item.price})` : ""}`
            );
            return (
              <article
                key={item.id}
                className="flex flex-col overflow-hidden rounded-md border border-border bg-surface shadow-card"
              >
                <div className="relative h-44 w-full bg-paper-alt">
                  {item.image ? (
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-1.5">
                      <Camera size={20} className="text-text-muted" strokeWidth={1.5} aria-hidden="true" />
                      <span className="font-mono text-[10px] text-text-muted">Add photo</span>
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-base font-bold uppercase tracking-tight text-ink">
                    {item.name}
                  </h3>
                  {item.description && (
                    <p className="mt-1.5 font-body text-sm text-text-muted">{item.description}</p>
                  )}
                  <div className="mt-auto flex items-center justify-between gap-3 pt-4">
                    <span className="flex items-baseline gap-2 font-mono text-sm text-text-ink">
                      {item.price ?? "Price on request"}
                      {item.originalPrice && (
                        <span className="text-xs text-text-muted line-through">{item.originalPrice}</span>
                      )}
                    </span>
                    <a
                      href={`${business.contact.whatsappHref}?text=${waText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-pill bg-approve px-3.5 py-1.5 font-body text-xs font-semibold text-white hover:bg-approve-600"
                    >
                      Order
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
