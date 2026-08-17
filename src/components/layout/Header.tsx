"use client";

import { useEffect, useState } from "react";
import { clsx } from "@/lib/clsx";
import { site } from "@/data/site";
import { LocalTime } from "@/components/ui/LocalTime";

/** Nav link with an underline that draws in on hover. */
function NavLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="group relative inline-flex text-base text-ink"
    >
      <span className="relative">
        {label}
        <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:origin-left group-hover:scale-x-100" />
      </span>
    </a>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5 md:pt-5">
      <div
        className={clsx(
          "mx-auto flex items-center justify-between rounded-full transition-all duration-500",
          scrolled
            ? "max-w-5xl border border-hairline bg-canvas/80 px-5 py-2.5 shadow-[0_8px_40px_-12px_rgba(11,26,46,0.18)] backdrop-blur-xl md:px-6"
            : "max-w-[1440px] border border-transparent px-2 py-2"
        )}
      >
        {/* Wordmark + practice tag */}
        <a href="#top" className="flex items-center gap-3">
          <span className="font-display text-xl font-medium tracking-tight text-ink">
            {site.name}
            <span className="text-accent">.</span>
          </span>
          <span
            className={clsx(
              "hidden h-4 w-px bg-hairline transition-opacity md:block",
              scrolled ? "opacity-0" : "opacity-100"
            )}
          />
          <span
            className={clsx(
              "hidden text-label text-muted transition-opacity md:inline",
              scrolled ? "opacity-0" : "opacity-100"
            )}
          >
            Design practice
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>

        {/* Right cluster: live time + CTA */}
        <div className="hidden items-center gap-5 md:flex">
          <LocalTime className="font-mono text-label tracking-wide text-ink" />
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-ink px-4 py-2 text-base text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Let&rsquo;s talk
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center md:hidden"
        >
          <span className="relative block h-3 w-6">
            <span
              className={clsx(
                "absolute left-0 h-0.5 w-6 bg-ink transition-all duration-300",
                open ? "top-1.5 rotate-45" : "top-0"
              )}
            />
            <span
              className={clsx(
                "absolute left-0 h-0.5 w-6 bg-ink transition-all duration-300",
                open ? "top-1.5 -rotate-45" : "top-3"
              )}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={clsx(
          "mx-auto mt-2 overflow-hidden rounded-3xl border-hairline bg-canvas/95 backdrop-blur-xl md:hidden",
          open ? "max-h-96 border p-2 shadow-lg" : "max-h-0"
        )}
        style={{ transition: "max-height 400ms var(--ease-out-soft)" }}
      >
        <nav className="flex flex-col p-2">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-3 rounded-2xl px-4 py-3 text-lg text-ink transition-colors hover:bg-tint"
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center justify-between px-4 py-3">
            <LocalTime className="font-mono text-label text-ink" />
            <a href="#contact" onClick={() => setOpen(false)} className="text-accent">
              Let&rsquo;s talk →
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
