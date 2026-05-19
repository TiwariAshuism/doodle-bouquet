"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Magnetic } from "@/components/effects/Magnetic";
import { SplitText } from "@/components/effects/SplitText";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SITE } from "@/constants/content";
import { ROUTES } from "@/constants/pages";
import {
  floatCrazy,
  heroContentVariants,
  pulseGlow,
  staggerFast,
  staggerItem,
  wobblePill,
} from "@/lib/animations";
import { useReducedMotion } from "@/lib/use-reduced-motion";

export function HeroSection() {
  const reduced = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 18 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 18 });
  const parallaxX = useTransform(smoothX, [-0.5, 0.5], [-32, 32]);
  const parallaxY = useTransform(smoothY, [-0.5, 0.5], [-24, 24]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);

  function handlePointerMove(e: React.PointerEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 text-center md:px-(--spacing-margin-desktop)"
      onPointerMove={handlePointerMove}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* Spinning glow ring */}
      {!reduced && (
        <motion.div
          className="pointer-events-none absolute size-[min(90vw,640px)] rounded-full border border-primary/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          <motion.div
            className="absolute inset-4 rounded-full border border-secondary-fixed/15"
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      )}

      <motion.div
        style={{
          x: parallaxX,
          y: parallaxY,
          rotateX: reduced ? 0 : rotateX,
          rotateY: reduced ? 0 : rotateY,
          perspective: 1000,
        }}
        className="relative mb-8 flex aspect-square w-full max-w-2xl items-center justify-center"
      >
        <motion.div
          {...(reduced ? {} : floatCrazy)}
          className="relative h-full w-full bg-transparent"
        >
          {!reduced && (
            <motion.div
              className="absolute inset-0 rounded-full bg-primary/20 blur-[80px]"
              {...pulseGlow}
            />
          )}
          <Image
            src={SITE.heroImage}
            alt="Glowing doodle bouquet illustration"
            fill
            priority
            unoptimized
            className="relative z-10 object-contain bg-transparent drop-shadow-[0_0_60px_rgba(255,127,80,0.55)] [background:none]"
            sizes="(max-width: 768px) 100vw, 672px"
          />
        </motion.div>

        <motion.div
          {...(reduced ? {} : wobblePill)}
          className="glass absolute top-[15%] -left-4 z-20 rounded-full px-6 py-3 shadow-xl md:-left-20"
          whileHover={{ scale: 1.08, boxShadow: "0 0 30px rgba(255,127,80,0.5)" }}
        >
          <span className="font-label-md text-primary">{SITE.heroPills.left}</span>
        </motion.div>

        <motion.div
          animate={reduced ? undefined : wobblePill.animate}
          transition={{ ...wobblePill.transition, delay: 1.5 }}
          className="glass absolute bottom-[20%] -right-4 z-20 rounded-full px-6 py-3 shadow-xl md:-right-20"
          whileHover={{ scale: 1.08, boxShadow: "0 0 30px rgba(0,251,251,0.4)" }}
        >
          <span className="font-label-md text-secondary-fixed">
            {SITE.heroPills.right}
          </span>
        </motion.div>
      </motion.div>

      <motion.div
        variants={heroContentVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl space-y-6"
      >
        <SplitText text={SITE.name} className="font-display-lg leading-tight text-on-surface" />
        <motion.p
          className="mx-auto max-w-xl font-body-lg text-on-surface-variant"
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          {SITE.tagline}
        </motion.p>
        <motion.div
          variants={staggerFast}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-4 pt-4"
        >
          <motion.div variants={staggerItem}>
            <Magnetic>
              <PrimaryButton href={ROUTES.notes}>Read Love Notes</PrimaryButton>
            </Magnetic>
          </motion.div>
          <motion.div variants={staggerItem}>
            <Magnetic>
              <PrimaryButton href={ROUTES.gallery} variant="glass">
                View Gallery
              </PrimaryButton>
            </Magnetic>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
