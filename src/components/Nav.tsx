"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Clock from "@/components/Clock";
import Logo from "@/components/Logo";
import MobileMenu from "@/components/MobileMenu";
import ThemeToggle from "@/components/ThemeToggle";
import { navLinks, site } from "@/data/content";

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="flex h-20 items-center justify-between px-6 sm:px-10 lg:px-16 xl:px-24">
      <Link href="/" aria-label="Home">
        <Logo className="h-7 w-auto" />
      </Link>

      <nav className="hidden items-center gap-8 sm:flex">
        {navLinks.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active ? "page" : undefined}
              className={`font-mono text-xs tracking-widest transition-colors hover:text-accent ${
                active ? "text-accent" : "text-muted"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="hidden lg:flex">
        <Clock />
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-2 rounded-full border border-border px-3 py-1.5 sm:flex">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="font-mono text-xs tracking-widest">
            {site.status}
          </span>
        </div>

        <div className="hidden sm:block">
          <ThemeToggle />
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
