import { Reveal } from "@/components/ui/Reveal";
import type { ProjectMetric } from "@/data/projects";

export function MetricStats({ metrics }: { metrics: ProjectMetric[] }) {
  return (
    <section className="container-content grid gap-6 py-16 md:grid-cols-3 md:py-24">
      {metrics.map((metric, index) => (
        <Reveal key={`${metric.value}-${metric.label}`} delay={index * 0.06}>
          <div className="border-t border-ink pt-5">
            <p className="font-display text-h2 text-accent">{metric.value}</p>
            <p className="mt-2 text-lg text-ink">{metric.label}</p>
            {metric.detail && <p className="mt-2 text-base text-muted">{metric.detail}</p>}
          </div>
        </Reveal>
      ))}
    </section>
  );
}
