import Button from "./Button";
import StampBadge from "./StampBadge";
import { business } from "@/content/site";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-ink">
      <StampBadge
        className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rotate-12 text-white/[0.06] sm:h-64 sm:w-64"
      />
      <div className="relative mx-auto max-w-content px-5 py-20 text-center md:px-8 md:py-24">
        <p className="eyebrow mb-4 text-press">Let&apos;s Print Something Great</p>
        <h2 className="font-display text-3xl font-black uppercase leading-[0.95] tracking-tight text-text-onDark sm:text-5xl">
          Ready to get your project printed?
        </h2>
        <p className="mx-auto mt-5 max-w-md font-body text-base text-text-onDarkMuted">
          Tell {business.name} what you need and get a clear quote back —
          no jargon, no guesswork.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button href="#contact" variant="primary">
            Get a Free Quote
          </Button>
          <Button href={business.contact.whatsappHref} variant="whatsapp" external>
            WhatsApp Us
          </Button>
        </div>
      </div>
    </section>
  );
}
