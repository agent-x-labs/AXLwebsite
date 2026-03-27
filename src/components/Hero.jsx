import React from 'react'
import assets from '../assets/assets'
import { motion } from "framer-motion";
import logoMorganStanley from '../assets/logo_morgan_stanley.svg'
import logoMcKinsey from '../assets/logo_mckinsey.svg'
import logoJPMorgan from '../assets/logo_jp_morgan.svg'
import logoCambridge from '../assets/logo_cambridge.svg'
import logoBankOfGeorgia from '../assets/logo_bank_of_georgia.png'

const Hero = () => {
  return (
    <div id='hero' className='flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white'>
      <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay:0.7 }}
      viewport={{once: true}}
      
      className="hidden inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full">
        <img className='w-20' src={assets.group_profile} alt="" />
        <p className='text-xs font-medium'>Trusted by 10k+ people</p>
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

      className='text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3'>Bespoke AI agents that create & manage content, leads, calls, follow-ups, and reviews - so you focus on the work that moves the needle, not the busywork.</motion.p>

      <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.2 }}
      viewport={{once: true}}
      className="flex flex-col sm:flex-row items-center gap-4">
        <a href="#contact-us" className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:scale-105 transition-transform">
          Book a Free Strategy Call
        </a>
        <a href="#services" className="border border-gray-500 dark:border-white/30 text-gray-700 dark:text-white px-8 py-3 rounded-full font-medium hover:scale-105 transition-transform">
          See how it works ↓
        </a>
      </motion.div>

      <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.4 }}
      viewport={{once: true}}
      className="mt-10 flex flex-col items-center gap-4">
        <p className="text-sm text-gray-500 dark:text-white/50 font-medium">Our team have delivered at:</p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <img src={logoMorganStanley} alt="Morgan Stanley" className="h-8 brightness-0 invert opacity-70" />
          <img src={logoMcKinsey} alt="McKinsey & Company" className="h-8 brightness-0 invert opacity-70" />
          <img src={logoJPMorgan} alt="JP Morgan" className="h-8 brightness-0 invert opacity-70" />
          <img src={logoCambridge} alt="University of Cambridge" className="h-8 brightness-0 invert opacity-70" />
          <img src={logoBankOfGeorgia} alt="Bank of Georgia" className="h-8 brightness-0 invert opacity-70" />
        </div>
      </motion.div>

      <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 2 }}
      viewport={{once: true}}

      className="relative">
        <img src={assets.hero_img} alt="" className='w-full max-w-6xl relative z-10'/>
        <img src={assets.bgImage1} alt="" className='absolute -top-40 -right-40 sm:-top-100 sm:-right-70 z-1 dark:hidden' />
      </motion.div>
    </div>
  )
}

export default Hero
