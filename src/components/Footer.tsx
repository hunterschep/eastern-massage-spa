import Link from "next/link";
import { getServiceUrl, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-14 text-sm border-t border-primary/20">
      <div className="container mx-auto px-4 grid gap-10 md:grid-cols-2 xl:grid-cols-[1.5fr_1fr_1fr] items-start">
        <div className="text-center md:text-left max-w-xl">
          <span className="text-lg font-serif font-bold text-secondary block mb-2">
            {site.name}
          </span>
          <p className="text-primary-foreground/75 leading-relaxed">
            Professional massage therapy in Issaquah, Washington, offering
            advanced recovery therapy, therapeutic massage, relaxation
            services, cupping therapy, and session enhancements for recovery
            and wellness.
          </p>
          <p className="text-primary-foreground/65 mt-3">
            {site.address.streetAddress}, {site.address.addressLocality},{" "}
            {site.address.addressRegion} {site.address.postalCode}
          </p>
          <p className="text-primary-foreground/65 mt-1">
            {site.phone} · {site.hoursText}
          </p>
          <p className="text-primary-foreground/55 mt-3">
            &copy; {new Date().getFullYear()} {site.legalName}. All rights
            reserved.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-semibold uppercase tracking-[0.2em] text-secondary text-xs">
            Explore
          </span>
          <Link
            href="/services"
            className="text-primary-foreground/75 hover:text-secondary transition-colors"
          >
            Massage Services
          </Link>
          {site.services.map((service) => (
            <Link
              key={service.slug}
              href={getServiceUrl(service.slug)}
              className="text-primary-foreground/75 hover:text-secondary transition-colors"
            >
              {service.category}
            </Link>
          ))}
          <Link
            href="/#location"
            className="text-primary-foreground/75 hover:text-secondary transition-colors"
          >
            Location &amp; Hours
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-semibold uppercase tracking-[0.2em] text-secondary text-xs">
            Policies
          </span>
          <Link
            href="/privacy"
            className="text-primary-foreground/75 hover:text-secondary transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-primary-foreground/75 hover:text-secondary transition-colors"
          >
            Terms of Service
          </Link>
          <a
            href={site.phoneHref}
            className="text-primary-foreground/75 hover:text-secondary transition-colors"
          >
            Call {site.phone}
          </a>
        </div>
      </div>
    </footer>
  );
}
