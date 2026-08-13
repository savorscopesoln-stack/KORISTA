"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "./Button";
import RegistrationMark from "./RegistrationMark";

// Anchors resolve against the homepage regardless of which page you're on —
// "/#services" navigates home and scrolls, "/catalog" is its own route.
const navItems = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Catalog", href: "/catalog" },
  { label: "College", href: "/#college" },
  { label: "Work", href: "/#work" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-ink text-ink">
            <RegistrationMark className="h-5 w-5" color="currentColor" />
          </span>
          <span className="font-display text-xl font-bold uppercase leading-none tracking-tight text-ink">
            Korista
            <span className="block font-body text-[0.65rem] font-medium normal-case tracking-wide text-text-muted">
              Printing Hub
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative font-body text-sm font-medium text-text-ink"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-press transition-all duration-200 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/#contact" variant="primary">
            Get a Quote
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-border md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} className="text-ink" /> : <Menu size={20} className="text-ink" />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-border bg-paper md:hidden">
          <nav className="flex flex-col gap-1 px-5 py-4" aria-label="Mobile">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 font-body text-base font-medium text-text-ink hover:bg-paper-alt"
              >
                {item.label}
              </Link>
            ))}
            <Button href="/#contact" variant="primary" className="mt-3 w-full">
              Get a Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
