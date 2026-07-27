"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Socket geometry, measured from public/images/hero-graphic.png (736x1308) and
 * mapped into the hero container, which renders the image as `object-cover
 * object-bottom` at a fixed 4/5 aspect. Because the image is narrower than 4/5,
 * cover always scales by width, so these percentages hold at every breakpoint.
 */
type Socket = {
  /** Centre of the eye opening, in % of the container box. */
  xPct: number;
  yPct: number;
  /** Size of the eye opening, in % of container width / height. */
  wPct: number;
  hPct: number;
};

const SOCKETS: Socket[] = [
  { xPct: 44.43, yPct: 48.37, wPct: 13.32, hPct: 6.09 },
  { xPct: 69.84, yPct: 48.37, wPct: 8.42, hPct: 5.65 },
];

/** Pupil diameter, in % of container width. */
const PUPIL_PCT = 4.4;

/** Distance at which the eyes reach full deflection. */
const SATURATION_PX = 520;

export default function HeroEyes() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offsets, setOffsets] = useState(() => SOCKETS.map(() => ({ x: 0, y: 0 })));

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (!rect.width) return;

      const pupil = (rect.width * PUPIL_PCT) / 100;

      setOffsets(
        SOCKETS.map((s) => {
          const cx = rect.left + (s.xPct / 100) * rect.width;
          const cy = rect.top + (s.yPct / 100) * rect.height;
          const dx = e.clientX - cx;
          const dy = e.clientY - cy;
          const dist = Math.hypot(dx, dy) || 1;

          // Keep the pupil inside its own socket.
          const rx = Math.max(0, ((s.wPct / 100) * rect.width - pupil) / 2);
          const ry = Math.max(0, ((s.hPct / 100) * rect.height - pupil) / 2);
          const reach = Math.min(1, dist / SATURATION_PX);

          return {
            x: (dx / dist) * rx * reach,
            y: (dy / dist) * ry * reach,
          };
        }),
      );
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0">
      {SOCKETS.map((s, i) => (
        <span
          key={s.xPct}
          className="absolute block aspect-square rounded-full bg-[#141013] transition-transform duration-150 ease-out"
          style={{
            left: `${s.xPct}%`,
            top: `${s.yPct}%`,
            width: `${PUPIL_PCT}%`,
            transform: `translate(-50%, -50%) translate(${offsets[i].x}px, ${offsets[i].y}px)`,
          }}
        />
      ))}
    </div>
  );
}
