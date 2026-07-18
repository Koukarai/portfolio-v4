"use client";

import { useState } from "react";
import { Service } from "@/data/content";

export default function ServiceCard({ service }: { service: Service }) {
  const [hovered, setHovered] = useState(false);
  const arrow = service.direction === "left" ? "←" : "→";

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group flex flex-col justify-between border-b border-border py-10 sm:flex-row sm:items-center"
    >
      <h3 className="text-2xl font-medium tracking-tight sm:text-3xl">
        {service.title}
      </h3>

      <div className="mt-4 flex items-center gap-6 sm:mt-0">
        <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs tracking-widest text-muted">
          {service.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <span
          className={`font-mono text-sm text-accent transition-transform duration-300 ${
            hovered
              ? service.direction === "left"
                ? "-translate-x-2"
                : "translate-x-2"
              : ""
          }`}
        >
          {service.direction === "left" ? `${arrow} click me` : `click me ${arrow}`}
        </span>
      </div>
    </div>
  );
}
