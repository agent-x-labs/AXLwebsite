import { HERO, SITE } from "@/content/site";
import { HyperVideo } from "@/components/hyper-video";

export function HeroSection() {
  return (
    <section className="section hero band-paper">
      <div className="container">
        <span className="eyebrow">{HERO.eyebrow}</span>
        <h1>
          {HERO.headlineLead}
          <span className="grad-text">{HERO.headlineGradient}</span>
          {HERO.headlineTail}
        </h1>
        <p className="hero-sub">{HERO.sub}</p>
        <div className="cta-row">
          <a className="btn btn-primary" href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer">
            {SITE.bookingLabel}
          </a>
          <a className="btn btn-secondary" href="#agents">
            See what we build →
          </a>
        </div>
        <div style={{ marginTop: "clamp(48px, 6vw, 84px)" }}>
          <HyperVideo label="Agents at work" src="/agents/hero" />
        </div>
      </div>
    </section>
  );
}
