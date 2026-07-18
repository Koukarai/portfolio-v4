import AboutTeaser from "@/components/AboutTeaser";
import ContactTeaser from "@/components/ContactTeaser";
import Hero from "@/components/Hero";
import Quote from "@/components/Quote";
import WorkTeaser from "@/components/WorkTeaser";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutTeaser />
      <WorkTeaser />
      <Quote />
      <ContactTeaser />
    </>
  );
}
