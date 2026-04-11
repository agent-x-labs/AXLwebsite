import React from 'react'
import MarketingShell from '../layouts/MarketingShell'
import { STRATEGY_CALL_URL } from '../lib/links'
import ContactUs from '../components/ContactUs'

const ServicePage = ({ service }) => {
  return (
    <MarketingShell>
      <section className="px-4 pb-10 pt-14 text-gray-700 dark:text-white sm:px-12 lg:px-24 xl:px-40">
        <div className="mx-auto flex max-w-6xl flex-col gap-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary/86">
                {service.eyebrow}
              </p>
              <h1
                className="mt-5 text-4xl font-medium tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {service.heroTitle}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600 dark:text-white/72 sm:text-lg">
                {service.heroDescription}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={STRATEGY_CALL_URL}
                  className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105 sm:px-7"
                >
                  Book a free strategy call
                </a>
                <a
                  href="/#services"
                  className="inline-flex items-center rounded-full border border-gray-300/80 px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:border-primary hover:text-primary dark:border-white/16 dark:text-white/78 dark:hover:border-primary dark:hover:text-white"
                >
                  Explore all agents
                </a>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)]">
              <div className="flex items-center gap-4">
                <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl border border-gray-200 bg-gray-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none">
                  <img
                    src={service.icon}
                    alt=""
                    width="72"
                    height="72"
                    loading="eager"
                    decoding="async"
                    className="size-11 object-contain"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/78">Core agent</p>
                  <p
                    className="mt-1 text-2xl font-medium tracking-tight text-gray-900 dark:text-white"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {service.title}
                  </p>
                </div>
              </div>

              <p
                className="mt-6 text-xl font-medium leading-tight text-gray-900 dark:text-white"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {service.tagline}
              </p>

              <ul className="mt-6 space-y-3">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-sm leading-6 text-gray-700 dark:text-white/82">
                    <span className="mt-2 block size-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
            <article className="rounded-[30px] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              {service.sections.map((section) => (
                <section key={section.title} className="mb-8 last:mb-0">
                  <h2
                    className="text-2xl font-medium tracking-tight text-gray-900 dark:text-white sm:text-3xl"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-4 text-sm leading-7 text-gray-600 dark:text-white/72 sm:text-base">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </article>

            <aside className="rounded-[30px] border border-white/10 bg-[#080808] p-6 text-white sm:p-8">
              <h2
                className="text-2xl font-medium tracking-tight text-white sm:text-3xl"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Outcomes this page is built around
              </h2>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-white/78 sm:text-base">
                {service.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3">
                    <span className="mt-2 block size-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>

          <section className="rounded-[30px] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <h2
              className="text-2xl font-medium tracking-tight text-gray-900 dark:text-white sm:text-3xl"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Frequently asked questions
            </h2>
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {service.faq.map((item) => (
                <article key={item.question} className="rounded-[22px] border border-white/10 bg-black/[0.04] p-5 dark:bg-white/[0.03]">
                  <h3 className="text-base font-semibold tracking-tight text-gray-900 dark:text-white">
                    {item.question}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-white/72">{item.answer}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
      <ContactUs />
    </MarketingShell>
  )
}

export default ServicePage
