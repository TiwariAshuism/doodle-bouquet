"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { NAV_LINKS, SITE } from "@/constants/content";
import { ROUTES } from "@/constants/pages";
import { navItemVariants } from "@/lib/animations";
import { cn } from "@/lib/utils";

function isLinkActive(pathname: string, href: string) {
  if (href.startsWith("/#")) return pathname === "/";
  return pathname === href.split("#")[0];
}

export function TopNav() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const navBg = useTransform(
    scrollY,
    [0, 120],
    ["rgba(255,255,255,0.08)", "rgba(255,255,255,0.14)"],
  );
  const navShadow = useTransform(
    scrollY,
    [0, 120],
    [
      "0 8px 32px rgba(0,0,0,0.25)",
      "0 12px 40px rgba(0,0,0,0.45)",
    ],
  );

  return (
    <motion.nav
      style={{ backgroundColor: navBg, boxShadow: navShadow }}
      className="fixed top-0 z-50 flex h-20 w-full items-center border-b border-white/20 backdrop-blur-[40px]"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="mx-auto flex h-full w-full max-w-(--spacing-container-max) items-center justify-between px-5 md:px-(--spacing-margin-desktop)"
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        initial="hidden"
        animate="visible"
      >
        <motion.div custom={0} variants={navItemVariants}>
          <Link
            href={ROUTES.home}
            className="font-headline-md text-primary drop-shadow-[0_0_15px_rgba(255,127,80,0.3)]"
          >
            {SITE.name}
          </Link>
        </motion.div>

        <motion.div className="hidden items-center gap-12 md:flex">
          {NAV_LINKS.map((link, i) => {
            const active = isLinkActive(pathname, link.href);
            return (
              <motion.div key={link.href} custom={i + 1} variants={navItemVariants}>
                <motion.div whileHover={{ y: -2, scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={link.href}
                    className={cn(
                      "relative font-label-md uppercase tracking-widest transition-colors duration-300",
                      active
                        ? "text-primary"
                        : "text-on-surface-variant hover:text-primary",
                    )}
                  >
                    {link.label}
                    {active ? (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary shadow-[0_0_12px_rgba(255,127,80,0.8)]"
                      />
                    ) : null}
                  </Link>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div custom={4} variants={navItemVariants}>
          <Link
            href={ROUTES.send}
            className="rounded-full bg-primary-container px-6 py-2 font-label-md uppercase tracking-wider text-on-primary-container transition-opacity hover:opacity-90"
          >
            <motion.span
              className="block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Bouquet
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
}
