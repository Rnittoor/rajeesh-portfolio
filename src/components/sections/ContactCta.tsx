import { site } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";

export function ContactCta() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-hairline bg-tint py-28 md:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-blue-100/60 blur-3xl"
      />
      <div className="container-content relative text-center">
        <Reveal delay={0.05}>
          <h2 className="mx-auto mt-8 max-w-4xl font-display text-ink [font-size:var(--text-display)] [line-height:1.02] [letter-spacing:var(--text-display--letter-spacing)]">
            Have a complex problem?
            <br />
            <span className="italic text-accent">Let’s make it clear.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-8 max-w-xl text-lead text-body">
            I’m open to conversations about senior UX, Product and Service
            Design opportunities.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-canvas transition-colors hover:bg-accent-hover"
            >
              {site.email}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-hairline bg-canvas px-7 py-3.5 text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Connect on LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
