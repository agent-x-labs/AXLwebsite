import { FAQS } from "@/content/site";
import { Reveal } from "@/components/anim";

export function FaqSection() {
  return (
    <section className="section band-paper">
      <div className="container-narrow">
        <span className="eyebrow">FAQ</span>
        <h2 style={{ marginTop: 18 }}>Questions, answered.</h2>
        <div className="faq-list">
          {FAQS.map((faq, i) => (
            <Reveal as="div" className="faq-item" key={faq.q} delayMs={i * 60}>
              <div className="q-num">Q{i + 1}</div>
              <div>
                <div className="faq-q">{faq.q}</div>
                <p className="faq-a">{faq.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
