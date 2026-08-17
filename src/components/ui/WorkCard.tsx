"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
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
}: {
  project: Project;
  reversed?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const accent = accentStyles[project.accent];

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
      initial={{ opacity: 0, y: 40 }}
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
        <div className="relative aspect-[16/11] overflow-hidden rounded-2xl">
          {/* Placeholder gradient (until real media/video is added) */}
          <div
            className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            style={{
              backgroundImage: `linear-gradient(135deg, ${accent.from}, ${accent.to})`,
            }}
          />
          {/* Subtle dot grid texture */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-20 mix-blend-soft-light"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />

          {/* Optional real media */}
          {project.video && (
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

          {/* Index + client */}
          <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
            <span
              className={clsx(
                "font-mono text-sm tracking-widest",
                accent.label
              )}
            >
              {project.client.toUpperCase()} · {project.year}
            </span>
            <span className="font-display text-[clamp(3rem,7vw,6rem)] leading-none text-white/85">
              {project.index}
            </span>
          </div>

          {/* Hover CTA */}
          <div
            className={clsx(
              "absolute bottom-6 right-6 flex items-center gap-2 rounded-full bg-canvas px-4 py-2 text-sm text-ink transition-all duration-500 md:bottom-8 md:right-8",
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
        <div className="flex flex-wrap gap-2">
          {project.disciplines.map((d) => (
            <span
              key={d}
              className="rounded-full border border-hairline px-3 py-1 text-sm text-muted"
            >
              {d}
            </span>
          ))}
        </div>
        <h3 className="mt-5 font-display text-h2 text-ink [line-height:1.05] [letter-spacing:-0.02em] transition-colors duration-300 group-hover:text-accent">
          {project.title}
        </h3>
        <p className="mt-4 text-lg text-body">{project.hook}</p>
        <p className="mt-3 text-base text-muted">{project.summary}</p>
      </div>
    </motion.a>
  );
}
