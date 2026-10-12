import { Reveal } from "@/components/ui/Reveal";

// Contexts / collaborators from the work history.
const clients = [
  "Airbus",
  "IKEA",
  "Kerala Tourism",
  "Retail POS",
  "FIFA Data",
  "Systems Research",
];

export function Credibility() {
  const selectedClients = clients.filter((client) =>
    ["Airbus", "IKEA", "Kerala Tourism"].includes(client)
  );
  // Duplicate the list so the marquee loops seamlessly at -50%.
  const track = [...selectedClients, ...selectedClients];

  return (
    <section className="border-t border-hairline bg-ink py-[3.2rem] text-canvas md:py-16">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow text-blue-300">Selected clients</p>
        </Reveal>
      </div>

      <div className="marquee mt-8 overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-16 pl-16">
          {track.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-display text-3xl text-canvas/60 md:text-5xl"
            >
              {name}
              <span className="ml-16 text-blue-500">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
