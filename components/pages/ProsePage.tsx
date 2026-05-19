import { Reveal } from "@/components/effects/Reveal";
import { PageHero } from "@/components/layout/PageHero";
import { GlassCard } from "@/components/ui/GlassCard";

type ProseSection = {
  heading: string;
  body: string;
};

type ProsePageProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  sections: readonly ProseSection[];
};

export function ProsePage({
  eyebrow,
  title,
  description,
  sections,
}: ProsePageProps) {
  return (
    <main className="pb-(--spacing-section-gap)">
      <PageHero eyebrow={eyebrow} title={title} description={description} />
      <div className="mx-auto max-w-2xl space-y-6 px-5 md:px-(--spacing-margin-desktop)">
        {sections.map((section, index) => (
          <Reveal key={section.heading} delay={index * 0.08}>
            <GlassCard className="p-8" hover={false}>
              <h2 className="mb-3 font-headline-sm text-primary">
                {section.heading}
              </h2>
              <p className="text-on-surface-variant">{section.body}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
