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
    body: "If you use the contact form, the name, email address and message you write are submitted to this site and forwarded to my inbox by Resend, an email delivery service. Nothing is written to a database here, but the message does pass through Resend on its way to me. Your IP address is held in memory for ten minutes when you submit the form, purely so the form can be rate limited against spam, and is then discarded.",
  },
  {
    heading: "Analytics and Hosting",
    body: "This site is hosted by Vercel and uses Vercel Web Analytics, which records page views, referrers and rough device and country information. It is cookieless: it does not build a profile of you or follow you to other sites. Vercel also collects standard hosting logs (IP address, browser type, pages visited) automatically, for security and performance monitoring.",
  },
  {
    heading: "Cookies",
    body: "This site does not use tracking or advertising cookies. Your theme preference (light or dark) is stored locally in your browser and is never transmitted anywhere.",
  },
  {
    heading: "Third Parties",
    body: "Two services touch this site: Vercel hosts it, and Resend delivers the contact form. Both have their own privacy policies. The typefaces are downloaded when the site is built and served from this domain, so your browser never requests them from Google. The site also links out to GitHub, LinkedIn and Instagram, and I'm not responsible for how those platforms handle your data.",
  },
  {
    heading: "Data Retention",
    body: "Contact form submissions aren't stored in a database on this site. Resend keeps a record of messages it delivers on my behalf, and any email conversation that follows stays in my inbox under my email provider's policies. Analytics and hosting logs are retained by Vercel under theirs. The rate limiting record of your IP address is discarded after ten minutes.",
  },
  {
    heading: "Your Rights",
    body: "You're welcome to contact me at any time if you have questions about this policy or want any correspondence deleted.",
  },
  {
    heading: "Changes to This Policy",
    body: "This policy may be updated occasionally to reflect changes to the site. The date at the top of this page will always reflect the latest revision.",
  },
];

const ROW =
  "grid gap-3 border-t border-border py-8 lg:grid-cols-[220px_1fr] lg:gap-16";
const ROW_HEADING =
  "font-mono text-xs uppercase tracking-widest text-muted lg:pt-1";
const ROW_BODY = "max-w-3xl leading-relaxed";

export default function PrivacyPage() {
  return (
    <section className="px-6 py-24 sm:px-10 lg:px-16 xl:px-24">
      <SectionHeading index="05" title="PRIVACY POLICY" />

      <h1 className="max-w-3xl text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
        Privacy Policy
      </h1>
      <p className="mt-4 font-mono text-xs tracking-widest text-muted">
        LAST UPDATED: JULY 28, 2026
      </p>

      {/* Heading in a left rail, body on the right. A single narrow column of
          prose left most of the page empty on wide screens. */}
      <div className="mt-16 flex flex-col">
        {sections.map((section) => (
          <div key={section.heading} className={ROW}>
            <h2 className={ROW_HEADING}>{section.heading}</h2>
            <p className={ROW_BODY}>{section.body}</p>
          </div>
        ))}

        <div className={ROW}>
          <h2 className={ROW_HEADING}>Contact</h2>
          <p className={ROW_BODY}>
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
