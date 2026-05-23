import { publicText } from "@/utils/publicContent";

export type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  return (
    <div className="divide-y divide-primary/10 rounded-lg border border-primary/10 bg-[var(--surface)]">
      {items.map((faq) => (
        <details key={faq.question} className="group">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-primary focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary">
            <span>{faq.question}</span>
            <span
              aria-hidden="true"
              className="text-lg leading-none text-secondary transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <div className="px-5 pb-5 text-sm leading-relaxed text-muted">
            {publicText(faq.answer, "Check Fresha for details.")}
          </div>
        </details>
      ))}
    </div>
  );
}
