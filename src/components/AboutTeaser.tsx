import Link from "next/link";
import MaskReveal from "@/components/MaskReveal";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/data/content";

export default function AboutTeaser() {
  return (
    <section className="px-6 py-24 sm:px-10 lg:px-16 xl:px-24">
      <SectionHeading index="01" title="ABOUT" />
      <Reveal>
        <p className="max-w-3xl text-2xl leading-relaxed sm:text-4xl">
          {site.aboutLead}
        </p>
      </Reveal>
      <MaskReveal delay={0.1} className="mt-8">
        <Link
          href="/about"
          className="group inline-flex items-center gap-2 font-mono text-xs tracking-widest text-muted transition-colors hover:text-accent"
        >
          MORE ABOUT ME
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </MaskReveal>
    </section>
  );
}
