import { site } from "@/data/site";
import TrackedLink from "./TrackedLink";

interface BookNowButtonProps {
  className?: string;
  children?: React.ReactNode;
  href?: string;
  serviceName?: string;
  ctaLocation?: string;
  eventName?: "book_now_click" | "service_booking_click" | "external_fresha_click";
  ariaLabel?: string;
}

export default function BookNowButton({
  className,
  children = "Book Now",
  href = site.bookingUrl,
  serviceName,
  ctaLocation = "unspecified",
  eventName = serviceName ? "service_booking_click" : "book_now_click",
  ariaLabel,
}: BookNowButtonProps) {
  const isExternal = href.startsWith("http");
  const computedAriaLabel = ariaLabel || (href.startsWith("tel:")
    ? `Contact ${site.name}`
    : serviceName
      ? `Check availability and book ${serviceName} with ${site.name}`
      : `Check availability and book with ${site.name}`);

  return (
    <TrackedLink
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={className}
      aria-label={computedAriaLabel}
      eventName={eventName}
      trackingParams={{
        service_name: serviceName,
        cta_location: ctaLocation,
      }}
    >
      {children}
    </TrackedLink>
  );
}
