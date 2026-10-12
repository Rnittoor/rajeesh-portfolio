"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import type { Project } from "@/data/projects";
import { clsx } from "@/lib/clsx";
import { EASE_OUT } from "@/lib/motion";

// Designed placeholder gradients per project, keyed to the blue palette.
const accentStyles: Record<
  Project["accent"],
  { from: string; to: string; label: string }
> = {
  ink: { from: "#0b1a2e", to: "#1c2f8a", label: "text-blue-100" },
  blue: { from: "#1f37b0", to: "#3f5fe6", label: "text-blue-100" },
  steel: { from: "#16255f", to: "#2846d6", label: "text-blue-100" },
  sky: { from: "#2846d6", to: "#6a86f7", label: "text-blue-50" },
};

export function WorkCard({
  project,
  reversed = false,
  homepageVisual = false,
  displayIndex,
  displayYear,
}: {
  project: Project;
  reversed?: boolean;
  homepageVisual?: boolean;
  displayIndex?: string;
  displayYear?: string;
}) {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const accent = accentStyles[project.accent];
  const isAirbusPreview = project.slug === "airbus-aircraft-management";

  const homepageMedia = (() => {
    if (!homepageVisual) return null;

    if (project.slug === "airbus-aircraft-management") {
      return (
        <div className="absolute inset-0 bg-[#0b1a2e] p-4 sm:p-6 md:p-8">
          <div className="relative h-full overflow-hidden rounded-xl bg-[#071630] shadow-[0_18px_50px_rgba(0,0,0,.22)]">
            <Image
              src="/projects/airbus/airbus-dashboard-overview.png"
              alt="Airbus aircraft-management dashboard showing aircraft status, projects and transition activity"
              fill
              sizes="(min-width: 768px) 58vw, 100vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.015]"
            />
          </div>
        </div>
      );
    }

    if (project.slug === "ikea-global-marketing-service-design") {
      const marketMaps = [
        ["Austria", "/projects/ikea-service/L2 Austria.jpg"],
        ["Canada", "/projects/ikea-service/L2 Canada.jpg"],
        ["Germany", "/projects/ikea-service/L2 Germany.jpg"],
        ["Sweden", "/projects/ikea-service/L2 Sweden.jpg"],
        ["US", "/projects/ikea-service/L2 US.jpg"],
      ];

      return (
        <div className="absolute inset-0 grid grid-cols-[1.45fr_.9fr] gap-3 bg-[#0b1a2e] p-4 sm:gap-4 sm:p-6 md:p-8">
          <div className="relative overflow-hidden rounded-xl bg-white shadow-[0_18px_50px_rgba(0,0,0,.22)]">
            <Image
              src={marketMaps[1][1]}
              alt="Level 2 service maps comparing IKEA Content Process Flow across five markets"
              fill
              sizes="(min-width: 768px) 38vw, 65vw"
              className="scale-[1.18] object-cover object-[48%_30%] transition-transform duration-700 ease-out group-hover:scale-[1.2]"
            />
            <span className="absolute bottom-3 left-3 rounded-full bg-ink/90 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[.08em] text-canvas sm:text-xs">
              Canada · Level 2
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            {marketMaps.filter(([market]) => market !== "Canada").map(([market, src]) => (
              <div key={market} className="relative overflow-hidden rounded-lg bg-white">
                <Image
                  src={src}
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="(min-width: 768px) 10vw, 18vw"
                  className="scale-[1.45] object-cover object-[48%_28%] transition-transform duration-700 ease-out group-hover:scale-[1.48]"
                />
                <span className="absolute bottom-1.5 left-1.5 rounded-full bg-ink/90 px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-[.06em] text-canvas sm:bottom-2 sm:left-2 sm:px-2 sm:text-[10px]">
                  {market}
                </span>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (project.slug === "ikea-data-visualisation-system") {
      return (
        <div className="absolute inset-0 bg-[#0b1a2e] p-4 sm:p-6 md:p-8">
          <div className="relative h-full overflow-hidden rounded-xl bg-[#f3f3f3] shadow-[0_18px_50px_rgba(0,0,0,.22)]">
            <Image
              src="/projects/ikea-data-visualisation/marketing-dashboard-redesign.png"
              alt="Redesigned IKEA Marketing Performance dashboard"
              fill
              sizes="(min-width: 768px) 58vw, 100vw"
              className="object-cover object-[42%_20%] transition-transform duration-700 ease-out group-hover:scale-[1.015]"
            />
          </div>
        </div>
      );
    }

    return null;
  })();

  const onEnter = () => {
    setHovered(true);
    if (project.video && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };
  const onLeave = () => {
    setHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.a
      href={`/work/${project.slug}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.8, ease: EASE_OUT }}
      className="group grid items-center gap-8 md:grid-cols-12 md:gap-14"
    >
      {/* Media */}
      <div
        className={clsx(
          "md:col-span-7",
          reversed && "md:order-2 md:col-start-6"
        )}
      >
        <div
          className={clsx(
            "relative overflow-hidden rounded-2xl",
            homepageVisual ? "aspect-[8/5]" : "aspect-[16/11]"
          )}
        >
          {homepageMedia ?? (
            <>
              <div
                className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${accent.from}, ${accent.to})`,
                }}
              />
              <div
                aria-hidden
                className="absolute inset-0 opacity-20 mix-blend-soft-light"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
                  backgroundSize: "22px 22px",
                }}
              />
            </>
          )}

          {!homepageVisual && isAirbusPreview && (
            <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-[38%] bg-gradient-to-r from-[#102638]/90 via-[#102638]/45 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-t from-[#102638]/80 to-transparent" />

              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1600 1000">
                <text x="82" y="112" fill="#79bde9" fontFamily="Arial, Helvetica, sans-serif" fontSize="60" fontWeight="700">03</text>
                <text x="82" y="918" fill="#f5f7f8" fontFamily="Arial, Helvetica, sans-serif" fontSize="25" fontWeight="700" letterSpacing="1.2">AIRBUS</text>
              </svg>
            </div>
          )}

          {/* Optional real media */}
          {!homepageVisual && project.video && (
            <video
              ref={videoRef}
              muted
              loop
              playsInline
              preload="none"
              poster={project.media}
              className={clsx(
                "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
                hovered ? "opacity-100" : "opacity-0"
              )}
            >
              <source src={project.video} type="video/mp4" />
            </video>
          )}

          {!homepageVisual && !project.media && (
            <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
              <span
                className={clsx(
                  "font-mono text-base tracking-widest",
                  accent.label
                )}
              >
                {project.client.toUpperCase()} · {project.year}
              </span>
              <span className="font-display text-[clamp(3rem,7vw,6rem)] leading-none text-white/85">
                {project.index}
              </span>
            </div>
          )}

          {homepageVisual && displayIndex && (
            <span className="pointer-events-none absolute left-6 top-6 rounded-full border border-white/20 bg-ink/80 px-3 py-1 font-mono text-xs tracking-[.12em] text-canvas backdrop-blur-sm md:left-8 md:top-8">
              {displayIndex}
            </span>
          )}

          {/* Hover CTA */}
          <div
            className={clsx(
              "absolute bottom-8 right-8 hidden items-center gap-2 rounded-full bg-canvas px-4 py-2 text-base text-ink transition-all duration-500 md:flex md:group-focus-visible:translate-y-0 md:group-focus-visible:opacity-100",
              hovered
                ? "translate-y-0 opacity-100"
                : "pointer-events-none translate-y-2 opacity-0"
            )}
          >
            View case study
            <span>→</span>
          </div>
        </div>
      </div>

      {/* Text */}
      <div className={clsx("md:col-span-5", reversed && "md:order-1")}>
        {homepageVisual && displayYear && (
          <p className="font-mono text-xs uppercase tracking-[.14em] text-muted">
            {project.client} · {displayYear}
          </p>
        )}
        <div
          className={clsx(
            "flex flex-wrap gap-2",
            homepageVisual && displayYear && "mt-4"
          )}
        >
          {(homepageVisual
            ? project.disciplines.slice(0, 3)
            : project.disciplines
          ).map((d) => (
            <span
              key={d}
              className="rounded-full border border-hairline px-3 py-1 text-base text-muted"
            >
              {d}
            </span>
          ))}
        </div>
        <h3 className="mt-5 font-display text-h2 text-ink [line-height:1.05] [letter-spacing:-0.02em] transition-colors duration-300 group-hover:text-accent">
          {project.title}
        </h3>
        <p className="mt-4 text-lg text-body">{project.hook}</p>
        {!homepageVisual && (
          <p className="mt-3 text-base text-muted">{project.shortSummary}</p>
        )}
        {homepageVisual && (
          <span className="mt-6 inline-flex items-center gap-2 text-base text-ink md:hidden">
            View case study <span aria-hidden="true">→</span>
          </span>
        )}
      </div>
    </motion.a>
  );
}
