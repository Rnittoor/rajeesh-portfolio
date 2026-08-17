// Project data — sourced from the existing rajeeshnittoor.nl case studies.
// `featured` projects surface on the homepage Selected Work section.
// `media`/`video` are optional; cards render a designed placeholder until assets are added.

export type Project = {
  slug: string;
  index: string;
  title: string;
  client: string;
  year: string;
  disciplines: string[];
  hook: string;
  summary: string;
  featured: boolean;
  // Visual keying for the placeholder thumbnail (until real media is added).
  accent: "blue" | "ink" | "steel" | "sky";
  media?: string; // poster image path in /public
  video?: string; // hover-preview video path in /public
  comingSoon?: boolean;
};

export const projects: Project[] = [
  {
    slug: "airbus-aircraft-management",
    index: "01",
    title: "Unified Aircraft Management",
    client: "Airbus",
    year: "2023",
    disciplines: ["Strategic Design", "UX / UI", "Aviation"],
    hook: "How do you hand over a leased aircraft between owners without losing a single document?",
    summary:
      "An end-to-end asset management solution for the aircraft leasing cycle — mapping stakeholders, the recovery-to-transition journey, and designing the re-delivery experience with Airbus’ innovation team.",
    featured: true,
    accent: "ink",
  },
  {
    slug: "loog-search-engine",
    index: "02",
    title: "Loog — Search Engine Redesign",
    client: "Systems research",
    year: "2023",
    disciplines: ["System Design", "Information Ecosystem", "UI / UX"],
    hook: "What if search clustered information around a person’s life, not just their query?",
    summary:
      "A system-design approach to digital information ecosystems — GIGA mapping, multi-level modelling, and a rethought search results page for someone living with diabetes.",
    featured: true,
    accent: "blue",
  },
  {
    slug: "calicut-beach",
    index: "03",
    title: "Enhancing the Calicut Beach Experience",
    client: "Service design",
    year: "2022",
    disciplines: ["Service Design", "Research", "UI / UX"],
    hook: "A culturally rich beach, unexplored by the tourists who’d love it most.",
    summary:
      "A service-design study of Kerala’s Malabar beaches — diary studies, service blueprints, and a mobile app concept to elevate the visitor experience.",
    featured: true,
    accent: "sky",
  },
  {
    slug: "unicamp-pos",
    index: "04",
    title: "Unicamp — Campaign Planning Dashboard",
    client: "Retail POS",
    year: "2023",
    disciplines: ["Product Design", "Dashboards", "UI / UX"],
    hook: "One dashboard to plan, launch, and watch a festive campaign across 14 stores.",
    summary:
      "A point-of-sale campaign planning tool for HQ and store managers — multi-channel campaign creation, health monitoring, and real-time analytics.",
    featured: true,
    accent: "steel",
  },
  {
    slug: "teamwork-value",
    index: "05",
    title: "Teamwork Value — FIFA Finals",
    client: "Information design",
    year: "2021",
    disciplines: ["Information Visualization", "Motion Design"],
    hook: "Measuring what makes a World Cup–winning team, then making it move.",
    summary:
      "An interactive visualization of every FIFA World Cup final through a new ‘teamwork value’ concept, with motion-designed match overviews.",
    featured: false,
    accent: "blue",
  },
  {
    slug: "avear",
    index: "06",
    title: "Avear — Wearable Sanitiser",
    client: "Industrial design",
    year: "2020",
    disciplines: ["Industrial Design", "Behaviour"],
    hook: "We touch our faces 16 times an hour. What if clean hands came with us?",
    summary:
      "A wearable concept addressing indirect Covid-19 transmission by nudging hand hygiene around unconscious face-touching.",
    featured: false,
    accent: "ink",
  },
];

// Projects to be added later (IKEA work + research mapping).
export const upcomingProjects = [
  {
    title: "IKEA — Service Design",
    disciplines: ["Service Design"],
    note: "Two years of service design work. Case study in progress.",
  },
  {
    title: "IKEA — System Design",
    disciplines: ["System Design"],
    note: "Systems mapping and modelling. Case study in progress.",
  },
  {
    title: "Research Mapping",
    disciplines: ["Research", "Synthesis"],
    note: "Mapping research across a complex problem space. Case study in progress.",
  },
] as const;

export const featuredProjects = projects.filter((p) => p.featured);
