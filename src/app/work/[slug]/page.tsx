import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyContent } from "@/components/case-study/CaseStudyContent";
import { EditorialCaseStudy } from "@/components/case-study/EditorialCaseStudy";
import { IkeaDataVisualisationCaseStudy } from "@/components/case-study/IkeaDataVisualisationCaseStudy";
import { IkeaServiceCaseStudy } from "@/components/case-study/IkeaServiceCaseStudy";
import { NextProjectNavigation } from "@/components/case-study/NextProjectNavigation";
import { ProjectMetadata } from "@/components/case-study/ProjectMetadata";
import { Reveal } from "@/components/ui/Reveal";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.shortSummary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const relatedProjects = (project.relatedProjects ?? [])
    .map(getProjectBySlug)
    .filter((related) => related !== undefined);

  return (
    <>
      {project.slug === "ikea-global-marketing-service-design" ? (
        <IkeaServiceCaseStudy />
      ) : project.slug === "ikea-data-visualisation-system" ? (
        <IkeaDataVisualisationCaseStudy />
      ) : project.editorialPresentation ? (
        <EditorialCaseStudy project={project} presentation={project.editorialPresentation} />
      ) : (
        <article>
          <header className="pt-36 pb-20 md:pt-48 md:pb-28">
            <div className="container-content">
              <Reveal>
                <p className="eyebrow">{project.client} · {project.year}</p>
                <h1 className="mt-5 max-w-5xl font-display text-ink [font-size:var(--text-display)] [line-height:var(--text-display--line-height)] [letter-spacing:var(--text-display--letter-spacing)]">
                  {project.title}
                </h1>
                <p className="mt-8 max-w-3xl text-lead text-body">{project.hook}</p>
                <p className="mt-5 max-w-3xl text-lg text-muted">{project.shortSummary}</p>
              </Reveal>
            </div>
          </header>

          <ProjectMetadata project={project} />
          <CaseStudyContent project={project} />
        </article>
      )}

      {relatedProjects.length > 0 ? (
        <NextProjectNavigation projects={relatedProjects} />
      ) : (
        <NextProjectNavigation projects={projects.filter((item) => item.slug !== project.slug).slice(0, 2)} />
      )}
    </>
  );
}
