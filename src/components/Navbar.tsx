"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BookingLink } from "./ActionLinks";
import { cx } from "./DesignPrimitives";
import { site } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navLinks = [
    { label: "Services", href: "/services" },
    { label: "About Michelle", href: "/about-michelle" },
    { label: "Contact", href: "/contact" },
    { label: "Reviews", href: "/#reviews" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-primary/10 bg-[rgba(255,253,248,0.94)] backdrop-blur">
      <nav aria-label="Primary" className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex min-h-[72px] items-center justify-between gap-4">
          <Link href="/" className="flex items-center" aria-label="Eastern Massage Spa home">
            <span className="relative block h-[52px] w-28 md:h-14 md:w-32">
              <Image
                src={site.images.logo}
                alt={`${site.name} logo`}
                fill
                className="object-contain object-left"
                priority
                unoptimized
              />
            </span>
          </Link>

          <div className="hidden items-center gap-7 text-sm font-semibold text-muted md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-primary focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <BookingLink ctaLocation="header" className="px-4 py-2.5">
              Book a Massage
            </BookingLink>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <BookingLink ctaLocation="mobile_header" className="min-w-0 px-3 py-2.5">
              Book
            </BookingLink>
            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((current) => !current)}
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-primary/15 bg-[var(--surface)] px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-[var(--surface-warm)] focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary"
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={cx(
            "grid overflow-hidden border-t border-primary/10 transition-[grid-template-rows] duration-200 md:hidden",
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          )}
        >
          <div className="min-h-0">
            <div className="flex flex-col gap-1 py-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="min-h-11 rounded-lg px-3 py-3 text-sm font-semibold text-primary transition-colors hover:bg-[var(--surface-warm)] focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {link.label}
                </Link>
              ))}
              <BookingLink ctaLocation="mobile_menu" className="mt-2 w-full">
                Book a Massage
              </BookingLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
