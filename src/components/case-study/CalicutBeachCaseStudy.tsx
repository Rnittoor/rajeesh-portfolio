import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { MapViewer } from "@/components/case-study/MapViewer";
import { Reveal } from "@/components/ui/Reveal";

const projectPath = "/projects/calicut-beach";

function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-8 md:grid-cols-12 md:items-start">
      <Reveal className="md:col-span-3">
        <p className="eyebrow">{eyebrow}</p>
      </Reveal>
      <Reveal className="md:col-span-8 md:col-start-5" delay={0.05}>
        <h2 className="font-display text-[clamp(2.35rem,4.6vw,4.25rem)] leading-[1.02] tracking-[-.025em] text-ink">
          {title}
        </h2>
        <div className="mt-7 max-w-3xl space-y-5 text-lg text-body">{children}</div>
      </Reveal>
    </div>
  );
}

export function CalicutBeachCaseStudy() {
  return (
    <article>
      <header className="overflow-hidden pt-32 md:pt-40">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow">Service Design · Experience Design</p>
            <h1 className="mt-6 max-w-6xl font-display text-ink [font-size:clamp(3.25rem,5.2vw,5.5rem)] [letter-spacing:-.03em] [line-height:.97]">
              Connecting the Calicut Beach experience
            </h1>
            <p className="mt-8 max-w-3xl text-lead text-body">
              A field-researched service design project connecting visitor journeys, transport, amenities, activities and destination information across the Calicut Beach experience.
            </p>
          </Reveal>

          <Reveal className="mt-10 pb-14 md:mt-14 md:pb-20" delay={0.06}>
            <figure>
              <div className="relative aspect-[16/8] overflow-hidden rounded-2xl bg-tint md:aspect-[16/7]">
                <Image
                  src={`${projectPath}/calicut-beach-context.jpg`}
                  alt="Visitors, vendors and public activity along Calicut Beach"
                  fill
                  priority
                  sizes="(max-width: 1440px) 92vw, 1320px"
                  className="object-cover object-center"
                />
              </div>
              <figcaption className="mt-4 text-base text-muted">
                Calicut Beach as a shared environment for recreation, food, transport, public services and everyday life.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </header>

      <section className="border-t border-hairline py-16 md:py-24">
        <div className="container-content">
          <SectionHeading eyebrow="01 — The place" title="The experience extended far beyond the shoreline.">
            <p>
              I carried out the project independently, beginning with on-site fieldwork at Calicut Beach—observing and photographing the physical environment, talking with visitors and documenting the touchpoints around their journeys.
            </p>
            <p>
              The place already brought together attractions, food, activities, transport, amenities, public services and cultural experiences. But visitors encountered them through disconnected touchpoints and fragmented information. I examined that end-to-end experience as a service system rather than treating each issue separately.
            </p>
          </SectionHeading>
        </div>
      </section>

      <section className="border-t border-hairline bg-tint py-16 md:py-24">
        <div className="container-content">
          <SectionHeading eyebrow="02 — Understanding the experience" title="Following the experience as it happened.">
            <p>
              The field research combined on-site observation, visitor conversations, touchpoint documentation and a diary-style study with two real participants. Hari travelled from outside Calicut; Kripa experienced the journey as someone from the city.
            </p>
            <p>
              They recorded their end-to-end journeys and photographs through a mobile research tool. Analysing those records alongside the wider research made the sequence of touchpoints—and the differences between the two journeys—visible.
            </p>
          </SectionHeading>

          <Reveal className="mt-10 md:mt-14" delay={0.07}>
            <MapViewer
              src={`${projectPath}/participant-journeys.png`}
              alt="Mapped journeys and touchpoint emotions for Hari and Kripa"
              caption="Two participant journeys connected geographic movement with changing touchpoint emotions."
            />
          </Reveal>

          <Reveal className="mt-10 md:mt-14" delay={0.07}>
            <div className="border-y border-hairline py-10 md:py-14">
              <p className="eyebrow">Research synthesis</p>
              <h3 className="mt-5 max-w-4xl font-display text-[clamp(2rem,3.6vw,3.25rem)] leading-[1.05] tracking-[-.02em] text-ink">
                The experience was rich, but fragmented.
              </h3>

              <div className="mt-9 grid gap-8 md:mt-11 md:grid-cols-2 md:gap-12">
                <div>
                  <p className="font-mono text-sm uppercase tracking-[.12em] text-accent">Friction</p>
                  <p className="mt-4 max-w-xl text-lg leading-[1.6] text-body">
                    Information was difficult to find across culture and history, navigation and transport, parking, events and safety. The experience also exposed practical issues around lighting and waste.
                  </p>
                </div>

                <div className="border-t border-hairline pt-8 md:border-l md:border-t-0 md:pl-12 md:pt-0">
                  <p className="font-mono text-sm uppercase tracking-[.12em] text-accent">What already worked</p>
                  <p className="mt-4 max-w-xl text-lg leading-[1.6] text-body">
                    Visitors valued the beach itself, food, public spaces, skating, historic surroundings, wide roads, local transport and police presence.
                  </p>
                </div>
              </div>

              <p className="mt-10 max-w-4xl font-display text-[clamp(1.5rem,2.2vw,2rem)] leading-[1.24] tracking-[-.012em] text-ink">
                The opportunity wasn&apos;t to redesign the beach. It was to connect what already worked and make the wider experience easier to navigate.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-hairline py-16 md:py-24">
        <div className="container-content">
          <SectionHeading eyebrow="03 — Seeing the service as a system" title="The beach was already a service ecosystem.">
            <p>
              I mapped the existing experience to expose the dependencies behind visible touchpoints: arrival and return, transport, food, activities, safety, maintenance, permissions and civic support.
            </p>
            <p>
              The blueprint connected what visitors encountered with the people and services working behind it. The ecosystem view then made the wider exchange between visitors, commercial operators and public actors explicit.
            </p>
          </SectionHeading>

          <Reveal className="mt-10 md:mt-14" delay={0.07}>
            <MapViewer
              src={`${projectPath}/service-blueprint.png`}
              alt="Calicut Beach service blueprint from arrival through activities to return"
              caption="The service blueprint connected visitor actions, physical evidence, frontstage services, backstage work and operational support."
              wide={false}
            />
          </Reveal>

          <Reveal className="mt-10 md:mt-14" delay={0.07}>
            <MapViewer
              src={`${projectPath}/service-ecosystem.png`}
              alt="Calicut Beach visitor service ecosystem and value exchanges"
              caption="The visitor experience depended on transport, food, activities, accommodation, safety and civic services working as one ecosystem."
              wide={false}
            />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-hairline bg-ink py-16 text-canvas md:py-24">
        <div className="container-content">
          <div className="grid gap-8 md:grid-cols-12 md:items-start">
            <Reveal className="md:col-span-3">
              <p className="eyebrow text-blue-300">04 — Connecting the experience</p>
            </Reveal>
            <Reveal className="md:col-span-8 md:col-start-5" delay={0.05}>
              <h2 className="font-display text-[clamp(2.35rem,4.6vw,4.25rem)] leading-[1.02] tracking-[-.025em] text-canvas">
                The interface emerged from the service model.
              </h2>
              <div className="mt-7 max-w-3xl space-y-5 text-lg text-canvas/75">
                <p>
                  I translated the research into connected opportunity areas across discovery, culture, transport, food, activities, facilities, accommodation and safety.
                </p>
                <p>
                  The information architecture organised those services into Home, Ride, Activities and Profile—turning a place-based system into a structure visitors could move through.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-8 [&_figcaption]:text-canvas/80 md:mt-14 md:grid-cols-2">
            <Reveal>
              <MapViewer
                src={`${projectPath}/service-opportunities.png`}
                alt="Service opportunity framework connecting visitor needs to proposed ideas"
                caption="Needs and service providers were translated into a connected set of experience ideas."
                wide={false}
              />
            </Reveal>
            <Reveal delay={0.06}>
              <MapViewer
                src={`${projectPath}/information-architecture.png`}
                alt="Information architecture for the Calicut Beach mobile service concept"
                caption="The architecture connected destination content, activities, transport and practical visitor services."
                wide={false}
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-hairline py-16 md:py-24">
        <div className="container-content">
          <SectionHeading eyebrow="05 — Prototyping the service" title="One proposed experience across the physical journey.">
            <p>
              I designed a mobile service concept that connected destination discovery, attractions, cultural information, activities, amenities, navigation, transport, parking, public services and booking ideas.
            </p>
            <p>
              The proposed experience was taken into concept-stage user testing to evaluate the overall direction. It remained a prototype rather than a launched product.
            </p>
          </SectionHeading>

          <Reveal className="mt-10 md:mt-14" delay={0.07}>
            <MapViewer
              src={`${projectPath}/interface-system.png`}
              alt="Calicut Beach interface system covering discovery, navigation, transport, parking and activities"
              caption="The full interface board connected discovery, directions, travel options, parking, activities and ticket concepts. Open it to inspect the original board in detail."
              wide={false}
            />
          </Reveal>

          <Reveal className="mt-10 md:mt-14" delay={0.07}>
            <figure>
              <video
                controls
                playsInline
                preload="metadata"
                aria-label="Calicut Beach destination and directions prototype"
                className="aspect-video w-full rounded-2xl bg-ink object-contain"
              >
                <source src={`${projectPath}/destination-directions-prototype.mp4`} type="video/mp4" />
                Your browser does not support embedded video.
              </video>
              <figcaption className="mt-4 text-base text-muted">
                The end-to-end prototype moves from destination selection into routes, travel options, auto and cab information, and local bus details.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-hairline bg-tint py-16 md:py-20">
        <Reveal className="container-content">
          <p className="eyebrow">Reflection</p>
          <p className="mt-6 max-w-5xl font-display text-[clamp(1.5rem,2.2vw,2rem)] leading-[1.24] tracking-[-.012em] text-ink">
            This project reinforced that improving a place-based experience means looking beyond individual screens—understanding the journeys, services and people around them before deciding what the interface needs to connect.
          </p>
          <Link href="/#work" className="mt-8 inline-flex items-center gap-2 text-base text-accent transition-colors hover:text-accent-hover">
            <span aria-hidden="true">←</span> Back to selected work
          </Link>
        </Reveal>
      </section>
    </article>
  );
}
