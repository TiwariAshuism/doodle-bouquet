import {
  Eye,
  Flower2,
  Heart,
  Laugh,
  Moon,
  Sparkles,
  Star,
  Droplets,
  CloudLightning,
  Sun,
  Feather,
} from "lucide-react";
import { ROUTES } from "@/constants/pages";
import type { BentoItem, LoveNote, NavLink } from "@/types/content";

export const SITE = {
  name: "Doodle Bouquet",
  tagline:
    "A small universe of flowers, doodles, and feelings made just for you — hand-sketched in neon light, meant to be kept close on the days words are not enough.",
  heroImage: "/assets/bouquet.png",
  heroPills: {
    left: "You make my world brighter ♡",
    right: "Every flower reminds me of you",
  },
} as const;

export const NAV_LINKS: NavLink[] = [
  { href: ROUTES.story, label: "Our Story" },
  { href: ROUTES.gallery, label: "Gallery" },
  { href: ROUTES.notes, label: "Love Notes" },
  { href: ROUTES.magic, label: "Why You" },
];

export const LOVE_NOTES: LoveNote[] = [
  {
    id: "note-1",
    quote:
      '"In your smile, I see something more beautiful than the stars — and I have loved the night sky my whole life."',
    attribution: "— written on a night I could not sleep without thanking the universe",
    icon: Heart,
    accentClass: "text-primary",
  },
  {
    id: "note-2",
    quote:
      '"You are my favorite peace — the place my breath remembers how to be gentle."',
    attribution: "— folded into every bouquet I draw for you",
    icon: Droplets,
    accentClass: "text-tertiary",
  },
  {
    id: "note-3",
    quote:
      '"My heart feels lighter with you, as if gravity forgot my name the moment you held my hand."',
    attribution: "— whispered between two ordinary cups of tea",
    icon: Feather,
    accentClass: "text-secondary-fixed",
  },
  {
    id: "note-4",
    quote:
      '"Even silence feels beautiful with you — not empty, but full of everything we do not need to say."',
    attribution: "— on the quiet drive home when the city blurred into gold",
    icon: Moon,
    accentClass: "text-primary-fixed-dim",
  },
  {
    id: "note-5",
    quote:
      '"You turned ordinary days into memories I will still be smiling about when my hair is silver."',
    attribution: "— pressed like a flower in the book of us",
    icon: Sparkles,
    accentClass: "text-secondary-fixed",
  },
  {
    id: "note-6",
    quote:
      '"Every day with you is a favorite new page — I never want to rush to the ending."',
    attribution: "— read aloud once, then kept forever",
    icon: Sun,
    accentClass: "text-primary",
  },
  {
    id: "note-7",
    quote:
      '"You are the peace in my chaos and the light in every room I walk into after missing you."',
    attribution: "— left on your mirror in glowing ink",
    icon: Star,
    accentClass: "text-primary-container",
  },
  {
    id: "note-8",
    quote:
      '"Like these flowers, my love for you blooms in every season — patient, bright, and impossible to uproot."',
    attribution: "— the promise behind every doodle I make",
    icon: CloudLightning,
    accentClass: "text-tertiary",
  },
];

export const BENTO_ITEMS: BentoItem[] = [
  {
    id: "kindness",
    title: "Your Kindness",
    description:
      "The way you care for the smallest things — a stray thought, a tired smile, a half-finished dream — shows me the depth of your beautiful heart. You make gentleness feel like strength.",
    icon: Star,
    iconClass: "text-primary-container",
    className: "md:col-span-4 md:row-span-2",
  },
  {
    id: "strength",
    title: "Your Infinite Strength",
    description:
      "You are the steady light when storms roll in — not loud, not performative, simply there. With you, I remember that courage can sound like a soft I am here.",
    icon: Flower2,
    iconClass: "text-primary opacity-10",
    className: "md:col-span-8 md:row-span-1",
  },
  {
    id: "laughter",
    title: "Your Laughter",
    description:
      "Your laugh is the song that turns my heaviest days into something I can carry — bright, human, and hopelessly dear to me.",
    icon: Laugh,
    iconClass: "text-secondary-fixed",
    className: "md:col-span-4 md:row-span-1",
  },
  {
    id: "see-me",
    title: "How You See Me",
    description:
      "Through your eyes, I am not only loved — I am understood. You see the person I am trying to become and meet me there with grace.",
    icon: Eye,
    iconClass: "text-tertiary",
    className: "md:col-span-4 md:row-span-1",
  },
  {
    id: "patience",
    title: "Your Patience",
    description:
      "You never rush my heart. You let love unfold the way flowers open — slowly, honestly, and worth the wait.",
    icon: Moon,
    iconClass: "text-primary-fixed-dim",
    className: "md:col-span-6 md:row-span-1",
  },
  {
    id: "warmth",
    title: "Your Warmth",
    description:
      "The room changes when you enter it. Not because of noise, but because your presence feels like sunlight finding a window.",
    icon: Sun,
    iconClass: "text-secondary-fixed",
    className: "md:col-span-6 md:row-span-1",
  },
];

export const FOOTER_LINKS = [
  { href: ROUTES.privacy, label: "Privacy Policy" },
  { href: ROUTES.terms, label: "Terms of Romance" },
  { href: ROUTES.contact, label: "Contact Heart" },
] as const;
