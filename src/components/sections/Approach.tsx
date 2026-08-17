import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    id: "01",
    title: "Understand the system",
    body: "Research the context, stakeholders, and the forces at play — before touching a screen.",
  },
  {
    id: "02",
    title: "Map the experience",
    body: "Journeys, blueprints, and models that make a complex problem visible and shared.",
  },
  {
    id: "03",
    title: "Design the interface",
    body: "Translate structure into clear, considered, buildable UI with strong craft.",
  },
  {
    id: "04",
    title: "Validate & refine",
    body: "Test with real people, learn, and sharpen until it holds up in the real world.",
  },
];

export function Approach() {
  return (
    <section id="approach" className="border-t border-hairline py-24 md:py-36">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow">How I work</p>
          <h2 className="mt-4 max-w-2xl font-display text-h1 text-ink [line-height:var(--text-h1--line-height)] [letter-spacing:var(--text-h1--letter-spacing)]">
            Structure first. Then everything else.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-x-10 gap-y-12 md:mt-24 md:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.id} delay={i * 0.08}>
              <div className="border-t border-ink/80 pt-6">
                <span className="font-mono text-sm text-accent">{step.id}</span>
                <h3 className="mt-4 font-display text-2xl text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-body">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
