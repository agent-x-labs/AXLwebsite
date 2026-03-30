import React from 'react'
import LegalLayout, { LegalSection } from './LegalLayout'
import { companyDetails, legalLastUpdated } from './companyDetails'

const PrivacyPolicyPage = () => {
  return (
    <LegalLayout
      eyebrow="Privacy Policy"
      title="How Agent X Labs LTD handles personal information"
      intro="This privacy policy explains how Agent X Labs LTD collects, uses, stores, and protects personal information when you use this website or contact us. It is written for UK visitors and is intended to reflect the requirements of the UK GDPR and the Privacy and Electronic Communications Regulations."
      lastUpdated={legalLastUpdated}
    >
      <LegalSection title="1. Who we are">
        <p>
          Agent X Labs LTD is the controller responsible for personal information processed through this website.
        </p>
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
          <p><span className="font-semibold text-white">Legal name:</span> {companyDetails.legalName}</p>
          <p><span className="font-semibold text-white">Email:</span> {companyDetails.email}</p>
          <p><span className="font-semibold text-white">Address:</span> {companyDetails.address}</p>
          <p><span className="font-semibold text-white">Place of registration:</span> {companyDetails.placeOfRegistration}</p>
          <p><span className="font-semibold text-white">Company registration number:</span> {companyDetails.companyRegistrationNumber}</p>
        </div>
      </LegalSection>

      <LegalSection title="2. The personal data we may collect">
        <p>Depending on how you interact with us, we may process the following categories of personal data:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Identity and contact data such as your name, email address, business name, and phone number if you contact us directly.</li>
          <li>Enquiry and correspondence data such as the contents of emails, call-booking requests, or other messages you send us.</li>
          <li>Technical data such as IP address, browser type, device information, page request data, and security logs generated when the website is accessed.</li>
          <li>Professional context data you choose to share with us about your business, operations, or growth goals.</li>
        </ul>
        <p>
          We do not currently operate user accounts, online payments, live contact-form submission processing, or active newsletter sign-up processing through this website.
        </p>
      </LegalSection>

      <LegalSection title="3. How we collect personal data">
        <ul className="list-disc space-y-2 pl-5">
          <li>Directly from you when you email us or otherwise contact us.</li>
          <li>Automatically through normal website delivery and security processes when your browser requests pages or assets from our hosting and infrastructure providers.</li>
          <li>From third parties acting on your behalf where someone introduces you or makes an enquiry for your business.</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Why we use personal data and our lawful bases">
        <div className="space-y-4">
          <div>
            <p className="font-semibold text-white">To respond to enquiries and discuss potential services</p>
            <p>Lawful basis: taking steps at your request before entering into a contract, and our legitimate interests in running and growing our business.</p>
          </div>
          <div>
            <p className="font-semibold text-white">To operate, secure, and improve this website</p>
            <p>Lawful basis: our legitimate interests in maintaining a secure, reliable, and effective website.</p>
          </div>
          <div>
            <p className="font-semibold text-white">To comply with legal or regulatory obligations</p>
            <p>Lawful basis: compliance with a legal obligation.</p>
          </div>
          <div>
            <p className="font-semibold text-white">To establish, exercise, or defend legal claims</p>
            <p>Lawful basis: our legitimate interests in protecting our business and legal rights.</p>
          </div>
        </div>
      </LegalSection>

      <LegalSection title="5. Who we share personal data with">
        <p>We may share personal data only where necessary with trusted providers and advisers, such as:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Website hosting, CDN, infrastructure, and security providers.</li>
          <li>Email and business communications providers.</li>
          <li>Professional advisers including lawyers, accountants, insurers, and compliance advisers.</li>
          <li>Regulators, law-enforcement bodies, or courts where disclosure is legally required.</li>
        </ul>
        <p>We do not sell personal data.</p>
      </LegalSection>

      <LegalSection title="6. International transfers">
        <p>
          Some of our suppliers may process personal data outside the United Kingdom. Where that happens, we will only use providers offering an appropriate level of protection and will rely on recognised transfer mechanisms where required.
        </p>
      </LegalSection>

      <LegalSection title="7. How long we keep personal data">
        <p>
          We keep personal data only for as long as reasonably necessary for the purpose for which it was collected, including to satisfy legal, regulatory, tax, accounting, or reporting requirements.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>General enquiries are typically retained for as long as needed to assess and respond to the enquiry and for a limited follow-up period afterwards.</li>
          <li>Business correspondence may be retained longer where it is relevant to ongoing discussions, potential services, or legal obligations.</li>
          <li>Technical and security logs are typically kept for a shorter period unless needed for security investigations or legal reasons.</li>
        </ul>
      </LegalSection>

      <LegalSection title="8. Your data protection rights">
        <p>Under the UK GDPR, you may have the right to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>request access to your personal data;</li>
          <li>request correction of inaccurate or incomplete data;</li>
          <li>request deletion of your data in certain circumstances;</li>
          <li>object to or restrict certain processing;</li>
          <li>request transfer of your data where applicable;</li>
          <li>withdraw consent where processing relies on consent.</li>
        </ul>
        <p>
          To exercise any of these rights, contact us at {companyDetails.email}. We may need to verify your identity before responding.
        </p>
      </LegalSection>

      <LegalSection title="9. Cookies and similar technologies">
        <p>
          This website does not currently use non-essential analytics, advertising pixels, behavioural tracking, or similar non-essential cookies.
        </p>
        <p>
          Basic technical processing may still occur to deliver pages, remember standard browser behaviour, and protect the site against abuse. If we later introduce analytics, booking widgets, CRM forms, or any other non-essential tracking technology, this policy will be updated and any required consent mechanisms will be implemented before those tools go live.
        </p>
      </LegalSection>

      <LegalSection title="10. Security">
        <p>
          We use reasonable technical and organisational measures to help protect personal data. However, no internet transmission or storage system can be guaranteed to be completely secure.
        </p>
      </LegalSection>

      <LegalSection title="11. Complaints and contact">
        <p>
          If you have concerns about how we handle personal data, please contact us first at {companyDetails.email}.
        </p>
        <p>
          You also have the right to complain to the Information Commissioner&apos;s Office (ICO), the UK supervisory authority for data protection matters. Details are available at{' '}
          <a
            href="https://www.ico.org.uk/make-a-complaint/"
            className="text-primary transition-colors hover:text-white"
          >
            ico.org.uk/make-a-complaint
          </a>.
        </p>
      </LegalSection>

      <LegalSection title="12. Changes to this policy">
        <p>
          We may update this privacy policy from time to time. The latest version will always be posted on this page with the updated revision date shown above.
        </p>
      </LegalSection>
    </LegalLayout>
  )
}

export default PrivacyPolicyPage
