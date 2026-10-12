import { Reveal } from "@/components/ui/Reveal";
import type { ProcessStep as ProcessStepData } from "@/data/projects";

export function ProcessSteps({ steps }: { steps: ProcessStepData[] }) {
  return (
    <section className="border-t border-hairline py-20 md:py-28">
      <div className="container-content">
        <Reveal><p className="eyebrow">Process & approach</p></Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.06}>
              <div className="border-t border-ink pt-5">
                <span className="font-mono text-base text-accent">{String(index + 1).padStart(2, "0")}</span>
                <h2 className="mt-4 font-display text-2xl text-ink">{step.title}</h2>
                <p className="mt-3 text-body">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
