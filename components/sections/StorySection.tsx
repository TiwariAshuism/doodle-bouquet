"use client";

import { Reveal } from "@/components/effects/Reveal";
import { STORY_CONTENT } from "@/constants/pages";
import { SECTION_COPY } from "@/constants/sections";

export function StorySection() {
  return (
    <section
      id="story"
      className="mx-auto max-w-(--spacing-container-max) px-5 py-(--spacing-section-gap) md:px-(--spacing-margin-desktop)"
    >
      <Reveal className="mb-12 text-center">
        <span className="font-label-md uppercase tracking-widest text-primary">
          Our Story
        </span>
        <h2 className="mt-2 font-headline-lg text-on-surface">
          {STORY_CONTENT.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-on-surface-variant">
          {SECTION_COPY.story.intro}
        </p>
      </Reveal>

      <div className="mx-auto max-w-2xl space-y-8">
        {STORY_CONTENT.paragraphs.map((paragraph, index) => (
          <Reveal key={paragraph} delay={index * 0.1}>
            <p className="font-body-lg text-on-surface-variant">{paragraph}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
