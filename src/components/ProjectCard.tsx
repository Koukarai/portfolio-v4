import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { Project } from "@/data/content";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Reveal>
      <Link
        href={`/work/${project.slug}`}
        className="group flex items-center gap-5 border-b border-border py-6"
      >
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-white/5 sm:h-20 sm:w-20">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-accent">
              ({project.index})
            </span>
            <h3 className="text-xl font-medium tracking-tight transition-colors group-hover:text-accent sm:text-2xl">
              {project.title}
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
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

        <span className="hidden shrink-0 font-mono text-accent transition-transform group-hover:translate-x-1 sm:block">
          →
        </span>
      </Link>
    </Reveal>
  );
}
