import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design System",
  robots: { index: false, follow: false },
};

const COLORS: { name: string; token: string; hex: string; dark?: boolean }[] = [
  { name: "Paper", token: "--paper", hex: "#F5F1E9" },
  { name: "Paper tint", token: "--paper-2", hex: "#ECE6D9" },
  { name: "Paper card", token: "--paper-card", hex: "#FBF8F1" },
  { name: "Ink bg", token: "--ink-bg", hex: "#16111D", dark: true },
  { name: "Ink", token: "--ink", hex: "#1A1622", dark: true },
  { name: "Ink soft", token: "--ink-soft", hex: "#4A4350", dark: true },
  { name: "Violet (voice)", token: "--violet", hex: "#8E2DE2", dark: true },
  { name: "Violet deep", token: "--violet-deep", hex: "#6E1FB8", dark: true },
  { name: "Teal (signal)", token: "--teal", hex: "#00BF8F", dark: true },
  { name: "Line", token: "--line", hex: "#DCD4C5" },
];

const STATS = [
  { n: "78%", l: "buy from the business that responds first", s: "Lead Connect" },
  { n: "21×", l: "more likely to qualify a lead answered in <5 min", s: "Harvard Business Review" },
  { n: "8–11", l: "touchpoints it takes to convert a lead", s: "Google" },
  { n: "270%", l: "revenue lift with 40+ Google reviews", s: "BrightLocal" },
];

const PEDIGREE = [
  { src: "/logos/morgan-stanley.svg", alt: "Morgan Stanley" },
  { src: "/logos/mckinsey.svg", alt: "McKinsey & Company" },
  { src: "/logos/jp-morgan.svg", alt: "JP Morgan" },
  { src: "/logos/cambridge.svg", alt: "University of Cambridge" },
  { src: "/logos/bank-of-georgia.svg", alt: "Bank of Georgia" },
];

function Swatch({ name, token, hex, dark }: { name: string; token: string; hex: string; dark?: boolean }) {
  return (
    <div style={{ border: "1px solid var(--line)" }}>
      <div style={{ background: `var(${token})`, height: 88 }} />
      <div style={{ padding: "12px 14px", background: "var(--paper-card)" }}>
        <div style={{ fontFamily: "var(--display)", fontSize: 15, fontWeight: 500 }}>{name}</div>
        <div className="mono-label" style={{ marginTop: 4, fontSize: 11 }}>
          {token} · {hex}
        </div>
      </div>
    </div>
  );
}

