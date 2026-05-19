import type { Transition, Variants } from "framer-motion";

export const easeCinematic: Transition["ease"] = [0.22, 1, 0.36, 1];
export const easeBounce: Transition["ease"] = [0.34, 1.56, 0.64, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: easeCinematic, delay },
  }),
};

export const wildReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.85,
    rotateX: 18,
    filter: "blur(12px)",
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.1,
      delay,
      ease: easeBounce,
    },
  }),
};

export const flipReveal: Variants = {
  hidden: { opacity: 0, rotateY: -28, x: -40 },
  visible: (delay = 0) => ({
    opacity: 1,
    rotateY: 0,
    x: 0,
    transition: { type: "spring", stiffness: 120, damping: 16, delay },
  }),
};

export const zoomSpin: Variants = {
  hidden: { opacity: 0, scale: 0.4, rotate: -12 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 200, damping: 18, delay },
  }),
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.8, ease: easeCinematic, delay },
  }),
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.02 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.85 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 280, damping: 22 },
  },
};

export const letterStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04, delayChildren: 0.2 },
  },
};

export const letterChild: Variants = {
  hidden: { opacity: 0, y: 40, rotateZ: 8, scale: 0.6 },
  visible: {
    opacity: 1,
    y: 0,
    rotateZ: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

export const scaleOnHover = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.98 },
  transition: { type: "spring" as const, stiffness: 400, damping: 25 },
};

export const floatY = {
  animate: {
    y: [0, -20, 0],
    rotate: [0, 2, 0],
  },
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

export const floatCrazy = {
  animate: {
    y: [0, -28, 8, -20, 0],
    rotate: [0, 3, -2, 4, 0],
    scale: [1, 1.03, 0.98, 1.02, 1],
  },
  transition: {
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

export const swayX = {
  animate: { x: [0, 10, 0] },
  transition: {
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

export const wobblePill = {
  animate: {
    x: [0, 14, -8, 10, 0],
    y: [0, -6, 4, -4, 0],
    rotate: [0, 2, -2, 1, 0],
  },
  transition: {
    duration: 7,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

export const pulseGlow = {
  animate: {
    scale: [1, 1.15, 1],
    opacity: [0.5, 0.9, 0.5],
  },
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

export const spinSlow = {
  animate: { rotate: 360 },
  transition: {
    duration: 28,
    repeat: Infinity,
    ease: "linear" as const,
  },
};

export const navItemVariants: Variants = {
  hidden: { opacity: 0, y: -12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.08, duration: 0.6, ease: easeCinematic },
  }),
};

export const heroContentVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1.4, ease: easeCinematic, delay: 0.3 },
  },
};

export const timelineDotVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: [0, 1.4, 1],
    opacity: 1,
    transition: { duration: 0.7, ease: easeBounce },
  },
};

export const cardHover3d = {
  whileHover: {
    scale: 1.04,
    rotateX: 4,
    rotateY: -4,
    boxShadow: "0 0 40px rgba(255, 127, 80, 0.35), 0 0 80px rgba(0, 251, 251, 0.15)",
  },
  transition: { type: "spring" as const, stiffness: 320, damping: 22 },
};
