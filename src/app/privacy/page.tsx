import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `${site.name} privacy policy detailing how we handle client information for massage services in Issaquah, WA.`,
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <div className="mb-8">
          <Link href="/" className="text-secondary hover:text-primary transition-colors mb-8 inline-block">
              ← Back to Home
          </Link>
          <h1 className="text-4xl font-serif font-bold text-primary mb-6">Privacy Policy</h1>
          <p className="text-muted">Last Updated: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="prose prose-stone max-w-none">
        <p>
          At {site.name}, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
        </p>

        <h2 className="text-2xl font-serif font-semibold text-primary mt-8 mb-4">1. Information We Collect</h2>
        <p>
          We collect information that you voluntarily provide to us when you:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted">
          <li>Contact us via phone or email to book an appointment.</li>
          <li>Visit our spa in person.</li>
        </ul>
        <p className="mt-4">
          This information may include your name, phone number, email address, and health history relevant to your massage therapy (collected in-person).
        </p>
        <p>
            Our website does not use cookies for tracking personal information.
        </p>

        <h2 className="text-2xl font-serif font-semibold text-primary mt-8 mb-4">2. How We Use Your Information</h2>
        <p>
          We use the information we collect to:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted">
          <li>Schedule and confirm your appointments.</li>
          <li>Provide safe and effective massage therapy services.</li>
          <li>Communicate with you regarding your appointments or inquiries.</li>
          <li>Comply with legal and regulatory requirements.</li>
        </ul>

        <h2 className="text-2xl font-serif font-semibold text-primary mt-8 mb-4">3. Information Sharing</h2>
        <p>
          We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. We may release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others&apos; rights, property, or safety.
        </p>

        <h2 className="text-2xl font-serif font-semibold text-primary mt-8 mb-4">4. Data Security</h2>
        <p>
          We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure.
        </p>

        <h2 className="text-2xl font-serif font-semibold text-primary mt-8 mb-4">5. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites (e.g., Google Maps). These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites.
        </p>

        <h2 className="text-2xl font-serif font-semibold text-primary mt-8 mb-4">6. Changes to This Policy</h2>
        <p>
          We reserve the right to update or change our Privacy Policy at any time. Any changes will be posted on this page.
        </p>

        <h2 className="text-2xl font-serif font-semibold text-primary mt-8 mb-4">7. Contact Us</h2>
        <p>
          If you have any questions regarding this Privacy Policy, you may contact us at:
        </p>
        <p className="mt-4 font-medium text-primary">
          {site.name}<br/>
          {site.address.streetAddress}<br/>
          {site.address.addressLocality}, {site.address.addressRegion} {site.address.postalCode}<br/>
          {site.phone}
        </p>
      </div>
    </div>
  );
}
