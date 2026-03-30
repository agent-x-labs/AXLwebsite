import React from 'react'
import { company_logos } from '../assets/assets'
import { motion } from "framer-motion";

const LogoItems = ({ ariaHidden = false }) => (
  <>
    {company_logos.map((logo, index) => (
      <div
        key={`${logo.alt}-${ariaHidden ? 'duplicate' : 'primary'}-${index}`}
        className="flex h-20 shrink-0 items-center justify-center px-4"
        aria-hidden={ariaHidden}
      >
        <img
          src={logo.src}
          alt={ariaHidden ? "" : logo.alt}
          className={`${logo.className} h-auto object-contain dark:drop-shadow-xl`}
        />
      </div>
    ))}
  </>
)

const TrustedBy = ({ className = '' }) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6}}
    viewport={{once: true}} 

    className={`flex w-full flex-col items-center gap-6 text-gray-700 dark:text-white/80 ${className}`}>
      <motion.h3 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5}}
      viewport={{once: true}}
      className='font-semibold'>Our team has worked with</motion.h3>

      <div className="hidden w-full overflow-x-auto lg:block">
        <motion.div 
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.1}}
        viewport={{once: true}}
        className="flex min-w-max items-center justify-center gap-5 px-4">
          {company_logos.map((logo, index)=>(
            <motion.div
              key={index}
              variants={{
                hidden: {opacity: 0, y: 10},
                visible: {opacity: 1, y: 0},
              }} 
              transition={{duration: 0.4}}
              className="flex h-20 items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={`${logo.className} h-auto object-contain dark:drop-shadow-xl`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="relative w-full overflow-hidden lg:hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white to-transparent dark:from-black" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white to-transparent dark:from-black" />

        <div className="trusted-logo-marquee flex min-w-max items-center">
          <LogoItems />
          <LogoItems ariaHidden />
        </div>
      </div>
    </motion.div>
  )
}

export default TrustedBy
