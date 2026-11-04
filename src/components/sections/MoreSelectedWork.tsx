import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const secondaryProjects = [
  {
    href: "/work/teamwork-value",
    title: "Visualising Teamwork in FIFA World Cup Finals",
    category: "Information Visualisation · Motion Design",
    image: "/projects/fifa-teamwork-value/thumbnail.png",
    alt: "A person viewing the FIFA World Cup Teamwork Value visualisation on a large display",
  },
  {
    href: "/work/calicut-beach",
    title: "Connecting the Calicut Beach Experience",
    category: "Service Design · Experience Design",
    image: "/projects/calicut-beach/calicut-beach-context.jpg",
    alt: "Visitors, vendors and public activity along Calicut Beach",
  },
] as const;

export function MoreSelectedWork() {
  return (
    <section className="border-t border-hairline bg-tint py-16 md:py-24">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow">More selected work</p>
          <h2 className="mt-4 max-w-3xl font-display text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.08] tracking-[-.02em] text-ink">
            Explorations across information, service and physical experiences.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {secondaryProjects.map((project, index) => (
            <Reveal key={project.href} delay={index * 0.05}>
              <Link href={project.href} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-ink">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02] motion-reduce:transition-none"
                  />
                </div>
                <p className="mt-5 font-mono text-xs uppercase tracking-[.12em] text-muted">
                  {project.category}
                </p>
                <h3 className="mt-3 max-w-md font-display text-[clamp(1.75rem,2.4vw,2.35rem)] leading-[1.08] tracking-[-.018em] text-ink transition-colors duration-300 group-hover:text-accent">
                  {project.title}
                </h3>
                <span className="mt-5 inline-flex items-center gap-2 text-base text-ink transition-colors duration-300 group-hover:text-accent">
                  View project <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none">→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
