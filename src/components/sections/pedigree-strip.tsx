import { Fragment } from "react";
import { PEDIGREE } from "@/content/site";

export function PedigreeStrip() {
  return (
    <section className="pedigree band-paper">
      <div className="container">
        <span className="mono-label">{PEDIGREE.label}</span>
        <div className="pedigree-row">
          {PEDIGREE.logos.map((logo) => (
            <Fragment key={logo.src}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="pedigree-logo logo-light" src={logo.src} alt={logo.alt} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="pedigree-logo logo-dark" src={logo.dark} alt="" aria-hidden="true" />
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
