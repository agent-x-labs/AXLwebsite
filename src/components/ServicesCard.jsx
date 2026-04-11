import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const ServicesCard = ({ service, index }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)
  const divRef = useRef(null)

  const handelMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top })
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.14 }}
      viewport={{ once: true }}
      id={service.slug}
      className="relative h-full overflow-hidden rounded-[30px] border border-gray-200/80 bg-white/[0.95] shadow-[0_22px_80px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-[#080808] dark:shadow-[0_28px_80px_rgba(0,0,0,0.36)]"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={handelMouseMove}
      ref={divRef}
    >
      <div
        className={`pointer-events-none absolute z-0 h-[320px] w-[320px] rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-primary blur-3xl transition-opacity duration-500 ${visible ? 'opacity-[0.25] dark:opacity-[0.35]' : 'opacity-0'}`}
        style={{ top: position.y - 160, left: position.x - 160 }}
      />

      <div className="relative z-10 flex h-full flex-col gap-6 rounded-[29px] border border-white/5 bg-white/[0.92] p-7 dark:bg-[#080808] sm:p-8">
        <div className="flex items-center gap-4">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-gray-200 bg-gray-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none">
            <img
              src={service.icon}
              alt=""
              width="72"
              height="72"
              loading="lazy"
              decoding="async"
              className="size-9 object-contain"
              aria-hidden="true"
            />
          </div>
          <div>
            <h3
              className="text-xl font-medium tracking-tight text-gray-900 dark:text-white sm:text-2xl"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {service.title}
            </h3>
          </div>
        </div>

        <p
          className="max-w-[28ch] text-xl font-medium leading-tight text-gray-900 dark:text-white"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {service.tagline}
        </p>

        <p className="text-sm leading-7 text-gray-600 dark:text-white/70">
          {service.body}
        </p>

        <ul className="mt-auto space-y-3 pt-1">
          {service.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3 text-sm leading-6 text-gray-700 dark:text-white/82">
              <span className="mt-2 block size-1.5 shrink-0 rounded-full bg-primary" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="pt-2">
          <a
            href={service.path}
            className="inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            Learn more about {service.title.toLowerCase()} →
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default ServicesCard;
