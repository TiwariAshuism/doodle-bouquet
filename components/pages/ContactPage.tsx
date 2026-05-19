"use client";

import Link from "next/link";
import { Reveal } from "@/components/effects/Reveal";
import { PageHero } from "@/components/layout/PageHero";
import { GlassCard } from "@/components/ui/GlassCard";
import { CONTACT_CONTENT } from "@/constants/pages";
import { ROUTES } from "@/constants/pages";

export function ContactPage() {
  return (
    <main className="pb-(--spacing-section-gap)">
      <PageHero
        eyebrow="Reach out"
        title={CONTACT_CONTENT.title}
        description={CONTACT_CONTENT.description}
      />

      <Reveal className="mx-auto max-w-xl px-5 md:px-(--spacing-margin-desktop)">
        <GlassCard className="space-y-6 p-10 text-center" hover={false}>
          <p className="text-on-surface-variant">Write to us anytime at</p>
          <a
            href={`mailto:${CONTACT_CONTENT.email}`}
            className="font-headline-sm text-secondary-fixed transition-opacity hover:opacity-80"
          >
            {CONTACT_CONTENT.email}
          </a>
          <p className="text-sm text-on-surface-variant">
            We read every note within a day — usually with tea and a smile.
          </p>
          <Link
            href={ROUTES.notes}
            className="inline-block rounded-full border border-secondary-fixed/30 px-8 py-3 font-label-md uppercase tracking-widest text-secondary-fixed transition-colors hover:bg-secondary-fixed/10"
          >
            Read love notes
          </Link>
        </GlassCard>
      </Reveal>
    </main>
  );
}
