"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/effects/Reveal";
import { TIMELINE_EVENTS } from "@/constants/content";
import { SECTION_COPY } from "@/constants/sections";
import { timelineDotVariants } from "@/lib/animations";
import { cn } from "@/lib/utils";

function TimelineRow({
  event,
  index,
}: {
  event: (typeof TIMELINE_EVENTS)[number];
  index: number;
}) {
  const isLeft = event.side === "left";

  return (
    <Reveal delay={index * 0.12} variant={index % 2 === 0 ? "wild" : "flip"}>
      <motion.div
        className="relative flex flex-col items-center md:flex-row"
      >
        {isLeft ? (
          <motion.div className="hidden w-1/2 pr-16 text-right md:block">
            <h3 className={cn("font-headline-sm", event.accentClass)}>
              {event.title}
            </h3>
            <p className="text-on-surface-variant">{event.description}</p>
          </motion.div>
        ) : (
          <div className="hidden w-1/2 pr-16 text-right md:block">
            <span className="font-label-md uppercase text-outline">
              {event.period}
            </span>
          </div>
        )}

        <motion.div
          variants={timelineDotVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={cn(
            "z-10 mb-6 size-6 shrink-0 rounded-full border-4 border-background md:mb-0",
            event.dotClass,
          )}
          animate={{
            boxShadow: [
              "0 0 0px rgba(255,127,80,0)",
              "0 0 24px rgba(255,127,80,0.6)",
              "0 0 0px rgba(255,127,80,0)",
            ],
          }}
          transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.4 }}
        />

        {isLeft ? (
          <div className="w-full pl-0 text-center md:w-1/2 md:pl-16 md:text-left">
            <motion.div className="md:hidden">
              <h3 className={cn("font-headline-sm", event.accentClass)}>
                {event.title}
              </h3>
              <p className="text-on-surface-variant">{event.description}</p>
            </motion.div>
            <span className="font-label-md uppercase text-outline">
              {event.period}
            </span>
          </div>
        ) : (
          <>
            <div className="hidden w-1/2 pl-16 text-left md:block">
              <h3 className={cn("font-headline-sm", event.accentClass)}>
                {event.title}
              </h3>
              <p className="text-on-surface-variant">{event.description}</p>
            </div>
            <div className="text-center md:hidden">
              <h3 className={cn("font-headline-sm", event.accentClass)}>
                {event.title}
              </h3>
              <p className="text-on-surface-variant">{event.description}</p>
            </div>
          </>
        )}
      </motion.div>
    </Reveal>
  );
}

export function TimelineSection() {
  return (
    <section
      id="timeline"
      className="bg-surface-container-lowest/50 px-5 py-(--spacing-section-gap) md:px-(--spacing-margin-desktop)"
    >
      <div className="relative mx-auto max-w-4xl">
        <Reveal className="mb-24 text-center">
          <h2 className="font-display-lg text-on-surface">
            {SECTION_COPY.timeline.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-on-surface-variant">
            {SECTION_COPY.timeline.description}
          </p>
        </Reveal>

        <motion.div
          className="absolute top-48 bottom-0 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-secondary-fixed via-secondary-fixed to-transparent md:block"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "top" }}
        />

        <div className="space-y-24">
          {TIMELINE_EVENTS.map((event, index) => (
            <TimelineRow key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
