import { Printer, Truck, Wallet, Users, Cpu, Headset, LucideIcon } from "lucide-react";
import { whyChoose } from "@/content/site";

const icons: Record<string, LucideIcon> = { Printer, Truck, Wallet, Users, Cpu, Headset };

export default function WhyChoose() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <p className="eyebrow mb-3 text-press">Why Choose Us</p>
            <h2 className="font-display text-3xl font-black uppercase leading-[0.95] tracking-tight text-ink sm:text-5xl">
              Built on quality and reliability
            </h2>
          </div>
          <p className="font-accent max-w-xs text-lg italic leading-snug text-text-muted">
            &ldquo;Every job leaves the shop the way we&apos;d want it for
            ourselves.&rdquo;
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((item) => {
            const Icon = icons[item.icon] ?? Printer;
            return (
              <div key={item.title} className="group bg-surface p-7 transition-colors hover:bg-ink">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-paper-alt text-ink transition-colors group-hover:bg-press group-hover:text-white">
                  <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-base font-bold uppercase tracking-tight text-ink transition-colors group-hover:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-text-muted transition-colors group-hover:text-text-onDarkMuted">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
