import type { Metadata } from "next";
import Work from "@/components/Work";

export const metadata: Metadata = {
  title: "Work | Terrence",
  description:
    "Projects I've built, including BOX 55, AZAP and Highend Escapes. Product design, frontend, and the systems running underneath.",
};

export default function WorkPage() {
  return <Work />;
}
