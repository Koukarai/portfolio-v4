import Reveal from "@/components/Reveal";
import { site } from "@/data/content";

export default function Quote() {
  return (
    <section className="px-6 py-24 sm:px-10 lg:px-16 xl:px-24">
      <Reveal>
        <p className="max-w-3xl text-2xl leading-relaxed text-muted sm:text-3xl">
          {site.quote}
        </p>
      </Reveal>
    </section>
  );
}
