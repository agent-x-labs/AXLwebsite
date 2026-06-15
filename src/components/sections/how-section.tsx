import { STEPS } from "@/content/site";
import { HyperVideo } from "@/components/hyper-video";

export function HowSection() {
  return (
    <section className="section band-paper" id="how">
      <div className="container">
        <span className="eyebrow">How it works</span>
        <h2 style={{ marginTop: 18, maxWidth: "16ch" }}>
          Live in days. <em>No tech work</em> for you.
        </h2>
        <div className="how-steps">
          {STEPS.map((step) => (
            <div className="how-step" key={step.num}>
              <HyperVideo label={step.title} src={`/how/${step.num}`} />
              <div className="how-num">{step.num}</div>
              <h3 className="how-title">{step.title}</h3>
              <p className="how-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
