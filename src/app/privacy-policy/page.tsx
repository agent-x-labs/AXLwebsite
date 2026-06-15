import type { Metadata } from "next";
import { SiteNav } from "@/components/sections/site-nav";
import { SiteFooter } from "@/components/sections/site-footer";
import { EntityDetails } from "@/components/legal/entity-details";
import { COMPANY, LEGAL_LAST_UPDATED } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Agent X Labs LTD collects, uses, stores, and protects personal information when you use this website or contact us — written to reflect UK GDPR and PECR.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    type: "article",
    url: "/privacy-policy",
    siteName: "Agent X Labs",
    title: "Privacy Policy · Agent X Labs",
    description:
      "How Agent X Labs LTD collects, uses, stores, and protects personal information when you use this website or contact us.",
    locale: "en_GB",
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteNav />
      <main>
        <section className="section band-paper">
          <div className="container-narrow">
            <header className="legal-head">
              <span className="eyebrow">Privacy Policy</span>
              <h1>How Agent X Labs LTD handles personal information</h1>
              <p className="legal-intro">
                This privacy policy explains how Agent X Labs LTD collects, uses, stores, and protects personal
                information when you use this website or contact us. It is written for UK visitors and is intended to
                reflect the requirements of the UK GDPR and the Privacy and Electronic Communications Regulations.
              </p>
              <p className="legal-updated">Last updated: {LEGAL_LAST_UPDATED}</p>
            </header>

            <article className="legal-prose">
              <h2>1. Who we are</h2>
              <p>Agent X Labs LTD is the controller responsible for personal information processed through this website.</p>
              <EntityDetails
                rows={[
                  { label: "Legal name", value: COMPANY.legalName },
                  { label: "Email", value: COMPANY.email },
                  { label: "Address", value: COMPANY.address },
                  { label: "Place of registration", value: COMPANY.placeOfRegistration },
                  { label: "Company registration number", value: COMPANY.companyRegistrationNumber },
                ]}
              />

              <h2>2. The personal data we may collect</h2>
              <p>Depending on how you interact with us, we may process the following categories of personal data:</p>
              <ul>
                <li>
                  Identity and contact data such as your name, email address, business name, and phone number if you
                  contact us directly.
                </li>
                <li>
                  Enquiry and correspondence data such as the contents of emails, call-booking requests, or other
                  messages you send us.
                </li>
                <li>
                  Technical data such as IP address, browser type, device information, page request data, and security
                  logs generated when the website is accessed.
                </li>
                <li>
                  Professional context data you choose to share with us about your business, operations, or growth goals.
                </li>
              </ul>
              <p>
                We do not currently operate user accounts, online payments, live contact-form submission processing, or
                active newsletter sign-up processing through this website.
              </p>

              <h2>3. How we collect personal data</h2>
              <ul>
                <li>Directly from you when you email us or otherwise contact us.</li>
                <li>
                  Automatically through normal website delivery and security processes when your browser requests pages
                  or assets from our hosting and infrastructure providers.
                </li>
                <li>
                  From third parties acting on your behalf where someone introduces you or makes an enquiry for your
                  business.
                </li>
              </ul>

              <h2>4. Why we use personal data and our lawful bases</h2>
              <h3>To respond to enquiries and discuss potential services</h3>
              <p>
                Lawful basis: taking steps at your request before entering into a contract, and our legitimate interests
                in running and growing our business.
              </p>
              <h3>To operate, secure, and improve this website</h3>
              <p>Lawful basis: our legitimate interests in maintaining a secure, reliable, and effective website.</p>
              <h3>To comply with legal or regulatory obligations</h3>
              <p>Lawful basis: compliance with a legal obligation.</p>
              <h3>To establish, exercise, or defend legal claims</h3>
              <p>Lawful basis: our legitimate interests in protecting our business and legal rights.</p>

              <h2>5. Who we share personal data with</h2>
              <p>We may share personal data only where necessary with trusted providers and advisers, such as:</p>
              <ul>
                <li>Website hosting, CDN, infrastructure, and security providers.</li>
                <li>Email and business communications providers.</li>
                <li>Professional advisers including lawyers, accountants, insurers, and compliance advisers.</li>
                <li>Regulators, law-enforcement bodies, or courts where disclosure is legally required.</li>
              </ul>
              <p>We do not sell personal data.</p>

              <h2>6. International transfers</h2>
              <p>
                Some of our suppliers may process personal data outside the United Kingdom. Where that happens, we will
                only use providers offering an appropriate level of protection and will rely on recognised transfer
                mechanisms where required.
              </p>

              <h2>7. How long we keep personal data</h2>
              <p>
                We keep personal data only for as long as reasonably necessary for the purpose for which it was
                collected, including to satisfy legal, regulatory, tax, accounting, or reporting requirements.
              </p>
              <ul>
                <li>
                  General enquiries are typically retained for as long as needed to assess and respond to the enquiry and
                  for a limited follow-up period afterwards.
                </li>
                <li>
                  Business correspondence may be retained longer where it is relevant to ongoing discussions, potential
                  services, or legal obligations.
                </li>
                <li>
                  Technical and security logs are typically kept for a shorter period unless needed for security
                  investigations or legal reasons.
                </li>
              </ul>

              <h2>8. Your data protection rights</h2>
              <p>Under the UK GDPR, you may have the right to:</p>
              <ul>
                <li>request access to your personal data;</li>
                <li>request correction of inaccurate or incomplete data;</li>
                <li>request deletion of your data in certain circumstances;</li>
                <li>object to or restrict certain processing;</li>
                <li>request transfer of your data where applicable;</li>
                <li>withdraw consent where processing relies on consent.</li>
              </ul>
              <p>
                To exercise any of these rights, contact us at {COMPANY.email}. We may need to verify your identity
                before responding.
              </p>

              <h2>9. Cookies and similar technologies</h2>
              <p>
                This website does not currently use non-essential analytics, advertising pixels, behavioural tracking, or
                similar non-essential cookies.
              </p>
              <p>
                Basic technical processing may still occur to deliver pages, remember standard browser behaviour, and
                protect the site against abuse. If we later introduce analytics, booking widgets, CRM forms, or any other
                non-essential tracking technology, this policy will be updated and any required consent mechanisms will be
                implemented before those tools go live.
              </p>

              <h2>10. Security</h2>
              <p>
                We use reasonable technical and organisational measures to help protect personal data. However, no
                internet transmission or storage system can be guaranteed to be completely secure.
              </p>

              <h2>11. Complaints and contact</h2>
              <p>
                If you have concerns about how we handle personal data, please contact us first at {COMPANY.email}.
              </p>
              <p>
                You also have the right to complain to the Information Commissioner&apos;s Office (ICO), the UK
                supervisory authority for data protection matters. Details are available at{" "}
                <a href="https://www.ico.org.uk/make-a-complaint/" target="_blank" rel="noopener noreferrer">
                  ico.org.uk/make-a-complaint
                </a>
                .
              </p>

              <h2>12. Changes to this policy</h2>
              <p>
                We may update this privacy policy from time to time. The latest version will always be posted on this
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
