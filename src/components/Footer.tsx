import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-14 text-sm border-t border-primary/20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left max-w-xl">
          <span className="text-lg font-serif font-bold text-secondary block mb-2">
            {site.name}
          </span>
          <p className="text-primary-foreground/75 leading-relaxed">
            Professional massage therapy in Issaquah, Washington, offering
            Swedish massage, Deep Tissue massage, and session enhancements for
            relaxation and recovery.
          </p>
          <p className="text-primary-foreground/65 mt-3">
            {site.address.streetAddress}, {site.address.addressLocality},{" "}
            {site.address.addressRegion} {site.address.postalCode}
          </p>
          <p className="text-primary-foreground/65 mt-1">
            {site.phone} · Open daily 10:00 AM – 9:30 PM
          </p>
          <p className="text-primary-foreground/55 mt-3">
            &copy; {new Date().getFullYear()} {site.legalName}. All rights
            reserved.
          </p>
        </div>
        <div className="flex gap-8">
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
        </div>
      </div>
    </footer>
  );
}
