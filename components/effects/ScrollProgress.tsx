"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useReducedMotion } from "@/lib/use-reduced-motion";

export function ScrollProgress() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  if (reduced) return null;

  return (
    <motion.div
      className="fixed top-20 right-0 left-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-primary via-secondary-fixed to-tertiary"
      style={{ scaleX }}
      aria-hidden
    />
  );
}
