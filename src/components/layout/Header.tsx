"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { clsx } from "@/lib/clsx";
import { site } from "@/data/site";

/** Nav link with an underline that draws in on hover. */
function NavLink({
  href,
  label,
  newTab = false,
  onClick,
}: {
  href: string;
  label: string;
  newTab?: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      onClick={onClick}
      className="group relative inline-flex text-base text-ink"
    >
      <span className="relative">
        {label}
        <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:origin-left group-hover:scale-x-100" />
      </span>
    </Link>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-4">
      <div
        className={clsx(
          "mx-auto flex items-center justify-between rounded-full transition-all duration-500",
          scrolled
            ? "min-h-12 max-w-4xl border border-hairline bg-canvas/80 px-3 py-1 shadow-[0_6px_30px_-14px_rgba(11,26,46,0.12)] backdrop-blur-xl md:px-4"
            : "min-h-[52px] max-w-6xl border border-transparent px-2 py-1.5 md:min-h-14 md:px-3"
        )}
      >
        {/* Wordmark */}
        <Link href="/" className="flex items-center">
          <span className="font-display text-xl font-medium tracking-tight text-ink">
            {site.founder}
            <span className="text-accent">.</span>
          </span>
        </Link>

        {/* Desktop actions */}
        <div className="hidden items-center gap-7 md:flex">
          <nav className="flex items-center gap-7">
            {site.nav.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                newTab={item.newTab}
              />
            ))}
          </nav>
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-ink px-4 py-1 text-base text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Let&rsquo;s talk <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          ref={menuButtonRef}
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
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
        id="mobile-navigation"
        aria-hidden={!open}
        inert={!open}
        className={clsx(
          "mx-auto mt-2 overflow-hidden rounded-3xl border-hairline bg-canvas/95 backdrop-blur-xl md:hidden",
          open ? "max-h-96 border p-2 shadow-lg" : "max-h-0"
        )}
        style={{ transition: "max-height 400ms var(--ease-out-soft)" }}
      >
        <nav className="flex flex-col p-2">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target={item.newTab ? "_blank" : undefined}
              rel={item.newTab ? "noopener noreferrer" : undefined}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-3 rounded-2xl px-4 py-3 text-lg text-ink transition-colors hover:bg-tint"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/#contact" onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-lg text-accent transition-colors hover:bg-tint">
            Let&rsquo;s talk →
          </Link>
        </nav>
      </div>
    </header>
  );
}
