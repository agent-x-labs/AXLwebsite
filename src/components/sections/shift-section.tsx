import { SHIFT } from "@/content/site";

export function ShiftSection() {
  return (
    <section className="section band-tint">
      <div className="container">
        <span className="eyebrow">{SHIFT.eyebrow}</span>
        <h2 style={{ marginTop: 18, maxWidth: "20ch" }}>{SHIFT.headline}</h2>
        <p
          style={{
            marginTop: 24,
            maxWidth: "60ch",
            fontSize: "clamp(1.05rem, 0.9rem + 0.55vw, 1.3rem)",
            lineHeight: 1.55,
            color: "var(--ink-soft)",
          }}
        >
          {SHIFT.body}
        </p>
      </div>
    </section>
  );
}
