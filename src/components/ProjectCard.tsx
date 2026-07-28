import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { Project } from "@/data/content";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Reveal>
      <Link
        href={`/work/${project.slug}`}
        className="group grid gap-5 border-b border-border py-8 sm:grid-cols-[auto_1fr_auto] sm:items-start"
      >
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-white/5 sm:h-28 sm:w-28">
          <Image
            src={project.image}
            alt=""
            fill
            sizes="(min-width: 640px) 112px, 80px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs tracking-widest text-muted">
            <span className="text-accent">({project.index})</span>
            <span>{project.category}</span>
            <span>{project.year}</span>
          </div>

          <h3 className="text-xl font-medium tracking-tight transition-colors group-hover:text-accent sm:text-2xl">
            {project.title}
          </h3>

          <p className="max-w-2xl leading-relaxed text-muted">
            {project.description}
          </p>

          <div className="mt-1 flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-border px-3 py-1 font-mono text-[10px] tracking-widest text-muted"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <span
          aria-hidden
          className="hidden shrink-0 self-center font-mono text-accent transition-transform group-hover:translate-x-1 sm:block"
        >
          →
        </span>
      </Link>
    </Reveal>
  );
}
