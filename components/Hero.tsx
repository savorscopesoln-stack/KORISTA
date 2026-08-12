import Image from "next/image";
import Button from "./Button";
import RegistrationMark from "./RegistrationMark";
import StampBadge from "./StampBadge";
import Marquee from "./Marquee";
import { business, media, clientTypes } from "@/content/site";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink text-text-onDark">
      <div className="mx-auto grid max-w-content gap-12 px-5 pb-16 pt-14 md:grid-cols-12 md:gap-8 md:px-8 md:pb-20 md:pt-24">
        {/* Copy column */}
        <div className="relative md:col-span-7 md:pr-6">
          <RegistrationMark className="absolute -left-1 -top-8 hidden h-6 w-6 md:block" color="#AEB4C4" />
          <p className="eyebrow mb-5 text-press">
            {business.location.town} · {business.location.county}
          </p>
          <h1 className="font-display text-[2.75rem] font-black uppercase leading-[0.92] tracking-tight text-text-onDark sm:text-6xl lg:text-[5.2rem]">
            Ideas,
            <br />
            printed to
            <br />
            <span className="text-press">impress.</span>
          </h1>
          <p className="font-accent mt-6 max-w-md text-xl italic leading-snug text-text-onDark/90 sm:text-2xl">
            &ldquo;From concept to finished product, we treat every job like
            it carries your name.&rdquo;
          </p>
          <p className="mt-5 max-w-md font-body text-base leading-relaxed text-text-onDarkMuted">
            {business.name} delivers printing, branding, signage,
            promotional merchandise and cyber services for businesses,
            schools and organizations across {business.location.county}.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="#contact" variant="primary">
              Get a Quote
            </Button>
            <Button href="#services" variant="secondaryOnDark">
              View Services
            </Button>
          </div>
        </div>

        {/* Image column */}
        <div className="relative md:col-span-5">
          <div className="relative overflow-hidden rounded-md border border-border-onDark">
            <Image
              src={media.printWorkspace}
              alt="Digital printing workspace with large-format printers at Korista Printing Hub"
              width={800}
              height={620}
              className="h-[280px] w-full object-cover grayscale contrast-[1.1] sm:h-[360px] md:h-[460px]"
              priority
            />
            <div className="absolute inset-0 bg-ink mix-blend-multiply" aria-hidden="true" />
            <div className="absolute inset-0 bg-press/10" aria-hidden="true" />
          </div>

          <StampBadge
            className="absolute -bottom-10 -left-8 h-28 w-28 -rotate-12 text-paper drop-shadow-lg sm:h-32 sm:w-32 md:-left-10"
          />
        </div>
      </div>

      {/* Client-type marquee band */}
      <div className="border-t border-border-onDark bg-ink-700 py-5">
        <Marquee
          className="font-mono text-xs uppercase tracking-wider text-text-onDarkMuted"
          items={clientTypes}
        />
      </div>
    </section>
  );
}
