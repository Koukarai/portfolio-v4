import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Page Not Found | Terrence" };

export default function NotFound() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center sm:px-10 lg:px-16 xl:px-24">
      <span className="font-mono text-xs tracking-widest text-accent">
        (404)
      </span>
      <h1 className="mt-4 text-[clamp(4rem,15vw,10rem)] font-medium leading-none tracking-tight">
        404
      </h1>
      <p className="mt-6 max-w-md text-muted">
        This page doesn&apos;t exist, or it&apos;s moved somewhere I
        haven&apos;t linked yet.
      </p>
      <Link
        href="/"
        className="group mt-10 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-mono text-xs tracking-widest transition-colors hover:border-accent hover:text-accent"
      >
        <span className="transition-transform group-hover:-translate-x-1">
          ←
        </span>
        BACK TO HOME
      </Link>
    </section>
  );
}
