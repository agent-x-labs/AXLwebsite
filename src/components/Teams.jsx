import React from "react";
import Title from "./Title";
import assets from "../assets/assets";
import { motion } from "framer-motion";

const founderLetterParagraphs = [
  "We spent years helping the biggest companies in the world get ahead - and it started to bother us.",
  "Between us, we've sat inside McKinsey boardrooms and Morgan Stanley deal rooms, helping FTSE 100 giants and Fortune 500 companies transform their strategy and operations through AI and technology. And the uncomfortable truth we kept coming back to? The businesses that needed this the most could never afford to walk through those doors.",
  "Small and medium businesses are the backbone of the UK economy - responsible for nearly 60% of the workforce - yet they're buried under admin and manual processes that the corporates automated years ago. Every ambitious owner, operator, and director deserves access to the same tools, not just those writing six-figure consulting cheques.",
  "So we left. We founded AXL to bring that same calibre of AI, automation, and workflow intelligence directly to the service businesses, professional firms, and tradespeople actually powering this country. Our job is simple: take the busywork off your plate so you can get back to what you're actually brilliant at - running and growing your business.",
];

const FoundersLetter = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.1 }}
      viewport={{ once: true }}
      className="relative h-full"
    >
      <div className="pointer-events-none absolute inset-5 -z-10 rounded-[34px] bg-primary/18 blur-3xl" />

      <motion.article
        className="relative h-full overflow-hidden rounded-[32px] border border-white/10 bg-[#0f0d14] p-6 text-white shadow-[0_28px_70px_rgba(8,8,12,0.34)] transition-colors duration-300 hover:border-primary/28 sm:p-7 lg:p-8"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(142,45,226,0.18),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.06),_transparent_24%),linear-gradient(180deg,_rgba(255,255,255,0.06),_rgba(255,255,255,0.02)_18%,_rgba(255,255,255,0)_44%),linear-gradient(180deg,_#15111c_0%,_#0b0910_100%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_bottom,transparent_0%,transparent_calc(100%_-_1px),rgba(255,255,255,0.08)_100%)]" />

        <div className="relative flex h-full flex-col">
          <div className="mb-7 flex items-center gap-4 sm:mb-8">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.34em] text-primary/78">
              Founders note
            </span>
          </div>

          <div className="space-y-5 sm:space-y-6">
            {founderLetterParagraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-sm leading-7 text-white/72"
              >
                {paragraph}
              </p>
            ))}

            <p className="pt-2 text-base font-semibold tracking-tight text-white sm:text-[17px]">
              Tengo &amp; Alex
            </p>
          </div>

          <div className="mt-8 border-t border-white/10 pt-5 sm:mt-10 sm:pt-6">
            <div className="flex items-end justify-between gap-6">
              <img
                src={assets.foundersTengoSignature}
                alt="Tengo signature"
                className="h-10 w-auto max-w-[42%] object-contain invert opacity-80 brightness-110 sm:h-11"
              />
              <img
                src={assets.foundersAlexSignature}
                alt="Alex signature"
                className="h-10 w-auto max-w-[42%] object-contain invert opacity-80 brightness-110 sm:h-11"
              />
            </div>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
};

const Teams = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id="team"
      className="px-4 pt-30 text-gray-800 dark:text-white sm:px-12 lg:px-24 xl:px-40"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10">
        <Title
          title="Meet the team"
          desc="Why we left boardrooms to bring better systems to the businesses actually powering this country."
        />

        <div className="grid w-full gap-5 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-stretch xl:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="relative flex min-h-[380px] items-end justify-start sm:min-h-[500px] lg:min-h-[560px]"
          >
            <motion.img
              src={assets.foundersAleksTengo}
              alt="AXL founders Tengo and Alex"
              width="934"
              height="1291"
              loading="lazy"
              decoding="async"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              viewport={{ once: true }}
              className="relative z-10 mt-2 ml-[-1rem] h-[390px] w-auto max-w-none object-contain sm:ml-[-1.75rem] sm:h-[520px] lg:ml-[-3.5rem] lg:h-[620px] xl:ml-[-4rem] xl:h-[660px]"
            />
          </motion.div>

          <FoundersLetter />
        </div>
      </div>
    </motion.section>
  );
};

export default Teams;
