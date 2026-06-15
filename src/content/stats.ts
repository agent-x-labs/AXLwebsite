export interface Stat {
  value: string;
  label: string;
  source: string;
}

/** Sourced industry stats — the cost of slow response and weak follow-up. */
export const STATS: readonly Stat[] = [
  { value: "78%", label: "buy from the business that responds first", source: "Lead Connect" },
  { value: "21×", label: "more likely to qualify a lead answered in under 5 minutes", source: "Harvard Business Review" },
  { value: "8–11", label: "touchpoints it takes to convert a lead", source: "Google" },
  { value: "270%", label: "revenue lift for businesses with 40+ Google reviews", source: "BrightLocal" },
] as const;
