export default function RegistrationMark({
  className = "",
  color = "#1B2A4A",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="6.5" stroke={color} strokeWidth="1" />
      <path d="M12 0V24" stroke={color} strokeWidth="1" />
      <path d="M0 12H24" stroke={color} strokeWidth="1" />
    </svg>
  );
}
