import { CheckCircle2 } from "lucide-react";
import { trustPoints } from "@/content/site";

export default function TrustStrip() {
  return (
    <div className="relative z-10 mx-auto -mt-5 max-w-content px-5 md:-mt-6 md:px-8">
      <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-border bg-border shadow-lift sm:grid-cols-2 md:grid-cols-4">
        {trustPoints.map((point) => (
          <li key={point} className="flex items-start gap-3 bg-surface p-5">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-press" strokeWidth={2} aria-hidden="true" />
            <span className="font-body text-sm leading-snug text-text-ink">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
