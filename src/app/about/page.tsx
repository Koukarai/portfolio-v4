import type { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About | Terrence",
  description:
    "I came up through databases rather than design. Co-founder and CTO at AZAP, and the developer behind Box 55 and Highend Escapes.",
};

export default function AboutPage() {
  return <About />;
}
