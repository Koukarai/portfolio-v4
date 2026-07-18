import ScrollCue from "@/components/ScrollCue";
import TechCarousel from "@/components/TechCarousel";
import { site } from "@/data/content";

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100dvh-5rem)] flex-col justify-between px-6 pb-10 pt-10 sm:px-10 lg:px-16 xl:px-24">
      <div className="flex flex-1 flex-col justify-center">
        <h1 className="max-w-5xl text-[clamp(2.75rem,10vw,7.5rem)] font-medium leading-[0.95] tracking-tight">
          {site.name}
        </h1>
        <p className="mt-8 max-w-xl text-lg text-muted sm:text-xl">
          {site.aboutLead}
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <ScrollCue />
        <TechCarousel />
      </div>
    </section>
  );
}
