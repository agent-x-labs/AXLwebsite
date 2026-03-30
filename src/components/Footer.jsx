import React from "react";
import assets from "../assets/assets";
import { motion } from "framer-motion";

const Footer = ({ theme }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40"
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="space-y-5 text-sm text-gray-700 dark:text-gray-400"
      >
        <img
          src={assets.logo}
          alt="Agent X Labs"
          className={`w-32 sm:w-44 ${theme === "dark" ? "brightness-[2]" : ""}`}
        />
        <p className="max-w-md">
          Turn missed calls, dead leads, and silent customers into revenue - on autopilot.
        </p>
      </motion.div>
      <div className="my-6 h-px w-full bg-gray-300 dark:bg-gray-600" />

      {/* footer bottom */}
      <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4}}
      viewport={{once: true}}
      className="pb-6 text-sm text-gray-500 flex flex-col items-center justify-center gap-3 sm:flex-row sm:justify-between">
        <p>Copyright 2026 © Agent X Labs LTD - All Rights Reserved.</p>
        <div className="flex items-center gap-4">
          <a href="/privacy-policy/" className="transition-colors hover:text-primary">
            Privacy Policy
          </a>
          <a href="/terms-of-service/" className="transition-colors hover:text-primary">
            Terms of Service
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
