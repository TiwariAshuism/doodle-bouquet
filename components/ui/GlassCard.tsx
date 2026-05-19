"use client";

import { motion } from "framer-motion";
import { cardHover3d } from "@/lib/animations";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  neon?: boolean;
  hover?: boolean;
};

export function GlassCard({
  children,
  className,
  neon = false,
  hover = true,
}: GlassCardProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={cn(
        "glass rounded-2xl",
        neon && "neon-border animate-glow-pulse",
        className,
      )}
      style={{ transformStyle: "preserve-3d" }}
      {...(hover && !reduced ? cardHover3d : {})}
      whileTap={hover && !reduced ? { scale: 0.98 } : undefined}
    >
      {children}
    </motion.div>
  );
}
