import { site } from "@/data/site";
import { hasPlaceholder, publicUrl } from "@/utils/publicContent";
import { cx } from "./DesignPrimitives";

type ReviewHighlightsProps = {
  compact?: boolean;
  className?: string;
};

function StarRow({ rating, source }: { rating: string; source: string }) {
  const label = hasPlaceholder(rating)
    ? `${source} client rating`
    : `${source} ${rating} out of 5 average rating`;

  return (
    <div className="flex items-center gap-0.5 text-[var(--decorative-gold)]" aria-label={label}>
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          key={index}
          aria-hidden="true"
          viewBox="0 0 20 20"
          className="h-4 w-4 fill-current"
        >
          <path d="m10 1.7 2.35 4.77 5.26.76-3.8 3.71.9 5.24L10 13.7l-4.7 2.48.9-5.24-3.81-3.71 5.26-.76L10 1.7Z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewHighlights({
  compact = false,
  className,
}: ReviewHighlightsProps) {
  const reviewSources = site.reviews.sources.filter((source) =>
    ["Google", "Fresha", "Birdeye"].includes(source.name)
  );

  if (reviewSources.length === 0) {
    return null;
  }

  return (
    <div
      aria-label="Eastern Massage Spa review ratings"
      className={cx(
        "grid gap-3 sm:grid-cols-3",
        compact ? "" : "max-w-3xl",
        className
      )}
    >
      {reviewSources.map((source) => {
        const url = publicUrl(source.url);
        const rating = hasPlaceholder(source.rating) ? "" : source.rating;
        const count = hasPlaceholder(source.count) ? "" : source.count;
        const cardClass = cx(
          "group rounded-lg border border-primary/10 bg-[var(--surface)] p-4 shadow-[0_4px_14px_rgba(36,53,44,0.08)] transition-colors focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary",
          url ? "hover:border-primary/30" : ""
        );
        const inner = (
          <>
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm font-bold text-primary">{source.name}</span>
              <StarRow rating={source.rating} source={source.name} />
            </div>
            {rating ? (
              <p className="mt-3 text-2xl font-semibold leading-none text-foreground">
                {rating}
              </p>
            ) : null}
            <p className="mt-2 text-sm font-semibold leading-5 text-muted">
              {rating ? "average" : "Read reviews"}
              {count ? ` from ${count} reviews` : ""}
            </p>
          </>
        );

        return url ? (
          <a
            key={source.name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={cardClass}
          >
            {inner}
          </a>
        ) : (
          <div key={source.name} className={cardClass}>
            {inner}
          </div>
        );
      })}
    </div>
  );
}
