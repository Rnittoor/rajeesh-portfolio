"use client";

import { motion, useReducedMotion } from "motion/react";
import { site } from "@/data/site";
import { EASE_OUT } from "@/lib/motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const line = {
  hidden: { opacity: 0, y: "0.6em" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE_OUT },
  },
};

const fade = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE_OUT },
  },
};

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-16 md:pt-44 md:pb-20"
    >
      {/* Soft blue field, top-right — quiet personality, not decoration overload */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-blue-100/50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-10rem] top-1/2 h-72 w-72 rounded-full bg-tint-2 blur-3xl"
      />

      <div className="container-content relative">
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          animate="visible"
          variants={container}
        >
          <h1 className="max-w-[75rem] font-display text-ink [font-size:clamp(3rem,5.3vw,6.5rem)] [line-height:var(--text-display--line-height)] [letter-spacing:var(--text-display--letter-spacing)]">
            <span className="block overflow-hidden">
              <motion.span variants={line} className="block">
                {site.hero.headline}
              </motion.span>
            </span>
          </h1>

          <motion.ul
            variants={fade}
            className="mt-10 flex max-w-5xl flex-wrap gap-3"
          >
            {site.hero.pills.map((pill) => (
              <li
                key={pill}
                className="rounded-full border border-hairline bg-canvas/75 px-4 py-2 text-base text-ink backdrop-blur"
              >
                {pill}
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
