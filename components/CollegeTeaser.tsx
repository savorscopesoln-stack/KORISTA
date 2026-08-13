import { BookOpen, Clock3, Wallet, ClipboardCheck, LucideIcon, ArrowRight } from "lucide-react";
import Button from "./Button";
import { college, locations } from "@/content/site";

const icons: Record<string, LucideIcon> = { BookOpen, Clock3, Wallet, ClipboardCheck };

export default function CollegeTeaser() {
  const whatsappHref = `https://wa.me/254113994040?text=${encodeURIComponent(college.whatsappMessage)}`;

  return (
    <section id="college" className="border-b border-border bg-ink text-text-onDark">
      <div className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <p className="eyebrow mb-3 text-press">A Korista Branch</p>
            <h2 className="font-display text-3xl font-black uppercase leading-[0.95] tracking-tight text-text-onDark sm:text-5xl">
              {college.name}
            </h2>
            <p className="mt-3 font-body text-sm font-medium text-text-onDarkMuted">
              {college.tagline}
            </p>
          </div>
        </div>

        <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-text-onDarkMuted">
          {college.blurb}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-border-onDark bg-border-onDark sm:grid-cols-2 lg:grid-cols-4">
          {college.highlights.map((item) => {
            const Icon = icons[item.icon] ?? BookOpen;
            return (
              <div key={item.title} className="bg-ink-700 p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-press">
                  <Icon size={18} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-sm font-bold uppercase tracking-tight text-text-onDark">
                  {item.title}
                </h3>
                <p className="mt-1.5 font-body text-xs leading-relaxed text-text-onDarkMuted">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Button href={whatsappHref} variant="whatsapp" external>
            Chat with Admissions
            <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
          </Button>
          <p className="font-body text-xs text-text-onDarkMuted">
            Visit us at {locations.map((l) => l.label).join(" or ")} — course
            listings, fees and entry requirements are being finalized.
          </p>
        </div>
      </div>
    </section>
  );
}
