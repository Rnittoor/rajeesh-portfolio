import { featuredProjects } from "@/data/projects";
import { WorkCard } from "@/components/ui/WorkCard";
import { Reveal } from "@/components/ui/Reveal";

export function SelectedWork() {
  return (
    <section id="work" className="border-t border-hairline py-24 md:py-36">
      <div className="container-content">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="mt-4 font-display text-h1 text-ink [line-height:var(--text-h1--line-height)] [letter-spacing:var(--text-h1--letter-spacing)]">
                A few problems,
                <br />
                worth the depth.
              </h2>
            </div>
            <a
              href="/work"
              className="inline-flex items-center gap-2 text-base text-body transition-colors hover:text-accent"
            >
              View all projects <span>→</span>
            </a>
          </div>
        </Reveal>

        <div className="mt-16 flex flex-col gap-24 md:mt-24 md:gap-36">
          {featuredProjects.map((project, i) => (
            <WorkCard
              key={project.slug}
              project={project}
              reversed={i % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
