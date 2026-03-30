import React from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id="contact-us"
      className="px-4 pt-30 text-gray-700 dark:text-white sm:px-12 lg:px-24 xl:px-40"
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.03] p-[1px] shadow-[0_26px_90px_rgba(0,0,0,0.28)]"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(142,45,226,0.18),_transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(0,191,143,0.1),_transparent_30%)]" />

        <div className="relative flex flex-col items-center rounded-[33px] bg-[#060606] px-6 py-12 text-center sm:px-10 sm:py-14 lg:px-16 lg:py-18">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            viewport={{ once: true }}
            className="max-w-4xl text-3xl font-medium tracking-tight text-white sm:text-5xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Every day without this is revenue walking out the door.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            viewport={{ once: true }}
            className="mt-5 max-w-3xl text-sm leading-7 text-white/72 sm:text-base"
          >
            Book a free 30-minute revenue check. We&apos;ll show you exactly where you&apos;re losing business and give you 3 specific recommendations - whether you hire us or not.
          </motion.p>

          <motion.button
            type="button"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.26 }}
            viewport={{ once: true }}
            className="mt-8 whitespace-nowrap rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-white transition-transform hover:scale-105 sm:px-8"
          >
            Free Strategy Call
          </motion.button>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.34 }}
            viewport={{ once: true }}
            className="mt-4 max-w-2xl text-sm leading-6 text-white/54"
          >
            30 minutes. No commitment. You&apos;ll leave with a clear picture of where your leads are going.
          </motion.p>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ContactUs;
