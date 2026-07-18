import {
  SiAstro,
  SiClerk,
  SiEslint,
  SiExpo,
  SiFramer,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";

const stack = [
  { label: "TYPESCRIPT", Icon: SiTypescript },
  { label: "JAVASCRIPT", Icon: SiJavascript },
  { label: "NEXT.JS", Icon: SiNextdotjs },
  { label: "REACT", Icon: SiReact },
  { label: "ASTRO", Icon: SiAstro },
  { label: "VITE", Icon: SiVite },
  { label: "EXPO", Icon: SiExpo },
  { label: "TAILWIND CSS", Icon: SiTailwindcss },
  { label: "SUPABASE", Icon: SiSupabase },
  { label: "CLERK", Icon: SiClerk },
  { label: "FRAMER MOTION", Icon: SiFramer },
  { label: "VERCEL", Icon: SiVercel },
  { label: "ESLINT", Icon: SiEslint },
];

export default function TechCarousel() {
  const items = [...stack, ...stack];

  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-border py-2">
      <div className="flex w-max animate-marquee-slow gap-8">
        {items.map(({ label, Icon }, i) => (
          <span key={i} className="flex items-center gap-2 whitespace-nowrap">
            <Icon className="h-4 w-4 text-foreground" aria-hidden />
            <span className="font-mono text-xs tracking-widest text-muted">
              {label}
            </span>
            <span className="text-accent">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
