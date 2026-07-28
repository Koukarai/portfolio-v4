import type { Metadata } from "next";
import Cta from "@/components/Cta";

export const metadata: Metadata = {
  title: "Contact | Terrence",
  description:
    "Taking on new projects. Tell me what you're building and we'll see if it's a fit.",
};

export default function ContactPage() {
  return <Cta />;
}
