import { site } from "@/data/site";

interface BookNowButtonProps {
  className?: string;
  children?: React.ReactNode;
  href?: string;
}

export default function BookNowButton({
  className,
  children = "Book Now",
  href = site.bookingUrl,
}: BookNowButtonProps) {
  const isExternal = href.startsWith("http");
  const ariaLabel = href.startsWith("tel:")
    ? `Call ${site.name} to book an appointment`
    : `Book with ${site.name}`;

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
