import { HERO, SITE } from "@/content/site";

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
        <p className="hero-note">{HERO.note}</p>
      </div>
    </section>
  );
}
