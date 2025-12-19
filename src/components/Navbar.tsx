import Link from "next/link";
import Image from "next/image";
import BookNowButton from "./BookNowButton";
import { site } from "@/data/site";

export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 bg-surface/90 backdrop-blur-md shadow-sm border-b border-stone-100"
      aria-label="Primary"
    >
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="relative w-40 h-20 md:w-64 md:h-32">
            <Image
              src="/logo/mainlogo.png"
              alt={`${site.name} Logo`}
              fill
              className="object-contain object-left"
              unoptimized
              priority
            />
          </div>
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium text-muted">
          <Link href="#services" className="hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="#location" className="hover:text-primary transition-colors">
            Location &amp; Hours
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 max-w-[260px] sm:max-w-none">
          <a
            href={site.phoneHref}
            className="inline-flex justify-center items-center gap-2 text-xs sm:text-sm font-semibold text-primary bg-white px-3 py-2 rounded-full border border-primary/10 shadow-sm hover:shadow-md transition-all focus-visible:outline focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
          >
            <span className="text-secondary">Call</span>
            <span className="tracking-tight">{site.phone}</span>
          </a>
          <BookNowButton className="bg-accent text-accent-foreground px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-center hover:bg-accent/90 transition-colors shadow-md focus-visible:outline focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent">
            Book on Fresha
          </BookNowButton>
        </div>
      </div>
    </nav>
  );
}
