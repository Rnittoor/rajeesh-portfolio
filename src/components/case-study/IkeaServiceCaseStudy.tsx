import Image from "next/image";
import { MapViewer } from "@/components/case-study/MapViewer";
import { Reveal } from "@/components/ui/Reveal";
import { ikeaServiceCaseStudy as content } from "@/data/ikeaServiceCaseStudy";

function Copy({ children, className = "" }: { children: string; className?: string }) {
  return (
    <div className={`space-y-5 text-lg leading-relaxed text-body ${className}`}>
      {children.split("\n\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </div>
  );
}

function ArtifactCrop({ src, alt, caption, position, unoptimized = false }: { src: string; alt: string; caption: string; position: string; unoptimized?: boolean }) {
  return (
    <figure className="min-w-0">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-[0_16px_50px_rgba(24,35,54,.08)]">
        <Image src={src} alt={alt} fill sizes="(max-width: 768px) 92vw, 30vw" unoptimized={unoptimized} className="scale-[1.75] object-cover md:scale-[1.55]" style={{ objectPosition: position, transformOrigin: position }} />
      </div>
      <figcaption className="mt-4 text-base text-muted">{caption}</figcaption>
    </figure>
  );
}

function SectionIntro({ eyebrow, headline, copy, compact = false, reduced = false }: { eyebrow: string; headline: string; copy?: string; compact?: boolean; reduced?: boolean }) {
  const headingSize = reduced
    ? compact
      ? "text-[clamp(2.125rem,3.8vw,3.75rem)] leading-[1.02] tracking-[-.025em]"
      : "text-[clamp(2.25rem,4.5vw,4rem)] leading-[1.02] tracking-[-.025em]"
    : compact
      ? "text-[clamp(2.25rem,4.5vw,4.5rem)] leading-[1.02] tracking-[-.025em]"
      : "text-h1 [line-height:var(--text-h1--line-height)]";

  return (
    <Reveal>
      <p className="eyebrow">{eyebrow}</p>
      <div className="mt-5 grid gap-8 md:grid-cols-12">
        <h2 className={`font-display text-ink md:col-span-7 ${headingSize}`}>{headline}</h2>
        {copy ? <Copy className="md:col-span-5">{copy}</Copy> : null}
      </div>
    </Reveal>
  );
}

function MarketLanes() {
  const flags: Record<string, string> = {
    Austria: "/flags/austria.svg",
    Canada: "/flags/canada.svg",
    Germany: "/flags/germany.svg",
    Sweden: "/flags/sweden.svg",
    US: "/flags/us.svg",
  };

  return (
    <div className="space-y-10 md:space-y-12" aria-label="Comparison of five market workflows">
      {content.seo.marketLanes.map((lane) => (
        <div key={lane.market} className="md:grid md:grid-cols-[10rem_1fr] md:items-start md:gap-8">
          <p className="mb-4 flex items-center gap-3 font-display text-xl text-canvas md:mb-0">
            <Image src={flags[lane.market]} alt="" aria-hidden="true" width={27} height={18} unoptimized className="h-[18px] w-[27px] shrink-0 rounded-[2px] object-contain" />
            {lane.market}
          </p>
          <div className="flex flex-wrap items-center gap-y-3">
            {lane.stages.map((stage, index) => (
              <div key={`${lane.market}-${stage}-${index}`} className="flex items-center whitespace-nowrap">
                <span className="text-sm text-canvas/65">{stage}</span>
                {index < lane.stages.length - 1 ? <span aria-hidden="true" className="mx-2.5 text-xs font-light text-blue-300/70 md:mx-3">→</span> : null}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function IkeaServiceCaseStudy() {
  return (
    <article className="ikea-service-case-study">
      <header className="pt-36 pb-0 md:pt-48">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow">{content.hero.eyebrow}</p>
            <h1 className="mt-5 max-w-6xl font-display text-ink [font-size:var(--text-display)] [line-height:var(--text-display--line-height)] [letter-spacing:var(--text-display--letter-spacing)]">{content.hero.headline}</h1>
            <p className="mt-8 max-w-4xl text-lead text-body">{content.hero.intro}</p>
          </Reveal>
          <Reveal className="mt-12 grid gap-0 border-y border-hairline md:grid-cols-2" delay={0.06}>
            {content.hero.metadata.map((item) => (
              <div key={item.label} className="border-b border-hairline py-5 last:border-b-0 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0">
                <p className="font-mono text-xs uppercase tracking-[.15em] text-muted">{item.label}</p>
                <p className="mt-2 text-base text-ink">{item.value}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </header>

      <section className="border-t border-hairline py-20 md:py-28">
        <div className="container-content">
          <SectionIntro {...content.context} />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {content.context.workstreams.map((stream) => (
              <Reveal key={stream.label} className={stream.emphasis === "primary" ? "md:col-span-2" : ""}>
                <div className="h-full border-t border-ink py-6">
                  <p className="font-display text-2xl text-ink">{stream.label}</p>
                  <p className="mt-4 max-w-2xl text-base text-body">{stream.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-canvas md:py-28">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow text-blue-300">{content.seo.opening.eyebrow}</p>
            <h2 className="mt-5 max-w-5xl font-display text-h1 text-canvas [line-height:var(--text-h1--line-height)]">{content.seo.opening.headline}</h2>
          </Reveal>
          <Reveal className="mt-12" delay={0.08}>
            <Copy className="max-w-3xl text-canvas/75">{content.seo.opening.copy}</Copy>
            <div className="mt-7"><MarketLanes /></div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-content">
          <SectionIntro {...content.seo.approach} reduced />
          <Reveal className="mt-12">
            <MapViewer src="/projects/ikea-service/L2 Canada.jpg" alt="Level 2 current-state content process flow for Canada" caption="Canada · Level 2 as-is Content Process Flow." />
          </Reveal>
          <details className="mt-10 border-y border-hairline py-6">
            <summary className="cursor-pointer font-display text-xl text-ink">Explore the other four Level 2 market maps</summary>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              {["Austria", "Germany", "Sweden", "US"].map((market) => (
                <MapViewer key={market} src={`/projects/ikea-service/L2 ${market}.jpg`} alt={`${market} Level 2 current-state content process flow`} caption={`${market} · Level 2 as-is Content Process Flow.`} wide={false} />
              ))}
            </div>
          </details>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-content">
          <SectionIntro {...content.seo.operational} reduced />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {content.seo.operational.details.map((item, index) => (
              <Reveal key={item.index}>
                <ArtifactCrop
                  src="/projects/ikea-service/SEO Journey Atlas - Canada.jpg"
                  alt={`Canada Level 3 operational map detail: ${item.title}`}
                  caption={`${item.index} · ${item.title}. ${item.body}`}
                  position={["32% 25%", "70% 25%", "88% 25%"][index]}
                />
              </Reveal>
            ))}
          </div>
          <details className="mt-10 border-y border-hairline py-6">
            <summary className="cursor-pointer font-display text-xl text-ink">Explore the full operational map</summary>
            <div className="mt-6"><MapViewer src="/projects/ikea-service/SEO Journey Atlas - Canada.jpg" alt="Full Canada Level 3 content process flow" caption="Canada · Level 3 as-is Content Process Flow." /></div>
          </details>
          <details className="mt-6 border-b border-hairline py-6">
            <summary className="cursor-pointer font-display text-xl text-ink">Explore the other four Level 3 market maps</summary>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              {[
                ["Austria", "SEO Journey Atlas - Austria.jpg"],
                ["Germany", "SEO Journey Atlas - Germany.jpg"],
                ["Sweden", "SEO Journey Atlas - Sweden.jpg"],
                ["US", "SEO Journey Atlas- Us.jpg"],
              ].map(([market, file]) => (
                <MapViewer key={market} src={`/projects/ikea-service/${file}`} alt={`${market} Level 3 content process flow`} caption={`${market} · Level 3 as-is Content Process Flow.`} wide={false} />
              ))}
            </div>
          </details>
        </div>
      </section>

      <section className="border-t border-hairline py-20 md:py-28">
        <div className="container-content">
          <SectionIntro {...content.seo.comparison} reduced />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {content.seo.comparison.observations.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}><div className="border-t border-ink pt-6"><p className="font-display text-2xl text-ink">{item.title}</p><p className="mt-4 text-base text-body">{item.body}</p></div></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-hairline py-16 md:py-24">
        <div className="container-content">
          <SectionIntro {...content.sem.opening} compact reduced />
          <div className="mt-10 border-t border-hairline pt-10 md:mt-14 md:pt-14">
            <SectionIntro eyebrow={content.sem.research.eyebrow} headline={content.sem.research.headline} compact reduced />
            <div className="mt-10 grid gap-10 md:grid-cols-12 md:items-start">
              <Reveal className="md:col-span-7">
                <ArtifactCrop src="/projects/ikea-service/sem-research-map.webp" alt="Detail from the SEM Feed Management research synthesis" caption="A focused detail from the SEM research synthesis." position="50% 36%" unoptimized />
              </Reveal>
              <Reveal className="md:col-span-5" delay={0.06}>
                <ul className="border-t border-ink">
                  {content.sem.research.findings.map((finding, index) => (
                    <li key={finding} className="grid grid-cols-[2rem_1fr] gap-4 border-b border-hairline py-4">
                      <span className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</span>
                      <span className="text-base text-body">{finding}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>

          <div className="mt-10 border-t border-hairline pt-10 md:mt-14 md:pt-14">
            <SectionIntro eyebrow={content.sem.problems.eyebrow} headline={content.sem.problems.headline} compact reduced />
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {content.sem.problems.themes.map((theme, index) => (
                <Reveal key={theme.title} delay={index * 0.05}>
                  <div className="border-t border-ink pt-5">
                    <p className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</p>
                    <h3 className="mt-4 font-display text-2xl text-ink">{theme.title}</h3>
                    <Copy className="mt-4 text-base">{theme.body}</Copy>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-10 border-t border-hairline pt-10 md:mt-14 md:pt-14">
            <SectionIntro eyebrow={content.sem.mapping.eyebrow} headline={content.sem.mapping.headline} compact reduced />
            <Reveal className="mt-10">
              <div className="overflow-x-auto pb-3">
                <ol className="grid min-w-[48rem] grid-cols-4 border-y border-hairline">
                  {content.sem.mapping.stages.map((stage, index) => (
                    <li key={stage} className="border-r border-hairline px-5 py-6 last:border-r-0">
                      <span className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</span>
                      <p className="mt-3 font-display text-xl text-ink">{stage}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
            <div className="mt-10">
              <MapViewer src="/projects/ikea-service/explore-sem-current-state.jpg" alt="Final end-to-end as-is SEM Feed Management process map" caption="Final as-is Feed Management process map · Request → Implement & test → Validation → Deployment." />
            </div>
          </div>

          <div className="mt-10 border-t border-hairline pt-10 md:mt-14 md:pt-14">
            <SectionIntro {...content.sem.outcome} compact reduced />
          </div>
        </div>
      </section>

      <section className="border-y border-hairline bg-tint py-20 md:py-28">
        <div className="container-content">
          <SectionIntro eyebrow={content.synthesis.eyebrow} headline={content.synthesis.headline} reduced />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {content.synthesis.columns.map((column) => <div key={column.title} className="border-t border-ink pt-6"><h3 className="font-display text-3xl text-ink">{column.title}</h3>{column.rows.map(([, value]) => <p key={value} className="mt-4 max-w-xl text-base leading-relaxed text-body">{value}</p>)}</div>)}
          </div>
          <p className="mt-12 max-w-4xl font-display text-2xl leading-snug text-ink">{content.synthesis.closing}</p>
        </div>
      </section>
    </article>
  );
}
