import { site } from "@/data/site";

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-surface-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary mb-4">
            Questions Clients Ask
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif mb-5">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            Clear answers about appointments, services, and what to expect
            before your massage in Issaquah.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid gap-5">
          {site.faqs.map((faq) => (
            <article
              key={faq.question}
              className="rounded-2xl border border-primary/10 bg-white p-7 shadow-sm"
            >
              <h3 className="text-2xl font-serif font-semibold text-primary mb-3">
                {faq.question}
              </h3>
              <p className="text-muted leading-relaxed">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
