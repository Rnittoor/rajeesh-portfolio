import { Reveal } from "@/components/ui/Reveal";
import type { TextSectionContent } from "@/data/projects";

export function TextSection({ content }: { content: TextSectionContent }) {
  return (
    <section className="border-t border-hairline py-20 md:py-28">
      <div className="container-content grid gap-8 md:grid-cols-12">
        <Reveal className="md:col-span-3">
          <p className="eyebrow">{content.eyebrow ?? content.heading}</p>
        </Reveal>
        <Reveal className="md:col-span-8 md:col-start-5" delay={0.08}>
          {content.heading && content.eyebrow && (
            <h2 className="font-display text-h2 text-ink [line-height:var(--text-h2--line-height)]">
              {content.heading}
            </h2>
          )}
          <div className="space-y-5 text-lg text-body">
            {content.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
