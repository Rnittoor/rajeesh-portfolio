import { getProjectBySlug } from "@/data/projects";
import { WorkCard } from "@/components/ui/WorkCard";
import { Reveal } from "@/components/ui/Reveal";

const homepageProjects = [
  "airbus-aircraft-management",
  "ikea-global-marketing-service-design",
  "ikea-data-visualisation-system",
].flatMap((slug) => {
  const project = getProjectBySlug(slug);
  return project ? [project] : [];
});

export function SelectedWork() {
  return (
    <section id="work" className="border-t border-hairline py-24 md:py-36">
      <div className="container-content">
        <Reveal>
          <div>
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="mt-4 font-display text-h1 text-ink [line-height:var(--text-h1--line-height)] [letter-spacing:var(--text-h1--letter-spacing)]">
                A few problems,
                <br />
                worth the depth.
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 flex flex-col gap-24 md:mt-24 md:gap-36">
          {homepageProjects.map((project, i) => (
            <WorkCard
              key={project.slug}
              project={project}
              reversed={i % 2 === 1}
              homepageVisual
              displayIndex={String(i + 1).padStart(2, "0")}
              displayYear={project.slug === "airbus-aircraft-management" ? "2022" : "2025"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
