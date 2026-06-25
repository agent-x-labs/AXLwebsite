import { STATS } from "@/content/stats";
import { CountUp, Reveal } from "@/components/anim";

export function MathSection() {
  return (
    <section className="section band-tint" id="math">
      <div className="container">
        <span className="eyebrow">The math</span>
        <h2 style={{ marginTop: 18, maxWidth: "16ch" }}>
          Slow beats nobody. <em>First</em> beats everyone.
        </h2>
        <div className="stat-row">
          {STATS.map((stat, i) => (
            <Reveal as="div" className="stat-cell" key={stat.value} delayMs={i * 90}>
              <div className="stat-num">
                <CountUp value={stat.value} />
              </div>
              <div className="stat-label">{stat.label}</div>
              <div className="mono-label" style={{ marginTop: 14, fontSize: 11 }}>
                {stat.source}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
