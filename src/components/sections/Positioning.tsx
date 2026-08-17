import { site } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";

export function Positioning() {
  return (
    <section id="about-intro" className="border-t border-hairline py-24 md:py-36">
      <div className="container-content">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-3">
            <Reveal>
              <p className="eyebrow">{site.bio.eyebrow}</p>
            </Reveal>
          </div>

          <div className="md:col-span-9">
            <Reveal>
              <p className="font-display text-h2 text-ink [line-height:var(--text-h2--line-height)] [letter-spacing:var(--text-h2--letter-spacing)]">
                {site.bio.body}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <ul className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-hairline pt-8">
                {site.bio.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-center gap-2 text-sm text-body"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
