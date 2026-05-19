import Link from "next/link";
import { FOOTER_LINKS, SITE } from "@/constants/content";
import { ROUTES } from "@/constants/pages";
import { Reveal } from "@/components/effects/Reveal";

export function Footer() {
  return (
    <footer className="relative z-10 w-full border-t border-white/5 bg-surface-container-lowest py-(--spacing-section-gap)">
      <Reveal className="mx-auto flex max-w-(--spacing-container-max) flex-col items-center justify-center gap-4 px-5 text-center md:px-(--spacing-margin-desktop)">
        <Link
          href={ROUTES.home}
          className="mb-4 font-headline-sm text-primary transition-opacity hover:opacity-80"
        >
          {SITE.name}
        </Link>
        <div className="mb-8 flex flex-wrap justify-center gap-8">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-label-md text-outline transition-colors duration-500 hover:text-secondary-fixed"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <p className="font-body-md text-body-md text-outline opacity-80">
          © {new Date().getFullYear()} {SITE.name}. Created with endless love.
        </p>
      </Reveal>
    </footer>
  );
}
