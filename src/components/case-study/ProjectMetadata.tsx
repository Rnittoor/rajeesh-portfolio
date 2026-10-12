import { Reveal } from "@/components/ui/Reveal";
import type { Project } from "@/data/projects";

export function ProjectMetadata({ project }: { project: Project }) {
  const rows = [
    ["Client", project.client],
    ["Year", project.year],
    ["Role", project.role],
    ["Disciplines", project.disciplines.join(" · ")],
  ].filter((row): row is [string, string] => Boolean(row[1]));

  return (
    <Reveal className="border-y border-hairline">
      <dl className="container-content grid gap-6 py-8 md:grid-cols-4">
        {rows.map(([label, value]) => (
          <div key={label}>
            <dt className="eyebrow">{label}</dt>
            <dd className="mt-2 text-ink">{value}</dd>
          </div>
        ))}
      </dl>
    </Reveal>
  );
}
