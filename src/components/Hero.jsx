import React from 'react'
import { motion } from "framer-motion";
import { WaveOne } from "./ui/wave-1";
import TrustedBy from "./TrustedBy";
import { STRATEGY_CALL_URL } from '../lib/links'
import { servicePages } from '../content/servicePages'

const Hero = () => {
  return (
    <div id='hero' className='relative isolate flex min-h-[calc(100svh-5rem)] flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white'>
      <WaveOne />
      <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay:0.7 }}
      viewport={{once: true}}
      
      className="inline-flex items-center rounded-full border border-gray-300/80 px-4 py-2 text-center dark:border-white/15">
        <p className='text-xs font-medium sm:text-sm'>AI automation for UK service businesses</p>
      </motion.div>

      <motion.h1
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay:0.8 }}
      viewport={{once: true}}

      className='text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-medium xl:leading-[75px] max-w-5xl' style={{ fontFamily: "'Space Grotesk', sans-serif" }}>AI agents for UK service businesses that answer calls, follow up leads, win reviews, and keep your pipeline moving.</motion.h1>

      <motion.p 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay:1 }}
      viewport={{once: true}}

      className='text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-3xl pb-3'>Agent X Labs builds AI agents for reception, lead follow-up, review generation, and content marketing so your team can focus on billable work instead of repetitive admin.</motion.p>

      <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.2 }}
      viewport={{once: true}}
      className="flex flex-row flex-nowrap items-center justify-center gap-3 sm:gap-4">
        <a href={STRATEGY_CALL_URL} className="whitespace-nowrap bg-primary text-white px-4 py-3 text-sm rounded-full font-medium hover:scale-105 transition-transform sm:px-8 sm:text-base">
          Free Strategy Call
        </a>
        <a href="#services" className="whitespace-nowrap border border-gray-500 dark:border-white/30 text-gray-700 dark:text-white px-4 py-3 text-sm rounded-full font-medium hover:scale-105 transition-transform sm:px-8 sm:text-base">
          See how it works ↓
        </a>
      </motion.div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        {servicePages.map((service) => (
          <a
            key={service.slug}
            href={`#${service.slug}`}
            className="rounded-full border border-gray-300/80 px-3 py-1.5 text-xs font-medium text-gray-600 transition-colors hover:border-primary hover:text-primary dark:border-white/12 dark:text-white/68 dark:hover:border-primary dark:hover:text-white"
          >
            {service.title}
          </a>
        ))}
      </div>

      <TrustedBy className="mt-2.5" />

    </div>
  )
}

export default Hero
