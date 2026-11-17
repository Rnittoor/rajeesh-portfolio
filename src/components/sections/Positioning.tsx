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
              <p className="font-display text-h2 text-ink [line-height:var(--text-h2--line-height)] [letter-spacing:var(--text-h2--letter-spacing)] md:[font-size:calc(var(--text-h2)*.84)] md:leading-[1.1]">
                {site.bio.body}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