export default function StyleGuide() {
  return (
    <main>
      {/* Header */}
      <section className="section band-paper" style={{ paddingBottom: 0 }}>
        <div className="container">
          <span className="eyebrow">Agent X Labs — Design System</span>
          <h1 style={{ marginTop: 24, maxWidth: "18ch" }}>
            Technical <em>editorial</em>, on warm paper.
          </h1>
          <p style={{ marginTop: 24, maxWidth: "60ch", fontSize: 19, color: "var(--ink-soft)" }}>
            Warm Swiss-grotesk for an AI studio. Space Grotesk display, Space Mono labels, Geist
            body — the brand violet as the voice, teal as the signal, the gradient rationed to a
            few deliberate moments.
          </p>
          <hr className="rule" style={{ marginTop: 56 }} />
        </div>
      </section>

      {/* Color */}
      <section className="section band-paper" style={{ paddingTop: 64 }}>
        <div className="container">
          <span className="eyebrow">01 — Color</span>
          <div
            style={{
              marginTop: 32,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
              gap: 16,
            }}
          >
            {COLORS.map((c) => (
              <Swatch key={c.token} {...c} />
            ))}
          </div>
          <div style={{ marginTop: 28, height: 64, background: "var(--grad)", borderRadius: 2 }} />
          <div className="mono-label" style={{ marginTop: 10 }}>
            --grad · rationed: hero word · logo · hairline accents · the dark CTA band
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="section band-tint">
        <div className="container">
          <span className="eyebrow">02 — Typography</span>
          <div style={{ marginTop: 36, display: "grid", gap: 28 }}>
            <div>
              <div className="mono-label">Display / Space Grotesk · h1</div>
              <div className="display-xl" style={{ fontSize: "clamp(2.75rem,1rem + 7vw,6.25rem)", marginTop: 8 }}>
                Run your <span className="grad-text">business</span>.
              </div>
            </div>
            <hr className="rule" />
            <div>
              <div className="mono-label">Display · h2</div>
              <h2 style={{ marginTop: 8 }}>The work that runs itself.</h2>
            </div>
            <div>
              <div className="mono-label">Display · h3</div>
              <h3 style={{ marginTop: 8 }}>Never miss a lead again.</h3>
            </div>
            <hr className="rule" />
            <div>
              <div className="mono-label">Body / Geist · 19px lead</div>
              <p style={{ marginTop: 8, maxWidth: "62ch", fontSize: 19, color: "var(--ink-soft)" }}>
                Bespoke agents that answer your calls, revive dead leads, win reviews, and create your
                content — so growth stops depending on <em>your hours</em>.
              </p>
            </div>
            <div>
              <div className="mono-label">Label / Space Mono · eyebrow</div>
              <div style={{ marginTop: 10 }}>
                <span className="eyebrow">How it works</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Buttons + sample section */}
      <section className="section band-paper">
        <div className="container">
          <span className="eyebrow">03 — Components</span>
          <div style={{ marginTop: 32, display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a className="btn btn-primary" href="#">Book a strategy call</a>
            <a className="btn btn-secondary" href="#">See what we build →</a>
          </div>

          <div style={{ marginTop: 56 }}>
            <span className="eyebrow">The math</span>
            <h2 style={{ marginTop: 18, maxWidth: "16ch" }}>
              Slow beats nobody. <em>First</em> beats everyone.
            </h2>
            <div
              style={{
                marginTop: 44,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: 0,
                borderTop: "1px solid var(--line)",
              }}
            >
              {STATS.map((s, i) => (
                <div
                  key={s.n}
                  style={{
                    padding: "32px 28px 32px 0",
                    borderLeft: i === 0 ? "none" : "1px solid var(--line)",
                    paddingLeft: i === 0 ? 0 : 28,
                  }}
                >
                  <div className="stat-num">{s.n}</div>
                  <div className="stat-label">{s.l}</div>
                  <div className="mono-label" style={{ marginTop: 12, fontSize: 11 }}>
                    {s.s}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pedigree */}
          <div style={{ marginTop: 64 }}>
            <div className="mono-label">Built by operators who&apos;ve delivered at</div>
            <div
              style={{
                marginTop: 22,
                display: "flex",
                gap: 40,
                alignItems: "center",
                flexWrap: "wrap",
                opacity: 0.7,
              }}
            >
              {PEDIGREE.map((p) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={p.src} src={p.src} alt={p.alt} style={{ height: 26, width: "auto" }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dark band — the gradient's full-vivid moment */}
      <section className="section band-dark">
        <div className="container">
          <span className="eyebrow">04 — The dark band</span>
          <h2 style={{ marginTop: 18, maxWidth: "20ch" }}>
            Stop letting revenue <span className="grad-text">walk out the door</span>.
          </h2>
          <p style={{ marginTop: 22, maxWidth: "56ch", fontSize: 19, color: "var(--ink-onbg-soft)" }}>
            One place the gradient is allowed to go full-vivid — because the rest of the site
            withheld it.
          </p>
          <div style={{ marginTop: 36, display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
            <a className="btn btn-primary" href="#">Book a strategy call</a>
            <a className="btn btn-secondary" href="#">Read the FAQ →</a>
            <div style={{ marginLeft: "auto", textAlign: "right" }}>
              <div className="stat-num">5 days</div>
              <div className="stat-label">from call to a live agent</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
