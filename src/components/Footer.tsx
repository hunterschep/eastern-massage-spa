import Image from "next/image";
import Link from "next/link";
import { BookingLink } from "./ActionLinks";
import { getServiceUrl, site } from "@/data/site";
import { publicHoursText, publicUrl } from "@/utils/publicContent";

export default function Footer() {
  const reviewLinks = site.reviews.sources
    .map((source) => ({ name: source.name, url: publicUrl(source.url) }))
    .filter((source): source is { name: string; url: string } => Boolean(source.url));

  return (
    <footer className="border-t border-primary/10 bg-[var(--surface)] py-12 text-sm">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2 xl:grid-cols-[1.25fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="inline-flex" aria-label="Eastern Massage Spa home">
            <span className="relative block h-14 w-32">
              <Image
                src={site.images.logo}
                alt={`${site.name} logo`}
                fill
                className="object-contain object-left"
                unoptimized
              />
            </span>
          </Link>
          <p className="mt-4 max-w-sm leading-7 text-muted">
            A quieter massage experience in Issaquah with Michelle at Eastern
            Massage Spa.
          </p>
          <address className="mt-4 not-italic leading-7 text-muted">
            {site.address.streetAddress}
            <br />
            {site.address.addressLocality}, {site.address.addressRegion}{" "}
            {site.address.postalCode}
          </address>
          <p className="mt-3 leading-7 text-muted">
            {publicHoursText(site.hoursText)}
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <BookingLink ctaLocation="footer">Book a Massage</BookingLink>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-semibold text-primary">Services</span>
          <Link href="/services" className="text-muted hover:text-primary">
            All Massage Services
          </Link>
          {site.services.map((service) => (
            <Link
              key={service.slug}
              href={getServiceUrl(service.slug)}
              className="text-muted hover:text-primary"
            >
              {service.category}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-semibold text-primary">Studio</span>
          <Link href="/about-michelle" className="text-muted hover:text-primary">
            About Michelle
          </Link>
          <Link href="/contact" className="text-muted hover:text-primary">
            Contact and Location
          </Link>
          <Link href="/#reviews" className="text-muted hover:text-primary">
            Reviews
          </Link>
          <Link href="/privacy" className="text-muted hover:text-primary">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-muted hover:text-primary">
            Terms of Service
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-semibold text-primary">Review sources</span>
          {reviewLinks.map((source) => (
            <a
              key={source.name}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary"
            >
              {source.name}
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-primary/10 px-4 pt-6 text-xs text-muted sm:px-6">
        &copy; {new Date().getFullYear()} {site.legalName}. All rights reserved.
      </div>
    </footer>
  );
}
