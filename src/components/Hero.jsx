import React from 'react'
import { motion } from "framer-motion";
import { WaveOne } from "./ui/wave-1";
import TrustedBy from "./TrustedBy";
import { STRATEGY_CALL_URL } from '../lib/links'

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
        <p className='text-xs font-medium sm:text-sm'>For service businesses and tradespeople</p>
      </motion.div>

      <motion.h1
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay:0.8 }}
      viewport={{once: true}}

      className='text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-medium xl:leading-[75px] max-w-5xl' style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Turn missed calls, dead leads, and silent customers into revenue - on <span className='bg-gradient-to-r from-[#00BF8F] to-[#8E2DE2] bg-clip-text text-transparent'>autopilot.</span></motion.h1>

      <motion.p 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay:1 }}
      viewport={{once: true}}

      className='text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3'>Bespoke AI agents that create &amp; manage content, leads, calls, follow-ups, and reviews - so you focus on the work that moves the needle, not the admin.</motion.p>

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

      <TrustedBy className="mt-2.5" />

    </div>
  )
}

export default Hero
