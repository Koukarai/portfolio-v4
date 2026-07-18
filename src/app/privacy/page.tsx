import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/data/content";

export const metadata: Metadata = { title: "Privacy Policy | Terrence" };

const sections = [
  {
    heading: "Overview",
    body: `This site is a personal portfolio belonging to ${site.name}. It does not sell, rent, or share your personal information with third parties for marketing purposes. This page explains what little data is collected and how it's used.`,
  },
  {
    heading: "Information I Collect",
    body: "If you use the contact form, the name, email address, and message you submit are sent directly to my personal email via your own email client — nothing is stored on a server or in a database. Standard hosting logs (e.g. IP address, browser type, pages visited) may be collected automatically by the hosting provider for security and performance monitoring.",
  },
  {
    heading: "Cookies",
    body: "This site does not use tracking or advertising cookies. Your theme preference (light or dark) is stored locally in your browser and is never transmitted anywhere.",
  },
  {
    heading: "Third-Party Links",
    body: "This site links out to third-party platforms such as GitHub, LinkedIn, and Instagram. Those platforms have their own privacy policies, and I encourage you to review them — I'm not responsible for how they handle your data.",
  },
  {
    heading: "Data Retention",
    body: "Since contact form submissions aren't stored on this site, there's no server-side retention period to speak of. Any resulting email conversation is retained only in accordance with my own email provider's policies.",
  },
  {
    heading: "Your Rights",
    body: "You're welcome to contact me at any time if you have questions about this policy or want any correspondence deleted.",
  },
  {
    heading: "Changes to This Policy",
    body: "This policy may be updated occasionally to reflect changes to the site. The effective date below will always reflect the latest revision.",
  },
];

export default function PrivacyPage() {
  return (
    <section className="px-6 py-24 sm:px-10 lg:px-16 xl:px-24">
      <SectionHeading index="05" title="PRIVACY POLICY" />

      <h1 className="max-w-3xl text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
        Privacy Policy
      </h1>
      <p className="mt-4 font-mono text-xs tracking-widest text-muted">
        LAST UPDATED: JULY 16, 2026
      </p>

      <div className="mt-12 flex max-w-2xl flex-col gap-10">
        {sections.map((section) => (
          <div key={section.heading}>
            <h2 className="text-xl font-medium tracking-tight">
              {section.heading}
            </h2>
            <p className="mt-3 leading-relaxed text-muted">{section.body}</p>
          </div>
        ))}

        <div>
          <h2 className="text-xl font-medium tracking-tight">Contact</h2>
          <p className="mt-3 leading-relaxed text-muted">
            Questions about this policy can be sent to{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-foreground underline underline-offset-4 transition-colors hover:text-accent"
            >
              {site.email}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
