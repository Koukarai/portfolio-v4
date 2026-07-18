import Link from "next/link";
import MaskReveal from "@/components/MaskReveal";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/data/content";

export default function ContactTeaser() {
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
      <MaskReveal delay={0.15} className="mt-10">
        <Link
          href="/contact"
          className="group inline-flex items-center gap-3 rounded-full border border-border px-6 py-3 font-mono text-xs tracking-widest transition-colors hover:border-accent hover:text-accent"
        >
          GET IN TOUCH
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </MaskReveal>
    </section>
  );
}
