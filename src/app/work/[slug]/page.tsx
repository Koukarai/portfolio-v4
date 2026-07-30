import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Gallery from "@/components/Gallery";
import Reveal from "@/components/Reveal";
import { TestimonialFigure } from "@/components/Testimonials";
import { projects, testimonials } from "@/data/content";

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

  const title = `${project.title} | Terrence`;
  return {
    title,
    description: project.description,
    alternates: { canonical: `/work/${project.slug}` },
    // Without these a shared case study link falls back to the site-wide card,
    // so all three projects preview identically.
    openGraph: {
      title,
      description: project.description,
      url: `/work/${project.slug}`,
      type: "article",
      images: [{ url: project.image, alt: project.title }],
    },
  };
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

  const study = project.study;
  // Only the terms this project actually filled in, so a partial study never
  // renders an empty definition.
  const meta: [string, string][] = (
    [
      ["ROLE", study?.role],
      ["TIMELINE", study?.timeline],
      ["STATUS", study?.status],
    ] as [string, string | undefined][]
  ).filter((entry): entry is [string, string] => Boolean(entry[1]));

  // A study may carry only the meta rail. Without this the narrative wrapper
  // would still render as an empty spacer above the prev/next nav.
  const hasNarrative = Boolean(
    study?.problem?.length || study?.sections?.length,
  );

  // Quotes about this specific project. On the page that makes the claim they
  // corroborate, they carry more weight than they do on the homepage.
  const projectTestimonials = testimonials.filter(
    (testimonial) => testimonial.project === project.slug,
  );

  // Label the button with the domain rather than "VISIT LIVE SITE". It reads
  // consistently across projects and, for the one that hasn't launched, it
  // says where the link goes instead of promising a running product.
  const liveHost = project.liveUrl
    ? new URL(project.liveUrl).host.replace(/^www\./, "").toUpperCase()
    : null;

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
            VISIT {liveHost}
            <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </a>
        </Reveal>
      )}

      {meta.length > 0 && (
        <Reveal delay={0.14}>
          <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-6 border-y border-border py-6">
            {meta.map(([term, value]) => (
              <div key={term} className="flex flex-col gap-1.5">
                <dt className="font-mono text-xs tracking-widest text-muted">
                  {term}
                </dt>
                <dd className="text-sm font-medium">{value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      )}

      <Reveal delay={0.15}>
        <div className="relative mt-10 aspect-video overflow-hidden rounded-2xl bg-white/5">
          <Image
            src={project.image}
            alt=""
            fill
            priority
            sizes="(min-width: 1280px) calc(100vw - 12rem), (min-width: 1024px) calc(100vw - 8rem), (min-width: 640px) calc(100vw - 5rem), calc(100vw - 3rem)"
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
        aspect={project.galleryAspect}
        frame={project.galleryFrame}
      />

      {study && hasNarrative && (
        <div className="mt-24 max-w-2xl">
          {study.problem && study.problem.length > 0 && (
            <Reveal>
              <div className="flex flex-col gap-5">
                {study.problem.map((paragraph) => (
                  <p key={paragraph} className="text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          )}

          {study.sections?.map((section) => (
            <Reveal key={section.heading}>
              <section className="mt-16">
                <h2 className="text-2xl font-medium tracking-tight">
                  {section.heading}
                </h2>
                <div className="mt-5 flex flex-col gap-5">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="leading-relaxed text-muted">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            </Reveal>
          ))}
        </div>
      )}

      {projectTestimonials.length > 0 && (
        <div className="mt-24 max-w-2xl">
          <span className="font-mono text-xs tracking-widest text-muted">
            FROM THE CLIENT
          </span>
          <div className="mt-6 flex flex-col gap-10">
            {projectTestimonials.map((testimonial, i) => (
              <Reveal key={testimonial.quote} delay={i * 0.05}>
                <TestimonialFigure testimonial={testimonial} />
              </Reveal>
            ))}
          </div>
        </div>
      )}

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
