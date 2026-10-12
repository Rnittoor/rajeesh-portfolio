export const ikeaServiceCaseStudy = {
  hero: {
    eyebrow: "IKEA · 2025",
    headline: "Making complex global marketing operations visible.",
    intro:
      "I mapped how SEO and SEM work moved across markets, teams and tools—turning complex operational processes into shared current-state views that could be understood and compared.",
    metadata: [
      { label: "Role", value: "Service Design & Research" },
      { label: "Scope", value: "SEO · SEM · Process Mapping · Systems Thinking" },
    ],
  },
  context: {
    eyebrow: "The context",
    headline: "Two investigations at different scales.",
    copy:
      "Global marketing work may result in something seemingly simple—a published page or an advertising feed—but behind it sits a network of specialists, teams, tools and operational processes.",
    workstreams: [
      {
        label: "SEO — Wide across markets",
        body: "Understanding how the Content Process Flow operated across five country markets.",
        emphasis: "primary" as const,
      },
      {
        label: "SEM — Deep into Feed Management",
        body: "Understanding one operational process in depth, from request intake through feed publication and closure.",
        emphasis: "secondary" as const,
      },
    ],
  },
  seo: {
    opening: {
      eyebrow: "SEO · Cross-market service mapping",
      headline: "The same Content Process Flow operated differently across five markets.",
      copy:
        "I mapped the current-state Content Process Flow across Austria, Canada, Germany, Sweden and the US using a consistent structure, making differences in sequence, teams, tools and supporting systems easier to compare.",
    },
    marketLanes: [
      { market: "Austria", stages: ["Receive", "Review", "Localise", "Plan", "Optimise", "Track", "Review", "Monitor"] },
      { market: "Canada", stages: ["Receive", "Review", "Plan", "Optimise", "Validate", "Publish"] },
      { market: "Germany", stages: ["Receive", "Prepare", "Plan", "Localise", "Optimise", "Track", "Monitor"] },
      { market: "Sweden", stages: ["Receive", "Review", "Localise", "Plan", "Review", "Optimise", "Monitor"] },
      { market: "US", stages: ["Receive", "Review", "Plan", "Localise", "Publish", "QA", "Monitor"] },
    ],
    approach: {
      eyebrow: "Level 2 · System view",
      headline: "Level 2 connected the process sequence to the wider operating system.",
      copy:
        "The map connected the workflow to its channels and touchpoints, tools, teams and actors, co-worker experience, supporting systems, and opportunities or friction visible in the current state.",
    },
    operational: {
      eyebrow: "Level 3 · Operational detail",
      headline: "Level 3 revealed what happened behind each process step.",
      copy:
        "I traced the people, interfaces, tools, handoffs and backstage activity behind the same Content Process Flow.",
      details: [
        { index: "01", title: "Receive & review", body: "Global updates and supporting information enter through collaboration and documentation tools." },
        { index: "02", title: "Optimise", body: "The SEO specialist moves through content and optimisation tools to make the required changes." },
        { index: "03", title: "Validate & publish", body: "The work is checked through SEO and analytics tooling before moving towards publication." },
      ],
    },
    comparison: {
      eyebrow: "What the mapping made visible",
      headline: "One structure made different operating systems comparable.",
      copy:
        "The work created a shared current-state view of how the Content Process Flow operated across the five markets, providing a common reference for discussing differences and potential areas for improvement.",
      observations: [
        { title: "Different sequences", body: "The same Content Process Flow moved through different steps across markets." },
        { title: "Different operating systems", body: "Teams, tools, handoffs and supporting systems varied behind those sequences." },
        { title: "One comparable structure", body: "Using the same mapping framework made those operating models easier to examine side by side." },
      ],
    },
  },
  sem: {
    opening: {
      eyebrow: "SEM · Deep into Feed Management",
      headline: "SEO looked wide. SEM went deep into one operational process.",
      copy:
        "While the SEO work compared operating models across markets, this workstream focused on one specific operational process: Feed Management.\n\nThrough three specialist interviews and secondary research, I investigated how requests entered the SEM team, how product data was prepared and enriched, and how feeds moved through validation and deployment.",
    },
    research: {
      eyebrow: "RESEARCH & SYNTHESIS",
      headline: "The interviews helped me reconstruct how Feed Management actually worked.",
      findings: [
        "How requests entered and were prioritised",
        "Who owned each part of Feed Management",
        "Which tools and systems supported the work",
        "Where local and central teams interacted",
        "How feeds moved towards advertising platforms",
      ],
    },
    problems: {
      eyebrow: "WHAT THE RESEARCH SURFACED",
      headline: "The workflow exposed three recurring points of friction.",
      themes: [
        {
          title: "Incomplete request information",
          body: "Requests were not consistently categorised, so Jira tickets could arrive without enough information for SEM specialists to act.",
        },
        {
          title: "Manual comparison and enrichment",
          body: "Some information arrived as images, requiring manual comparison across screens. Performance data missing from the Optimera JSON was maintained in Google Sheets and uploaded into Productsup.",
        },
        {
          title: "Access and governance",
          body: "Local editing access had led to incorrect changes affecting feeds across markets, highlighting gaps in access control, training and documentation.",
        },
      ],
    },
    mapping: {
      eyebrow: "CURRENT-STATE MAPPING",
      headline: "I translated the research into one end-to-end Feed Management map.",
      stages: ["Request", "Implement & test", "Validation", "Deployment"],
    },
    outcome: {
      eyebrow: "WHAT THE MAP ENABLED",
      headline: "From specialist knowledge to a shared process view.",
      copy: "The final map brought the research, problems, tools and handoffs into one shared view of how Feed Management actually worked.\n\nIt gave the team a common reference for discussing where friction existed before moving towards improvements.",
    },
  },
  synthesis: {
    eyebrow: "Outcome & reflection",
    headline: "Wide across markets. Deep inside one process.",
    columns: [
      {
        title: "SEO",
        rows: [["Made visible", "Variation in how the same Content Process Flow operated across five markets"]],
      },
      {
        title: "SEM",
        rows: [["Made visible", "Complexity within one end-to-end Feed Management process"]],
      },
    ],
    closing:
      "The two workstreams operated at different scales but shared the same purpose: turning distributed operational knowledge into representations teams could see, compare and discuss. The value of the maps was not documenting every step; it was creating a shared view of the systems behind the work.",
  },
} as const;
