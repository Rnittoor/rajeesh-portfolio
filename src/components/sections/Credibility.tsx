import { Reveal } from "@/components/ui/Reveal";

const clients = [
  "IKEA",
  "Airbus",
  "MPL",
  "Cosmere Tech",
  "JCJR Design Community",
  "Kerala Tourism",
  "Thinking Hats",
  "RCD Dubai",
];

const recommendations = [
  {
    quote:
      "Rajeesh impressed us with their dedication to user research and his ability to translate findings into innovative design concepts.",
    name: "Nancy Kumar",
    attribution: "Design Leadership · Amadeus · Ex-Airbus",
  },
  {
    quote:
      "Rajeesh was also a supportive team player, collaborating well with colleagues and contributing positively to the team dynamic.",
    name: "Ingrid Halters",
    attribution: "Product UX Manager · IKEA",
  },
];

export function Credibility() {
  return (
    <section
      aria-labelledby="selected-clients-heading"
      className="border-t border-hairline bg-ink pt-12 pb-9 text-canvas md:pt-14 md:pb-10"
    >
      <div className="container-content">
        <div className="grid gap-6 md:grid-cols-12 md:items-center">
          <Reveal className="md:col-span-3">
            <h2 id="selected-clients-heading" className="eyebrow text-blue-300">
              Selected clients
            </h2>
          </Reveal>
          <Reveal className="min-w-0 md:col-span-9" delay={0.05}>
            <div className="overflow-hidden motion-reduce:hidden" aria-label={clients.join(", ")}>
              <div className="client-marquee-track flex w-max">
                {[0, 1].map((copy) => (
                  <ul
                    key={copy}
                    aria-hidden={copy === 1}
                    className="flex shrink-0 items-center"
                  >
                    {clients.map((name) => (
                      <li
                        key={`${copy}-${name}`}
                        className="flex shrink-0 items-center font-display text-xl font-normal text-canvas/75 md:text-2xl"
                      >
                        <span>{name}</span>
                        <span aria-hidden className="mx-5 text-blue-300/65 md:mx-7">
                          —
                        </span>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>

            <ul className="hidden flex-wrap gap-x-5 gap-y-2 motion-reduce:flex md:gap-x-7">
              {clients.map((name) => (
                <li key={name} className="font-display text-xl font-normal text-canvas/75 md:text-2xl">
                  {name}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mt-10 border-t border-canvas/15 pt-8 md:mt-12 md:pt-10">
          <Reveal>
            <p className="eyebrow text-blue-300">What design leaders say</p>
          </Reveal>
          <div className="mt-5 grid gap-7 md:grid-cols-2 md:gap-12">
            {recommendations.map((recommendation, index) => (
              <Reveal key={recommendation.name} delay={index * 0.05}>
                <figure className="border-t border-canvas/20 pt-5">
                  <blockquote className="font-display text-xl leading-snug text-canvas/90 md:text-2xl">
                    “{recommendation.quote}”
                  </blockquote>
                  <figcaption className="mt-4 text-base text-canvas/65">
                    <span className="block font-medium text-canvas">{recommendation.name}</span>
                    <span className="mt-1 block">{recommendation.attribution}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
