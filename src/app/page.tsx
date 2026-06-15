import Link from "next/link";

/**
 * Phase 0 placeholder homepage — an on-brand hero stub that exercises the
 * design system. The full section build lands in Phase 2.
 */
export default function Home() {
  return (
    <main className="band-paper">
      <section className="section">
        <div className="container">
          <span className="eyebrow">Bespoke AI Agency</span>
          <h1 style={{ marginTop: 28, maxWidth: "16ch" }}>
            We build the AI agents that{" "}
            <span className="grad-text">run your business</span> while you do the
            work that matters.
          </h1>
          <p
            style={{
              marginTop: 28,
              maxWidth: "54ch",
              fontSize: 21,
              lineHeight: 1.5,
              color: "var(--ink-soft)",
            }}
          >
            Custom-built agents that answer your calls, revive dead leads, win
            reviews, and create your content — enterprise-grade AI, built for how
            your business actually works.
          </p>
          <div style={{ marginTop: 36, display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a className="btn btn-primary" href="#">
              Book a strategy call
            </a>
            <Link className="btn btn-secondary" href="/styleguide">
              View the design system →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
