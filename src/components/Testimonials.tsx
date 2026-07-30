import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { testimonials, type Testimonial } from "@/data/content";

/**
 * Shared by the homepage section and the case study pages, so a quote looks the
 * same wherever it appears.
 */
export function TestimonialFigure({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <figure className="border-t border-border pt-6">
      <blockquote className="text-lg leading-relaxed text-muted">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-5">
        <span className="block font-medium">{testimonial.name}</span>
        <span className="mt-1 block font-mono text-xs tracking-widest text-muted">
          {testimonial.role}, {testimonial.company}
        </span>
      </figcaption>
    </figure>
  );
}

/**
 * The homepage section, between the work and the call to action. Shows only the
 * quotes marked `featured`, so collecting more never grows this section; the
 * rest surface on the case study each one is about.
 *
 * Side by side rather than stacked, at body size rather than display size.
 * Stacked at Quote's scale these dominated the page, and a client's words
 * shouldn't outweigh the work above them.
 */
export default function Testimonials() {
  const featured = testimonials.filter((testimonial) => testimonial.featured);
  if (featured.length === 0) return null;

  return (
    <section className="px-6 py-24 sm:px-10 lg:px-16 xl:px-24">
      <SectionHeading title="CLIENTS" />

      <div className="grid gap-10 sm:grid-cols-2 sm:gap-12 lg:max-w-5xl">
        {featured.map((testimonial, i) => (
          <Reveal key={testimonial.quote} delay={i * 0.05}>
            <TestimonialFigure testimonial={testimonial} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
