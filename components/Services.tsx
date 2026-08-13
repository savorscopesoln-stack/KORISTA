"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Printer, PenTool, ShoppingBag, Cpu, ArrowRight, Camera } from "lucide-react";
import { services, MIN_GALLERY_IMAGES } from "@/content/site";
import { useQuote } from "./QuoteProvider";

const tabIcons: Record<string, typeof Printer> = {
  printing: Printer,
  branding: PenTool,
  promo: ShoppingBag,
  cyber: Cpu,
};

export default function Services() {
  const [activeKey, setActiveKey] = useState(services[0].key);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const { toggleItem, isSelected, totalSelected, clearAll, sendToQuote } = useQuote();

  const activeIndex = services.findIndex((s) => s.key === activeKey);
  const active = services[activeIndex];

  function focusTab(nextIndex: number) {
    const wrapped = (nextIndex + services.length) % services.length;
    setActiveKey(services[wrapped].key);
    tabRefs.current[wrapped]?.focus();
  }

  function onTabKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowRight") focusTab(activeIndex + 1);
    if (e.key === "ArrowLeft") focusTab(activeIndex - 1);
    if (e.key === "Home") focusTab(0);
    if (e.key === "End") focusTab(services.length - 1);
  }

  const gallerySlots = Math.max(MIN_GALLERY_IMAGES - active.images.length, 0);

  return (
    <section id="services" className="border-b border-border bg-paper-alt">
      <div className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <p className="eyebrow mb-3 text-press">Our Services</p>
            <h2 className="font-display text-3xl font-black uppercase leading-[0.95] tracking-tight text-ink sm:text-5xl">
              Everything printed and branded, under one roof
            </h2>
          </div>

          {totalSelected > 0 && (
            <div className="flex items-center gap-3 rounded-md border border-border bg-surface px-4 py-2.5 shadow-card">
              <span className="font-mono text-xs text-text-ink">
                {totalSelected} item{totalSelected > 1 ? "s" : ""} selected
              </span>
              <button
                type="button"
                onClick={clearAll}
                className="font-body text-xs font-medium text-text-muted underline hover:text-press"
              >
                Clear
              </button>
              <Link
                href="#contact"
                onClick={sendToQuote}
                className="rounded-pill bg-press px-3.5 py-1.5 font-body text-xs font-semibold text-white hover:bg-press-600"
              >
                Get a Quote
              </Link>
            </div>
          )}
        </div>

        {/* Tab list */}
        <div
          role="tablist"
          aria-label="Service categories"
          className="mt-10 flex flex-wrap gap-2"
        >
          {services.map((service, i) => {
            const selected = service.key === activeKey;
            const Icon = tabIcons[service.key] ?? Printer;
            return (
              <button
                key={service.key}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                role="tab"
                id={`tab-${service.key}`}
                aria-selected={selected}
                aria-controls={`panel-${service.key}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveKey(service.key)}
                onKeyDown={onTabKeyDown}
                className={`flex items-center gap-2 rounded-md px-4 py-3 font-body text-sm font-semibold transition-colors ${
                  selected
                    ? "bg-ink text-white shadow-card"
                    : "border border-border bg-surface text-text-muted hover:text-ink"
                }`}
              >
                <Icon size={16} strokeWidth={2} aria-hidden="true" />
                {service.label}
              </button>
            );
          })}
        </div>

        {/* Active panel */}
        <div
          role="tabpanel"
          id={`panel-${active.key}`}
          aria-labelledby={`tab-${active.key}`}
          className="mt-5 grid grid-cols-1 gap-8 rounded-md border border-border bg-surface p-5 shadow-card sm:p-8 lg:grid-cols-5 lg:gap-10"
        >
          {/* Gallery */}
          <div className="lg:col-span-2">
            <span className="eyebrow mb-3 block text-text-muted">{active.code} — Gallery</span>
            <div className="grid grid-cols-2 gap-2">
              {active.images.map((src) => (
                <div
                  key={src}
                  className={`relative overflow-hidden rounded-md border border-border ${
                    active.images.indexOf(src) === 0 ? "col-span-2 h-44" : "h-28"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`${active.label} — Korista Printing Hub`}
                    fill
                    sizes="(min-width: 1024px) 20vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
              {Array.from({ length: gallerySlots }).map((_, i) => (
                <div
                  key={`placeholder-${i}`}
                  className="flex h-28 flex-col items-center justify-center gap-1 rounded-md border border-dashed border-border bg-paper-alt"
                  title="Real photo needed for this slot"
                >
                  <Camera size={16} className="text-text-muted" strokeWidth={1.75} aria-hidden="true" />
                  <span className="font-mono text-[10px] leading-tight text-text-muted">Add photo</span>
                </div>
              ))}
            </div>
          </div>

          {/* Item checklist */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-xl font-bold uppercase tracking-tight text-ink">
              {active.label}
            </h3>
            <p className="mt-1.5 font-body text-sm text-text-muted">{active.summary}</p>

            <fieldset className="mt-5">
              <legend className="sr-only">Select the {active.label} items you need</legend>
              <ul className="divide-y divide-border border-t border-border">
                {active.items.map((item) => {
                  const id = `${active.key}-${item.name}`;
                  const checked = isSelected(active.label, item.name);
                  return (
                    <li key={item.name} className="flex items-center justify-between gap-4 py-3">
                      <label htmlFor={id} className="flex flex-1 cursor-pointer items-center gap-3">
                        <input
                          id={id}
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleItem(active.label, item.name)}
                          className="h-4 w-4 flex-shrink-0 rounded-sm border-border accent-press"
                        />
                        <span className="font-body text-sm text-text-ink">{item.name}</span>
                      </label>
                      <span className="flex items-baseline gap-2 whitespace-nowrap font-mono text-xs text-text-muted">
                        {item.price ?? "Price on request"}
                        {item.wasPrice && (
                          <span className="text-[11px] text-text-muted/70 line-through">{item.wasPrice}</span>
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </fieldset>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="#contact"
                onClick={sendToQuote}
                className="inline-flex items-center justify-center gap-1.5 rounded-pill bg-press px-6 py-3 font-body text-sm font-semibold text-white transition-colors hover:bg-press-600"
              >
                Get a Quote
                <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
              </Link>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-pill border border-ink px-6 py-3 font-body text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-white"
              >
                Ask a Question
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
