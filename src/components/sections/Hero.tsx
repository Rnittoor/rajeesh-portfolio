"use client";

import { motion } from "motion/react";
import { site } from "@/data/site";
import { AvailabilityPill } from "@/components/ui/AvailabilityPill";
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
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28"
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
        <motion.div initial="hidden" animate="visible" variants={container}>
          <motion.div variants={fade} className="mb-8 flex items-center gap-4">
            <AvailabilityPill />
            <span className="hidden text-base text-muted sm:inline">
              {site.role} · {site.location}
            </span>
          </motion.div>

          <h1 className="font-display text-ink [font-size:var(--text-display)] [line-height:var(--text-display--line-height)] [letter-spacing:var(--text-display--letter-spacing)]">
            <span className="block overflow-hidden">
              <motion.span variants={line} className="block">
                {site.hero.lead}
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span variants={line} className="block italic text-accent">
                {site.hero.leadAccent}
              </motion.span>
            </span>
          </h1>

          <motion.p
            variants={fade}
            className="mt-8 max-w-xl text-lead text-body [line-height:var(--text-lead--line-height)]"
          >
            {site.hero.sub}
          </motion.p>

          <motion.div
            variants={fade}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-canvas transition-colors hover:bg-accent-hover"
            >
              See selected work
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-hairline px-6 py-3 text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Start a project
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="container-content mt-20 hidden md:block"
      >
        <div className="flex items-center gap-3 text-base text-muted">
          <span className="eyebrow">Scroll</span>
          <span className="h-px w-16 bg-hairline" />
        </div>
      </motion.div>
    </section>
  );
}
