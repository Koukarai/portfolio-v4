import type { Metadata } from "next";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Services | Terrence",
  description:
    "Art direction, branding, digital design and frontend development in React and Next.js, from brand identity through to a shipped product.",
};

export default function ServicesPage() {
  return <Services />;
}
