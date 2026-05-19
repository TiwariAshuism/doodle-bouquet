"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/effects/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { BENTO_ITEMS } from "@/constants/content";
import { SECTION_COPY } from "@/constants/sections";
import { cn } from "@/lib/utils";

export function BentoSection() {
  return (
    <section
      id="magic"
      className="mx-auto max-w-(--spacing-container-max) px-5 py-(--spacing-section-gap) md:px-(--spacing-margin-desktop)"
    >
      <Reveal variant="wild" className="mb-16">
        <h2 className="font-headline-lg text-on-surface">
          {SECTION_COPY.magic.title}
        </h2>
        <p className="max-w-2xl text-on-surface-variant">
          {SECTION_COPY.magic.description}
        </p>
      </Reveal>

      <div className="grid grid-cols-1 gap-(--spacing-gutter) md:grid-cols-12">
        {BENTO_ITEMS.map((item, index) => {
          const Icon = item.icon;
          const isWide = item.id === "strength";

          return (
            <Reveal
              key={item.id}
              delay={index * 0.1}
              variant={index % 3 === 0 ? "zoom" : index % 3 === 1 ? "flip" : "wild"}
              className={cn(item.className, "min-h-0")}
            >
              <GlassCard
                className={cn(
                  "relative h-full overflow-hidden p-10",
                  isWide && "flex items-center gap-10",
                  !isWide && "flex flex-col justify-center",
                )}
              >
                {isWide ? (
                  <>
                    <div className="relative z-10">
                      <h4 className="mb-2 font-headline-sm">{item.title}</h4>
                      <p className="max-w-md text-on-surface-variant">
                        {item.description}
                      </p>
                    </div>
                    <motion.div
                      className="absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l from-primary/10 to-transparent"
                      whileHover={{ opacity: 1 }}
                      initial={{ opacity: 0.8 }}
                    />
                    <Icon
                      className={cn(
                        "absolute -right-4 -bottom-4 size-24 rotate-12",
                        item.iconClass,
                      )}
                      strokeWidth={1}
                    />
                  </>
                ) : (
                  <>
                    <Icon className={cn("mb-4 size-10", item.iconClass)} />
                    <h4 className="mb-2 font-headline-sm">{item.title}</h4>
                    <p className="text-on-surface-variant">{item.description}</p>
                  </>
                )}
              </GlassCard>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
