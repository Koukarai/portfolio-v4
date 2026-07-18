"use client";

import Image from "next/image";
import { useRef } from "react";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { Project } from "@/data/content";

function StackCard({
  project,
  index,
  progress,
  range,
  targetScale,
}: {
  project: Project;
  index: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}) {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      className="sticky top-0 flex h-screen items-center justify-center"
      style={{ zIndex: index }}
    >
      <motion.div
        style={{ scale, top: `calc(-5vh + ${index * 22}px)` }}
        className="relative grid w-full grid-cols-1 gap-6 overflow-hidden rounded-3xl border border-border bg-background p-6 shadow-2xl sm:grid-cols-2 sm:p-10"
      >
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-4 font-mono text-xs tracking-widest text-muted">
            <span className="text-accent">({project.index})</span>
            <span>{project.category}</span>
            <span>{project.year}</span>
          </div>
          <h3 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
            {project.title}
          </h3>
          <p className="mt-4 max-w-md text-muted">{project.description}</p>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white/5">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectStack({ projects }: { projects: Project[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="relative">
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <StackCard
            key={project.index}
            project={project}
            index={i}
            progress={scrollYProgress}
            range={[i / projects.length, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
}
