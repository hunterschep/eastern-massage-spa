import { site } from "@/data/site";

const highlights = [
  {
    title: "Licensed Massage Therapists",
    body:
      "Professional massage care focused on relaxation, muscle tension relief, and sessions adjusted to your comfort level.",
  },
  {
    title: "Central Issaquah Location",
    body:
      `Conveniently located at ${site.address.streetAddress} in ${site.address.addressLocality} for clients who want dependable massage therapy close to downtown and nearby Eastside communities.`,
  },
  {
    title: "Customized Enhancements",
    body:
      "Add hot stones, advanced cupping therapy, CBD oil, or aromatherapy to tailor your massage session to your needs.",
  },
  {
    title: "Open Daily",
    body:
      `${site.hoursText}, making it easier to schedule massage therapy around work, family, and training routines.`,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary mb-4">
            Local Massage Care
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif mb-5">
            Professional Massage Care in Issaquah
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            Eastern Massage Spa helps clients in Issaquah address daily stress,
            overworked muscles, stiffness, mobility restrictions, and general
            body tension with advanced recovery therapy, therapeutic massage,
            relaxation sessions, and straightforward care in a calm,
            professional environment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-primary/10 bg-surface p-6 shadow-sm"
            >
              <h3 className="text-xl font-serif font-semibold text-primary mb-3">
                {item.title}
              </h3>
              <p className="text-muted leading-relaxed">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
