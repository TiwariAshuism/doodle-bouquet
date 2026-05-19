"use client";

import type { ComponentProps } from "react";
import { motion } from "framer-motion";
import {
  fadeUp,
  flipReveal,
  wildReveal,
  zoomSpin,
} from "@/lib/animations";
import { cn } from "@/lib/utils";

type RevealVariant = "fade" | "wild" | "flip" | "zoom";

const VARIANT_MAP = {
  fade: fadeUp,
  wild: wildReveal,
  flip: flipReveal,
  zoom: zoomSpin,
} as const;

type RevealProps = ComponentProps<typeof motion.div> & {
  delay?: number;
  variant?: RevealVariant;
};

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "wild",
  ...props
}: RevealProps) {
  return (
    <motion.div
      variants={VARIANT_MAP[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      custom={delay}
      className={cn(className)}
      style={{ perspective: 1200 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
