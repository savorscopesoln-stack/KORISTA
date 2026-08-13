import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { business, media } from "@/content/site";
import StampBadge from "./StampBadge";

const capabilities = [
  "Professional printing expertise",
  "Creative branding solutions",
  "Fast turnaround",
  "Customer-focused service",
];

export default function AboutTeaser() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto grid max-w-content gap-12 px-5 py-20 md:grid-cols-12 md:items-center md:gap-10 md:px-8 md:py-28">
        <div className="relative md:col-span-5">
          <div className="relative overflow-hidden rounded-md border border-border">
            <Image
              src={media.cyberCafe}
              alt="Customer service desk at the Korista cyber café"
              width={700}
              height={620}
              className="h-[300px] w-full object-cover sm:h-[400px]"
            />
          </div>
          <StampBadge className="absolute -right-6 -top-6 h-24 w-24 rotate-6 text-ink sm:h-28 sm:w-28 md:-right-8 md:-top-8" />
        </div>

        <div className="md:col-span-7 md:pl-6">
          <p className="eyebrow mb-3 text-press">About Us</p>
          <p className="font-accent text-2xl italic leading-snug text-ink sm:text-3xl">
            &ldquo;A local printing partner built around your brief.&rdquo;
          </p>
          <p className="mt-6 max-w-lg font-body text-base leading-relaxed text-text-muted">
            {business.name} delivers printing, promotional branding,
            customized merchandise and cyber services for individuals,
            businesses, schools, institutions and organizations from our
            two branches in Suneka, Kisii County, and Sophia, Homabay
            County.
          </p>
          <ul className="mt-7 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            {capabilities.map((item) => (
              <li key={item} className="flex items-center gap-2.5 font-body text-sm text-text-ink">
                <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-press" strokeWidth={2} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
