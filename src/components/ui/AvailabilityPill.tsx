import { site } from "@/data/site";

/** Small "available for work" signal with a soft pulsing dot. */
export function AvailabilityPill({ className }: { className?: string }) {
  if (!site.available) return null;
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-hairline bg-canvas/70 px-3 py-1.5 text-base text-body backdrop-blur ${className ?? ""}`}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
      </span>
      {site.availabilityLabel}
    </span>
  );
}
