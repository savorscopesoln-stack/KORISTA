export default function StampBadge({
  className = "",
  ring = "Korista Printing Hub",
  center = "SUNEKA",
  sub = "KISII COUNTY",
}: {
  className?: string;
  ring?: string;
  center?: string;
  sub?: string;
}) {
  const id = "stamp-ring-path";
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <defs>
        <path id={id} d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0" />
      </defs>
      <circle cx="100" cy="100" r="96" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="1" />
      <text fill="currentColor" fontSize="12.5" letterSpacing="3" fontFamily="var(--font-mono), monospace">
        <textPath href={`#${id}`} startOffset="2%">
          {ring.toUpperCase()} • {ring.toUpperCase()} •
        </textPath>
      </text>
      <text
        x="100"
        y="96"
        textAnchor="middle"
        fill="currentColor"
        fontSize="22"
        fontWeight={800}
        fontFamily="var(--font-display), sans-serif"
        letterSpacing="1"
      >
        {center}
      </text>
      <text
        x="100"
        y="114"
        textAnchor="middle"
        fill="currentColor"
        fontSize="9.5"
        letterSpacing="2.5"
        fontFamily="var(--font-mono), monospace"
      >
        {sub}
      </text>
    </svg>
  );
}
