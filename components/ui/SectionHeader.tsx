import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  centered?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  centered = true,
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        centered && "text-center",
        "mb-16",
        className,
      )}
    >
      {eyebrow ? (
        <span className="font-label-md text-primary uppercase tracking-widest">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-headline-lg text-on-surface mt-2">{title}</h2>
      {description ? (
        <p className="text-on-surface-variant mt-4">{description}</p>
      ) : null}
    </header>
  );
}
