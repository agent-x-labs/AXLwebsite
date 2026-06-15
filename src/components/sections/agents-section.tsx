import { AGENTS, BESPOKE } from "@/content/agents";
import { SITE } from "@/content/site";
import { HyperVideo } from "@/components/hyper-video";

export function AgentsSection() {
  return (
    <section className="section band-paper" id="agents">
      <div className="container">
        <span className="eyebrow">What we build</span>
        <h2 style={{ marginTop: 18, maxWidth: "18ch" }}>
          Agents for the work that <em>runs</em> your business.
        </h2>

        <div style={{ marginTop: "clamp(20px, 3vw, 32px)" }}>
          {AGENTS.map((agent) => (
            <article className="agent-row" key={agent.slug}>
              <div className="agent-media">
                <HyperVideo label={agent.name} src={`/agents/${agent.slug}`} />
              </div>
              <div className="agent-copy">
                <div className="agent-num">
                  {agent.num} — {agent.name}
                </div>
                <h3 className="agent-name">{agent.tagline}</h3>
                <p className="agent-tagline">{agent.blurb}</p>
                <ul className="agent-bullets">
                  {agent.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="bespoke-card">
          <div>
            <h3 style={{ fontSize: "clamp(1.25rem, 1rem + 1vw, 1.6rem)" }}>{BESPOKE.tagline}</h3>
            <p style={{ marginTop: 10, color: "var(--ink-soft)", maxWidth: "46ch" }}>{BESPOKE.blurb}</p>
          </div>
          <a className="btn btn-primary" href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer">
            {SITE.bookingLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
