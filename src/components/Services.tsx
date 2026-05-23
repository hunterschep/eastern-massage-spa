import ServicePricingMenu from "./ServicePricingMenu";
import { Section, SectionHeading, Shell } from "./DesignPrimitives";

export default function Services() {
  return (
    <Section id="services" className="bg-[var(--background)]">
      <Shell>
        <div className="max-w-3xl">
          <SectionHeading
            label="Services and pricing"
            title="Massage services and pricing."
          />
        </div>

        <div className="mt-12">
          <ServicePricingMenu compact ctaLocation="homepage_pricing_menu" />
        </div>
      </Shell>
    </Section>
  );
}
