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
          <div className="relative w-48 h-24 md:w-64 md:h-32">
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
        <BookNowButton className="bg-accent text-accent-foreground px-6 py-2.5 rounded-full text-sm font-medium hover:bg-accent/90 transition-colors shadow-md">
          Book Now
        </BookNowButton>
      </div>
    </nav>
  );
}
