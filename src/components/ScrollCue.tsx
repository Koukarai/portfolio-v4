"use client";

import { animate, motion } from "framer-motion";

function handleScrollClick() {
  const from = window.scrollY;
  const to = from + window.innerHeight;
  animate(from, to, {
    duration: 1.1,
    ease: [0.22, 1, 0.36, 1],
    onUpdate: (latest) => window.scrollTo(0, latest),
  });
}

export default function ScrollCue() {
  return (
    <button
      type="button"
      onClick={handleScrollClick}
      aria-label="Scroll to next section"
      className="group flex items-center gap-3 self-center py-2"
    >
      <span className="font-mono text-xs tracking-widest text-muted transition-colors group-hover:text-foreground">
        SCROLL
      </span>
      <motion.span
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        className="text-accent"
        aria-hidden
      >
        ↓
      </motion.span>
    </button>
  );
}
