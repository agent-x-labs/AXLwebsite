import type { Metadata } from "next";
import { SiteNav } from "@/components/sections/site-nav";
import { SiteFooter } from "@/components/sections/site-footer";
import { EntityDetails } from "@/components/legal/entity-details";
import { COMPANY, LEGAL_LAST_UPDATED } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms governing your use of the Agent X Labs LTD website and any information made available through it.",
  alternates: { canonical: "/terms-of-service" },
  openGraph: {
    type: "article",
    url: "/terms-of-service",
    siteName: "Agent X Labs",
    title: "Terms of Service · Agent X Labs",
    description:
      "The terms governing your use of the Agent X Labs LTD website and any information made available through it.",
    locale: "en_GB",
  },
  robots: { index: true, follow: true },
};

export default function TermsOfServicePage() {
  return (
    <>
      <SiteNav />
      <main>
        <section className="section band-paper">
          <div className="container-narrow">
            <header className="legal-head">
              <span className="eyebrow">Terms of Service</span>
              <h1>Website terms for Agent X Labs LTD</h1>
              <p className="legal-intro">
                These terms govern your use of this website and any information made available through it. They are not a
                substitute for a signed client agreement and do not, by themselves, create any obligation for Agent X
                Labs LTD to provide services.
              </p>
              <p className="legal-updated">Last updated: {LEGAL_LAST_UPDATED}</p>
            </header>

            <article className="legal-prose">
              <h2>1. About these terms</h2>
              <p>
                By accessing or using this website, you agree to these Terms of Service. If you do not agree with them,
                you should not use the site.
              </p>
              <p>
                These terms apply to this website and its public marketing content only. Any paid services provided by
                Agent X Labs LTD will be governed separately by a written proposal, order form, statement of work, or
                other contractual document.
              </p>

              <h2>2. Who operates this website</h2>
              <EntityDetails
                rows={[
                  { label: "Legal name", value: COMPANY.legalName },
                  { label: "Registered office", value: COMPANY.address },
                  { label: "Place of registration", value: COMPANY.placeOfRegistration },
                  { label: "Company registration number", value: COMPANY.companyRegistrationNumber },
                  { label: "Contact email", value: COMPANY.email },
                ]}
              />

              <h2>3. Acceptable use</h2>
              <p>You must not misuse this website. In particular, you must not:</p>
              <ul>
                <li>try to gain unauthorised access to the site, server, or connected systems;</li>
                <li>introduce viruses, malicious code, or any material intended to disrupt or damage the site;</li>
                <li>use automated tools to scrape, copy, or monitor the site in a way that is unlawful or harmful;</li>
                <li>use the site in breach of any applicable law or regulation.</li>
              </ul>

              <h2>4. Intellectual property</h2>
              <p>
                Unless otherwise stated, all content on this website, including text, graphics, branding, design
                elements, images, and layout, is owned by or licensed to Agent X Labs LTD and is protected by
                intellectual property laws.
              </p>
              <p>
                You may view and print pages for your own internal business use, but you may not reproduce, republish,
                distribute, adapt, or commercially exploit site content without prior written permission.
              </p>

              <h2>5. Information only and no reliance</h2>
              <p>
                The content on this website is provided for general information only. It does not amount to legal,
                financial, regulatory, or professional advice, and it should not be relied on as a substitute for
                obtaining advice tailored to your circumstances.
              </p>
              <p>
                While we aim to keep content accurate and up to date, we make no representation, warranty, or guarantee
                that the website or its content is complete, accurate, or current.
              </p>

              <h2>6. Availability and site changes</h2>
              <p>
                We do not guarantee that this website will always be available, uninterrupted, secure, or free from
                errors. We may suspend, withdraw, restrict, or change all or any part of the site without notice.
              </p>

              <h2>7. Third-party links</h2>
              <p>
                This website may contain links to third-party websites or services. Those links are provided for
                convenience only. We do not control and are not responsible for the content, availability, or privacy
                practices of third-party sites.
              </p>

              <h2>8. Enquiries do not create a contract</h2>
              <p>
                Sending us an enquiry, booking a call, or otherwise contacting us through or because of this website does
                not create a contract, partnership, agency relationship, or client relationship.
              </p>
              <p>Any services will only be supplied if and when both parties enter into a separate written agreement.</p>

              <h2>9. Liability</h2>
              <p>
                To the fullest extent permitted by law, Agent X Labs LTD excludes all implied conditions, warranties,
                representations, or other terms that may apply to this website or any content on it.
              </p>
              <p>
                We will not be liable for any loss or damage arising out of or in connection with your use of, or
                inability to use, this website, or your reliance on website content.
              </p>
              <p>
                Nothing in these terms excludes or limits liability where it would be unlawful to do so, including
                liability for death or personal injury caused by negligence, fraud, or fraudulent misrepresentation.
              </p>

              <h2>10. Governing law and jurisdiction</h2>
              <p>
                These terms are governed by the laws of England and Wales. The courts of England and Wales will have
                exclusive jurisdiction over any dispute arising out of or in connection with these terms or this website,
                unless mandatory law requires otherwise.
              </p>

              <h2>11. Changes to these terms</h2>
              <p>
                We may update these Terms of Service from time to time. The latest version will always be posted on this
                page with the updated revision date shown above.
              </p>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
