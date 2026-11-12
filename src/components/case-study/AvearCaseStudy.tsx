import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

const projectPath = "/projects/avear";

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

function Visual({
  src,
  alt,
  caption,
  size = "mediumWide",
  priority = false,
  width = 3507,
  height = 2480,
}: {
  src: string;
  alt: string;
  caption: string;
  size?: "medium" | "mediumWide" | "detail";
  priority?: boolean;
  width?: number;
  height?: number;
}) {
  const widthClass = {
    medium: "md:w-[74%]",
    mediumWide: "md:w-[82%]",
    detail: "md:w-[85%]",
  }[size];

  return (
    <figure className={`mx-auto w-full ${widthClass}`}>
      <div className="overflow-hidden rounded-2xl bg-white shadow-[0_16px_50px_rgba(24,35,54,.08)]">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes="(max-width: 1440px) 92vw, 1320px"
          className="h-auto w-full"
        />
      </div>
      <figcaption className="mt-4 text-base text-muted">{caption}</figcaption>
    </figure>
  );
}

export function AvearCaseStudy() {
  return (
    <article>
      <header className="overflow-hidden pt-32 md:pt-40">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow">Product Design · Physical Prototyping</p>
            <h1 className="mt-6 max-w-6xl font-display text-ink [font-size:clamp(3.25rem,5.2vw,5.5rem)] [letter-spacing:-.03em] [line-height:.97]">
              Designing a wearable response to an unconscious behaviour
            </h1>
            <p className="mt-8 max-w-3xl text-lead text-body">
              Created during the early stages of the COVID-19 pandemic, AVEAR was a rapid product concept exploring whether a wearable sensory cue and immediately accessible hand sanitiser could make unconscious face-touching more noticeable.
            </p>
          </Reveal>

          <Reveal className="mt-10 pb-12 md:mt-12 md:pb-16" delay={0.06}>
            <Visual
              src={`${projectPath}/avear-kit.jpg`}
              alt="AVEAR left- and right-hand wearable concepts with replaceable odour capsules"
              caption="AVEAR combined a refillable sanitiser reservoir with a replaceable odour capsule in a hand-worn concept."
              size="medium"
              priority
            />
          </Reveal>
        </div>
      </header>

      <section className="border-t border-hairline py-14 md:py-20">
        <div className="container-content">
          <SectionHeading eyebrow="01 — The problem" title="Interrupting an unconscious behaviour">
            <p>
              In early 2020, concern around hand-to-face contact and contaminated surfaces was changing how people thought about everyday behaviour. The Global Grad Show COVID-19 open design challenge invited designers to respond quickly to emerging problems within that context.
            </p>
            <p>
              I framed one question: how might a wearable make an unconscious movement towards the face noticeable while keeping hand sanitiser immediately accessible?
            </p>
          </SectionHeading>

          <Reveal className="mt-9 md:mt-12" delay={0.07}>
            <Visual
              src={`${projectPath}/concept-sketches.jpg`}
              alt="Early AVEAR sketches exploring a hand-worn form, odour capsule and sanitiser reservoir"
              caption="Early sketches explored how a sensory cue and sanitiser could sit close to the movement they were intended to interrupt."
            />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-hairline bg-tint py-14 md:py-20">
        <div className="container-content">
          <SectionHeading eyebrow="02 — The idea" title="Combining reminder and response">
            <p>
              AVEAR was not simply a wearable sanitiser. It brought two ideas together in one hand-worn form: a sensory reminder and an immediately available response.
            </p>
          </SectionHeading>

          <Reveal className="mt-9 md:mt-12" delay={0.07}>
            <div className="grid border-y border-hairline md:grid-cols-2">
              <div className="py-9 md:py-12 md:pr-12">
                <p className="font-mono text-sm uppercase tracking-[.12em] text-accent">Reminder</p>
                <p className="mt-4 max-w-xl text-lg leading-[1.6] text-body">
                  A replaceable odour capsule was intended to create a noticeable sensory cue as the hand approached the face.
                </p>
              </div>
              <div className="border-t border-hairline py-9 md:border-l md:border-t-0 md:py-12 md:pl-12">
                <p className="font-mono text-sm uppercase tracking-[.12em] text-accent">Response</p>
                <p className="mt-4 max-w-xl text-lg leading-[1.6] text-body">
                  A refillable sanitiser reservoir kept sanitiser directly on the hand, available if the wearer needed it.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-9 md:mt-12" delay={0.07}>
            <Visual
              src={`${projectPath}/working-concept.jpg`}
              alt="AVEAR working-concept board showing the proposed sensory cue and sanitiser interaction"
              caption="The proposed interaction connected a sensory reminder, on-hand sanitiser and a form intended to leave everyday hand movement possible."
              size="medium"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-hairline py-14 md:py-20">
        <div className="container-content">
          <SectionHeading eyebrow="03 — Finding the form" title="Finding a form that follows the hand">
            <p>
              I explored how the product could occupy the hand without becoming a conventional handheld object. I traced the hand, tested possible support areas and built simple paper forms to understand how the object could sit around the thumb and index finger.
            </p>
            <p>
              These were ergonomic and form explorations rather than formal ergonomic validation. The goal was to understand the relationship between the object, the body and movement.
            </p>
          </SectionHeading>

          <Reveal className="mt-9 md:mt-12" delay={0.07}>
            <Visual
              src={`${projectPath}/form-evolution.jpg`}
              alt="AVEAR form evolution through hand tracing and paper prototypes"
              caption="Hand tracing and paper prototypes helped translate the idea into a form that followed the hand."
              size="detail"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-hairline bg-tint py-14 md:py-20">
        <div className="container-content">
          <SectionHeading eyebrow="04 — Making it tangible" title="Making the idea tangible, quickly">
            <p>
              With access to workshops and fabrication limited, I built a quick prototype at home from flexible plastic and elastic bands. The goal was not to resolve the product for manufacture, but to make the interaction tangible — how it could fit around the thumb and index finger, dispense sanitiser and be refilled.
            </p>
          </SectionHeading>

          <Reveal className="mt-9 md:mt-12" delay={0.07}>
            <Visual
              src={`${projectPath}/quick-prototype.jpg`}
              alt="Improvised AVEAR prototype showing fit, reservoir position, dispensing and refilling"
              caption="The improvised prototype made fit, reservoir position, dispensing and refilling visible enough to examine physically."
              size="detail"
            />
          </Reveal>

          <Reveal className="mt-12 md:mt-16" delay={0.07}>
            <div className="grid gap-8 md:grid-cols-12 md:items-end">
              <h3 className="font-display text-[clamp(2rem,3.6vw,3.25rem)] leading-[1.05] tracking-[-.02em] text-ink md:col-span-7">
                Exploring everyday use
              </h3>
              <p className="text-lg text-body md:col-span-5">
                I demonstrated the prototype while carrying luggage, holding handles and operating a tap to explore how it might coexist with ordinary hand movements. This was a self-demonstration, not formal usability or functional testing.
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-9 md:mt-12" delay={0.07}>
            <Visual
              src={`${projectPath}/everyday-use.jpg`}
              alt="AVEAR rough prototype demonstrated during everyday hand movements"
              caption="Everyday actions were used to communicate the intended relationship between the wearable and normal hand movement."
              size="medium"
              width={3384}
              height={2214}
            />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-hairline py-14 md:py-20">
        <div className="container-content">
          <SectionHeading eyebrow="05 — Resolving the concept" title="Resolving the product system">
            <p>
              I developed the rough prototype into a more resolved proposed product system: a refillable transparent sanitiser reservoir, a replaceable odour capsule, attachment bands, left- and right-hand variants, and an outlet and cap.
            </p>
            <p>
              The final imagery describes a concept, not a manufactured or production-ready product.
            </p>
          </SectionHeading>

          <Reveal className="mt-9 md:mt-12" delay={0.07}>
            <Visual
              src={`${projectPath}/product-system.jpg`}
              alt="AVEAR proposed product components and materials"
              caption="The proposed product system defined the relationship between the reservoir, replaceable odour capsule, attachment bands and use instructions."
              size="detail"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-hairline bg-ink py-16 text-canvas md:py-20">
        <div className="container-content grid gap-10 md:grid-cols-12 md:items-start">
          <Reveal className="md:col-span-3">
            <p className="eyebrow text-blue-300">Recognition / context</p>
          </Reveal>
          <Reveal className="md:col-span-8 md:col-start-5" delay={0.05}>
            <h2 className="font-display text-[clamp(2.35rem,4.6vw,4.25rem)] leading-[1.02] tracking-[-.025em] text-canvas">
              A rapid response to an open design challenge
            </h2>
            <div className="mt-7 max-w-3xl space-y-5 text-lg text-canvas/75">
              <p>
                I developed AVEAR as an individual concept for the Global Grad Show&rsquo;s COVID-19 open design challenge in 2020. It was subsequently included in Edex Live coverage of Indian proposals responding to the pandemic.
              </p>
              <p>
                The project remained a concept. It was not manufactured, launched or validated as a health intervention.
              </p>
            </div>
            <a
              href="https://www.edexlive.com/happening/2020/may/01/390-students-send-proposals-to-the-global-grad-show-on-plans-to-tackle-covid-19-pandemic-11740.html"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-base text-blue-300 transition-colors hover:text-canvas"
            >
              Read the Edex Live coverage <span aria-hidden="true">↗</span>
            </a>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-hairline bg-tint py-16 md:py-20">
        <Reveal className="container-content">
          <p className="eyebrow">Reflection</p>
          <p className="mt-6 max-w-5xl font-display text-[clamp(1.5rem,2.2vw,2rem)] leading-[1.24] tracking-[-.012em] text-ink">
            AVEAR reinforced the value of making an idea physical early. Even a rough prototype can reveal how a concept relates to the body, movement and everyday use in ways that sketches alone cannot.
          </p>
          <Link href="/#work" className="mt-8 inline-flex items-center gap-2 text-base text-accent transition-colors hover:text-accent-hover">
            <span aria-hidden="true">←</span> Back to selected work
          </Link>
        </Reveal>
      </section>
    </article>
  );
}
