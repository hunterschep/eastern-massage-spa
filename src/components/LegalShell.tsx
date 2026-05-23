import Link from "next/link";

type LegalShellProps = {
  children: React.ReactNode;
  description: string;
  lastUpdated: string;
  summaryItems: string[];
  summaryLabel: string;
  title: string;
};

export default function LegalShell({
  children,
  description,
  lastUpdated,
  summaryItems,
  summaryLabel,
  title,
}: LegalShellProps) {
  return (
    <main className="legal-page">
      <div className="legal-shell">
        <Link href="/" className="legal-back">
          Back to Eastern Massage Spa
        </Link>

        <header className="legal-hero">
          <div>
            <p className="legal-kicker">Website policy</p>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
          <p className="legal-updated">Last updated {lastUpdated}</p>
        </header>

        <section className="legal-summary" aria-label={summaryLabel}>
          {summaryItems.map((item) => (
            <div key={item} className="legal-summary-item">
              <span aria-hidden="true" />
              <p>{item}</p>
            </div>
          ))}
        </section>

        <article className="legal-document legal-prose">{children}</article>
      </div>
    </main>
  );
}
