import { Reveal } from "@/components/ui/Reveal";
import type { ProjectQuote } from "@/data/projects";

export function Quote({ quote }: { quote: ProjectQuote }) {
  return (
    <Reveal as="section" className="border-y border-hairline bg-tint py-20 md:py-28">
      <blockquote className="container-content">
        <p className="max-w-5xl font-display text-h2 text-ink [line-height:var(--text-h2--line-height)]">
          “{quote.text}”
        </p>
        {(quote.attribution || quote.role) && (
          <footer className="mt-6 text-base text-muted">
            {[quote.attribution, quote.role].filter(Boolean).join(" · ")}
          </footer>
        )}
      </blockquote>
    </Reveal>
  );
}
