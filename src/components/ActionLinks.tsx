import BookNowButton from "./BookNowButton";
import TrackedLink from "./TrackedLink";
import { cx } from "./DesignPrimitives";
import { site } from "@/data/site";

const base =
  "inline-flex min-h-11 items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:ring-2 focus-visible:ring-offset-2";

export const buttonStyles = {
  primary: `${base} bg-accent text-accent-foreground hover:bg-[var(--accent-hover)] focus-visible:ring-accent`,
  secondary: `${base} border border-primary/15 bg-[var(--surface)] text-primary hover:bg-[var(--surface-warm)] focus-visible:ring-primary`,
  darkSecondary: `${base} border border-white/25 bg-transparent text-primary-foreground hover:bg-white/10 focus-visible:ring-primary-foreground`,
  text: "inline-flex min-h-11 items-center justify-center rounded-lg px-2 py-2 text-sm font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary",
};

export function BookingLink({
  children = "Book a Massage",
  href,
  serviceName,
  ctaLocation,
  className,
}: {
  children?: React.ReactNode;
  href?: string;
  serviceName?: string;
  ctaLocation: string;
  className?: string;
}) {
  return (
    <BookNowButton
      href={href}
      serviceName={serviceName}
      ctaLocation={ctaLocation}
      className={cx(buttonStyles.primary, className)}
    >
      {children}
    </BookNowButton>
  );
}

export function DirectionsLink({
  children = "Get Directions",
  ctaLocation,
  className,
  dark = false,
}: {
  children?: React.ReactNode;
  ctaLocation: string;
  className?: string;
  dark?: boolean;
}) {
  return (
    <TrackedLink
      href={site.mapUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cx(dark ? buttonStyles.darkSecondary : buttonStyles.secondary, className)}
      eventName="directions_click"
      trackingParams={{ cta_location: ctaLocation }}
    >
      {children}
    </TrackedLink>
  );
}

export function CTAGroup({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cx("flex flex-col gap-3 sm:flex-row sm:flex-wrap", className)}>{children}</div>;
}
