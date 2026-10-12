import { Reveal } from "@/components/ui/Reveal";

const capabilities = [
  {
    id: "01",
    title: "UX & Product Design",
    body: "Interfaces, flows, and design systems — from research to high-fidelity, buildable UI.",
    tags: ["Research", "IA", "UI", "Prototyping"],
  },
  {
    id: "02",
    title: "Service Design",
    body: "Mapping the whole experience — journeys, blueprints, and the touchpoints between people and systems.",
    tags: ["Journeys", "Blueprints", "Touchpoints"],
  },
  {
    id: "03",
    title: "System Design",
    body: "Making sense of complex, interconnected problems through modelling, GIGA maps, and structure.",
    tags: ["Systems mapping", "Modelling", "Strategy"],
  },
  {
    id: "04",
    title: "Information Viz & Motion",
    body: "Turning data and stories into visual, moving artefacts people understand at a glance.",
    tags: ["Data viz", "Motion", "Storytelling"],
  },
];

export function Capabilities() {
  return (
    <section
      id="capabilities"
      className="border-t border-hairline bg-tint py-24 md:py-36"
    >
      <div className="container-content">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal>
              <p className="eyebrow">Capabilities</p>
              <h2 className="mt-4 font-display text-h1 text-ink [line-height:var(--text-h1--line-height)] [letter-spacing:var(--text-h1--letter-spacing)]">
                From systems
                <br />
                to screens.
              </h2>
              <p className="mt-6 max-w-sm text-body">
                I work across product, service and systems design — making
                complex problems understandable, then turning that understanding
                into clear, usable experiences.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-8">
            <div className="border-t border-hairline">
              {capabilities.map((cap, i) => (
                <Reveal key={cap.id} delay={i * 0.05}>
                  <div className="group grid gap-4 border-b border-hairline py-8 md:grid-cols-12 md:items-baseline md:gap-6">
                    <span className="font-mono text-base text-accent md:col-span-1">
                      {cap.id}
                    </span>
                    <h3 className="font-display text-2xl text-ink transition-colors duration-300 group-hover:text-accent md:col-span-4 md:text-3xl">
                      {cap.title}
                    </h3>
                    <p className="text-body md:col-span-5">{cap.body}</p>
                    <div className="flex flex-wrap gap-2 md:col-span-2 md:justify-end">
                      {cap.tags.slice(0, 2).map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-canvas px-2.5 py-1 text-base text-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
