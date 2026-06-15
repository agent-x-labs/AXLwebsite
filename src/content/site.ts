export const SITE = {
  name: "Agent X Labs",
  /** booking — the page-wide primary CTA */
  bookingUrl: "https://cal.com/agentxlabs/agent-x-labs-strategy-call",
  bookingLabel: "Book a strategy call",
} as const;

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: readonly NavLink[] = [
  { label: "What we build", href: "#agents" },
  { label: "How it works", href: "#how" },
  { label: "The math", href: "#math" },
  { label: "Team", href: "#founders" },
] as const;

export const HERO = {
  eyebrow: "Bespoke AI agency",
  /** the word(s) wrapped in <gradient> render with the brand gradient fill */
  headlineLead: "We build the AI agents that ",
  headlineGradient: "run your business",
  headlineTail: " while you do the work that matters.",
  sub: "Custom-built agents that answer your calls, revive dead leads, win reviews, and create your content — enterprise-grade AI, built for how your business actually works.",
} as const;

export const SHIFT = {
  eyebrow: "Why now",
  headline: "The work that used to need a team can now run itself.",
  body: "Answering, chasing, following up, posting — the jobs that quietly decide whether you grow. The businesses that automate them first won't just save time. They'll take the customers everyone else is too slow to answer.",
} as const;

export const PEDIGREE = {
  label: "Built by operators who've delivered at",
  logos: [
    { src: "/logos/morgan-stanley.svg", alt: "Morgan Stanley" },
    { src: "/logos/mckinsey.svg", alt: "McKinsey & Company" },
    { src: "/logos/jp-morgan.svg", alt: "JP Morgan" },
    { src: "/logos/cambridge.svg", alt: "University of Cambridge" },
    { src: "/logos/bank-of-georgia.svg", alt: "Bank of Georgia" },
  ],
} as const;

export interface Step {
  num: string;
  title: string;
  desc: string;
}

export const STEPS: readonly Step[] = [
  { num: "01", title: "Strategy call", desc: "A free 30-minute call. We find where you're leaking revenue and what to automate first." },
  { num: "02", title: "We build your agent", desc: "Bespoke build in days, not months. Wired into your tools. No tech work for you." },
  { num: "03", title: "Live & earning", desc: "Your agent goes live and starts working in week one. We tune it as it learns." },
] as const;

export const WHY = {
  eyebrow: "Why Agent X Labs",
  headline: "Bespoke beats a bolt-on chatbot.",
  doLabel: "What we do",
  dontLabel: "What we don't do",
  does: [
    "Build agents bespoke to your business",
    "Wire them into the tools you already use",
    "Do the whole build for you",
    "Go live in days, then tune as it learns",
    "Enterprise-grade AI, small-business pricing",
  ],
  donts: [
    "Hand you a generic off-the-shelf bot",
    "Make you configure anything technical",
    "Sound robotic to your customers",
    "Lock you into a year-long contract",
    "Disappear after go-live",
  ],
} as const;

export const FOUNDERS = {
  eyebrow: "The team",
  headline: "Why we left the boardroom.",
  body: [
    "We spent years building systems for some of the biggest firms in the world. Then we watched the businesses that actually power this country — the ones answering their own phones at 8pm — get left behind by the same technology.",
    "So we left to fix that. Agent X Labs brings enterprise-grade AI to the businesses that need it most, built bespoke, done for you, and priced to make sense.",
  ],
  signoff: "— Alex & Tengiz, founders",
} as const;

export interface Faq {
  q: string;
  a: string;
}

export const FAQS: readonly Faq[] = [
  { q: "What exactly do you build?", a: "Custom AI agents for the repetitive, revenue-critical work in your business — answering calls, following up leads, collecting reviews, creating content. We scope the highest-leverage one on a free call, then build it bespoke." },
  { q: "How fast can we go live?", a: "Days, not months. Most agents are live and working within the first week after your strategy call." },
  { q: "Do I need any technical knowledge?", a: "None. We handle the entire build and wire it into the tools you already use. Your only job is the 30-minute call." },
  { q: "Will it sound robotic to my customers?", a: "No. Each agent is built around how your business actually speaks, so callers and customers get a natural, on-brand experience." },
  { q: "What does it cost?", a: "Enterprise-grade AI at small-business pricing. We scope the exact number on the strategy call once we know which agent earns its keep fastest — no obligation either way." },
  { q: "What if it doesn't work for my business?", a: "The strategy call is free and you leave with three specific recommendations whether you hire us or not. We only build what we're confident will pay for itself." },
] as const;

export const CTA = {
  eyebrow: "Get started",
  headlineLead: "Stop letting revenue ",
  headlineGradient: "walk out the door",
  headlineTail: ".",
  body: "Book a free 30-minute strategy call. We'll show you exactly where you're losing business — and the agents that fix it. Whether you hire us or not.",
  note: "30 minutes · no commitment · 3 specific recommendations to keep",
} as const;
