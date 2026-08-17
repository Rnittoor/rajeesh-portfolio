import { clsx } from "@/lib/clsx";

/**
 * Content column: full-bleed parent, content capped at ~1440px with fluid gutters.
 */
export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx("container-content", className)}>{children}</div>
  );
}
