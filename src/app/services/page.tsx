import type { Metadata } from "next";
import Services from "@/components/Services";

export const metadata: Metadata = { title: "Services | Terrence" };

export default function ServicesPage() {
  return <Services />;
}
