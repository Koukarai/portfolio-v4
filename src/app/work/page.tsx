import type { Metadata } from "next";
import Work from "@/components/Work";

export const metadata: Metadata = { title: "Work | Terrence" };

export default function WorkPage() {
  return <Work />;
}
