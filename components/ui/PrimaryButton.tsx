"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type PrimaryButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "glass";
  className?: string;
  onClick?: () => void;
  href?: string;
};

const motionProps = {
  whileHover: {
    scale: 1.08,
    boxShadow: "0 0 32px rgba(255, 127, 80, 0.6)",
  },
  whileTap: { scale: 0.92 },
  transition: { type: "spring" as const, stiffness: 500, damping: 18 },
};

export function PrimaryButton({
  children,
  variant = "primary",
  className,
  onClick,
  href,
}: PrimaryButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full font-label-md uppercase tracking-widest px-10 py-4 transition-colors";

  const styles =
    variant === "primary"
      ? "bg-primary-container text-on-primary-container shadow-[0_0_20px_rgba(255,127,80,0.5)]"
      : "glass border border-secondary-fixed/30 text-secondary-fixed hover:bg-secondary-fixed/10";

  if (href) {
    return (
      <motion.a
        href={href}
        className={cn(base, styles, className)}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={cn(base, styles, className)}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
