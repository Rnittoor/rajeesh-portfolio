import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-hairline bg-canvas">
      <div className="container-content flex flex-col gap-6 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>
          © {year} {site.fullName} · Registered in the Netherlands
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <span>KVK: {site.kvk}</span>
          <span>VAT: {site.vat}</span>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-body transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${site.email}`}
            className="text-body transition-colors hover:text-accent"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
