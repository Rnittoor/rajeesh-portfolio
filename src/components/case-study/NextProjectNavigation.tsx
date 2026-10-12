import Link from "next/link";
import type { Project } from "@/data/projects";

export function NextProjectNavigation({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null;
  return (
    <nav aria-label="Related projects" className="border-t border-hairline bg-tint py-20 md:py-28">
      <div className="container-content">
        <p className="eyebrow">Continue exploring</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Link key={project.slug} href={`/work/${project.slug}`} className="group block border-t border-ink pt-5 outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4">
              <span className="text-base text-muted">{project.client} · {project.year}</span>
              <span className="mt-2 flex items-center justify-between font-display text-2xl text-ink transition-colors group-hover:text-accent">
                {project.title}<span className="transition-transform group-hover:translate-x-1 group-focus-visible:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
