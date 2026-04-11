import React from 'react'
import { motion } from "framer-motion";
import assets from '../assets/assets'
import ServicesCard from './ServicesCard'
import { servicePages } from '../content/servicePages'

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
      <img
        src={assets.bgImage2}
        alt=""
        width="1920"
        height="1415"
        loading="lazy"
        decoding="async"
        className='absolute -left-70 -top-110 z-1 dark:hidden'
      />

      <div className="relative z-10 flex max-w-4xl flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          viewport={{ once: true }}
          className="max-w-4xl text-3xl font-medium tracking-tight text-gray-900 dark:text-white sm:text-5xl"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          AI agents for UK service businesses that protect demand and reduce admin.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-500 dark:text-white/72"
        >
          Each agent supports a specific stage of the customer journey - from getting found to answering enquiries, following up leads, and earning reviews.
        </motion.p>
      </div>

      <div className="relative z-10 grid auto-rows-fr w-full max-w-6xl gap-5 md:grid-cols-2 lg:gap-6">
        {servicePages.map((service, index) => (
          <ServicesCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </motion.section>
  )
}

export default Services
