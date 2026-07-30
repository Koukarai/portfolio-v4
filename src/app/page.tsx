import AboutTeaser from "@/components/AboutTeaser";
import ContactTeaser from "@/components/ContactTeaser";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import WorkTeaser from "@/components/WorkTeaser";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutTeaser />
      <WorkTeaser />
      <Testimonials />
      <ContactTeaser />
    </>
  );
}
