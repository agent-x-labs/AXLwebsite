import { PEDIGREE } from "@/content/site";

export function PedigreeStrip() {
  return (
    <section className="pedigree band-paper">
      <div className="container">
        <span className="mono-label">{PEDIGREE.label}</span>
        <div className="pedigree-row">
          {PEDIGREE.logos.map((logo) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={logo.src} className="pedigree-logo" src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>
    </section>
  );
}
