import { FOUNDERS } from "@/content/site";

export function FoundersSection() {
  return (
    <section className="section band-tint" id="founders">
      <div className="container">
        <span className="eyebrow">{FOUNDERS.eyebrow}</span>
        <div className="founders-grid">
          <div>
            <h2 style={{ maxWidth: "14ch" }}>{FOUNDERS.headline}</h2>
            <div className="founders-body" style={{ marginTop: 24 }}>
              {FOUNDERS.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="founders-signoff">{FOUNDERS.signoff}</div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="founders-photo"
            src="/brand/founders.webp"
            alt="Alex and Tengiz, founders of Agent X Labs"
            width={640}
            height={480}
          />
        </div>
      </div>
    </section>
  );
}
