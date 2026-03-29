import React, { useState } from "react";
import { motion } from "framer-motion";
import Title from "./Title";

const stepsData = [
  {
    step: "Step 1",
    title: "Free strategy call (30 mins)",
    description:
      "We check your Google response time, review coverage, content presence, and missed-call rate. You leave with specific numbers and 3 actionable recommendations for your business - whether you decide to hire us or not.",
  },
  {
    step: "Step 2",
    title: "We build your bespoke agent (5 days)",
    description:
      "Based on the biggest opportunities for your business, we configure and deploy your first AI agent. It works with your existing technology infrastructure, email, and calendar. Nothing changes for your customers.",
  },
  {
    step: "Step 3",
    title: "Results in week one",
    description:
      "Your agent goes live and delivers immediately. You see tangible results based on the scope of the agent, whether that's content, leads captured, follow up complete and converted. All leading to real impact on your bottom line.",
  },
];

const progressScales = [0, 0.5, 1];

const OurWork = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.18 }}
      id="our-work"
      className="flex flex-col items-center gap-8 px-4 pt-30 text-gray-700 dark:text-white sm:px-12 lg:px-24 xl:px-40"
    >
      <Title
        title="How it works"
        desc="Up and running in 5 days. Not 5 months. No technical knowledge required."
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true }}
        className="relative w-full max-w-6xl overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.24)] sm:p-4"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(142,45,226,0.12),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(142,45,226,0.08),_transparent_34%)]" />

        <div className="relative rounded-[28px] border border-white/8 bg-[#070707]/95 p-5 sm:p-6 lg:p-8">
          <div className="relative">
            <div className="pointer-events-none absolute left-[16.666%] right-[16.666%] top-6 hidden md:block">
              <div className="relative h-px bg-white/10">
                <motion.div
                  className="absolute inset-y-0 left-0 w-full origin-left bg-primary"
                  animate={{ scaleX: progressScales[activeIndex] }}
                  transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-5">
              {stepsData.map((item, index) => {
                const isActive = index === activeIndex;
                const isComplete = index < activeIndex;

                return (
                  <button
                    key={item.step}
                    type="button"
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                    className="group relative flex flex-col items-center gap-3 rounded-[22px] px-2 pb-3 pt-1 text-center outline-none transition-colors sm:px-3"
                    aria-pressed={isActive}
                  >
                    <div className="relative z-10 rounded-full bg-[#070707] p-1">
                      <motion.div
                        animate={{
                          scale: isActive ? 1.04 : 1,
                        }}
                        transition={{ duration: 0.22, ease: [0.32, 0.72, 0, 1] }}
                        className={`flex size-12 items-center justify-center rounded-full border text-sm font-semibold tracking-[0.08em] transition-all duration-300 ${
                          isActive
                            ? "border-primary bg-primary text-white shadow-[0_0_0_6px_rgba(142,45,226,0.14)]"
                            : isComplete
                              ? "border-primary/40 bg-primary/[0.12] text-primary"
                              : "border-white/12 bg-white/[0.04] text-white/52"
                        }`}
                      >
                        {index + 1}
                      </motion.div>
                    </div>

                    <div className="space-y-1">
                      <p
                        className={`text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors ${
                          isActive || isComplete ? "text-primary/90" : "text-white/35"
                        }`}
                      >
                        {item.step}
                      </p>
                      <p
                        className={`mx-auto max-w-[14ch] text-sm font-medium leading-snug transition-colors sm:text-base ${
                          isActive ? "text-white" : "text-white/72 group-hover:text-white/88"
                        }`}
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {item.title}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-2 p-3 sm:mt-3 sm:p-4">
            <div className="grid gap-3 md:grid-cols-3">
              {stepsData.map((item, index) => {
                const isActive = index === activeIndex;

                return (
                  <motion.button
                    key={item.step}
                    type="button"
                    layout
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                    className={`h-full rounded-[22px] border p-5 text-left outline-none transition-all duration-300 sm:p-6 ${
                      isActive
                        ? "border-primary/55 bg-primary/[0.08] shadow-[0_0_0_1px_rgba(142,45,226,0.22),0_18px_40px_rgba(142,45,226,0.12)]"
                        : "border-white/10 bg-white/[0.02] hover:border-white/18 hover:bg-white/[0.03]"
                    }`}
                    aria-pressed={isActive}
                  >
                    <p className="text-sm leading-7 text-white/68">
                      {item.description}
                    </p>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default OurWork;
