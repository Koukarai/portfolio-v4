import Image from "next/image";

export default function Logo({ className = "h-6 w-auto" }: { className?: string }) {
  return (
    <span className="inline-flex items-center">
      <Image
        src="/logo-black.png"
        alt="Terrence logo"
        data-logo="black"
        width={140}
        height={100}
        priority
        className={className}
      />
      <Image
        src="/logo-white.png"
        alt="Terrence logo"
        data-logo="white"
        width={140}
        height={100}
        priority
        className={className}
      />
    </span>
  );
}
