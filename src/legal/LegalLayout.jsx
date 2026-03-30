import React from 'react'
import assets from '../assets/assets'

export const LegalSection = ({ title, children }) => (
  <section className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
    <h2
      className="text-2xl font-medium tracking-tight text-white sm:text-[1.7rem]"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      {title}
    </h2>
    <div className="mt-4 space-y-4 text-sm leading-7 text-white/72 sm:text-base">{children}</div>
  </section>
)

const LegalLayout = ({ eyebrow, title, intro, lastUpdated, children }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(142,45,226,0.16),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(0,191,143,0.08),_transparent_26%)]" />

      <header className="px-4 py-5 sm:px-8 lg:px-16 xl:px-24">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur-xl sm:px-6">
          <a href="/" className="inline-flex items-center gap-3 text-white">
            <img src={assets.logo} alt="Agent X Labs" className="w-28 brightness-[2] sm:w-32" />
          </a>
          <a
            href="/"
            className="whitespace-nowrap rounded-full border border-white/14 px-4 py-2 text-xs font-medium text-white/80 transition-colors hover:border-primary/40 hover:text-white sm:text-sm"
          >
            Back to home
          </a>
        </div>
      </header>

      <main className="px-4 pb-18 pt-6 sm:px-8 lg:px-16 xl:px-24">
        <div className="mx-auto w-full max-w-4xl">
          <div className="rounded-[34px] border border-white/10 bg-[#080808] p-6 shadow-[0_26px_90px_rgba(0,0,0,0.28)] sm:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-primary/86">{eyebrow}</p>
            <h1
              className="mt-4 max-w-3xl text-3xl font-medium tracking-tight text-white sm:text-5xl"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {title}
            </h1>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/72 sm:text-base">{intro}</p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-white/42">
              Last updated: {lastUpdated}
            </p>

            <div className="mt-8 space-y-6 sm:mt-10">{children}</div>
          </div>
        </div>
      </main>

      <footer className="px-4 pb-10 sm:px-8 lg:px-16 xl:px-24">
        <div className="mx-auto flex w-full max-w-4xl items-center justify-center gap-6 rounded-full border border-white/10 bg-white/[0.03] px-6 py-4 text-sm text-white/64">
          <a href="/privacy-policy/" className="transition-colors hover:text-white">
            Privacy Policy
          </a>
          <a href="/terms-of-service/" className="transition-colors hover:text-white">
            Terms of Service
          </a>
        </div>
      </footer>
    </div>
  )
}

export default LegalLayout
