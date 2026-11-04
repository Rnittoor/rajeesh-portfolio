import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

type VisualProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
};

function Visual({ src, alt, className = "aspect-video", sizes = "(max-width: 1440px) 92vw, 1320px" }: VisualProps) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-ink ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} className="object-contain" />
    </div>
  );
}

export function FifaTeamworkCaseStudy() {
  return (
    <article>
      <header className="overflow-hidden pt-32 md:pt-40">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow">Information Visualisation · Motion Design</p>
            <h1 className="mt-6 max-w-6xl font-display text-ink [font-size:clamp(3.25rem,6vw,6.25rem)] [letter-spacing:-.03em] [line-height:.97]">
              Visualising Teamwork in FIFA World Cup Finals
            </h1>
            <p className="mt-8 max-w-3xl text-lead text-body">
              A visual exploration of how players from different clubs, leagues and continents come together as a national team for the FIFA World Cup.
            </p>
          </Reveal>

          <Reveal className="mt-10 pb-14 md:mt-14 md:pb-20" delay={0.06}>
            <Visual
              src="/projects/fifa-teamwork-value/thumbnail.png"
              alt="A person viewing the FIFA World Cup Teamwork Value visualisation on a large display"
              className="aspect-video"
            />
          </Reveal>
        </div>
      </header>

      <section className="border-t border-hairline py-16 md:py-24">
        <div className="container-content">
          <div className="grid gap-10 md:grid-cols-12">
            <Reveal className="md:col-span-3">
              <p className="eyebrow">The idea</p>
            </Reveal>
            <Reveal className="md:col-span-8 md:col-start-5" delay={0.05}>
              <h2 className="font-display text-[clamp(2.35rem,4.6vw,4.25rem)] leading-[1.02] tracking-[-.025em] text-ink">
                Turning football data into a visual story
              </h2>
              <div className="mt-8 max-w-3xl space-y-5 text-lg text-body">
                <p>
                  This project started from two personal interests: information visualisation and sport. I wanted to explore how data could do more than explain statistics — how it could become a visual narrative.
                </p>
                <p>
                  Looking across FIFA Men&rsquo;s World Cup finals from 1930–2018, I explored the complexity behind each national team: players arriving from different clubs, leagues, countries and continents and coming together for one tournament.
                </p>
                <p>
                  I introduced “Teamwork Value” as an exploratory lens for representing this complexity, using the number of clubs and players involved as part of the visual model.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-10 md:mt-14" delay={0.08}>
            <Visual
              src="/projects/fifa-teamwork-value/teamwork-value-exploration.png"
              alt="Manual World Cup data exploration and the exploratory Teamwork Value model"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-hairline bg-tint py-16 md:py-24">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow">Process</p>
            <div className="mt-5 grid gap-8 md:grid-cols-12 md:items-end">
              <h2 className="font-display text-[clamp(2.35rem,4.6vw,4.25rem)] leading-[1.02] tracking-[-.025em] text-ink md:col-span-7">
                From data to visual language
              </h2>
              <p className="text-lg text-body md:col-span-5">
                I gathered and structured information across tournaments, teams, players, clubs, continents and match details, then explored how those relationships could be encoded into a single visual system.
              </p>
            </div>
            <p className="mt-6 max-w-3xl text-lg text-body">
              The design evolved through data analysis, sketches and visual experiments before moving into the final interactive concept.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-2">
            <Reveal>
              <Visual
                src="/projects/fifa-teamwork-value/data-analysis.png"
                alt="Tableau and spreadsheet analysis of players, clubs, continents and travel distance"
                className="aspect-[16/10] bg-canvas"
                sizes="(max-width: 768px) 92vw, 46vw"
              />
            </Reveal>
            <Reveal delay={0.06}>
              <Visual
                src="/projects/fifa-teamwork-value/visual-system-sketches.png"
                alt="Sketches exploring the Teamwork Value timeline, football-derived hexagons and match highlights"
                className="aspect-[16/10] bg-canvas"
                sizes="(max-width: 768px) 92vw, 46vw"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-ink py-18 text-canvas md:py-26">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow text-blue-300">The visual system</p>
            <div className="mt-5 grid gap-8 md:grid-cols-12 md:items-end">
              <h2 className="font-display text-h1 leading-[var(--text-h1--line-height)] tracking-[var(--text-h1--letter-spacing)] text-canvas md:col-span-7">
                One system, multiple levels of the story
              </h2>
              <div className="space-y-4 text-lg text-canvas/70 md:col-span-5">
                <p>The final visualisation moves between a historical overview and individual World Cup final states.</p>
                <p>The overview maps tournaments across time and Teamwork Value. Selecting a team reveals another layer of the story — connecting players, clubs, continents, travel distance and match details.</p>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-12 md:mt-16" delay={0.05}>
            <Visual
              src="/projects/fifa-teamwork-value/world-cup-overview.png"
              alt="Historical overview of FIFA World Cup finalists plotted by year and exploratory Teamwork Value"
            />
          </Reveal>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <Reveal>
              <Visual
                src="/projects/fifa-teamwork-value/germany-detail.png"
                alt="Germany 2002 runner-up detail showing players, clubs, travel and match information"
                sizes="(max-width: 768px) 92vw, 46vw"
              />
            </Reveal>
            <Reveal delay={0.06}>
              <Visual
                src="/projects/fifa-teamwork-value/brazil-detail.png"
                alt="Brazil 2002 winner detail showing players, clubs, travel and match information"
                sizes="(max-width: 768px) 92vw, 46vw"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-hairline py-18 md:py-26">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow">Motion</p>
            <div className="mt-5 grid gap-8 md:grid-cols-12 md:items-end">
              <h2 className="font-display text-h1 leading-[var(--text-h1--line-height)] tracking-[var(--text-h1--letter-spacing)] text-ink md:col-span-7">
                Making the data unfold over time
              </h2>
              <p className="text-lg text-body md:col-span-5">
                Motion became another layer of the storytelling. Rather than presenting the dataset as a static graphic, transitions reveal relationships progressively — moving from the history of the tournament into individual teams and match details.
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-10 md:mt-14" delay={0.06}>
            <video
              controls
              playsInline
              preload="metadata"
              poster="/projects/fifa-teamwork-value/world-cup-overview.png"
              className="aspect-video w-full rounded-2xl bg-ink"
            >
              <source src="/projects/fifa-teamwork-value/fifa-motion.mp4" type="video/mp4" />
              Your browser does not support embedded video.
            </video>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-hairline bg-tint py-16 md:py-20">
        <Reveal className="container-content">
          <p className="eyebrow">Reflection</p>
          <p className="mt-6 max-w-5xl font-display text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.16] tracking-[-.015em] text-ink">
            This exploration changed how I think about information visualisation — not simply as a way of displaying data, but as a way of constructing a narrative: deciding what to reveal, what to connect and how people move between different levels of information.
          </p>
          <Link href="/#work" className="mt-8 inline-flex items-center gap-2 text-base text-accent transition-colors hover:text-accent-hover">
            <span aria-hidden="true">←</span> Back to selected work
          </Link>
        </Reveal>
      </section>
    </article>
  );
}
