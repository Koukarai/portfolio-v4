import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function Gallery({
  images,
  title,
  aspect = "aspect-video",
}: {
  images: string[];
  title: string;
  aspect?: string;
}) {
  return (
    <div className="mt-16">
      <span className="font-mono text-xs tracking-widest text-muted">
        GALLERY
      </span>
      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        {images.map((src, i) => (
          <Reveal key={`${src}-${i}`} delay={i * 0.05}>
            <div
              className={`relative ${aspect} overflow-hidden rounded-2xl bg-white/5`}
            >
              <Image
                src={src}
                alt={`${title} screen ${i + 1}`}
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
