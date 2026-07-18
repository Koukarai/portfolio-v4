import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Gallery from "@/components/Gallery";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/content";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: `${project.title} | Terrence` };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <section className="px-6 py-24 sm:px-10 lg:px-16 xl:px-24">
      <Reveal>
        <Link
          href="/work"
          className="group inline-flex items-center gap-2 font-mono text-xs tracking-widest text-muted transition-colors hover:text-accent"
        >
          <span className="transition-transform group-hover:-translate-x-1">
            ←
          </span>
          BACK TO WORK
        </Link>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-8 flex items-center gap-4 font-mono text-xs tracking-widest text-muted">
          <span className="text-accent">({project.index})</span>
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <h1 className="mt-4 max-w-4xl text-[clamp(2.5rem,7vw,5.5rem)] font-medium leading-[0.95] tracking-tight">
          {project.title}
        </h1>
      </Reveal>

      {project.liveUrl && (
        <Reveal delay={0.12}>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 inline-flex items-center gap-3 rounded-full border border-border px-6 py-3 font-mono text-xs tracking-widest transition-colors hover:border-accent hover:text-accent"
          >
            VISIT LIVE SITE
            <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </a>
        </Reveal>
      )}

      <Reveal delay={0.15}>
        <div className="relative mt-10 aspect-video overflow-hidden rounded-2xl bg-white/5">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2">
        <Reveal>
          <p className="max-w-xl text-lg leading-relaxed text-muted">
            {project.caseStudy}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <div>
            <span className="font-mono text-xs tracking-widest text-muted">
              TOOLS
            </span>
            <div className="mt-4 flex flex-wrap gap-3">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-border px-4 py-1.5 font-mono text-xs tracking-widest text-muted"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <Gallery
        images={project.gallery}
        title={project.title}
        aspect={project.galleryAspect}
      />

      <div className="mt-24 flex flex-col justify-between gap-6 border-t border-border pt-8 sm:flex-row">
        <Link href={`/work/${prev.slug}`} className="group flex flex-col gap-1">
          <span className="font-mono text-xs tracking-widest text-muted">
            ← PREVIOUS
          </span>
          <span className="text-lg font-medium transition-colors group-hover:text-accent">
            {prev.title}
          </span>
        </Link>
        <Link
          href={`/work/${next.slug}`}
          className="group flex flex-col gap-1 sm:items-end sm:text-right"
        >
          <span className="font-mono text-xs tracking-widest text-muted">
            NEXT →
          </span>
          <span className="text-lg font-medium transition-colors group-hover:text-accent">
            {next.title}
          </span>
        </Link>
      </div>
    </section>
  );
}
