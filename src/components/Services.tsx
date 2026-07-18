import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/content";

export default function Services() {
  return (
    <section className="px-6 py-24 sm:px-10 lg:px-16 xl:px-24">
      <SectionHeading index="03" title="SERVICES" />
      <div>
        {services.map((service, i) => (
          <Reveal key={service.title} delay={i * 0.05}>
            <ServiceCard service={service} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
