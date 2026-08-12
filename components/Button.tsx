import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "secondaryOnDark" | "whatsapp" | "phone";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-press text-white hover:bg-press-600 active:bg-press-600 focus-visible:outline-ink",
  secondary:
    "bg-transparent text-ink border border-ink hover:bg-ink hover:text-white active:bg-ink-700",
  secondaryOnDark:
    "bg-transparent text-text-onDark border border-border-onDark hover:bg-text-onDark hover:text-ink active:bg-paper-alt",
  whatsapp:
    "bg-approve text-white hover:bg-approve-600 active:bg-approve-600",
  phone:
    "bg-ink text-white hover:bg-ink-700 active:bg-ink-900",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-pill px-6 py-3.5 font-body text-sm font-semibold tracking-wide transition-colors duration-150 disabled:opacity-50 disabled:pointer-events-none ${variantClasses[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
