"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function MaskReveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <span className={`inline-block overflow-hidden ${className ?? ""}`}>
      <motion.span
        initial={{ y: "100%" }}
        whileInView={{ y: "0%" }}
        // The resting state is fully clipped by the parent's overflow-hidden,
        // not just faded, so anything wrapped here is invisible until this
        // fires. `once` keeps it visible afterwards instead of re-hiding on
        // every exit, and 0.3 matches Reveal rather than needing twice the
        // visibility. These wrap the teaser CTAs, so a missed trigger costs a
        // link.
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </span>
  );
}
