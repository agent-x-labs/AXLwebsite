export interface Agent {
  /** route slug, also the public video basename under /agents */
  slug: string;
  /** display ordinal, e.g. "01" */
  num: string;
  name: string;
  /** short, punchy promise */
  tagline: string;
  /** one supporting line */
  blurb: string;
  /** three concrete capabilities */
  bullets: string[];
}

export const AGENTS: readonly Agent[] = [
  {
    slug: "reception-agent",
    num: "01",
    name: "Reception Agent",
    tagline: "Never miss a lead.",
    blurb:
      "Answers every call in seconds, qualifies the caller, and books the job - day or night.",
    bullets: ["Answers 24/7, instantly", "Qualifies the enquiry", "Books straight into your calendar"],
  },
  {
    slug: "lead-reactivation-agent",
    num: "02",
    name: "Lead Reactivation Agent",
    tagline: "The revenue's already in your database.",
    blurb:
      "Wakes up dead quotes and cold leads and turns them back into booked work.",
    bullets: ["Reworks old quotes", "Re-engages cold leads", "Hands you warm conversations"],
  },
  {
    slug: "after-sales-agent",
    num: "03",
    name: "After-Sales Agent",
    tagline: "Every job becomes the next one.",
    blurb:
      "Automatic follow-ups that turn happy customers into 5-star reviews and referrals.",
    bullets: ["Times the ask perfectly", "Collects 5-star reviews", "Surfaces referrals"],
  },
  {
    slug: "content-marketing-agent",
    num: "04",
    name: "Content Marketing Agent",
    tagline: "Be the first call when they're ready.",
    blurb:
      "Creates and ships content that keeps you front-of-mind - on autopilot.",
    bullets: ["Plans the content", "Writes in your voice", "Posts across your channels"],
  },
] as const;

export const BESPOKE = {
  tagline: "Something else in mind?",
  blurb: "Tell us the job you'd hand off if you could. We'll design the agent for it.",
} as const;
