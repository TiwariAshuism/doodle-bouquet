import type { LucideIcon } from "lucide-react";

export type NavLink = {
  href: string;
  label: string;
};

export type LoveNote = {
  id: string;
  quote: string;
  attribution: string;
  icon: LucideIcon;
  accentClass: string;
};

export type TimelineEvent = {
  id: string;
  title: string;
  description: string;
  period: string;
  accentClass: string;
  dotClass: string;
  side: "left" | "right";
};

export type BentoItem = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  iconClass: string;
  className: string;
};
