"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Menu, X } from "lucide-react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
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
  const [menuOpen, setMenuOpen] = useState(false);
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

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <motion.nav
      style={{ backgroundColor: navBg, boxShadow: navShadow }}
      className="fixed top-0 z-50 flex h-20 w-full flex-col border-b border-white/20 backdrop-blur-[40px]"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex h-20 w-full max-w-(--spacing-container-max) items-center justify-between gap-4 px-5 md:px-(--spacing-margin-desktop)">
        <motion.div custom={0} variants={navItemVariants} initial="hidden" animate="visible">
          <Link
            href={ROUTES.home}
            className="font-headline-md text-primary drop-shadow-[0_0_15px_rgba(255,127,80,0.3)]"
            onClick={closeMenu}
          >
            {SITE.name}
          </Link>
        </motion.div>

        <motion.div
          className="hidden items-center gap-12 md:flex"
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          animate="visible"
        >
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

        <div className="flex items-center gap-3">
          <motion.div custom={4} variants={navItemVariants} initial="hidden" animate="visible">
            <Link
              href={ROUTES.notes}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-container px-4 py-2 font-label-md uppercase tracking-wider text-on-primary-container transition-opacity hover:opacity-90 sm:px-6"
              onClick={closeMenu}
            >
              <Heart
                className="size-4 shrink-0 fill-current stroke-[1.5]"
                aria-hidden
              />
              <span>Love Notes</span>
            </Link>
          </motion.div>

          <motion.button
            type="button"
            custom={5}
            variants={navItemVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-on-surface md:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <X className="size-5 shrink-0" strokeWidth={2} />
            ) : (
              <Menu className="size-5 shrink-0" strokeWidth={2} />
            )}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/10 bg-surface-container/95 md:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {NAV_LINKS.map((link) => {
                const active = isLinkActive(pathname, link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className={cn(
                        "block rounded-xl px-4 py-3 font-label-md uppercase tracking-widest transition-colors",
                        active
                          ? "bg-primary/15 text-primary"
                          : "text-on-surface-variant hover:bg-white/5 hover:text-primary",
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.nav>
  );
}
