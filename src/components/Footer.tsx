import Link from "next/link";
import BigWordmark from "@/components/BigWordmark";
import Clock from "@/components/Clock";
import Logo from "@/components/Logo";
import { footer, navLinks, site } from "@/data/content";

function toTitleCase(label: string) {
  return label.charAt(0) + label.slice(1).toLowerCase();
}

export default function Footer() {
  return (
    <footer className="mt-24 rounded-t-3xl border-t border-border bg-foreground/[0.03] pt-16">
      <div className="grid grid-cols-1 gap-10 px-6 sm:grid-cols-2 sm:px-10 lg:grid-cols-4 lg:px-16 xl:px-24">
        <div className="flex flex-col gap-4">
          <Logo className="h-8 w-auto" />
          <p className="max-w-xs text-sm text-muted">{footer.tagline}</p>
        </div>

        <div>
          <span className="font-mono text-xs tracking-widest text-muted">
            EXPLORE
          </span>
          <ul className="mt-4 flex flex-col gap-2">
            <li>
              <Link
                href="/"
                className="text-sm transition-colors hover:text-accent"
              >
                Home
              </Link>
            </li>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm transition-colors hover:text-accent"
                >
                  {toTitleCase(link.label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="font-mono text-xs tracking-widest text-muted">
            FOLLOW ME
          </span>
          <ul className="mt-4 flex flex-col gap-2">
            {site.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors hover:text-accent"
                >
                  {toTitleCase(social.label)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          {footer.ctas.map((cta) => (
            <a
              key={cta.label}
              href={cta.href}
              target={cta.href.startsWith("tel:") ? undefined : "_blank"}
              rel={cta.href.startsWith("tel:") ? undefined : "noopener noreferrer"}
              className="group"
            >
              <span className="flex items-center gap-2 text-lg font-medium transition-colors group-hover:text-accent">
                {cta.label}
                <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </span>
              <span className="text-sm text-muted">{cta.sub}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-16 px-6 sm:px-10 lg:px-16 xl:px-24">
        <BigWordmark text={site.name} />
      </div>

      <div className="flex flex-col items-start justify-between gap-4 border-t border-border px-6 py-6 font-mono text-xs tracking-widest text-muted sm:flex-row sm:items-center sm:px-10 lg:px-16 xl:px-24">
        <div className="flex items-center gap-4">
          <span>
            {site.name} © {new Date().getFullYear()}
          </span>
          <Link href="/privacy" className="transition-colors hover:text-accent">
            Privacy Policy
          </Link>
        </div>
        <Clock />
      </div>
    </footer>
  );
}
