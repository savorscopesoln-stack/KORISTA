export default function CmykDots({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      aria-hidden="true"
      style={{ mixBlendMode: "multiply" }}
    >
      <circle cx="48" cy="48" r="34" fill="#00AEEF" opacity="0.55" />
      <circle cx="72" cy="48" r="34" fill="#EC008C" opacity="0.55" />
      <circle cx="60" cy="72" r="34" fill="#FFF200" opacity="0.6" />
      <circle cx="60" cy="58" r="14" fill="#1A1D29" opacity="0.85" />
    </svg>
  );
}
