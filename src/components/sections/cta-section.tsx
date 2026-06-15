import { CTA, SITE } from "@/content/site";

export function CtaSection() {
  return (
    <section className="section band-dark" id="contact">
      <div className="container">
        <span className="eyebrow">{CTA.eyebrow}</span>
        <h2 style={{ marginTop: 18, maxWidth: "18ch" }}>
          {CTA.headlineLead}
          <span className="grad-text">{CTA.headlineGradient}</span>
          {CTA.headlineTail}
        </h2>
        <p
          style={{
            marginTop: 22,
            maxWidth: "54ch",
            fontSize: "clamp(1.05rem, 0.9rem + 0.55vw, 1.3rem)",
            lineHeight: 1.55,
            color: "var(--ink-onbg-soft)",
          }}
        >
          {CTA.body}
        </p>
        <div className="cta-row">
          <a className="btn btn-primary" href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer">
            {SITE.bookingLabel}
          </a>
        </div>
        <div className="cta-note">{CTA.note}</div>
      </div>
    </section>
  );
}
