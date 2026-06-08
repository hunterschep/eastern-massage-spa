import { BookingLink, DirectionsLink } from "./ActionLinks";

export default function StickyMobileCTA() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-primary/10 bg-[rgba(255,253,248,0.96)] px-3 py-2 shadow-[0_-8px_24px_rgba(36,53,44,0.10)] backdrop-blur md:hidden will-change-transform"
      aria-hidden={false}
    >
      <nav aria-label="Quick booking actions" className="grid grid-cols-2 gap-2">
        <BookingLink ctaLocation="sticky_mobile" className="min-w-0 px-3">
          Book
        </BookingLink>
        <DirectionsLink ctaLocation="sticky_mobile" className="min-w-0 px-3">
          Directions
        </DirectionsLink>
      </nav>
    </div>
  );
}
