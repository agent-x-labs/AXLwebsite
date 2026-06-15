import { STATS } from "@/content/stats";

export function MathSection() {
  return (
    <section className="section band-tint" id="math">
      <div className="container">
        <span className="eyebrow">The math</span>
        <h2 style={{ marginTop: 18, maxWidth: "16ch" }}>
          Slow beats nobody. <em>First</em> beats everyone.
        </h2>
        <div
          style={{
            marginTop: "clamp(36px, 5vw, 52px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
            borderTop: "1px solid var(--line)",
          }}
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.value}
              style={{
                padding: "32px 28px 32px 0",
                borderLeft: i === 0 ? "none" : "1px solid var(--line)",
                paddingLeft: i === 0 ? 0 : 28,
              }}
            >
              <div className="stat-num">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="mono-label" style={{ marginTop: 14, fontSize: 11 }}>
                {stat.source}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
