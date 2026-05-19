export const ROUTES = {
  home: "/",
  story: "/#story",
  gallery: "/gallery",
  notes: "/#notes",
  timeline: "/#timeline",
  magic: "/#magic",
  send: "/send",
  privacy: "/privacy",
  terms: "/terms",
  contact: "/contact",
} as const;

export const STORY_CONTENT = {
  title: "Our Story",
  paragraphs: [
    "Doodle Bouquet began in the quiet hours — when the world had gone soft around the edges and my heart needed a language larger than speech. I started drawing flowers that glowed, because plain words felt too small to carry how much you mean to me.",
    "Each line was a promise: that love could be gentle and luminous at once, like fireflies drifting through a garden that never sleeps. Coral petals, cyan leaves, little sparks of light — all of it sketched for you, one bloom at a time.",
    "What began as a single bouquet became a constellation of feelings: love notes tucked between petals, memories strung like lanterns, reasons I adore you written in neon ink. This site is our keepsake — a place to wander when you want to feel held.",
    "Come as you are — tired, glowing, nostalgic, hopeful. Read slowly. Every doodle is a way of saying I am still choosing you, and I always will.",
  ],
} as const;

export const GALLERY_ITEMS = [
  {
    id: "elegant-bouquet",
    title: "Elegant Bouquet",
    caption:
      "The first bloom I drew when I realized love could look like light — minimal, tender, and impossibly you.",
    image: "/assets/gallery/elegant-bouquet.png",
  },
  {
    id: "heart-cluster",
    title: "Heart Cluster",
    caption:
      "Roses shaped like a heart, because my affection refuses to stay quiet — it gathers, glows, and overflows.",
    image: "/assets/gallery/heart-cluster.png",
  },
  {
    id: "wide-bouquet",
    title: "Wide Bouquet",
    caption:
      "A sprawling garden of us — messy, bright, and more beautiful because it was drawn by hand.",
    image: "/assets/gallery/wide-bouquet.png",
  },
  {
    id: "vertical-arrangement",
    title: "Vertical Grace",
    caption:
      "Tall flowers reaching upward, the way my hope rises whenever I think of our next chapter together.",
    image: "/assets/gallery/vertical-arrangement.png",
  },
  {
    id: "tall-arrangement",
    title: "Tall Arrangement",
    caption:
      "Elegant stems and coral light — a bouquet for the days you deserve to feel like the main event.",
    image: "/assets/gallery/tall-arrangement.png",
  },
  {
    id: "delicate-branch",
    title: "Delicate Branch",
    caption:
      "Sometimes love is not a shout. Sometimes it is a branch offered gently, blooming in the hush between heartbeats.",
    image: "/assets/gallery/delicate-branch.png",
  },
  {
    id: "rounder-blooms",
    title: "Rounder Blooms",
    caption:
      "Softer petals, rounder joy — the kind of happiness that makes ordinary afternoons feel sacred.",
    image: "/assets/gallery/rounder-blooms.png",
  },
] as const;

export const SEND_FORM_COPY = {
  title: "Send a Bouquet",
  description:
    "Write the words your heart has been holding. I will wrap them in glowing petals and send them across the dark like lanterns — private, sincere, and only for the one you love.",
  successMessage:
    "Your bouquet is on its way — drifting through the quiet like light on water, gentle and unmistakably yours.",
} as const;

export const PRIVACY_CONTENT = {
  title: "Privacy Policy",
  sections: [
    {
      heading: "What we cherish",
      body: "Doodle Bouquet collects only what you choose to share when sending a bouquet or leaving a note. We treat your words like pressed flowers — handled with care, never sold, never turned into something colder than love.",
    },
    {
      heading: "How we protect you",
      body: "Messages are stored securely and shared only with your intended recipient. We do not use your love letters for advertising or training unrelated systems. Your tenderness deserves a safe place to land.",
    },
    {
      heading: "Your choices",
      body: "You may request deletion of any bouquet or note at any time. Reach out through Contact Heart and we will answer with warmth, respect, and speed.",
    },
  ],
} as const;

export const TERMS_CONTENT = {
  title: "Terms of Romance",
  sections: [
    {
      heading: "Kindness first",
      body: "By using Doodle Bouquet, you agree to send only messages rooted in respect, consent, and genuine affection. Love should feel safe — always.",
    },
    {
      heading: "Creative spirit",
      body: "Illustrations and copy on this site are part of our romantic artwork. Please do not reuse them commercially without permission, but feel free to be inspired by the feeling they carry.",
    },
    {
      heading: "Eternal disclaimer",
      body: "We cannot guarantee that every bouquet will make someone cry happy tears — only that we will keep the experience beautiful, sincere, and worthy of the love you are trying to express.",
    },
  ],
} as const;

export const CONTACT_CONTENT = {
  title: "Contact Heart",
  description:
    "If your heart has a question, a request, or a thank-you that needs somewhere soft to land — write to us. We read every note like it matters, because it does.",
  email: "hello@doodlebouquet.love",
} as const;
