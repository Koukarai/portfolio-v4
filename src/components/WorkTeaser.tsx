import Link from "next/link";
import ProjectStack from "@/components/ProjectStack";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/content";

export default function WorkTeaser() {
  return (
    <section className="px-6 pt-24 sm:px-10 lg:px-16 xl:px-24">
      <SectionHeading title="FEATURED WORK" />
      <ProjectStack projects={projects} />
      <Reveal className="relative z-10 mt-8">
        <Link
          href="/work"
          className="group inline-flex items-center gap-2 font-mono text-xs tracking-widest text-muted transition-colors hover:text-accent"
        >
          VIEW ALL WORK
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </Reveal>
    </section>
  );
}
