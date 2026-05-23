import FAQAccordion from "./FAQAccordion";
import { Section, SectionHeading, Shell } from "./DesignPrimitives";
import { site } from "@/data/site";

export default function FAQ() {
  return (
    <Section id="faq" className="bg-[var(--background)]">
      <Shell narrow>
        <SectionHeading
          label="Booking questions"
          title="Common questions."
          className="mx-auto mb-10 text-center"
        />

        <FAQAccordion items={site.faqs} />
      </Shell>
    </Section>
  );
}
