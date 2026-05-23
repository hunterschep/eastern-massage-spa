import type { Metadata } from "next";
import Link from "next/link";
import { BookingLink } from "@/components/ActionLinks";
import {
  DecorativeRule,
  ImageFrame,
  Section,
  Shell,
  SoftPanel,
} from "@/components/DesignPrimitives";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TrustReviews from "@/components/TrustReviews";
import { site } from "@/data/site";
import {
  isPlaceholder,
  publicPractitionerBio,
  publicText,
} from "@/utils/publicContent";

const pageUrl = `${site.url}/about-michelle`;
const title = "About Michelle | Eastern Massage Spa in Issaquah, WA";
const description =
  "Learn about Michelle at Eastern Massage Spa in Issaquah, WA, including her approved massage credentials, approach, and specialties.";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title,
    description,
    url: pageUrl,
    images: [
      {
        url: site.images.og,
        width: 1200,
        height: 630,
        alt: `${site.name} treatment room in Issaquah`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [site.images.og],
  },
};

export default function AboutMichellePage() {
  const longBio = publicPractitionerBio(site.practitioner.longBio);
  const titleText = publicText(
    site.practitioner.title,
    "Massage practitioner at Eastern Massage Spa"
  );
  const credentials = publicText(
    site.practitioner.credentials,
    "Licensed Massage Therapist"
  );
  const specialties = publicText(
    site.practitioner.specialties,
    "Deep tissue, therapeutic massage, relaxation massage, and cupping therapy."
  );
  const licenseNumber = isPlaceholder(site.practitioner.licenseNumber)
    ? ""
    : publicText(site.practitioner.licenseNumber, "");
  const experience = isPlaceholder(site.practitioner.yearsExperience)
    ? ""
    : publicText(site.practitioner.yearsExperience, "");
  const approach = isPlaceholder(site.practitioner.approach)
    ? ""
    : publicText(site.practitioner.approach, "");

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <Section className="bg-[var(--background)]">
        <Shell className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="relative">
            <SoftPanel className="p-5">
              <ImageFrame
                src={site.images.michelle}
                alt={site.practitioner.photoAlt}
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="h-[520px]"
                imageClassName="object-[center_20%]"
              />
            </SoftPanel>
          </div>

          <div>
            <DecorativeRule className="mb-5" />
            <p className="detail-label mb-4">Primary practitioner in Issaquah</p>
            <h1 className="text-4xl font-bold leading-[1.08] text-primary md:text-5xl lg:text-6xl">
              About Michelle
            </h1>
            <p className="mt-5 text-lg font-semibold text-foreground">{titleText}</p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">{longBio}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <BookingLink ctaLocation="about_michelle">Book a Massage</BookingLink>
            </div>
          </div>
        </Shell>
      </Section>

      <Section className="bg-[var(--surface)]">
        <Shell className="grid gap-8 md:grid-cols-2">
          <SoftPanel className="p-6">
            <h2 className="text-2xl font-semibold text-primary">Credentials</h2>
            <p className="mt-4 leading-7 text-muted">{credentials}</p>
            {licenseNumber ? (
              <p className="mt-4 text-sm leading-6 text-muted">
                License details: {licenseNumber}
              </p>
            ) : null}
          </SoftPanel>
          <SoftPanel className="p-6">
            <h2 className="text-2xl font-semibold text-primary">Specialties</h2>
            <p className="mt-4 leading-7 text-muted">{specialties}</p>
            {experience ? (
              <p className="mt-4 text-sm leading-6 text-muted">
                Experience: {experience}
              </p>
            ) : null}
          </SoftPanel>
          {approach ? (
            <SoftPanel className="p-6">
              <h2 className="text-2xl font-semibold text-primary">Approach</h2>
              <p className="mt-4 leading-7 text-muted">{approach}</p>
            </SoftPanel>
          ) : null}
          <SoftPanel className="p-6">
            <h2 className="text-2xl font-semibold text-primary">
              What clients can expect
            </h2>
            <p className="mt-4 leading-7 text-muted">
              Clear pressure communication in a calm Issaquah studio.
            </p>
            <Link href="/services" className="fine-link mt-5 inline-flex">
              View massage services
            </Link>
          </SoftPanel>
        </Shell>
      </Section>

      <TrustReviews compact ctaLocation="about_michelle_reviews" />
      <Footer />
    </main>
  );
}
