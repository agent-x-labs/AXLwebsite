import React from "react";
import assets from "../assets/assets";
import { motion } from "framer-motion";

const Navbar = ({ theme }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-20 grid grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 py-4 backdrop-blur-xl bg-white/50 sm:px-12 lg:px-24 xl:px-40 dark:bg-gray-900/70"
    >
      <div />
      <img
        src={assets.logo}
        alt="Agent X Labs"
        className={`w-32 sm:w-40 ${theme === "dark" ? "brightness-[2]" : ""}`}
      />
      <div className="flex justify-end">
        <a
          href="#contact-us"
          className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-xs font-medium text-white transition-transform hover:scale-105 sm:px-6 sm:text-sm"
        >
          Free Strategy Call
        </a>
      </div>
    </motion.div>
  );
};

export default Navbar;
