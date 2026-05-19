"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/use-reduced-motion";

const ORBS = [
  {
    className: "left-[10%] top-[15%] size-72 bg-primary/25",
    duration: 14,
    x: [0, 60, -30, 0],
    y: [0, -40, 30, 0],
  },
  {
    className: "right-[5%] top-[35%] size-96 bg-secondary-fixed/15",
    duration: 18,
    x: [0, -50, 40, 0],
    y: [0, 50, -20, 0],
  },
  {
    className: "bottom-[20%] left-[30%] size-80 bg-tertiary/20",
    duration: 16,
    x: [0, 40, -60, 0],
    y: [0, -30, 50, 0],
  },
  {
    className: "right-[25%] bottom-[10%] size-64 bg-primary-container/20",
    duration: 12,
    x: [0, -30, 20, 0],
    y: [0, 40, -40, 0],
  },
] as const;

export function AmbientOrbs() {
  const reduced = useReducedMotion();
  if (reduced) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      {ORBS.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-[100px] ${orb.className}`}
          animate={{
            x: [...orb.x],
            y: [...orb.y],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  );
}
