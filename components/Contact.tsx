"use client";

import { useState, FormEvent, MouseEvent } from "react";
import { MapPin, Phone, Mail, Clock, Send, Smartphone } from "lucide-react";
import Button from "./Button";
import { business } from "@/content/site";
import { useQuote } from "./QuoteProvider";

const services = [
  "Printing Services",
  "Branding & Signage",
  "Promotional Products",
  "Cyber Services",
];

export default function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { summary, totalSelected, primaryService, seedVersion, clearAll } = useQuote();

  const seededDetails = summary ? `Items I'm interested in:\n${summary}\n\n` : "";

  function readForm(form: HTMLFormElement) {
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();
    const service = String(data.get("service") || "");
    const details = String(data.get("details") || "").trim();

    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = "Enter your full name.";
    if (!phone) nextErrors.phone = "Enter a phone number so we can reach you.";
    if (!details) nextErrors.details = "Tell us a little about the job.";
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return null;
    return { name, phone, email, service, details };
  }

  function buildMessage(data: NonNullable<ReturnType<typeof readForm>>) {
    return [
      `Quote request — ${business.name}`,
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      data.email ? `Email: ${data.email}` : null,
      `Service: ${data.service}`,
      `Details: ${data.details}`,
    ]
      .filter(Boolean)
      .join("\n");
  }

  // Opens WhatsApp with everything pre-filled — the request lands as a
  // normal message in Korista's own WhatsApp, so there's no backend and no
  // missed notifications: it shows up exactly like any other customer chat.
  function handleWhatsApp(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = readForm(e.currentTarget);
    if (!data) return;
    const text = encodeURIComponent(buildMessage(data));
    window.open(`${business.contact.whatsappHref}?text=${text}`, "_blank", "noopener,noreferrer");
  }

  // Fallback for people who'd rather not use WhatsApp — opens their email
  // client with the same details pre-filled.
  function handleEmail(e: MouseEvent<HTMLButtonElement>) {
    const form = e.currentTarget.form;
    if (!form) return;
    const data = readForm(form);
    if (!data) return;
    const subject = encodeURIComponent(`Quote request from ${data.name}`);
    const body = encodeURIComponent(buildMessage(data));
    window.location.href = `mailto:${business.contact.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="border-b border-border">
      <div className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-28">
        <p className="eyebrow mb-3 text-press">Contact</p>
        <h2 className="font-display max-w-xl text-3xl font-black uppercase leading-[0.95] tracking-tight text-ink sm:text-5xl">
          Let&apos;s talk about your project
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-8">
          {/* Info panel — dark, for contrast against the form */}
          <div className="rounded-md bg-ink p-7 text-text-onDark sm:p-8 lg:col-span-2">
            <h3 className="font-display text-lg font-bold uppercase tracking-tight text-text-onDark">
              {business.name}
            </h3>

            <dl className="mt-6 space-y-5 font-body text-sm">
              <div className="flex gap-3.5">
                <MapPin className="mt-0.5 h-[18px] w-[18px] flex-shrink-0 text-press" strokeWidth={1.75} aria-hidden="true" />
                <div>
                  <dt className="sr-only">Address</dt>
                  <dd className="text-text-onDark">
                    {business.location.address}{" "}
                    <span className="text-xs text-text-onDarkMuted">(placeholder)</span>
                  </dd>
                </div>
              </div>
              <div className="flex gap-3.5">
                <Phone className="mt-0.5 h-[18px] w-[18px] flex-shrink-0 text-press" strokeWidth={1.75} aria-hidden="true" />
                <div>
                  <dt className="sr-only">Phone</dt>
                  <dd>
                    <a href={business.contact.phoneHref} className="text-text-onDark hover:text-press">
                      {business.contact.phoneDisplay}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex gap-3.5">
                <Mail className="mt-0.5 h-[18px] w-[18px] flex-shrink-0 text-press" strokeWidth={1.75} aria-hidden="true" />
                <div>
                  <dt className="sr-only">Email</dt>
                  <dd>
                    <a href={`mailto:${business.contact.email}`} className="text-text-onDark hover:text-press">
                      {business.contact.email}
                    </a>{" "}
                    <span className="text-xs text-text-onDarkMuted">(please confirm spelling)</span>
                  </dd>
                </div>
              </div>
              <div className="flex gap-3.5">
                <Smartphone className="mt-0.5 h-[18px] w-[18px] flex-shrink-0 text-press" strokeWidth={1.75} aria-hidden="true" />
                <div>
                  <dt className="sr-only">M-Pesa</dt>
                  <dd className="text-text-onDark">
                    M-Pesa Buy Goods Till: {business.payment.mpesaTill}
                  </dd>
                </div>
              </div>
              <div className="flex gap-3.5">
                <Clock className="mt-0.5 h-[18px] w-[18px] flex-shrink-0 text-press" strokeWidth={1.75} aria-hidden="true" />
                <div>
                  <dt className="sr-only">Hours</dt>
                  <dd className="text-text-onDark">
                    {business.hours.map((h) => (
                      <span key={h.days} className="block">
                        {h.days}: {h.time}
                      </span>
                    ))}
                    <span className="text-xs text-text-onDarkMuted">(placeholder)</span>
                  </dd>
                </div>
              </div>
            </dl>

            <div className="mt-7">
              <Button href={business.contact.whatsappHref} variant="whatsapp" external>
                Chat on WhatsApp
              </Button>
            </div>

            {/* Blueprint-style map placeholder — grid lines echo a print/plan sheet */}
            <div
              className="relative mt-8 flex h-48 w-full items-center justify-center overflow-hidden rounded-md border border-border-onDark bg-ink-700"
              role="img"
              aria-label={`Map placeholder for ${business.location.address}`}
            >
              <svg className="absolute inset-0 h-full w-full opacity-20" aria-hidden="true">
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#AEB4C4" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
              <span className="relative font-mono text-xs text-text-onDarkMuted">
                Map placeholder — {business.location.address}
              </span>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-md border border-border bg-surface p-6 shadow-card sm:p-8 lg:col-span-3">
            <h3 className="font-display text-lg font-bold uppercase tracking-tight text-ink">
              Request a Quote
            </h3>
            <p className="mt-1.5 font-body text-xs text-text-muted">
              Sends straight to Korista&apos;s WhatsApp — no account, no waiting on a form.
            </p>

            {totalSelected > 0 && (
              <div className="mt-4 flex items-center justify-between gap-3 rounded-md border border-border bg-paper-alt px-3.5 py-2.5">
                <p className="font-mono text-xs text-text-ink">
                  {totalSelected} item{totalSelected > 1 ? "s" : ""} carried over from Services
                </p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="font-body text-xs font-medium text-text-muted underline hover:text-press"
                >
                  Clear
                </button>
              </div>
            )}

            <form className="mt-6 space-y-5" onSubmit={handleWhatsApp} noValidate>
              <div>
                <label htmlFor="name" className="mb-1.5 block font-body text-sm font-medium text-text-ink">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full rounded-md border border-border bg-paper px-3.5 py-2.5 font-body text-sm text-text-ink placeholder:text-text-muted"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 font-body text-xs text-error">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="mb-1.5 block font-body text-sm font-medium text-text-ink">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full rounded-md border border-border bg-paper px-3.5 py-2.5 font-body text-sm text-text-ink placeholder:text-text-muted"
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="mt-1 font-body text-xs text-error">
                      {errors.phone}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block font-body text-sm font-medium text-text-ink">
                    Email (optional)
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full rounded-md border border-border bg-paper px-3.5 py-2.5 font-body text-sm text-text-ink placeholder:text-text-muted"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="mb-1.5 block font-body text-sm font-medium text-text-ink">
                  Service
                </label>
                <select
                  key={`service-${seedVersion}`}
                  id="service"
                  name="service"
                  defaultValue={primaryService ?? services[0]}
                  className="w-full rounded-md border border-border bg-paper px-3.5 py-2.5 font-body text-sm text-text-ink"
                >
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="details" className="mb-1.5 block font-body text-sm font-medium text-text-ink">
                  Project details
                </label>
                <textarea
                  key={`details-${seedVersion}`}
                  id="details"
                  name="details"
                  rows={5}
                  defaultValue={seededDetails}
                  className="w-full rounded-md border border-border bg-paper px-3.5 py-2.5 font-body text-sm text-text-ink placeholder:text-text-muted"
                  placeholder="Quantities, sizes, deadline, artwork status..."
                  aria-invalid={Boolean(errors.details)}
                  aria-describedby={errors.details ? "details-error" : undefined}
                />
                {errors.details && (
                  <p id="details-error" className="mt-1 font-body text-xs text-error">
                    {errors.details}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-pill bg-approve px-6 py-3.5 font-body text-sm font-semibold tracking-wide text-white transition-colors duration-150 hover:bg-approve-600"
                >
                  <Send size={16} strokeWidth={2} aria-hidden="true" />
                  Send via WhatsApp
                </button>
                <button
                  type="button"
                  onClick={handleEmail}
                  className="inline-flex items-center justify-center gap-2 rounded-pill border border-ink px-6 py-3.5 font-body text-sm font-semibold text-ink transition-colors duration-150 hover:bg-ink hover:text-white"
                >
                  <Mail size={16} strokeWidth={2} aria-hidden="true" />
                  Email Instead
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
