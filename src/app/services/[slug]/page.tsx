import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BookNowButton from "@/components/BookNowButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import { getServiceBySlug, getServiceUrl, site } from "@/data/site";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return site.services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  const pageUrl = `${site.url}${getServiceUrl(service.slug)}`;
  const title = `${service.category} in ${site.address.addressLocality}, ${site.address.addressRegion}`;
  const description = `${service.intro} View pricing, session lengths, and online booking for ${service.category} at ${site.name}.`;

  return {
    title,
    description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url: pageUrl,
    },
    twitter: {
      title: `${title} | ${site.name}`,
      description,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const pageUrl = `${site.url}${getServiceUrl(service.slug)}`;
  const breadcrumbId = `${pageUrl}/#breadcrumb`;

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": breadcrumbId,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: site.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${site.url}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.category,
        item: pageUrl,
      },
    ],
  };

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}/#service`,
    name: service.category,
    serviceType: service.category,
    description: service.intro,
    areaServed: {
      "@type": "City",
      name: site.address.addressLocality,
    },
    provider: {
      "@id": `${site.url}/#business`,
    },
    mainEntityOfPage: pageUrl,
    offers: service.items.map((item) => {
      const numericPrice = Number(item.price.replace(/[^0-9.]/g, ""));

      return {
        "@type": "Offer",
        name: `${service.category} ${item.name}`,
        url: pageUrl,
        price: numericPrice,
        priceCurrency: "USD",
      };
    }),
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-stone-50">
      <JsonLd id={`${service.slug}-breadcrumb-structured-data`} data={breadcrumbData} />
      <JsonLd id={`${service.slug}-service-structured-data`} data={serviceData} />
      <JsonLd id={`${service.slug}-faq-structured-data`} data={faqData} />
      <Navbar />

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.category },
            ]}
          />

          <div className="grid gap-10 lg:grid-cols-[1.35fr_0.9fr] items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary mb-4">
                Massage Therapy in Issaquah
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
                {service.category} in Issaquah, WA
              </h1>
              <p className="text-lg md:text-xl text-muted leading-relaxed">
                {service.intro}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
                <BookNowButton className="inline-flex items-center justify-center bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold hover:bg-accent/90 transition-colors">
                  {site.bookingCtaLabel}
                </BookNowButton>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center border border-primary/15 bg-white px-6 py-3 rounded-full font-semibold text-primary hover:bg-surface-alt transition-colors"
                >
                  Compare Massage Services
                </Link>
              </div>
              <p className="mt-3 text-sm text-muted">{site.bookingNote}</p>
            </div>

            <aside className="rounded-3xl border border-primary/10 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-primary mb-6">
                Session lengths and pricing
              </h2>
              <ul className="space-y-4">
                {service.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex justify-between items-center border-b border-primary/10 pb-4"
                  >
                    <span className="font-medium text-foreground">{item.name}</span>
                    <span className="font-semibold text-secondary">{item.price}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 text-sm text-muted leading-relaxed space-y-2">
                <p>{site.hoursText}</p>
                <p>
                  {site.address.streetAddress}, {site.address.addressLocality},{" "}
                  {site.address.addressRegion} {site.address.postalCode}
                </p>
                <p>
                  Prefer help booking? Call{" "}
                  <a
                    href={site.phoneHref}
                    className="font-semibold text-secondary hover:text-primary transition-colors"
                  >
                    {site.phone}
                  </a>
                  .
                </p>
              </div>
            </aside>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <section className="rounded-3xl border border-primary/10 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-semibold text-primary mb-6">
                Benefits of {service.category}
              </h2>
              <ul className="space-y-4 text-muted leading-relaxed">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3">
                    <span className="text-secondary font-bold">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-3xl border border-primary/10 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-semibold text-primary mb-6">
                Who this service is best for
              </h2>
              <ul className="space-y-4 text-muted leading-relaxed">
                {service.bestFor.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-secondary font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <section className="mt-16 rounded-3xl bg-primary text-primary-foreground p-8 md:p-10">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
              <div>
                <h2 className="text-3xl font-semibold mb-4">
                  Customize your session with add-ons
                </h2>
                <p className="text-primary-foreground/80 leading-relaxed">
                  Massage appointments can be customized with hot stones,
                  advanced cupping therapy, CBD oil enhancement, or
                  aromatherapy. If you are deciding between services, online
                  booking shows currently released times and calling is always
                  an option for quick questions.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {site.addons.map((addon) => (
                  <div
                    key={addon.name}
                    className="rounded-2xl border border-white/10 bg-white/10 px-4 py-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p>{addon.name}</p>
                        <p className="mt-1 text-sm text-primary-foreground/75">
                          {addon.description}
                        </p>
                      </div>
                      <span className="shrink-0 text-secondary font-semibold">
                        {addon.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-16">
            <div className="max-w-3xl mb-10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary mb-4">
                FAQ
              </p>
              <h2 className="text-4xl font-bold text-primary mb-5">
                Questions about {service.category}
              </h2>
              <p className="text-lg text-muted leading-relaxed">
                These answers cover common questions clients ask before booking{" "}
                {service.category.toLowerCase()} at our Issaquah location.
              </p>
            </div>

            <div className="grid gap-5">
              {service.faqs.map((faq) => (
                <article
                  key={faq.question}
                  className="rounded-2xl border border-primary/10 bg-white p-7 shadow-sm"
                >
                  <h3 className="text-2xl font-semibold text-primary mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted leading-relaxed">{faq.answer}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}
