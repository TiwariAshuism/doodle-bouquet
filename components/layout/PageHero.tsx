import { Reveal } from "@/components/effects/Reveal";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <Reveal className="mx-auto max-w-3xl px-5 py-16 text-center md:px-(--spacing-margin-desktop) md:py-24">
      {eyebrow ? (
        <span className="font-label-md uppercase tracking-widest text-primary">
          {eyebrow}
        </span>
      ) : null}
      <h1 className="mt-2 font-display-lg text-on-surface">{title}</h1>
      {description ? (
        <p className="mt-6 font-body-lg text-on-surface-variant">{description}</p>
      ) : null}
    </Reveal>
  );
}
