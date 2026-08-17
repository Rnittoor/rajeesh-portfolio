"use client";

import { useEffect, useState } from "react";

/**
 * Live Amsterdam local time — a small studio signature detail.
 * Renders nothing until mounted to avoid hydration mismatch.
 */
export function LocalTime({ className }: { className?: string }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Europe/Amsterdam",
        }).format(new Date())
      );
    update();
    const id = setInterval(update, 1000 * 30);
    return () => clearInterval(id);
  }, []);

  if (!time) return null;

  return (
    <span className={className}>
      <span className="text-muted">AMS</span> {time}
    </span>
  );
}
