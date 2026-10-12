import Image from "next/image";
import { MapViewer } from "@/components/case-study/MapViewer";
import { Reveal } from "@/components/ui/Reveal";
import type {
  EditorialBlock,
  EditorialPresentation,
  EditorialWorkflowStep,
  Project,
  ProjectImage,
} from "@/data/projects";

function Caption({ children }: { children?: string }) {
  if (!children) return null;
  return <figcaption className="mt-4 text-base text-muted">{children}</figcaption>;
}

function EditorialImage({
  image,
  className = "aspect-[16/9]",
  sizes = "(max-width: 1440px) 92vw, 1320px",
}: {
  image: ProjectImage;
  className?: string;
  sizes?: string;
}) {
  return (
    <figure>
      <div className={`relative overflow-hidden rounded-2xl bg-canvas ${className}`}>
        <Image src={image.src} alt={image.alt} fill sizes={sizes} className="object-contain" />
      </div>
      <Caption>{image.caption}</Caption>
    </figure>
  );
}

function StoryBlock({ block }: { block: Extract<EditorialBlock, { type: "story" }> }) {
  return (
    <section className="border-t border-hairline py-20 md:py-28">
      <div className="container-content grid gap-10 md:grid-cols-12">
        <Reveal className="md:col-span-3">
          <p className="eyebrow">{block.eyebrow}</p>
        </Reveal>
        <Reveal className="md:col-span-8 md:col-start-5" delay={0.06}>
          <h2 className="font-display text-[clamp(2.5rem,5.5vw,5.5rem)] leading-[1] tracking-[-.025em] text-ink">
            {block.heading}
          </h2>
          <div className="mt-8 max-w-3xl space-y-5 text-lg text-body">
            {block.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ImmersiveVisual({ block }: { block: Extract<EditorialBlock, { type: "immersiveVisual" }> }) {
  return (
    <section className="bg-ink py-14 text-canvas md:py-20">
      <Reveal>
        <div className="container-content">
          <p className="eyebrow text-blue-300">The system at a glance</p>
          <p className="mt-4 max-w-2xl font-display text-2xl text-canvas md:text-3xl">
            You do not need to read every connection to see the scale of the problem.
          </p>
        </div>
        <div className="container-content mt-10">
          <MapViewer
            src={block.image.src}
            alt={block.image.alt}
            caption={block.image.caption}
          />
        </div>
      </Reveal>
    </section>
  );
}

function ResearchEvidence({ block }: { block: Extract<EditorialBlock, { type: "researchEvidence" }> }) {
  return (
    <section className="border-t border-hairline bg-tint py-20 md:py-28">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow">{block.eyebrow}</p>
          <div className="mt-5 grid gap-8 md:grid-cols-12">
            <h2 className="font-display text-[clamp(2.5rem,5.5vw,5.5rem)] leading-[1] tracking-[-.025em] text-ink md:col-span-8">
              {block.heading}
            </h2>
            <p className="text-lg text-body md:col-span-4">{block.body}</p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 border-y border-hairline py-8 md:grid-cols-2">
          {block.metrics.map((metric, index) => (
            <Reveal key={metric.label} delay={index * 0.06}>
              <p className="font-display text-ink [font-size:clamp(4rem,10vw,8rem)] [line-height:.85]">{metric.value}</p>
              <p className="mt-5 text-lg text-body">{metric.label}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {block.images.map((image, index) => (
            <Reveal key={image.src} delay={index * 0.06}>
              <EditorialImage image={image} className="aspect-video" sizes="(max-width: 768px) 92vw, 46vw" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatVisual({ block }: { block: Extract<EditorialBlock, { type: "statVisual" }> }) {
  return (
    <section className="bg-ink py-20 text-canvas md:py-28">
      <div className="container-content grid gap-14 md:grid-cols-12 md:items-start">
        <Reveal className="md:sticky md:top-32 md:col-span-4">
          <p className="eyebrow text-blue-300">{block.eyebrow}</p>
          <p className="mt-8 font-display text-blue-100 [font-size:clamp(5rem,13vw,10rem)] [line-height:.8]">{block.value}</p>
          <p className="mt-6 font-display text-3xl text-canvas">{block.label}</p>
          <p className="mt-6 text-lg text-canvas/70">{block.body}</p>
        </Reveal>
        <Reveal className="md:col-span-7 md:col-start-6" delay={0.08}>
          <EditorialImage image={block.image} className="aspect-video" sizes="(max-width: 768px) 92vw, 58vw" />
        </Reveal>
      </div>
    </section>
  );
}

function TurningPoint({ block }: { block: Extract<EditorialBlock, { type: "turningPoint" }> }) {
  return (
    <section className="border-t border-hairline pb-14 pt-20 md:pb-20 md:pt-28">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow">{block.eyebrow}</p>
          <h2 className="mt-5 max-w-5xl font-display text-ink [font-size:clamp(2.75rem,6vw,5.75rem)] [line-height:.98] [letter-spacing:-.03em]">
            {block.heading}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-12 md:grid-cols-12">
          <div className="space-y-5 text-lg text-body md:col-span-5">
            {block.body.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 0.05}><p>{paragraph}</p></Reveal>
            ))}
          </div>
          <Reveal className="md:col-span-6 md:col-start-7" delay={0.08}>
            <ol className="border-t border-ink">
              {block.progression.map((step, index) => (
                <li key={step} className="flex items-center gap-5 border-b border-hairline py-5">
                  <span className="font-mono text-base text-accent">{String(index + 1).padStart(2, "0")}</span>
                  <span className="font-display text-2xl text-ink">{step}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <Reveal className="mt-12" delay={0.1}>
          <MapViewer src={block.image.src} alt={block.image.alt} caption={block.image.caption} />
        </Reveal>
      </div>
    </section>
  );
}

function Concept({ block }: { block: Extract<EditorialBlock, { type: "concept" }> }) {
  return (
    <section className="border-t border-hairline bg-tint py-20 md:py-28">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow">{block.eyebrow}</p>
          <div className="mt-5 grid gap-10 md:grid-cols-12">
            <h2 className="font-display text-[clamp(2.5rem,5.5vw,5.5rem)] leading-[1] tracking-[-.025em] text-ink md:col-span-7">{block.heading}</h2>
            <div className="space-y-5 text-lg text-body md:col-span-5">
              {block.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <EditorialImage image={block.image} />
        </Reveal>

        <Reveal className="mt-10">
          <ul aria-label="Product capabilities" className="flex flex-wrap gap-x-8 border-y border-hairline py-5">
            {block.areas.map((area) => (
              <li key={area} className="flex items-center gap-3 py-2 text-lg text-ink">
                <span aria-hidden className="h-px w-4 bg-accent" />
                {area}
              </li>
            ))}
          </ul>
        </Reveal>

        {block.supportingEvidence && (
          <details className="group mt-10 border-y border-hairline bg-canvas">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-5 py-6 text-lg text-ink md:px-8">
              <span>Explore the workflow and product structure</span>
              <span aria-hidden className="text-accent transition-transform group-open:rotate-45">+</span>
            </summary>
            <div className="grid gap-10 border-t border-hairline p-5 md:grid-cols-2 md:p-8">
              {block.supportingEvidence.map((image, index) => (
                <div key={image.src} className={index === block.supportingEvidence!.length - 1 ? "md:col-span-2" : undefined}>
                  <EditorialImage image={image} className="aspect-video" />
                </div>
              ))}
            </div>
          </details>
        )}
      </div>
    </section>
  );
}

function WorkflowStep({ step, reversed }: { step: EditorialWorkflowStep; reversed: boolean }) {
  return (
    <Reveal>
      <article className="grid items-center gap-8 border-t border-hairline py-10 md:grid-cols-12 md:gap-12 md:py-14">
        <div className={reversed ? "md:order-2 md:col-span-4 md:col-start-9" : "md:col-span-4"}>
          <span className="font-mono text-base text-accent">{step.index}</span>
          <h3 className="mt-4 font-display text-h2 text-ink [line-height:var(--text-h2--line-height)]">{step.title}</h3>
          <dl className="mt-8 space-y-5">
            <div>
              <dt className="font-mono text-base text-muted">Need</dt>
              <dd className="mt-2 text-body">{step.need}</dd>
            </div>
            <div>
              <dt className="font-mono text-base text-muted">Design response</dt>
              <dd className="mt-2 text-body">{step.response}</dd>
            </div>
          </dl>
        </div>
        <div className={reversed ? "md:order-1 md:col-span-8" : "md:col-span-8"}>
          <EditorialImage image={step.image} className="aspect-[16/10]" sizes="(max-width: 768px) 92vw, 58vw" />
        </div>
      </article>
    </Reveal>
  );
}

function Workflow({ block }: { block: Extract<EditorialBlock, { type: "workflow" }> }) {
  const featuredSteps = block.steps.filter((_, index) => index === 0 || index === 3 || index === 5);

  return (
    <section className="border-t border-hairline py-20 md:py-28">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow">{block.eyebrow}</p>
          <h2 className="mt-5 max-w-5xl font-display text-[clamp(2.5rem,5.5vw,5.5rem)] leading-[1] tracking-[-.025em] text-ink">{block.heading}</h2>
          <p className="mt-6 max-w-2xl text-lg text-body">{block.intro}</p>
        </Reveal>
        <div className="mt-10">
          {featuredSteps.map((step, index) => <WorkflowStep key={step.index} step={step} reversed={index % 2 === 1} />)}
        </div>
        <details className="group mt-8 border-y border-hairline">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg text-ink">
            <span>Explore the complete six-step experience</span>
            <span aria-hidden className="text-accent transition-transform group-open:rotate-45 motion-reduce:transition-none">+</span>
          </summary>
          <ol className="grid gap-x-8 border-t border-hairline py-6 md:grid-cols-2">
            {block.steps.map((step) => (
              <li key={step.index} className="grid grid-cols-[2rem_1fr] gap-4 border-b border-hairline py-5 last:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0">
                <span className="font-mono text-xs text-accent">{step.index}</span>
                <div>
                  <h3 className="font-display text-xl text-ink">{step.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-body">{step.response}</p>
                </div>
              </li>
            ))}
          </ol>
        </details>
      </div>
    </section>
  );
}

function Outcome({ block }: { block: Extract<EditorialBlock, { type: "outcome" }> }) {
  return (
    <section className="bg-ink py-20 text-canvas md:py-28">
      <div className="container-content grid gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-3"><p className="eyebrow text-blue-300">{block.eyebrow}</p></Reveal>
        <div className="md:col-span-8 md:col-start-5">
          <Reveal>
            <h2 className="font-display text-[clamp(2.5rem,5.5vw,5.5rem)] leading-[1] tracking-[-.025em] text-canvas">{block.heading}</h2>
            <div className="mt-8 max-w-3xl space-y-5 text-lg text-canvas/70">
              {block.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </Reveal>
          {block.signal && (
            <Reveal className="mt-12 border-l-2 border-blue-400 pl-6" delay={0.08}>
              <p className="font-display text-2xl text-canvas md:text-3xl">{block.signal}</p>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}

function Reflection({ block }: { block: Extract<EditorialBlock, { type: "reflection" }> }) {
  return (
    <section className="border-t border-hairline pb-[3.25rem] pt-20 md:pb-[4.5rem] md:pt-28">
      <Reveal className="container-content">
        <p className="eyebrow">{block.eyebrow}</p>
        <h2 className="mt-5 max-w-5xl font-display text-[clamp(2.5rem,5.5vw,5.5rem)] leading-[1] tracking-[-.025em] text-ink">{block.heading}</h2>
        <div className="mt-8 max-w-3xl space-y-5 text-lg text-body">
          {block.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </Reveal>
    </section>
  );
}

function EditorialBlockView({ block }: { block: EditorialBlock }) {
  switch (block.type) {
    case "story": return <StoryBlock block={block} />;
    case "immersiveVisual": return <ImmersiveVisual block={block} />;
    case "researchEvidence": return <ResearchEvidence block={block} />;
    case "statVisual": return <StatVisual block={block} />;
    case "turningPoint": return <TurningPoint block={block} />;
    case "concept": return <Concept block={block} />;
    case "workflow": return <Workflow block={block} />;
    case "outcome": return <Outcome block={block} />;
    case "reflection": return <Reflection block={block} />;
  }
}

export function EditorialCaseStudy({ project, presentation }: { project: Project; presentation: EditorialPresentation }) {
  const headline = project.hook.split(". ");

  return (
    <article>
      <header className="overflow-hidden bg-canvas pt-32 text-ink md:pt-40">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow">{project.client}</p>
            <p className="mt-4 text-base text-muted">{presentation.kicker}</p>
            <h1 className="mt-10 max-w-6xl font-display [font-size:var(--text-display)] [line-height:var(--text-display--line-height)] [letter-spacing:var(--text-display--letter-spacing)] md:[font-size:calc(var(--text-display)*.88)]">
              {headline.map((line, index) => (
                <span key={line} className={index === headline.length - 1 ? "block text-accent" : "block"}>
                  {line}{index < headline.length - 1 ? "." : ""}
                </span>
              ))}
            </h1>
            <p className="mt-10 max-w-[56rem] text-xl leading-[1.45] text-body md:text-[1.75rem] md:leading-[1.4]">{presentation.intro}</p>
          </Reveal>
        </div>
        {presentation.heroVisual && (
          <Reveal className="container-content mt-14 pb-14 md:mt-20 md:pb-20">
            <EditorialImage image={presentation.heroVisual} className="aspect-[16/8]" />
          </Reveal>
        )}
      </header>

      <div>
        {presentation.blocks.map((block, index) => <EditorialBlockView key={`${block.type}-${index}`} block={block} />)}
      </div>
    </article>
  );
}
