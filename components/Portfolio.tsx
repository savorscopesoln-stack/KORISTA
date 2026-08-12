import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { portfolio } from "@/content/site";
import Button from "./Button";

export default function Portfolio() {
  return (
    <section id="work" className="border-b border-border bg-ink text-text-onDark">
      <div className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-3 text-press">Featured Work</p>
            <h2 className="font-display text-3xl font-black uppercase leading-[0.95] tracking-tight text-text-onDark sm:text-5xl">
              Recent categories we deliver
            </h2>
          </div>
          <Button href="#contact" variant="secondaryOnDark">
            Start Your Project
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {portfolio.map((piece, i) => (
            <figure
              key={piece.title}
              className={`group relative overflow-hidden rounded-md border border-border-onDark ${
                i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
            >
              <div className={`relative w-full ${i === 0 ? "h-64 sm:h-full sm:min-h-[420px]" : "h-52"}`}>
                <Image
                  src={piece.image}
                  alt={piece.title}
                  fill
                  className="object-cover grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/10 to-transparent" />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                <div>
                  <span className="eyebrow text-press">{piece.category}</span>
                  <p className="mt-1 font-display text-lg font-bold uppercase tracking-tight text-text-onDark">
                    {piece.title}
                  </p>
                </div>
                <ArrowUpRight
                  className="mb-1 h-5 w-5 flex-shrink-0 text-text-onDark opacity-0 transition-opacity group-hover:opacity-100"
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
