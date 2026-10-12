"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import { useCallback, useEffect, useRef, useState } from "react";

type Point = { x: number; y: number };

type MapViewerProps = {
  src: string;
  alt: string;
  caption?: string;
  wide?: boolean;
};

const MIN_SCALE = 1;
const MAX_SCALE = 6;

function clamp(value: number, maximum: number) {
  return Math.min(maximum, Math.max(MIN_SCALE, value));
}

function Icon({ name }: { name: "plus" | "minus" | "reset" | "close" }) {
  const paths = {
    plus: <path d="M12 5v14M5 12h14" />,
    minus: <path d="M5 12h14" />,
    reset: <><path d="M4.9 8A8 8 0 1 1 4 12" /><path d="M4 4v4h4" /></>,
    close: <path d="m6 6 12 12M18 6 6 18" />,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-none stroke-current stroke-[1.7]">{paths[name]}</svg>;
}

export function MapViewer({ src, alt, caption, wide = true }: MapViewerProps) {
  const [open, setOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [maximumScale, setMaximumScale] = useState(MAX_SCALE);
  const [offset, setOffset] = useState<Point>({ x: 0, y: 0 });
  const dialogRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const fullResolutionImageRef = useRef<HTMLImageElement>(null);
  const openerRef = useRef<HTMLButtonElement>(null);
  const pointers = useRef(new Map<number, Point>());
  const pinchOrigin = useRef<{ distance: number; scale: number } | null>(null);

  const reset = () => {
    setScale(1);
    setOffset({ x: 0, y: 0 });
  };

  const changeScale = (next: number) => {
    const value = clamp(next, maximumScale);
    setScale(value);
    if (value === 1) setOffset({ x: 0, y: 0 });
  };

  const updateMaximumScale = useCallback(() => {
    const image = fullResolutionImageRef.current;
    const viewport = viewportRef.current;
    if (!image?.naturalWidth || !image.naturalHeight || !viewport) return;

    const fitScale = Math.min(
      viewport.clientWidth / image.naturalWidth,
      viewport.clientHeight / image.naturalHeight,
    );
    const sourceDetailScale = Math.min(
      MAX_SCALE,
      Math.max(MIN_SCALE, 1 / fitScale),
    );

    setMaximumScale(sourceDetailScale);
    setScale((value) => clamp(value, sourceDetailScale));
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const activePointers = pointers.current;
    const opener = openerRef.current;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      activePointers.clear();
      reset();
      opener?.focus();
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    window.addEventListener("resize", updateMaximumScale);
    return () => window.removeEventListener("resize", updateMaximumScale);
  }, [open, updateMaximumScale]);

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Tab" && dialogRef.current) {
      const controls = [...dialogRef.current.querySelectorAll<HTMLButtonElement>("button:not(:disabled)")];
      const first = controls[0];
      const last = controls.at(-1);
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    }
    if (event.key === "Escape") setOpen(false);
    if (event.key === "+" || event.key === "=") changeScale(scale + 0.25);
    if (event.key === "-") changeScale(scale - 0.25);
    if (event.key === "0") reset();
    const step = 36;
    if (event.key === "ArrowLeft") setOffset((value) => ({ ...value, x: value.x + step }));
    if (event.key === "ArrowRight") setOffset((value) => ({ ...value, x: value.x - step }));
    if (event.key === "ArrowUp") setOffset((value) => ({ ...value, y: value.y + step }));
    if (event.key === "ArrowDown") setOffset((value) => ({ ...value, y: value.y - step }));
  };

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()];
      pinchOrigin.current = { distance: Math.hypot(a.x - b.x, a.y - b.y), scale };
    }
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!pointers.current.has(event.pointerId)) return;
    const previous = pointers.current.get(event.pointerId)!;
    pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (pointers.current.size === 2 && pinchOrigin.current) {
      const [a, b] = [...pointers.current.values()];
      const distance = Math.hypot(a.x - b.x, a.y - b.y);
      changeScale(pinchOrigin.current.scale * (distance / pinchOrigin.current.distance));
    } else if (scale > 1) {
      setOffset((value) => ({ x: value.x + event.clientX - previous.x, y: value.y + event.clientY - previous.y }));
    }
  };

  const onPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    pointers.current.delete(event.pointerId);
    if (pointers.current.size < 2) pinchOrigin.current = null;
  };

  const modal = open ? (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Explore ${alt}`}
      tabIndex={-1}
      onKeyDown={onKeyDown}
      className="fixed inset-0 z-[100] bg-ink/90 p-3 outline-none md:p-5"
    >
      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-canvas shadow-2xl">
        <div className="flex min-h-14 items-center justify-between gap-4 border-b border-hairline px-4 md:px-5">
          <p className="truncate text-sm text-body">{caption || alt}</p>
          <div className="flex shrink-0 items-center gap-1">
            <button type="button" onClick={() => changeScale(scale - 0.25)} disabled={scale <= MIN_SCALE} aria-label="Zoom out" className="grid size-9 place-items-center rounded-full text-ink hover:bg-ink/5 disabled:opacity-30"><Icon name="minus" /></button>
            <span aria-live="polite" className="w-12 text-center font-mono text-xs text-muted">{Math.round(scale * 100)}%</span>
            <button type="button" onClick={() => changeScale(scale + 0.25)} disabled={scale >= maximumScale} aria-label="Zoom in" className="grid size-9 place-items-center rounded-full text-ink hover:bg-ink/5 disabled:opacity-30"><Icon name="plus" /></button>
            <button type="button" onClick={reset} aria-label="Reset map view" className="grid size-9 place-items-center rounded-full text-ink hover:bg-ink/5"><Icon name="reset" /></button>
            <span className="mx-1 h-5 w-px bg-hairline" />
            <button type="button" onClick={() => setOpen(false)} aria-label="Close map viewer" className="grid size-9 place-items-center rounded-full text-ink hover:bg-ink/5"><Icon name="close" /></button>
          </div>
        </div>
        <div
          ref={viewportRef}
          className={`relative min-h-0 flex-1 select-none overflow-hidden touch-none ${scale > 1 ? "cursor-grab active:cursor-grabbing" : "cursor-zoom-in"}`}
          onWheel={(event) => {
            event.preventDefault();
            changeScale(scale + (event.deltaY < 0 ? 0.2 : -0.2));
          }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          {/* The modal bypasses optimization so zooming always uses the original source file. */}
          <Image
            ref={fullResolutionImageRef}
            src={src}
            alt={alt}
            fill
            unoptimized
            draggable={false}
            onLoad={updateMaximumScale}
            className="pointer-events-none object-contain will-change-transform"
            style={{ transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})` }}
          />
        </div>
        <p className="border-t border-hairline px-4 py-1.5 text-center text-xs leading-5 tracking-normal text-muted md:text-[13px]">
          <span className="md:hidden">Pinch to zoom · Drag to pan</span>
          <span className="hidden md:inline">Drag to pan · Scroll or pinch to zoom · + / − to zoom</span>
        </p>
      </div>
    </div>
  ) : null;

  return (
    <figure className="min-w-0 max-w-full">
      <button
        ref={openerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Open interactive viewer for ${alt}`}
        className="group relative block w-full overflow-hidden rounded-2xl bg-white text-left shadow-[0_16px_50px_rgba(24,35,54,.08)] outline-none ring-accent transition-shadow hover:shadow-[0_20px_60px_rgba(24,35,54,.14)] focus-visible:ring-2 focus-visible:ring-offset-4 motion-reduce:transition-none"
      >
        <span className={`relative block aspect-[16/7] ${wide ? "" : "md:aspect-[4/3]"}`}>
          <Image src={src} alt={alt} fill sizes="(max-width: 768px) 92vw, 92vw" className="object-contain" />
        </span>
        <span className="absolute bottom-5 right-5 flex items-center gap-1.5 rounded-full border border-accent/35 bg-canvas/85 px-3 py-1.5 font-mono text-[10px] tracking-[.04em] text-ink backdrop-blur-sm transition-colors group-hover:bg-accent/[.08] group-focus-visible:bg-accent/[.08] motion-reduce:transition-none md:bottom-6 md:right-6 md:text-[11px]">
          Explore map
          <span aria-hidden="true" className="inline-block text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-focus-visible:translate-x-0.5 group-focus-visible:-translate-y-0.5 motion-reduce:transition-none">↗</span>
        </span>
      </button>
      {caption ? <figcaption className="mt-4 text-base text-muted">{caption}</figcaption> : null}
      {typeof document !== "undefined" ? createPortal(modal, document.body) : null}
    </figure>
  );
}
