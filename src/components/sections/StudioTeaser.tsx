import Image from "next/image";
import { site } from "@/data/site";
import { upcomingProjects } from "@/data/projects";
import { Reveal } from "@/components/ui/Reveal";

export function StudioTeaser() {
  return (
    <section id="studio" className="border-t border-hairline py-24 md:py-36">
      <div className="container-content">
        <div className="grid gap-16 md:grid-cols-12">
          {/* The practice */}
          <div className="md:col-span-7">
            <Reveal>
              <div className="flex flex-col gap-7 sm:flex-row sm:items-start sm:gap-8">
                <div className="relative aspect-[4/5] w-36 shrink-0 overflow-hidden rounded-2xl bg-tint sm:w-44">
                  <Image
                    src="/rajeesh.jpeg"
                    alt={`${site.founder}, founder of ${site.fullName}`}
                    fill
                    sizes="(max-width: 640px) 144px, 176px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="eyebrow">The studio</p>
                  <p className="mt-5 font-display text-h2 text-ink [line-height:var(--text-h2--line-height)] [letter-spacing:var(--text-h2--letter-spacing)]">
                    {site.fullName} is a one-person design practice in{" "}
                    {site.location}, run by {site.founder}.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-xl text-lg text-body">
                Trained as an architect, I bring a structural way of thinking to
                digital problems — always looking for the system beneath the
                surface. Outside client work you’ll find me on side explorations:
                aquaponics, Arduino, small-scale data visualization, and
                cartography.
              </p>
              <a
                href="/studio"
                className="mt-8 inline-flex items-center gap-2 text-sm text-ink transition-colors hover:text-accent"
              >
                More about the studio <span>→</span>
              </a>
            </Reveal>
          </div>

          {/* In the works */}
          <div className="md:col-span-5">
            <Reveal delay={0.15}>
              <div className="rounded-2xl bg-tint p-8">
                <p className="eyebrow">In the studio right now</p>
                <ul className="mt-6 flex flex-col divide-y divide-hairline">
                  {upcomingProjects.map((p) => (
                    <li key={p.title} className="py-4 first:pt-0 last:pb-0">
                      <p className="font-display text-xl text-ink">{p.title}</p>
                      <p className="mt-1 text-sm text-muted">{p.note}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
