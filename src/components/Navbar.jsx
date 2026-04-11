import React from "react";
import assets from "../assets/assets";
import { motion } from "framer-motion";
import { STRATEGY_CALL_URL } from "../lib/links";

const Navbar = ({ theme }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-20 flex items-center justify-between gap-3 px-4 py-4 backdrop-blur-xl bg-white/50 sm:px-6 md:px-12 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-4 lg:px-24 xl:px-40 dark:bg-gray-900/70"
    >
      <nav className="hidden items-center gap-5 text-sm text-gray-600 dark:text-white/70 lg:flex">
        <a href="/#services" className="transition-colors hover:text-primary">Services</a>
        <a href="/#our-work" className="transition-colors hover:text-primary">How it works</a>
        <a href="/#team" className="transition-colors hover:text-primary">Team</a>
      </nav>
      <a href="/" aria-label="Agent X Labs home">
        <img
          src={assets.logo}
          alt="Agent X Labs"
          width="632"
          height="111"
          loading="eager"
          decoding="async"
          className={`w-28 sm:w-32 md:w-36 lg:w-40 ${theme === "dark" ? "brightness-[2]" : ""}`}
        />
      </a>
      <div className="flex justify-end lg:justify-self-end">
        <a
          href={STRATEGY_CALL_URL}
          className="inline-flex shrink-0 items-center whitespace-nowrap rounded-full bg-primary px-4 py-2.5 text-[13px] font-medium text-white transition-transform hover:scale-105 sm:px-5 sm:py-3 sm:text-sm md:px-5 md:text-sm"
        >
          Free Strategy Call
        </a>
      </div>
    </motion.div>
  );
};

export default Navbar;
