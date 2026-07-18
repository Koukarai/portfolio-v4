import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { about, site } from "@/data/content";

export default function About() {
  return (
    <section className="px-6 py-24 sm:px-10 lg:px-16 xl:px-24">
      <SectionHeading index="01" title="ABOUT" />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px]">
        <div>
          <Reveal>
            <p className="max-w-3xl text-2xl leading-relaxed sm:text-4xl">
              {site.aboutLead}
            </p>
          </Reveal>

          {about.story.map((paragraph, i) => (
            <Reveal key={paragraph} delay={0.1 + i * 0.05}>
              <p className="mt-6 max-w-xl text-muted">{paragraph}</p>
            </Reveal>
          ))}

          <Reveal delay={0.2}>
            <div className="mt-10 max-w-xl rounded-2xl border border-border p-6">
              <span className="font-mono text-xs tracking-widest text-accent">
                HOW I WORK
              </span>
              <p className="mt-3 text-muted">{about.workingStyle}</p>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <a
              href={about.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-mono text-xs tracking-widest transition-colors hover:border-accent hover:text-accent"
            >
              DOWNLOAD RESUME
              <span className="transition-transform group-hover:translate-y-0.5">
                ↓
              </span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="relative aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl bg-white/5">
            <Image
              src={about.headshot}
              alt={site.name}
              fill
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>

      <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2">
        <Reveal>
          <span className="font-mono text-xs tracking-widest text-muted">
            EXPERIENCE
          </span>
          <div className="mt-4 flex flex-col gap-6">
            {about.experience.map((job) => (
              <div key={job.role}>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-medium">{job.role}</h3>
                  <span className="shrink-0 font-mono text-xs text-muted">
                    {job.period}
                  </span>
                </div>
                <p className="text-sm text-muted">{job.org}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <span className="font-mono text-xs tracking-widest text-muted">
            EDUCATION
          </span>
          <div className="mt-4">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-medium">{about.education.degree}</h3>
              <span className="shrink-0 font-mono text-xs text-muted">
                {about.education.period}
              </span>
            </div>
            <p className="text-sm text-muted">{about.education.school}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
