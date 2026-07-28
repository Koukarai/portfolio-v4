import Link from "next/link";
import { Service } from "@/data/content";

export default function ServiceCard({ service }: { service: Service }) {
  const left = service.direction === "left";

  return (
    <Link
      href="/contact"
      aria-label={`Get in touch about ${service.title.toLowerCase()}`}
      className="group flex flex-col justify-between border-b border-border py-10 transition-colors hover:border-accent focus-visible:border-accent focus-visible:outline-none sm:flex-row sm:items-center"
    >
      <h3 className="text-2xl font-medium tracking-tight transition-colors group-hover:text-accent group-focus-visible:text-accent sm:text-3xl">
        {service.title}
      </h3>

      <div className="mt-4 flex items-center gap-6 sm:mt-0">
        <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs tracking-widest text-muted">
          {service.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        {/* Decorative: the link's aria-label already carries the destination. */}
        <span
          aria-hidden
          className={`font-mono text-sm text-accent transition-transform duration-300 ${
            left
              ? "group-hover:-translate-x-2 group-focus-visible:-translate-x-2"
              : "group-hover:translate-x-2 group-focus-visible:translate-x-2"
          }`}
        >
          {left ? "←" : "→"}
        </span>
      </div>
    </Link>
  );
}
