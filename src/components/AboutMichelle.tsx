import Link from "next/link";
import { BookingLink } from "./ActionLinks";
import {
  DecorativeRule,
  ImageFrame,
  Section,
  SectionHeading,
  Shell,
  SoftPanel,
} from "./DesignPrimitives";
import { site } from "@/data/site";
import { publicPractitionerBio, publicText } from "@/utils/publicContent";

export default function AboutMichelle() {
  const bio = publicPractitionerBio(site.practitioner.shortBio);
  const credentials = publicText(
    site.practitioner.credentials,
    "Licensed Massage Therapist"
  );
  const specialties = publicText(
    site.practitioner.specialties,
    "Deep tissue, therapeutic massage, relaxation massage, and cupping therapy."
  );

  return (
    <Section className="bg-[var(--surface)]">
      <Shell className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
        <div className="relative">
          <SoftPanel className="p-5">
            <ImageFrame
              src={site.images.michelle}
              alt={site.practitioner.photoAlt}
              sizes="(max-width: 1024px) 100vw, 38vw"
              className="h-[420px]"
              imageClassName="object-[center_22%]"
            />
          </SoftPanel>
          <SoftPanel className="absolute -bottom-6 left-5 right-5 p-4">
            <p className="text-sm font-semibold text-primary">
              Licensed Massage Therapist
            </p>
          </SoftPanel>
        </div>

        <div className="pt-8 lg:pt-0">
          <DecorativeRule className="mb-5" />
          <SectionHeading label="Meet Michelle" title="Licensed care in Issaquah.">
            <p>{bio}</p>
          </SectionHeading>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <SoftPanel className="p-5">
              <h3 className="text-lg font-semibold text-primary">Credentials</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{credentials}</p>
            </SoftPanel>
            <SoftPanel className="p-5">
              <h3 className="text-lg font-semibold text-primary">Specialties</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{specialties}</p>
            </SoftPanel>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <BookingLink ctaLocation="homepage_about_michelle">
              Book a Massage
            </BookingLink>
            <Link href="/about-michelle" className="fine-link inline-flex min-h-11 items-center">
              Read about Michelle
            </Link>
          </div>
        </div>
      </Shell>
    </Section>
  );
}
