import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { WorkCard } from "@/components/ui/WorkCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Selected work",
  description: "UX, product, service, system, and information design work by Nittoor Freelance Studio.",
};

export default function WorkPage() {
  return (
    <section id="work" className="pt-36 pb-24 md:pt-48 md:pb-36">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow">Work</p>
          <h1 className="mt-4 max-w-4xl font-display text-ink [font-size:var(--text-display)] [line-height:var(--text-display--line-height)] [letter-spacing:var(--text-display--letter-spacing)]">
            Projects in depth.
          </h1>
          <p className="mt-8 max-w-2xl text-lead text-body">
            Work across product, UX, service, systems, and information design.
          </p>
        </Reveal>

        <div className="mt-20 flex flex-col gap-24 md:mt-28 md:gap-36">
          {projects.map((project, index) => (
            <WorkCard key={project.slug} project={project} reversed={index % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
