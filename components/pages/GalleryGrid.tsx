"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Magnetic } from "@/components/effects/Magnetic";
import { Reveal } from "@/components/effects/Reveal";
import { PageHero } from "@/components/layout/PageHero";
import { GlassCard } from "@/components/ui/GlassCard";
import { GALLERY_ITEMS, ROUTES } from "@/constants/pages";
import { staggerContainer, zoomSpin } from "@/lib/animations";

export function GalleryGrid() {
  return (
    <main className="pb-(--spacing-section-gap)">
      <PageHero
        eyebrow="Gallery"
        title="Blooms of Light"
        description="Each bloom is a love letter in neon — drawn slowly, kept forever, offered to you with both hands."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="mx-auto grid max-w-(--spacing-container-max) grid-cols-1 gap-(--spacing-gutter) px-5 sm:grid-cols-2 lg:grid-cols-3 md:px-(--spacing-margin-desktop)"
      >
        {GALLERY_ITEMS.map((item, index) => (
          <motion.div key={item.id} variants={zoomSpin} custom={index * 0.05}>
            <GlassCard className="group overflow-hidden p-0" hover>
              <div className="relative aspect-square overflow-hidden bg-transparent">
                <motion.div
                  className="relative h-full w-full"
                  whileHover={{ scale: 1.12, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 200, damping: 18 }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    unoptimized
                    className="object-contain bg-transparent p-6 transition-[filter] duration-500 group-hover:drop-shadow-[0_0_40px_rgba(255,127,80,0.5)]"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </motion.div>
              </div>
              <div className="border-t border-white/10 p-6">
                <h3 className="font-headline-sm text-on-surface">{item.title}</h3>
                <p className="mt-2 text-sm text-on-surface-variant">
                  {item.caption}
                </p>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>

      <Reveal variant="flip" className="mt-16 text-center">
        <Magnetic>
          <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}>
            <Link
              href={ROUTES.send}
              className="inline-block rounded-full bg-primary-container px-10 py-4 font-label-md uppercase tracking-widest text-on-primary-container shadow-[0_0_20px_rgba(255,127,80,0.4)]"
            >
              Create Your Bouquet
            </Link>
          </motion.div>
        </Magnetic>
      </Reveal>
    </main>
  );
}
