import Link from "next/link";
import { business, locations } from "@/content/site";
import RegistrationMark from "./RegistrationMark";

const quickLinks = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Catalog", href: "/catalog" },
  { label: "College", href: "/#college" },
  { label: "Work", href: "/#work" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-900 text-text-onDarkMuted">
      <div className="mx-auto max-w-content px-5 py-16 md:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-text-onDarkMuted text-text-onDarkMuted">
                <RegistrationMark className="h-4 w-4" color="currentColor" />
              </span>
              <p className="font-display text-lg font-bold uppercase text-text-onDark">
                {business.name}
              </p>
            </div>
            <p className="mt-4 font-body text-sm leading-relaxed">
              Printing, branding and cyber services in Suneka (Kisii
              County) and Sophia, Homabay (Homabay County).
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4 text-text-onDark">Quick Links</p>
            <ul className="space-y-2 font-body text-sm">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-text-onDark">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4 text-text-onDark">Services</p>
            <ul className="space-y-2 font-body text-sm">
              <li><Link href="/#services" className="hover:text-text-onDark">Printing Services</Link></li>
              <li><Link href="/#services" className="hover:text-text-onDark">Branding &amp; Signage</Link></li>
              <li><Link href="/#services" className="hover:text-text-onDark">Promotional Products</Link></li>
              <li><Link href="/#services" className="hover:text-text-onDark">Cyber Services</Link></li>
              <li><Link href="/catalog" className="hover:text-text-onDark">Full Catalog &amp; Pricing</Link></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4 text-text-onDark">Contact</p>
            <ul className="space-y-2 font-body text-sm">
              {locations.map((l) => (
                <li key={l.label}>{l.address}</li>
              ))}
              <li>{business.contact.phoneDisplay}</li>
              <li>{business.contact.email}</li>
              <li>M-Pesa Till: {business.payment.mpesaTill}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border-onDark pt-6 font-body text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {business.name}. All rights reserved.</p>
          <p className="font-mono uppercase tracking-widest text-text-onDarkMuted/70">
            Design · Print · Deliver
          </p>
        </div>
      </div>
    </footer>
  );
}
