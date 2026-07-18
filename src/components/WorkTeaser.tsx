import Link from "next/link";
import MaskReveal from "@/components/MaskReveal";
import ProjectStack from "@/components/ProjectStack";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/content";

export default function WorkTeaser() {
  return (
    <section className="px-6 pt-24 sm:px-10 lg:px-16 xl:px-24">
      <SectionHeading index="02" title="FEATURED WORK" />
      <ProjectStack projects={projects} />
      <MaskReveal className="relative z-10 mt-8">
        <Link
          href="/work"
          className="group inline-flex items-center gap-2 font-mono text-xs tracking-widest text-muted transition-colors hover:text-accent"
        >
          VIEW ALL WORK
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </MaskReveal>
    </section>
  );
}
