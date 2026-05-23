import Link from "next/link";
import { BookingLink } from "./ActionLinks";
import { getServiceBookingUrl, getServiceUrl, site, type Service } from "@/data/site";
import { publicText } from "@/utils/publicContent";

function priceNumber(price: string) {
  const parsed = Number(price.replace(/[^0-9.]/g, ""));
  return Number.isFinite(parsed) ? parsed : Number.POSITIVE_INFINITY;
}

function startingPrice(service: Service) {
  const lowest = service.items.reduce((best, item) => {
    return priceNumber(item.price) < priceNumber(best.price) ? item : best;
  }, service.items[0]);

  return lowest?.price ?? "";
}

type ServicePricingMenuProps = {
  compact?: boolean;
  ctaLocation: string;
};

const menuPanelClass =
  "overflow-hidden rounded-lg border border-primary/10 bg-[var(--surface)] shadow-[0_6px_24px_rgba(36,53,44,0.07)]";

const menuHeaderClass = "mb-4 flex flex-col justify-end lg:min-h-[104px]";

const menuSummaryClass =
  "grid min-h-[92px] cursor-pointer list-none grid-cols-[minmax(0,1fr)_92px_28px] items-center gap-4 px-5 py-4 focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary sm:grid-cols-[minmax(0,1fr)_110px_32px] md:px-6";

export default function ServicePricingMenu({
  compact = false,
  ctaLocation,
}: ServicePricingMenuProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(300px,0.8fr)] lg:items-start">
      <section aria-labelledby="massage-menu-heading">
        <div className={menuHeaderClass}>
          <h2 id="massage-menu-heading" className="text-3xl font-semibold text-primary">
            Services and pricing
          </h2>
          <p className="mt-3 max-w-xl leading-7 text-muted">
            Open a service to compare duration, price, and booking options before
            scheduling.
          </p>
        </div>

        <div className={menuPanelClass}>
          {site.services.map((service) => (
            <details
              key={service.slug}
              className="group border-t border-primary/10 first:border-t-0"
            >
              <summary className={menuSummaryClass}>
                <span className="min-w-0">
                  <span className="block text-base font-semibold leading-snug text-primary sm:text-lg">
                    {service.category}
                  </span>
                  {service.subtitle ? (
                    <span className="mt-1 block text-sm leading-snug text-muted">
                      {service.subtitle}
                    </span>
                  ) : null}
                </span>
                <span className="text-right text-sm leading-tight text-muted">
                  From{" "}
                  <strong className="block text-lg text-foreground">
                    {startingPrice(service)}
                  </strong>
                </span>
                <span
                  aria-hidden="true"
                  className="text-2xl leading-none text-accent transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>

              <div className="border-t border-primary/10 px-5 pb-5 pt-0 md:px-6 md:pb-6">
                <p className="max-w-3xl py-5 leading-7 text-muted">
                  {publicText(service.description, service.category)}
                </p>

                <div className="overflow-hidden rounded-lg border border-primary/10">
                  <table className="w-full border-collapse text-left text-sm">
                    <caption className="sr-only">
                      {service.category} prices by session length
                    </caption>
                    <thead className="bg-[var(--surface-alt)] text-primary">
                      <tr>
                        <th scope="col" className="px-4 py-3 font-semibold">
                          Duration
                        </th>
                        <th scope="col" className="px-4 py-3 text-right font-semibold">
                          Price
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-primary/10 bg-[var(--surface)]">
                      {service.items.map((item) => (
                        <tr key={item.name}>
                          <td className="px-4 py-4 text-foreground">{item.name}</td>
                          <td className="px-4 py-4 text-right text-xl font-semibold text-primary">
                            {item.price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <BookingLink
                    href={getServiceBookingUrl(service)}
                    serviceName={service.category}
                    ctaLocation={ctaLocation}
                  >
                    {compact ? "Book appointment" : service.bookingLabel}
                  </BookingLink>
                  <Link
                    href={getServiceUrl(service.slug)}
                    className="fine-link inline-flex min-h-11 items-center"
                  >
                    Explore {service.category} details
                  </Link>
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section aria-labelledby="enhancements-menu-heading">
        <div className={menuHeaderClass}>
          <h2 id="enhancements-menu-heading" className="text-3xl font-semibold text-primary">
            Enhancements
          </h2>
          <p className="mt-3 max-w-xl leading-7 text-muted">
            Add-on pricing is separate from the massage session price and is
            confirmed during booking.
          </p>
        </div>

        <div className={menuPanelClass}>
          {site.addons.map((addon) => (
            <details
              key={addon.name}
              className="group border-t border-primary/10 first:border-t-0"
            >
              <summary className={menuSummaryClass}>
                <span className="block min-w-0 text-base font-semibold leading-snug text-primary sm:text-lg">
                  {addon.name}
                </span>
                <strong className="text-right text-lg text-foreground">
                  {addon.price}
                </strong>
                <span
                  aria-hidden="true"
                  className="text-2xl leading-none text-accent transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>

              <div className="border-t border-primary/10 px-5 py-5 md:px-6">
                <p className="leading-7 text-muted">
                  {publicText(addon.description, addon.name)}
                </p>
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
