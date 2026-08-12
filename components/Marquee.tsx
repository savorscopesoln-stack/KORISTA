import { ReactNode } from "react";

export default function Marquee({
  items,
  className = "",
}: {
  items: ReactNode[];
  className?: string;
}) {
  // Duplicated for a seamless CSS translateX(-50%) loop — decorative only.
  const loop = [...items, ...items];

  return (
    <div className={className}>
      {/* Real content for assistive tech; the animated strip below is decorative */}
      <span className="sr-only">{items.map((item, i) => `${item}${i < items.length - 1 ? ", " : ""}`)}</span>

      <div className="overflow-hidden" aria-hidden="true">
        <div className="flex w-max animate-marquee gap-10 motion-reduce:animate-none">
          {loop.map((item, i) => (
            <span key={i} className="flex items-center gap-10 whitespace-nowrap">
              {item}
              <span className="text-press">•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
