"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import { Magnetic } from "@/components/effects/Magnetic";
import { Reveal } from "@/components/effects/Reveal";
import { ROUTES } from "@/constants/pages";
import { SECTION_COPY } from "@/constants/sections";
import { floatCrazy, pulseGlow } from "@/lib/animations";
import { useReducedMotion } from "@/lib/use-reduced-motion";

export function CtaSection() {
  const reduced = useReducedMotion();

  return (
    <section
      id="cta"
      className="relative overflow-hidden px-5 py-(--spacing-section-gap) text-center md:px-(--spacing-margin-desktop)"
    >
      <motion.div
        className="absolute inset-0 scale-150 rounded-full bg-primary/5 blur-[100px]"
        animate={reduced ? undefined : { scale: [1.5, 1.7, 1.5], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <Reveal variant="zoom" className="relative z-10">
        <motion.div
          {...(reduced ? {} : floatCrazy)}
          className="relative mx-auto mb-12 flex size-32 items-center justify-center"
        >
          {!reduced && (
            <motion.div
              className="absolute inset-0 rounded-full bg-primary-container/30 blur-2xl"
              {...pulseGlow}
            />
          )}
          <motion.div
            animate={reduced ? undefined : { scale: [1, 1.2, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          >
            <Heart
              className="relative z-10 size-20 text-primary-container bloom-primary"
              fill="currentColor"
              strokeWidth={1}
            />
          </motion.div>
        </motion.div>

        <motion.h2
          className="mb-6 font-display-lg text-on-surface"
          animate={reduced ? undefined : { y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          {SECTION_COPY.cta.title}
          <br />
          {SECTION_COPY.cta.titleLine2}
        </motion.h2>
        <p className="mx-auto mb-10 max-w-lg font-body-lg text-on-surface-variant">
          {SECTION_COPY.cta.subtitle}
        </p>

        <Magnetic strength={0.5}>
          <motion.div
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            animate={
              reduced
                ? undefined
                : {
                    boxShadow: [
                      "0 0 40px rgba(255,127,80,0.4)",
                      "0 0 60px rgba(255,127,80,0.7)",
                      "0 0 40px rgba(255,127,80,0.4)",
                    ],
                  }
            }
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Link
              href={ROUTES.send}
              className="inline-block rounded-full bg-primary-container px-12 py-5 font-label-md uppercase tracking-[0.2em] text-on-primary-container"
            >
              Send Your Love
            </Link>
          </motion.div>
        </Magnetic>
      </Reveal>
    </section>
  );
}
