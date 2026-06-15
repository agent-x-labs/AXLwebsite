import { WHY } from "@/content/site";

export function WhySection() {
  return (
    <section className="section band-paper">
      <div className="container">
        <span className="eyebrow">{WHY.eyebrow}</span>
        <h2 style={{ marginTop: 18, maxWidth: "16ch" }}>
          Bespoke beats a <em>bolt-on</em> chatbot.
        </h2>
        <div className="why-cols">
          <div className="why-col">
            <div className="why-col-label">{WHY.doLabel}</div>
            <ul className="why-list why-do">
              {WHY.does.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="why-col">
            <div className="why-col-label">{WHY.dontLabel}</div>
            <ul className="why-list why-dont">
              {WHY.donts.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
