import { Reveal } from "@/components/ui/Reveal";

const clients = ["Airbus", "IKEA", "Kerala Tourism"];

export function Credibility() {
  return (
    <section className="border-t border-hairline bg-ink py-10 text-canvas">
      <div className="container-content grid gap-6 md:grid-cols-12 md:items-center">
        <Reveal className="md:col-span-3">
          <p className="eyebrow text-blue-300">Selected clients</p>
        </Reveal>
        <Reveal className="md:col-span-9" delay={0.05}>
          <ul className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-7 md:gap-x-9">
            {clients.map((name, index) => (
              <li key={name} className="flex items-center sm:gap-7 md:gap-9">
                {index > 0 && (
                  <span
                    aria-hidden
                    className="hidden text-lg text-blue-400/70 sm:inline"
                  >
                    /
                  </span>
                )}
                <span className="font-display text-2xl text-canvas/80 md:text-3xl">
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
