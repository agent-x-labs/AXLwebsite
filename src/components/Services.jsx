import React from 'react'
import { motion } from "framer-motion";
import assets from '../assets/assets'
import ServicesCard from './ServicesCard'

const servicesData = [
  {
    icon: assets.solutionsLoudspeaker,
    title: 'Content Marketing Agent',
    tagline: "Stay front-of-mind so you're the first call when they're ready to buy.",
    body: "Your audience is scrolling right now, but you're too busy to post. Your Content Agent uses your brand voice and local market knowledge to create and publish content that keeps you visible, credible, and top of mind.",
    bullets: [
      'Generates on-brand posts and SEO-optimised articles',
      'Publishes consistently across social media, email, and your website',
      'Keeps you visible without eating into your day',
      'Turns your expertise into a steady stream of inbound enquiries'
    ]
  },
  {
    icon: assets.solutionsBell,
    title: 'Reception Agent',
    tagline: 'Never miss a lead again.',
    body: "Every inbound call, text, email, and web enquiry - answered instantly, 24/7. When you're on site, in a meeting, or asleep, your Reception Agent captures the lead, qualifies them, books appointments, and follows up until they convert.",
    bullets: [
      'Answers calls and messages across all channels',
      'Qualifies leads before they reach your inbox - no more tyre-kickers',
      'Books appointments directly into your calendar',
      'Follows up automatically when leads go cold'
    ]
  },
  {
    icon: assets.solutionsMagnet,
    title: 'Lead Reactivation Agent',
    tagline: 'Revenue is already sitting in your database. We go and get it.',
    body: "Old enquiries that never converted, past customers who haven't been back, quotes that went cold months ago. Your Reactivation Agent reaches out to every one of them with personalised, natural messages, engages with them and turns dead leads into booked jobs.",
    bullets: [
      'Re-engages old leads and past customers with personalised outreach',
      "Identifies who's ready to buy right now",
      'Runs quietly in the background - zero effort from you',
      "Turns your existing data into a revenue source you're currently ignoring"
    ]
  },
  {
    icon: assets.solutionsTrust,
    title: 'After-Sales Agent',
    tagline: 'Turn every happy customer into your best salesperson.',
    body: 'After you deliver great work, your After-Sales Agent follows up at exactly the right moment to collect Google reviews, gather testimonials, and ask for referrals. Automatically, tactfully, and consistently.',
    bullets: [
      'Requests Google and Trustpilot reviews when satisfaction is highest',
      'Collects written testimonials and case study quotes',
      'Asks for referrals with well-timed, tasteful messages',
      'Builds your online reputation while you focus on the next project'
    ]
  }
]

const Services = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.16 }}
      id='services'
      className='relative flex flex-col items-center gap-12 px-4 pt-20 text-gray-700 dark:text-white sm:px-12 lg:px-24 xl:px-40'
    >
      <img src={assets.bgImage2} alt="" className='absolute -left-70 -top-110 z-1 dark:hidden' />

      <div className="relative z-10 flex max-w-4xl flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          viewport={{ once: true }}
          className="max-w-4xl text-3xl font-medium tracking-tight text-gray-900 dark:text-white sm:text-5xl"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          AI agents that handle the admin work nobody wants to do.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-500 dark:text-white/72"
        >
          Each agent handles a different part of your customer journey - from getting found to getting referrals.
        </motion.p>
      </div>

      <div className="relative z-10 grid auto-rows-fr w-full max-w-6xl gap-5 md:grid-cols-2 lg:gap-6">
        {servicesData.map((service, index) => (
          <ServicesCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </motion.section>
  )
}

export default Services
