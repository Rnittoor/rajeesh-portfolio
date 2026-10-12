import type { CaseStudyBlock, Project } from "@/data/projects";
import { CaptionedArtefact, FullWidthVisual, ImageGrid, LargeImage } from "./MediaBlocks";
import { MetricStats } from "./MetricStats";
import { ProcessSteps } from "./ProcessSteps";
import { Quote } from "./Quote";
import { TextSection } from "./TextSection";
import { Workstreams } from "./Workstreams";

function ContentBlock({ block }: { block: CaseStudyBlock }) {
  switch (block.type) {
    case "text":
      return <TextSection content={block.content} />;
    case "largeImage":
      return <LargeImage image={block.image} />;
    case "imageGrid":
      return <ImageGrid images={block.images} />;
    case "fullWidthVisual":
      return <FullWidthVisual image={block.image} video={block.video} />;
    case "quote":
      return <Quote quote={block.quote} />;
    case "metrics":
      return <MetricStats metrics={block.metrics} />;
    case "processSteps":
      return <ProcessSteps steps={block.steps} />;
    case "artefact":
      return <CaptionedArtefact image={block.image} description={block.description} />;
  }
}

export function CaseStudyContent({ project }: { project: Project }) {
  return (
    <>
      {project.context && <TextSection content={project.context} />}
      {project.challenge && <TextSection content={project.challenge} />}

      {project.responsibilities && project.responsibilities.length > 0 && (
        <TextSection
          content={{
            eyebrow: "Responsibilities",
            body: project.responsibilities,
          }}
        />
      )}

      {project.workstreams && (
        <Workstreams
          workstreams={project.workstreams}
          renderBlock={(block, index) => (
            <ContentBlock key={`${block.type}-${index}`} block={block} />
          )}
        />
      )}

      {project.research && <TextSection content={project.research} />}
      {project.process && <ProcessSteps steps={project.process} />}
      {project.keyInsights && <TextSection content={project.keyInsights} />}
      {project.designDecisions && <TextSection content={project.designDecisions} />}
      {project.images && project.images.length === 1 && <LargeImage image={project.images[0]} />}
      {project.images && project.images.length > 1 && <ImageGrid images={project.images} />}
      {project.videos?.map((video) => <FullWidthVisual key={video.src} video={video} />)}
      {project.quotes?.map((quote, index) => <Quote key={`${quote.text}-${index}`} quote={quote} />)}
      {project.metrics && <MetricStats metrics={project.metrics} />}
      {project.sections?.map((block, index) => <ContentBlock key={`${block.type}-${index}`} block={block} />)}
      {project.solution && <TextSection content={project.solution} />}
      {project.outcome && <TextSection content={project.outcome} />}
      {project.learnings && <TextSection content={project.learnings} />}
    </>
  );
}
