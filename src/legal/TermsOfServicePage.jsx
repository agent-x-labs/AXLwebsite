import React from 'react'
import LegalLayout, { LegalSection } from './LegalLayout'
import { companyDetails, legalLastUpdated } from './companyDetails'

const TermsOfServicePage = () => {
  return (
    <LegalLayout
      eyebrow="Terms of Service"
      title="Website terms for Agent X Labs LTD"
      intro="These terms govern your use of this website and any information made available through it. They are not a substitute for a signed client agreement and do not, by themselves, create any obligation for Agent X Labs LTD to provide services."
      lastUpdated={legalLastUpdated}
    >
      <LegalSection title="1. About these terms">
        <p>
          By accessing or using this website, you agree to these Terms of Service. If you do not agree with them, you should not use the site.
        </p>
        <p>
          These terms apply to this website and its public marketing content only. Any paid services provided by Agent X Labs LTD will be governed separately by a written proposal, order form, statement of work, or other contractual document.
        </p>
      </LegalSection>

      <LegalSection title="2. Who operates this website">
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
          <p><span className="font-semibold text-white">Legal name:</span> {companyDetails.legalName}</p>
          <p><span className="font-semibold text-white">Registered office:</span> {companyDetails.address}</p>
          <p><span className="font-semibold text-white">Place of registration:</span> {companyDetails.placeOfRegistration}</p>
          <p><span className="font-semibold text-white">Company registration number:</span> {companyDetails.companyRegistrationNumber}</p>
          <p><span className="font-semibold text-white">Contact email:</span> {companyDetails.email}</p>
        </div>
      </LegalSection>

      <LegalSection title="3. Acceptable use">
        <p>You must not misuse this website. In particular, you must not:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>try to gain unauthorised access to the site, server, or connected systems;</li>
          <li>introduce viruses, malicious code, or any material intended to disrupt or damage the site;</li>
          <li>use automated tools to scrape, copy, or monitor the site in a way that is unlawful or harmful;</li>
          <li>use the site in breach of any applicable law or regulation.</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Intellectual property">
        <p>
          Unless otherwise stated, all content on this website, including text, graphics, branding, design elements, images, and layout, is owned by or licensed to Agent X Labs LTD and is protected by intellectual property laws.
        </p>
        <p>
          You may view and print pages for your own internal business use, but you may not reproduce, republish, distribute, adapt, or commercially exploit site content without prior written permission.
        </p>
      </LegalSection>

      <LegalSection title="5. Information only and no reliance">
        <p>
          The content on this website is provided for general information only. It does not amount to legal, financial, regulatory, or professional advice, and it should not be relied on as a substitute for obtaining advice tailored to your circumstances.
        </p>
        <p>
          While we aim to keep content accurate and up to date, we make no representation, warranty, or guarantee that the website or its content is complete, accurate, or current.
        </p>
      </LegalSection>

      <LegalSection title="6. Availability and site changes">
        <p>
          We do not guarantee that this website will always be available, uninterrupted, secure, or free from errors. We may suspend, withdraw, restrict, or change all or any part of the site without notice.
        </p>
      </LegalSection>

      <LegalSection title="7. Third-party links">
        <p>
          This website may contain links to third-party websites or services. Those links are provided for convenience only. We do not control and are not responsible for the content, availability, or privacy practices of third-party sites.
        </p>
      </LegalSection>

      <LegalSection title="8. Enquiries do not create a contract">
        <p>
          Sending us an enquiry, booking a call, or otherwise contacting us through or because of this website does not create a contract, partnership, agency relationship, or client relationship.
        </p>
        <p>
          Any services will only be supplied if and when both parties enter into a separate written agreement.
        </p>
      </LegalSection>

      <LegalSection title="9. Liability">
        <p>
          To the fullest extent permitted by law, Agent X Labs LTD excludes all implied conditions, warranties, representations, or other terms that may apply to this website or any content on it.
        </p>
        <p>
          We will not be liable for any loss or damage arising out of or in connection with your use of, or inability to use, this website, or your reliance on website content.
        </p>
        <p>
          Nothing in these terms excludes or limits liability where it would be unlawful to do so, including liability for death or personal injury caused by negligence, fraud, or fraudulent misrepresentation.
        </p>
      </LegalSection>

      <LegalSection title="10. Governing law and jurisdiction">
        <p>
          These terms are governed by the laws of England and Wales. The courts of England and Wales will have exclusive jurisdiction over any dispute arising out of or in connection with these terms or this website, unless mandatory law requires otherwise.
        </p>
      </LegalSection>

      <LegalSection title="11. Changes to these terms">
        <p>
          We may update these Terms of Service from time to time. The latest version will always be posted on this page with the updated revision date shown above.
        </p>
      </LegalSection>
    </LegalLayout>
  )
}

export default TermsOfServicePage
