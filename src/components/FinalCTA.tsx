import { BookingLink } from "./ActionLinks";
import { Section, Shell } from "./DesignPrimitives";

export default function FinalCTA() {
  return (
    <Section className="bg-[var(--primary)] text-primary-foreground">
      <Shell className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="font-serif text-4xl font-semibold leading-tight text-primary-foreground md:text-5xl">
            Book your massage.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
          <BookingLink ctaLocation="final_cta">Book a Massage</BookingLink>
        </div>
      </Shell>
    </Section>
  );
}
