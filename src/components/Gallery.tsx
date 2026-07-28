import Image from "next/image";
import Reveal from "@/components/Reveal";
import type { GalleryImage } from "@/data/content";

const SIZES = "(min-width: 768px) 25vw, 50vw";

/**
 * Bezel drawn in CSS rather than baked into the screenshots, so raw captures
 * can be dropped straight in. Percentage radii and offsets keep the bezel and
 * the island proportional as the grid column resizes.
 */
function PhoneFrame({
  image,
  aspect,
}: {
  image: GalleryImage;
  aspect: string;
}) {
  return (
    <div className="rounded-[12%/5.5%] bg-[#0b0b0b] p-[3.5%] ring-1 ring-white/10">
      <div
        className={`relative ${aspect} overflow-hidden rounded-[9.5%/4.4%] bg-white`}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          unoptimized
          sizes={SIZES}
          className="object-cover"
        />
        <span
          aria-hidden
          className="absolute left-1/2 top-[1.6%] h-[1.9%] w-[27%] -translate-x-1/2 rounded-full bg-black"
        />
      </div>
    </div>
  );
}

export default function Gallery({
  images,
  aspect = "aspect-video",
  frame,
}: {
  images: GalleryImage[];
  aspect?: string;
  frame?: "phone";
}) {
  return (
    <div className="mt-16">
      <span className="font-mono text-xs tracking-widest text-muted">
        GALLERY
      </span>
      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        {images.map((image, i) => (
          <Reveal key={image.src} delay={i * 0.05}>
            {frame === "phone" ? (
              <PhoneFrame image={image} aspect={aspect} />
            ) : (
              <div
                className={`relative ${aspect} overflow-hidden rounded-2xl bg-white/5`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  unoptimized
                  sizes={SIZES}
                  className="object-cover"
                />
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </div>
  );
}
