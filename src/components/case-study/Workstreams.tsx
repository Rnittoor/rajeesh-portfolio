import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import type { CaseStudyBlock, ProjectWorkstream } from "@/data/projects";
import { ProcessSteps } from "./ProcessSteps";
import { TextSection } from "./TextSection";

export function Workstreams({
  workstreams,
  renderBlock,
}: {
  workstreams: ProjectWorkstream[];
  renderBlock: (block: CaseStudyBlock, index: number) => ReactNode;
}) {
  return (
    <section className="border-t border-hairline py-20 md:py-28">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow">Workstreams</p>
          <h2 className="mt-4 max-w-4xl font-display text-h1 text-ink [line-height:var(--text-h1--line-height)]">
            Related investigations, distinct workflows.
          </h2>
        </Reveal>
      </div>

      <div className="mt-16 flex flex-col gap-24 md:mt-24 md:gap-32">
        {workstreams.map((workstream, workstreamIndex) => (
          <article key={workstream.id} id={workstream.id}>
            <div className="container-content">
              <Reveal>
                <div className="grid gap-6 border-t border-ink pt-6 md:grid-cols-12">
                  <span className="font-mono text-base text-accent md:col-span-2">
                    {String(workstreamIndex + 1).padStart(2, "0")}
                  </span>
                  <div className="md:col-span-8">
                    <h3 className="font-display text-h2 text-ink [line-height:var(--text-h2--line-height)]">
                      {workstream.title}
                    </h3>
                    {workstream.subtitle && (
                      <p className="mt-4 max-w-3xl text-lg text-body">{workstream.subtitle}</p>
                    )}
                    {workstream.disciplines && (
                      <div className="mt-6 flex flex-wrap gap-2">
                        {workstream.disciplines.map((discipline) => (
                          <span key={discipline} className="rounded-full border border-hairline px-3 py-1 text-base text-muted">
                            {discipline}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            </div>

            {workstream.context && <TextSection content={workstream.context} />}
            {workstream.objective && <TextSection content={workstream.objective} />}
            {workstream.research && <TextSection content={workstream.research} />}
            {workstream.progression && <ProcessSteps steps={workstream.progression} />}

            {(workstream.focusAreas || workstream.artefacts) && (
              <div className="container-content grid gap-10 py-16 md:grid-cols-2 md:py-20">
                {workstream.focusAreas && (
                  <Reveal>
                    <p className="eyebrow">Mapping focus</p>
                    <ul className="mt-6 border-t border-hairline">
                      {workstream.focusAreas.map((item) => (
                        <li key={item} className="border-b border-hairline py-3 text-body">{item}</li>
                      ))}
                    </ul>
                  </Reveal>
                )}
                {workstream.artefacts && (
                  <Reveal delay={0.08}>
                    <p className="eyebrow">Evidence & artefacts</p>
                    <ul className="mt-6 border-t border-hairline">
                      {workstream.artefacts.map((item) => (
                        <li key={item} className="border-b border-hairline py-3 text-body">{item}</li>
                      ))}
                    </ul>
                  </Reveal>
                )}
              </div>
            )}

            {workstream.keyInsights && <TextSection content={workstream.keyInsights} />}
            {workstream.opportunities && <TextSection content={workstream.opportunities} />}
            {workstream.improvements && <TextSection content={workstream.improvements} />}
            {workstream.sections?.map(renderBlock)}
          </article>
        ))}
      </div>
    </section>
  );
}
