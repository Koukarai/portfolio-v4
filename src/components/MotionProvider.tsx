"use client";

import { MotionConfig } from "framer-motion";
import { ReactNode } from "react";

/**
 * `reducedMotion="user"` defers to the OS-level setting: when it is on,
 * Framer Motion skips transform and layout animations across the whole tree
 * while still allowing opacity, so content fades in rather than flying about.
 *
 * This only reaches declarative `motion` components. Imperative `animate()`
 * calls and CSS keyframes are handled separately. See ScrollCue, HeroEyes,
 * and the media query in globals.css.
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
