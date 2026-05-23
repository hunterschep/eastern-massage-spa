import { BookingLink } from "./ActionLinks";
import { Section, SectionHeading, Shell, SoftPanel } from "./DesignPrimitives";
import ReviewHighlights from "./ReviewHighlights";
import { site } from "@/data/site";
import {
  hasPlaceholder,
  publicReviewSummary,
  publicTestimonial,
  publicUrl,
} from "@/utils/publicContent";

type TrustReviewsProps = {
  compact?: boolean;
  ctaLocation: string;
};

export default function TrustReviews({
  compact = false,
  ctaLocation,
}: TrustReviewsProps) {
  const summary = hasPlaceholder(site.reviews.summary)
    ? ""
    : publicReviewSummary(site.reviews.summary);
  const testimonials = site.reviews.testimonials
    .filter((testimonial) => testimonial.quote && !hasPlaceholder(testimonial.quote))
    .slice(0, compact ? 2 : 3);
  const reviewSources = site.reviews.sources.filter((source) =>
    ["Fresha", "Birdeye", "Google"].includes(source.name) && publicUrl(source.url)
  );

  if (!summary && reviewSources.length === 0 && testimonials.length === 0) {
    return null;
  }

  return (
    <Section id="reviews" className="bg-[var(--surface)]">
      <Shell>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              label="Client trust"
              title="Reviews clients can verify."
            />
            <div className="mt-6 grid max-w-md grid-cols-2 overflow-hidden rounded-lg border border-primary/10 bg-[var(--background)]">
              {site.businessStats.map((stat) => (
                <div
                  key={stat.label}
                  className="border-l border-primary/10 p-4 first:border-l-0"
                >
                  <p className="text-3xl font-semibold leading-none text-primary">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs font-semibold leading-5 text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-7">
              <BookingLink ctaLocation={ctaLocation}>Book a Massage</BookingLink>
            </div>
          </div>

          <div className="grid gap-4">
            <ReviewHighlights compact />

            {testimonials.length > 0 ? (
              <div className="grid gap-3 md:grid-cols-3">
                {testimonials.map((testimonial, index) => (
                  <SoftPanel key={`testimonial-${index}`} className="p-5">
                    <blockquote className="text-sm leading-7 text-foreground">
                      &quot;{publicTestimonial(testimonial.quote)}&quot;
                    </blockquote>
                    <p className="mt-4 text-xs font-semibold text-secondary">
                      {testimonial.author} - {testimonial.source}
                    </p>
                  </SoftPanel>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </Shell>
    </Section>
  );
}
