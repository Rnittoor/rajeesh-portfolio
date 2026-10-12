import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { ikeaDataVisualisationCaseStudy as content } from "@/data/ikeaDataVisualisationCaseStudy";

function BodyCopy({ paragraphs, className = "" }: { paragraphs: readonly string[]; className?: string }) {
  return (
    <div className={`space-y-5 text-lg leading-relaxed text-body ${className}`}>
      {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </div>
  );
}

function HeroVisual() {
  const { principles, visuals, dashboards } = content.hero.visual;

  return (
    <Reveal className="container-content mt-14" delay={0.1}>
      <figure className="overflow-hidden rounded-2xl bg-ink p-5 md:p-10 lg:p-14">
        <p className="font-mono text-base tracking-[.12em] text-blue-300 uppercase">
          Principles <span aria-hidden="true" className="mx-2 text-blue-300/50">→</span>
          Visuals <span aria-hidden="true" className="mx-2 text-blue-300/50">→</span>
          Dashboards
        </p>

        <div className="mt-7 grid gap-5 md:relative md:min-h-[42rem] lg:min-h-[48rem]">
          <div className="rounded-xl bg-white p-3 shadow-2xl md:absolute md:left-0 md:top-0 md:z-20 md:w-[47%] lg:p-4">
            <p className="mb-3 font-mono text-base tracking-[.12em] text-accent uppercase">01 · {principles.label}</p>
            <Image src={principles.src} alt={principles.alt} width={principles.width} height={principles.height} sizes="(max-width: 767px) 90vw, 42vw" className="h-auto w-full" />
          </div>

          <div className="rounded-xl bg-white p-3 shadow-2xl md:absolute md:right-0 md:top-[10%] md:z-10 md:w-[66%] lg:p-4">
            <p className="mb-3 font-mono text-base tracking-[.12em] text-accent uppercase">03 · {dashboards.label}</p>
            <Image src={dashboards.src} alt={dashboards.alt} width={dashboards.width} height={dashboards.height} sizes="(max-width: 767px) 90vw, 58vw" className="h-auto w-full" />
          </div>

          <div className="rounded-xl bg-white p-3 shadow-2xl md:absolute md:bottom-0 md:left-[8%] md:z-30 md:w-[62%] lg:p-4">
            <p className="mb-3 font-mono text-base tracking-[.12em] text-accent uppercase">02 · {visuals.label}</p>
            <Image src={visuals.src} alt={visuals.alt} width={visuals.width} height={visuals.height} sizes="(max-width: 767px) 90vw, 55vw" className="h-auto w-full" />
          </div>
        </div>
      </figure>
    </Reveal>
  );
}

export function IkeaDataVisualisationCaseStudy() {
  return (
    <article className="ikea-data-visualisation-case-study">
      <header className="pt-36 pb-20 md:pt-48 md:pb-28">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow">{content.hero.eyebrow}</p>
            <h1 className="mt-5 max-w-6xl font-display text-ink [font-size:var(--text-display)] [line-height:var(--text-display--line-height)] [letter-spacing:var(--text-display--letter-spacing)]">
              {content.hero.headline}
            </h1>
            <p className="mt-8 max-w-4xl text-lead text-body">{content.hero.intro}</p>
          </Reveal>

          <Reveal className="mt-12 grid border-y border-hairline md:grid-cols-3" delay={0.06}>
            {content.hero.metadata.map((item) => (
              <div key={item.label} className="border-b border-hairline py-5 last:border-b-0 md:border-r md:border-b-0 md:px-6 md:first:pl-0 md:last:border-r-0">
                <p className="font-mono text-base tracking-[.15em] text-muted uppercase">{item.label}</p>
                <p className="mt-2 text-base text-ink">{item.value}</p>
              </div>
            ))}
          </Reveal>
        </div>
        <HeroVisual />
      </header>

      <section className="border-t border-hairline py-20 md:py-28">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow">{content.context.eyebrow}</p>
            <div className="mt-5 grid gap-8 md:grid-cols-12">
              <h2 className="font-display text-h1 text-ink [line-height:var(--text-h1--line-height)] md:col-span-7">{content.context.headline}</h2>
              <BodyCopy paragraphs={content.context.body} className="md:col-span-5" />
            </div>
          </Reveal>

          <div className="mt-14 grid gap-10 md:grid-cols-12 md:items-start">
            <Reveal className="md:col-span-8">
              <figure>
                <div className="overflow-hidden rounded-2xl bg-white shadow-[0_16px_50px_rgba(24,35,54,.08)]">
                  <Image src={content.context.image.src} alt={content.context.image.alt} width={content.context.image.width} height={content.context.image.height} sizes="(max-width: 767px) 92vw, 62vw" className="h-auto w-full" />
                </div>
                <figcaption className="mt-4 text-base text-muted">{content.context.image.caption}</figcaption>
              </figure>
            </Reveal>

            <div className="md:col-span-4">
              {content.context.observations.map((observation, index) => (
                <Reveal key={observation.title} delay={index * 0.05}>
                  <div className="border-t border-ink py-5">
                    <p className="font-mono text-base tracking-[.12em] text-accent uppercase">{observation.title}</p>
                    <p className="mt-3 text-base text-body">{observation.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-hairline bg-tint py-20 md:py-28">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow">{content.opportunity.eyebrow}</p>
            <h2 className="mt-5 max-w-5xl font-display text-h1 text-ink [line-height:var(--text-h1--line-height)]">{content.opportunity.headline}</h2>
          </Reveal>

          <div className="mt-14 grid gap-10 md:grid-cols-2">
            {content.opportunity.paths.map((path, index) => (
              <Reveal key={path.index} delay={index * 0.06}>
                <div className="border-t border-ink pt-6">
                  <p className="font-mono text-base tracking-[.12em] text-accent uppercase">{path.index} · {path.label}</p>
                  <h3 className="mt-4 max-w-xl font-display text-3xl leading-tight text-ink">{path.title}</h3>
                  <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-base text-muted">
                    {path.details.map((detail) => <li key={detail}>{detail}</li>)}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 border-t border-hairline pt-8">
            <p className="max-w-4xl font-display text-2xl leading-snug text-ink">{content.opportunity.bridge}</p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-hairline py-20 md:py-28">
        <div className="container-content">
          <Reveal>
            <h2 className="max-w-4xl font-display text-h1 text-ink [line-height:var(--text-h1--line-height)]">{content.collaboration.headline}</h2>
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {content.collaboration.perspectives.map((perspective, index) => (
              <Reveal key={perspective.title} delay={index * 0.04}>
                <div className="border-t border-ink pt-5">
                  <h3 className="font-mono text-base tracking-[.12em] text-accent uppercase">{perspective.title}</h3>
                  <p className="mt-4 text-base text-body">{perspective.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 grid gap-5 border-t border-hairline pt-8 md:grid-cols-12">
            <p className="eyebrow md:col-span-3">{content.collaboration.role.eyebrow}</p>
            <p className="max-w-4xl text-lg leading-relaxed text-body md:col-span-8">{content.collaboration.role.body}</p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-hairline bg-ink py-20 text-white md:py-28">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow text-blue-300">{content.systemTransition.eyebrow}</p>
            <div className="mt-5 grid gap-8 md:grid-cols-12">
              <h2 className="font-display text-h1 [line-height:var(--text-h1--line-height)] md:col-span-7">{content.systemTransition.headline}</h2>
              <BodyCopy paragraphs={content.systemTransition.body} className="text-white/70 md:col-span-5" />
            </div>
          </Reveal>
          <Reveal className="mt-14 border-y border-white/20 py-8 md:mt-20" delay={0.06}>
            <div className="flex items-center gap-5 font-mono text-sm tracking-[.12em] text-blue-300 uppercase md:text-base">
              <span>{content.systemTransition.progression[0]}</span>
              <span aria-hidden="true" className="h-px flex-1 bg-blue-300/40" />
              <span aria-hidden="true">→</span>
              <span>{content.systemTransition.progression[1]}</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-hairline py-20 md:py-28">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow">{content.principles.eyebrow}</p>
            <div className="mt-5 grid gap-8 md:grid-cols-12">
              <h2 className="font-display text-h1 text-ink [line-height:var(--text-h1--line-height)] md:col-span-8">{content.principles.headline}</h2>
              <BodyCopy paragraphs={content.principles.body} className="md:col-span-4" />
            </div>
          </Reveal>

          <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-start">
            <Reveal className="lg:col-span-6">
              <Image src={content.principles.image.src} alt={content.principles.image.alt} width={content.principles.image.width} height={content.principles.image.height} sizes="(max-width: 1023px) 92vw, 58vw" className="h-auto w-full rounded-2xl" />
            </Reveal>
            <div className="grid gap-x-8 sm:grid-cols-2 lg:col-span-6">
              {content.principles.items.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.04}>
                  <div className="border-t border-ink py-5">
                    <p className="font-mono text-sm tracking-[.12em] text-accent uppercase">{item.title}</p>
                    <p className="mt-3 text-base leading-relaxed text-body">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-hairline bg-tint py-20 md:py-28">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow">{content.visuals.eyebrow}</p>
            <div className="mt-5 grid gap-8 md:grid-cols-12">
              <h2 className="font-display text-h1 text-ink [line-height:var(--text-h1--line-height)] md:col-span-7">{content.visuals.headline}</h2>
              <BodyCopy paragraphs={content.visuals.body} className="md:col-span-5" />
            </div>
          </Reveal>

          <div className="mt-16 space-y-16 md:space-y-24">
            {content.visuals.sections.map((section) => (
              <Reveal key={section.eyebrow}>
                <div className="grid gap-9 md:grid-cols-12 md:items-start">
                  <div className={section.eyebrow === "Chart guidance" ? "md:col-span-5" : "md:col-span-4"}>
                    <p className="font-mono text-sm tracking-[.12em] text-accent uppercase">{section.eyebrow}</p>
                    <h3 className="mt-4 font-display text-3xl leading-tight text-ink">{section.headline}</h3>
                    <p className="mt-5 text-base leading-relaxed text-body">{section.body}</p>
                  </div>
                  <div className={section.eyebrow === "Chart guidance" ? "md:col-span-6 md:col-start-7" : "md:col-span-8"}>
                    <Image src={section.image.src} alt={section.image.alt} width={section.image.width} height={section.image.height} sizes="(max-width: 767px) 92vw, 62vw" className="h-auto w-full rounded-2xl bg-white" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-20 border-t border-hairline pt-20 md:mt-28 md:pt-28">
            <Reveal>
            <p className="eyebrow">{content.reusablePatterns.eyebrow}</p>
            <div className="mt-5 grid gap-8 md:grid-cols-12">
              <h3 className="font-display text-3xl leading-tight text-ink md:col-span-7 md:text-4xl">{content.reusablePatterns.headline}</h3>
              <BodyCopy paragraphs={content.reusablePatterns.body} className="md:col-span-5" />
            </div>
            </Reveal>

            <Reveal className="mt-14 rounded-2xl bg-ink p-5 md:p-10" delay={0.04}>
              <Image src={content.reusablePatterns.anatomy.src} alt={content.reusablePatterns.anatomy.alt} width={content.reusablePatterns.anatomy.width} height={content.reusablePatterns.anatomy.height} sizes="(max-width: 767px) 88vw, 78vw" className="h-auto w-full rounded-xl" />
              <div className="mt-8 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
                {content.reusablePatterns.hierarchy.map((item) => (
                  <div key={item.title} className="border-t border-white/25 py-5">
                    <p className="font-mono text-sm tracking-[.12em] text-blue-300 uppercase">{item.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">{item.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-16 md:mt-20">
              <h3 className="font-display text-3xl leading-tight text-ink md:text-4xl">{content.reusablePatterns.variantsHeadline}</h3>
              <div className="mt-8 overflow-hidden rounded-2xl border border-hairline bg-white p-4 md:p-8">
                <Image src={content.reusablePatterns.variantsImage.src} alt={content.reusablePatterns.variantsImage.alt} width={content.reusablePatterns.variantsImage.width} height={content.reusablePatterns.variantsImage.height} sizes="92vw" className="h-auto w-full" />
              </div>
              <ul className="mt-6 grid gap-3 text-sm text-body sm:grid-cols-2 lg:grid-cols-4">
                {content.reusablePatterns.variants.map((variant) => <li key={variant} className="border-t border-ink pt-3">{variant}</li>)}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow">{content.dashboards.eyebrow}</p>
            <div className="mt-5 grid gap-8 md:grid-cols-12">
              <h2 className="font-display text-h1 text-ink [line-height:var(--text-h1--line-height)] md:col-span-7">{content.dashboards.headline}</h2>
              <BodyCopy paragraphs={content.dashboards.body} className="md:col-span-5" />
            </div>
          </Reveal>

          <Reveal className="mt-16 md:mt-24">
            <h3 className="max-w-4xl font-display text-4xl leading-tight text-ink md:text-5xl">{content.dashboards.layout.headline}</h3>
            <figure className="mt-8 overflow-hidden rounded-2xl border border-hairline bg-white">
              <Image src={content.dashboards.layout.image.src} alt={content.dashboards.layout.image.alt} width={content.dashboards.layout.image.width} height={content.dashboards.layout.image.height} sizes="92vw" className="h-auto w-full" />
            </figure>
            <div className="mt-8 grid gap-x-10 md:grid-cols-3">
              {content.dashboards.layout.roles.map((role) => (
                <div key={role.title} className="border-t border-ink py-5">
                  <p className="font-mono text-sm tracking-[.12em] text-accent uppercase">{role.title}</p>
                  <p className="mt-3 text-base leading-relaxed text-body">{role.body}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="mt-16 grid gap-10 border-t border-hairline pt-16 md:mt-20 md:grid-cols-12 md:items-start md:pt-20">
            <Reveal className="md:col-span-5">
              <h3 className="font-display text-3xl leading-tight text-ink">{content.dashboards.hierarchy.headline}</h3>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-body">{content.dashboards.hierarchy.body}</p>
              <div className="mt-10">
                {content.dashboards.hierarchy.levels.map((level) => (
                  <div key={level.index} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-ink py-5">
                    <p className="font-mono text-sm text-accent">{level.index}</p>
                    <div>
                      <p className="font-mono text-sm tracking-[.12em] text-ink uppercase">{level.title}</p>
                      <p className="mt-2 text-base text-body">{level.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal className="md:col-span-7" delay={0.06}>
              <Image src={content.dashboards.hierarchy.image.src} alt={content.dashboards.hierarchy.image.alt} width={content.dashboards.hierarchy.image.width} height={content.dashboards.hierarchy.image.height} sizes="(max-width: 767px) 92vw, 56vw" className="h-auto w-full rounded-2xl bg-white" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-hairline bg-ink py-20 text-white md:py-32">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow text-blue-300">{content.dashboards.application.eyebrow}</p>
            <div className="mt-5 grid gap-8 md:grid-cols-12">
              <h2 className="font-display text-h1 [line-height:var(--text-h1--line-height)] md:col-span-7">{content.dashboards.application.headline}</h2>
              <BodyCopy paragraphs={content.dashboards.application.body} className="text-white/70 md:col-span-5" />
            </div>
          </Reveal>
          <Reveal className="mt-14 md:mt-20" delay={0.06}>
            <figure>
              <div className="overflow-hidden rounded-2xl bg-white">
                <Image src={content.dashboards.application.image.src} alt={content.dashboards.application.image.alt} width={content.dashboards.application.image.width} height={content.dashboards.application.image.height} sizes="92vw" className="h-auto w-full" />
              </div>
              <figcaption className="mt-4 text-sm text-white/60">{content.dashboards.application.image.caption}</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-hairline py-20 md:py-32">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow">{content.outcome.eyebrow}</p>
            <h2 className="mt-5 max-w-5xl font-display text-h1 text-ink [line-height:var(--text-h1--line-height)]">{content.outcome.headline}</h2>
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-2">
            {content.outcome.areas.map((area, index) => (
              <Reveal key={area.index} delay={index * 0.06}>
                <div className="border-t border-ink pt-6">
                  <p className="font-mono text-sm tracking-[.12em] text-accent uppercase">{area.index} · {area.level}</p>
                  <h3 className="mt-5 font-display text-3xl leading-tight text-ink">{area.title}</h3>
                  <p className="mt-5 max-w-xl text-base leading-relaxed text-body">{area.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14 border-t border-hairline pt-8">
            <p className="max-w-4xl font-display text-2xl leading-snug text-ink md:text-3xl">{content.outcome.closing}</p>
          </Reveal>
        </div>
      </section>
    </article>
  );
}
