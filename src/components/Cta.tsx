import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/data/content";

export default function Cta() {
  return (
    <section className="px-6 py-24 sm:px-10 lg:px-16 xl:px-24">
      <SectionHeading index="04" title="START A PROJECT" />
      <Reveal>
        <h2 className="text-[clamp(2.5rem,8vw,6rem)] font-medium leading-[0.95] tracking-tight">
          {site.ctaLead}
          <br />
          <span className="text-accent">{site.ctaHighlight}</span>
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-8 max-w-md text-muted">{site.ctaBody}</p>
      </Reveal>
      <Reveal delay={0.15}>
        <ContactForm />
      </Reveal>
      <Reveal delay={0.2}>
        <div className="mt-6 flex flex-col gap-2">
          <a
            href={`mailto:${site.email}`}
            className="group inline-flex w-fit items-center gap-2 font-mono text-xs tracking-widest text-muted transition-colors hover:text-accent"
          >
            OR EMAIL ME DIRECTLY AT {site.email}
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href={`tel:${site.phone}`}
            className="group inline-flex w-fit items-center gap-2 font-mono text-xs tracking-widest text-muted transition-colors hover:text-accent"
          >
            OR CALL ME AT {site.phone}
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
