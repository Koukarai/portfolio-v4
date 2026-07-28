import type { Metadata } from "next";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Services | Terrence",
  description:
    "Full stack web builds, mobile apps in React Native, Postgres database design and interface work in React and Next.js.",
};

export default function ServicesPage() {
  return <Services />;
}
