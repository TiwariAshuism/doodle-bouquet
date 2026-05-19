"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/effects/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { LOVE_NOTES } from "@/constants/content";
import { SECTION_COPY } from "@/constants/sections";
import { staggerContainer, zoomSpin } from "@/lib/animations";

export function LoveNotesSection() {
  return (
    <section
      id="notes"
      className="mx-auto max-w-(--spacing-container-max) px-5 py-(--spacing-section-gap) md:px-(--spacing-margin-desktop)"
    >
      <Reveal variant="flip">
        <SectionHeader
          eyebrow={SECTION_COPY.notes.eyebrow}
          title={SECTION_COPY.notes.title}
          description={SECTION_COPY.notes.description}
        />
      </Reveal>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 gap-(--spacing-gutter) md:grid-cols-2 lg:grid-cols-4"
      >
        {LOVE_NOTES.map((note, index) => {
          const Icon = note.icon;
          return (
            <motion.div
              key={note.id}
              variants={zoomSpin}
              custom={index * 0.07}
            >
              <GlassCard
                neon
                className="flex min-h-96 flex-col justify-between gap-6 p-8 md:p-10"
              >
                <motion.div
                  animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 4 + index * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Icon
                    className={`size-10 ${note.accentClass}`}
                    fill="currentColor"
                    strokeWidth={1.5}
                  />
                </motion.div>
                <p className="font-headline-sm italic">{note.quote}</p>
                <p className="font-label-md text-on-surface-variant">
                  {note.attribution}
                </p>
              </GlassCard>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
