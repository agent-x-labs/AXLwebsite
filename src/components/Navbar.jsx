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
      <div className="hidden lg:block" />
      <img
        src={assets.logo}
        alt="Agent X Labs"
        className={`w-28 sm:w-32 md:w-36 lg:w-40 ${theme === "dark" ? "brightness-[2]" : ""}`}
      />
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
