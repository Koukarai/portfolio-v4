"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.035 } },
};

const letterVariant = {
  hidden: { y: "100%" },
  show: {
    y: "0%",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function BigWordmark({ text }: { text: string }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);
  const [fontSize, setFontSize] = useState(100);

  useLayoutEffect(() => {
    const measure = () => {
      const wrapper = wrapperRef.current;
      const measureEl = measureRef.current;
      if (!wrapper || !measureEl) return;

      const wrapperWidth = wrapper.offsetWidth;
      const naturalWidth = measureEl.scrollWidth;
      if (naturalWidth === 0) return;

      const currentSize = parseFloat(getComputedStyle(measureEl).fontSize);
      setFontSize((wrapperWidth / naturalWidth) * currentSize);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [text]);

  return (
    <div ref={wrapperRef} className="relative w-full overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.4 }}
        variants={container}
        style={{ fontSize, lineHeight: 0.85 }}
        className="flex whitespace-nowrap font-semibold tracking-tighter"
        aria-label={text}
      >
        <span
          ref={measureRef}
          className="pointer-events-none invisible absolute -z-10"
          aria-hidden
        >
          {text}
        </span>
        {text.split("").map((char, i) => (
          <span key={i} className="inline-block overflow-hidden" aria-hidden>
            <motion.span variants={letterVariant} className="inline-block">
              {char}
            </motion.span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
