// Project data — sourced from the existing rajeeshnittoor.nl case studies.
// `featured` projects surface on the homepage Selected Work section.
// `media`/`video` are optional; cards render a designed placeholder until assets are added.

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
  fit?: "cover" | "contain";
  width?: number;
  height?: number;
};

export type ProjectVideo = {
  src: string;
  title: string;
  poster?: string;
  caption?: string;
};

export type ProjectQuote = {
  text: string;
  attribution?: string;
  role?: string;
};

export type ProjectMetric = {
  value: string;
  label: string;
  detail?: string;
};

export type ProcessStep = {
  title: string;
  body: string;
};

export type TextSectionContent = {
  heading?: string;
  eyebrow?: string;
  body: string[];
};

export type SourceArchiveGroup = {
  chapter: string;
  items: string[];
};

export type EditorialWorkflowStep = {
  index: string;
  title: string;
  need: string;
  response: string;
  image: ProjectImage;
};

export type EditorialBlock =
  | { type: "story"; eyebrow: string; heading: string; body: string[] }
  | { type: "immersiveVisual"; image: ProjectImage; mobileScrollable?: boolean }
  | {
      type: "researchEvidence";
      eyebrow: string;
      heading: string;
      body: string;
      metrics: ProjectMetric[];
      images: ProjectImage[];
    }
  | {
      type: "statVisual";
      eyebrow: string;
      value: string;
      label: string;
      body: string;
      image: ProjectImage;
    }
  | {
      type: "turningPoint";
      eyebrow: string;
      heading: string;
      body: string[];
      progression: string[];
      image: ProjectImage;
    }
  | {
      type: "concept";
      eyebrow: string;
      heading: string;
      body: string[];
      image: ProjectImage;
      areas: string[];
      supportingEvidence?: ProjectImage[];
    }
  | {
      type: "workflow";
      eyebrow: string;
      heading: string;
      intro: string;
      steps: EditorialWorkflowStep[];
    }
  | {
      type: "outcome";
      eyebrow: string;
      heading: string;
      body: string[];
      signal?: string;
    }
  | { type: "reflection"; eyebrow: string; heading: string; body: string[] };

export type EditorialPresentation = {
  kicker: string;
  intro: string;
  heroVisual?: ProjectImage;
  blocks: EditorialBlock[];
};

export type CaseStudyBlock =
  | { type: "text"; content: TextSectionContent }
  | { type: "largeImage"; image: ProjectImage }
  | { type: "imageGrid"; images: ProjectImage[] }
  | { type: "fullWidthVisual"; image?: ProjectImage; video?: ProjectVideo }
  | { type: "quote"; quote: ProjectQuote }
  | { type: "metrics"; metrics: ProjectMetric[] }
  | { type: "processSteps"; steps: ProcessStep[] }
  | { type: "artefact"; image: ProjectImage; description?: string };

export type ProjectWorkstream = {
  id: string;
  title: string;
  subtitle?: string;
  disciplines?: string[];
  context?: TextSectionContent;
  objective?: TextSectionContent;
  research?: TextSectionContent;
  progression?: ProcessStep[];
  focusAreas?: string[];
  artefacts?: string[];
  keyInsights?: TextSectionContent;
  opportunities?: TextSectionContent;
  improvements?: TextSectionContent;
  sections?: CaseStudyBlock[];
};

export type Project = {
  slug: string;
  index: string;
  title: string;
  client: string;
  year: string;
  role?: string;
  disciplines: string[];
  hook: string;
  shortSummary: string;
  featured: boolean;
  // Visual keying for the placeholder thumbnail (until real media is added).
  accent: "blue" | "ink" | "steel" | "sky";
  media?: string; // poster image path in /public
  video?: string; // hover-preview video path in /public
  comingSoon?: boolean;

  // Optional case-study narrative. Projects can use only the fields that fit
  // their evidence and story; the shared route renders whatever is present.
  context?: TextSectionContent;
  challenge?: TextSectionContent;
  responsibilities?: string[];
  research?: TextSectionContent;
  process?: ProcessStep[];
  keyInsights?: TextSectionContent;
  designDecisions?: TextSectionContent;
  solution?: TextSectionContent;
  outcome?: TextSectionContent;
  learnings?: TextSectionContent;

  // Optional evidence libraries and flexible ordered presentation blocks.
  images?: ProjectImage[];
  videos?: ProjectVideo[];
  quotes?: ProjectQuote[];
  metrics?: ProjectMetric[];
  sections?: CaseStudyBlock[];
  workstreams?: ProjectWorkstream[];
  relatedProjects?: string[];

  // Source inventory retained for editorial traceability. Not rendered.
  sourceUrl?: string;
  sourceArchive?: SourceArchiveGroup[];
  editorialPresentation?: EditorialPresentation;
};

export const projects: Project[] = [
  {
    slug: "ikea-global-marketing-service-design",
    index: "01",
    title: "Global Marketing Service Design",
    client: "IKEA",
    year: "2025",
    role: "Service Design and Research",
    disciplines: ["Service Design", "Research", "Systems Thinking"],
    hook: "Mapping complex global marketing services to make processes, dependencies and opportunities for improvement visible.",
    shortSummary:
      "Two distinct workstreams mapped cross-market SEO services and the SEM Feed Management process across teams, tools and handoffs.",
    featured: true,
    accent: "blue",
    media: "/projects/project-01-ikea-service-design.svg",
    context: {
      eyebrow: "The context",
      heading: "Two services inside one global marketing ecosystem.",
      body: [
        "IKEA's global marketing work moves through markets, specialist teams, agencies, platforms and internal tools. The visible output may be a page or an advertising feed, but producing it depends on a much larger service behind the interface.",
        "I investigated two related but distinct services: how SEO content moves from global updates into local-market execution, and how SEM product feeds are requested, prepared, validated and deployed. The goal was not to merge them, but to make each operating system visible enough to discuss and improve.",
      ],
    },
    responsibilities: [
      "Cross-market workflow mapping for the SEO service",
      "Stakeholder, tool, handoff and dependency analysis",
      "Three SEM specialist interviews and evidence synthesis",
      "Current-state feed-management process mapping",
      "Journey Atlas structure and visual communication",
    ],
    workstreams: [
      {
        id: "seo",
        title: "SEO — Cross-market service mapping",
        subtitle: "Understanding how the SEO service and process operates across different IKEA markets.",
        disciplines: ["Service Design", "Cross-market Research", "Systems Thinking"],
        focusAreas: [
          "Markets",
          "People and roles",
          "Workflows",
          "Tools",
          "Handoffs",
          "Dependencies",
          "Pain points",
          "Opportunities",
        ],
        research: {
          eyebrow: "The question",
          heading: "What changes when one global process reaches different markets?",
          body: [
            "The SEO investigation traced content work across global and local contexts. Each atlas connected the visible co-worker journey to the backstage tools, operational responsibilities and lines of visibility supporting it.",
            "Rather than treating a market workflow as a list of screens, the mapping captured stages, roles, interface handoffs and system actions across the service.",
          ],
        },
        artefacts: [
          "Market journey maps",
          "Stakeholder and actor maps",
          "Workflow and ecosystem maps",
          "Cross-market patterns",
        ],
        keyInsights: {
          eyebrow: "What the comparison revealed",
          heading: "A shared journey can still produce different operating realities.",
          body: [
            "Across the maps, the broad journey remains recognisable: receive or initiate work, prepare content, localise, review, optimise and monitor. The way that work is coordinated varies by market.",
            "Different combinations of spreadsheets, planning tools, specialist platforms, agencies and manual handoffs sit beneath similar customer-facing outcomes. Mapping both the frontstage and backstage made those variations discussable without simplifying them away.",
          ],
        },
        sections: [
          {
            type: "largeImage",
            image: {
              src: "/projects/ikea-service/seo-global-atlas.webp",
              fit: "contain",
              alt: "Global SEO Journey Atlas showing co-worker steps, interfaces, responsibilities and backstage systems",
              caption: "The global view established a shared reference for the SEO content journey and the operations supporting it.",
            },
          },
          {
            type: "text",
            content: {
              eyebrow: "From common model to market detail",
              heading: "Use the same structure to reveal meaningful differences.",
              body: [
                "The atlas format made market comparisons possible without forcing each market into an identical process. Sweden and Austria show how a common journey framework can hold different tools, handoffs and responsibility patterns.",
              ],
            },
          },
          {
            type: "imageGrid",
            images: [
              {
                src: "/projects/ikea-service/seo-sweden-atlas.webp",
                fit: "contain",
                alt: "Sweden SEO Journey Atlas with market-specific workflow, screenshots and backstage operations",
                caption: "Sweden: a detailed Level 3 view of the content process flow.",
              },
              {
                src: "/projects/ikea-service/seo-austria-atlas.webp",
                fit: "contain",
                alt: "Austria SEO Journey Atlas showing market-specific content workflow and supporting systems",
                caption: "Austria: the same atlas structure exposes a different operating configuration.",
              },
            ],
          },
        ],
      },
      {
        id: "sem-feed-management",
        title: "SEM — Feed Management",
        subtitle: "Understanding the existing end-to-end Feed Management workflow used by the SEM team.",
        disciplines: ["Service Design", "UX Research", "Process Mapping"],
        research: {
          eyebrow: "Primary research",
          heading: "Three specialist perspectives on one feed-management service.",
          body: [
            "I interviewed three SEM specialists working across different parts of feed management. Their evidence connected formal process steps with the requests, clarifications, tools, approval loops and communication channels shaping the work in practice.",
            "Secondary research added the platform and marketing-activation context needed to understand how prepared product data reaches advertising channels.",
          ],
        },
        progression: [
          { title: "Interviews", body: "Three SEM specialist interviews" },
          { title: "Evidence", body: "Interview transcripts" },
          { title: "Synthesis", body: "Analysis and synthesis" },
          { title: "Current state", body: "Understanding the Feed Management workflow" },
          { title: "Mapping", body: "Process and service mapping" },
          { title: "Atlas", body: "Feed Management Atlas" },
          { title: "Opportunities", body: "Pain points and opportunities" },
        ],
        focusAreas: [
          "Actors and responsibilities",
          "Workflow steps",
          "Tools and systems",
          "Requests and information flow",
          "Handoffs",
          "Dependencies",
          "Pain points",
          "Opportunities",
        ],
        artefacts: [
          "Interview transcripts",
          "Transcript synthesis",
          "Workflow maps",
          "Feed Management Atlas / service map",
        ],
        keyInsights: {
          eyebrow: "Synthesis",
          heading: "The work is less linear than the ticket suggests.",
          body: [
            "A request can move between market teams, agencies and SEM specialists before implementation begins. Missing or unclear information creates clarification loops, while validation can return the feed for further adjustment before deployment.",
            "The synthesis also surfaced the importance of access boundaries: external partners and local markets do not always share the same tools, making communication and ownership part of the service design problem.",
          ],
        },
        sections: [
          {
            type: "largeImage",
            image: {
              src: "/projects/ikea-service/sem-research-map.webp",
              fit: "contain",
              alt: "SEM feed-management research map combining three interviews, tool evidence and secondary research",
              caption: "Primary and secondary research were assembled into one evidence landscape before the process was simplified.",
            },
          },
          {
            type: "fullWidthVisual",
            image: {
              src: "/projects/ikea-service/sem-feed-process.webp",
              fit: "contain",
              alt: "Feed-management process flow across local markets, agencies and SEM specialists",
              caption: "The current-state flow made request, clarification, implementation, validation and deployment responsibilities explicit.",
            },
          },
          {
            type: "artefact",
            image: {
              src: "/projects/ikea-service/sem-atlas-sketches.webp",
              alt: "Hand-drawn Journey Atlas sketches exploring stages, co-worker experience and backstage operations",
              caption: "Early sketches tested how the atlas could connect journey stages, co-worker experience and the backstage process.",
            },
            description: "The sketches show the structure emerging before visual polish: stages across the top, co-worker experience in the middle, and teams, tools and backstage actions below.",
          },
        ],
      },
    ],
    learnings: {
      eyebrow: "Reflection",
      heading: "A service map is useful when it creates a shared object for the conversation.",
      body: [
        "The value of these atlases was not in making complex services look simple. It was in giving people a common structure for seeing where work, responsibility and information move across teams and tools.",
        "Working across SEO and SEM reinforced the importance of choosing the right level of abstraction: broad enough to connect the ecosystem, but detailed enough to preserve the operational differences that matter.",
      ],
    },
    relatedProjects: ["ikea-data-visualisation-system"],
  },
  {
    slug: "ikea-data-visualisation-system",
    index: "02",
    title: "Data Visualisation System",
    client: "IKEA",
    year: "2025",
    role: "Product Designer",
    disciplines: [
      "Data Visualisation",
      "Systems Thinking",
      "Design Systems",
      "Dashboard Design",
    ],
    hook: "Creating a shared visual language for complex data across dashboards and products.",
    shortSummary:
      "A data visualisation system spanning guidelines, information hierarchy, accessibility and reusable visual patterns.",
    featured: true,
    accent: "steel",
    media: "/projects/project-02-ikea-data-visualisation.svg",
    relatedProjects: ["ikea-global-marketing-service-design", "airbus-aircraft-management"],
  },
  {
    slug: "airbus-aircraft-management",
    index: "03",
    title: "Unified Aircraft Management",
    client: "Airbus",
    year: "2023",
    disciplines: ["Strategic Product Design", "UX", "Systems Thinking", "Research"],
    hook: "Turning a fragmented aircraft-management journey into a unified product direction through research and systems thinking.",
    shortSummary:
      "Research, 12 interviews and systems mapping turned a fragmented aircraft-management ecosystem into a focused product direction for recovery, re-delivery and transition.",
    featured: true,
    accent: "ink",
    media: "/projects/airbus-dashboard-context.png",
    role: "Strategic Product Design, UX, Research and Systems Thinking",
    responsibilities: [
      "Domain research through four books and contextual enquiries",
      "Twelve interviews and research synthesis",
      "GIGA map, team structure, journey/persona, and process mapping",
      "Collaborative ideation and prioritisation with PM, SA, DM, and design",
      "Concept map, flows, information architecture, prototype, and testing",
    ],
    editorialPresentation: {
      kicker: "Role · Strategic Product Design, UX, Research & Systems Thinking",
      intro:
        "Aircraft transition involves many teams, processes, documents and critical handoffs. I worked with Airbus to understand how these pieces connect and explore how they could come together in one aircraft-management experience.",
      heroVisual: {
        src: "/projects/airbus/airbus-dashboard-overview.png",
        alt: "Airbus aircraft-management dashboard showing portfolio status, projects and transition activity",
        caption: "The product concept brought aircraft status, projects and transition activity into one connected workspace.",
      },
      blocks: [
        {
          type: "story",
          eyebrow: "01 — The setup",
          heading: "What looked like a product brief was hiding a systems problem.",
          body: [
            "Aircraft leasing stretches across owners, airlines, technical teams, regulators, maintenance partners, inspections, approvals, and an extensive documentary record.",
            "Before a coherent interface could exist, the operating system beneath it had to become visible.",
          ],
        },
        {
          type: "researchEvidence",
          eyebrow: "02 — Understanding an unfamiliar system",
          heading: "Build enough understanding to design without assumption.",
          body:
            "Aviation was new territory. I used domain research to understand the leasing lifecycle, then conducted contextual interviews to trace who was involved, where responsibility sat, and how work moved across stages, tools and teams.",
          metrics: [
            { value: "04", label: "books used for domain research" },
            { value: "12", label: "contextual interviews" },
          ],
          images: [
            {
              src: "/projects/airbus/asset-management-team-structure.png",
              alt: "Aircraft Asset Management team structure",
              caption: "Who is involved — and where responsibility sits.",
            },
            {
              src: "/projects/airbus/journey-map-persona.png",
              alt: "Aircraft recovery journey map and lessor persona",
              caption: "How the work moves across stages, tools and teams.",
            },
          ],
        },
        {
          type: "immersiveVisual",
          mobileScrollable: true,
          image: {
            src: "/projects/airbus/giga-map.png",
            alt: "GIGA map of the aircraft leasing system",
            caption: "I brought the leasing cycle, roles, exchanges and wider aircraft-management system together in one GIGA map.",
          },
        },
        {
          type: "statVisual",
          eyebrow: "03 — From research to friction",
          value: "50+",
          label: "connected pain points",
          body:
            "I synthesised the research into more than 50 connected pain points across workflows, information access, tools, responsibilities and handoffs. Their relationships showed that the central issue was fragmentation between parts of the service, not one isolated interface problem.",
          image: {
            src: "/projects/airbus/pain-points-overview.png",
            alt: "More than 50 connected aircraft-management pain points",
            caption: "Pain points were collected, connected, and analysed rather than treated as isolated interface issues.",
          },
        },
        {
          type: "turningPoint",
          eyebrow: "04 — The turning point",
          heading: "Prioritisation turned a broad problem space into a focused product direction.",
          body: [
            "Research created a much larger opportunity space than the team could solve at once. Together with product, architecture and design, we prioritised opportunities by user impact and feasibility.",
            "That narrowed the focus to Recovery, Re-delivery & Transition: a connected workflow where critical handoffs between lessor and lessee teams made coordination especially important.",
          ],
          progression: ["50+ problems", "Collaborative prioritisation", "Recovery / Re-delivery & Transition"],
          image: {
            src: "/projects/airbus/prioritisation-matrix.png",
            alt: "Impact and feasibility prioritisation matrix",
            caption: "Product, architecture and design perspectives shaped the prioritisation.",
          },
        },
        {
          type: "concept",
          eyebrow: "05 — Product direction",
          heading: "Design the coordination, not just the screens.",
          body: [
            "The opportunity wasn't simply to design another interface. It was to bring fragmented transition work into one shared environment — connecting aircraft status, documents, responsibilities and progress across the handover.",
          ],
          image: {
            src: "/projects/airbus/concept-map.jpg",
            alt: "Concept map for the unified aircraft-management tool",
            caption: "The concept map connected the wider tool ambition with a focused Re-delivery & Transition experience.",
          },
          areas: [
            "Project organisation",
            "Schedules & alerts",
            "Document management & records",
            "Comprehensive search",
            "Shared virtual workspace",
          ],
          supportingEvidence: [
            {
              src: "/projects/airbus/recovery-transition-map.png",
              alt: "Recovery and Transition process map",
              caption: "Supporting depth: the mapped operating process.",
            },
            {
              src: "/projects/airbus/multi-user-task-flow.jpg",
              alt: "Multi-user task flow for aircraft transition",
              caption: "Supporting depth: responsibility moving across users.",
            },
            {
              src: "/projects/airbus/information-architecture.jpg",
              alt: "Information architecture for the unified aircraft-management tool",
              caption: "Supporting depth: the product structure behind the workflow.",
            },
          ],
        },
        {
          type: "workflow",
          eyebrow: "06 — The experience",
          heading: "One connected path from aircraft status to transfer.",
          intro:
            "The proposed experience follows the transition itself — from understanding an aircraft's current state to completing its handover. The concept gave the team a tangible workflow to prototype and evaluate further.",
          steps: [
            {
              index: "01",
              title: "See the aircraft and transition status",
              need: "Lessors need a clear view of each aircraft and its current transition state.",
              response: "Aircraft cards surface portfolio status, key dates and active transition context at a glance.",
              image: {
                src: "/projects/airbus/aircraft-cards.jpg",
                alt: "Aircraft portfolio and transition status cards",
              },
            },
            {
              index: "02",
              title: "Set up the transition project",
              need: "Transition work needs a shared project context rather than disconnected tasks.",
              response: "The project brings aircraft, parties, dates, documents and progress into one workflow.",
              image: {
                src: "/projects/airbus/project-management.jpg",
                alt: "Aircraft Recovery and Transition project-management screen",
              },
            },
            {
              index: "03",
              title: "Assign the right representatives",
              need: "Responsibility moves across organisations during the handover.",
              response: "Named lessor and lessee representatives make ownership explicit from the start.",
              image: {
                src: "/projects/airbus/assign-representatives.jpg",
                alt: "Assigning lessor and lessee representatives",
              },
            },
            {
              index: "04",
              title: "Coordinate the checklist",
              need: "Return conditions and supporting evidence need to be coordinated across teams.",
              response: "A shared checklist turns requirements into visible, trackable transition work.",
              image: {
                src: "/projects/airbus/create-checklist.jpg",
                alt: "Creating an aircraft transition checklist",
              },
            },
            {
              index: "05",
              title: "Review and accept documentation",
              need: "Aircraft records need a clear review and acceptance state.",
              response: "Document review brings evidence, status and acceptance into the same workflow.",
              image: {
                src: "/projects/airbus/document-acceptance.png",
                alt: "Aircraft document review and acceptance screen",
              },
            },
            {
              index: "06",
              title: "Complete the transfer",
              need: "The physical aircraft and its records need to reach the same conclusion.",
              response: "The final step coordinates aircraft and document transfer in one action.",
              image: {
                src: "/projects/airbus/aircraft-document-transfer.jpg",
                alt: "Final aircraft and document transfer screen",
              },
            },
          ],
        },
        {
          type: "outcome",
          eyebrow: "07 — What this changed",
          heading: "A fragmented landscape became a prioritised product direction.",
          body: [
            "Research across the domain, 50+ connected pain points and collaborative prioritisation led to a focused transition experience.",
            "The result was a coherent product direction the team could prototype, evaluate and develop further — turning a complex service landscape into a tangible workflow.",
          ],
          signal: "Selected for presentation at Airbus UX Conclave 2022 in Toulouse.",
        },
        {
          type: "reflection",
          eyebrow: "08 — Reflection",
          heading: "Find the system before designing the interface.",
          body: [
            "This project reinforced a principle I still use: when the interface is complicated, the problem often exists one level above it.",
            "By understanding the domain, people, dependencies and handoffs first, I could turn a complex service system into a focused product experience without simplifying away the reality of the work.",
          ],
        },
      ],
    },
    sections: [
      {
        type: "text",
        content: {
          eyebrow: "01 — The setup",
          heading: "The aircraft is one asset. Managing it is a shared operation.",
          body: [
            "Aircraft leasing stretches across owners, airlines, technical teams, regulators, maintenance partners, inspections, approvals, and an extensive documentary record.",
            "The brief was to understand that leasing cycle and shape an end-to-end aircraft-management experience for lessors and the stakeholders around them.",
            "Aviation was an unfamiliar domain at the outset. Building enough domain understanding to make responsible product decisions became part of the design challenge itself.",
          ],
        },
      },
      {
        type: "text",
        content: {
          eyebrow: "02 — The problem behind the problem",
          heading: "This was not another dashboard problem.",
          body: [
            "The original question pointed toward an interface. The investigation exposed a wider systems problem: work was distributed across organisations, specialist roles, processes, documents, and tools.",
            "The source material describes a mix of tools, inefficient project management, poor collaboration, and limited shared understanding of aircraft asset management. The issue was closer to a fragmented operating system than a missing screen.",
            "The experience could not be made coherent until the relationships beneath it were understood—who exchanges what, when responsibility changes, and how aircraft status and documentation move together.",
          ],
        },
      },
      {
        type: "largeImage",
        image: {
          src: "/projects/airbus/stakeholder-ecosystem.png",
          alt: "Aircraft leasing stakeholder ecosystem and value-exchange map",
          caption: "Stakeholder ecosystem and value exchange across lessors, lessees, Airbus, regulators, maintenance organisations, suppliers, and other participants.",
        },
      },
      {
        type: "text",
        content: {
          eyebrow: "03 — Making the invisible system visible",
          heading: "Research built the map before design narrowed the territory.",
          body: [
            "Four aviation and leasing books built baseline domain knowledge. Contextual enquiries and 12 interviews then connected that formal model to how the asset-management work operated in practice.",
            "The synthesis produced a GIGA map, the Asset Management team structure, a journey map and persona, a recovery-and-transition process map, and a pain-point model. Together they exposed how responsibilities, technical information, inspections, records, and approvals crossed organisational boundaries.",
            "These were not separate method deliverables. They were different views of the same operating system: ecosystem, organisation, experience, process, and friction.",
          ],
        },
      },
      {
        type: "imageGrid",
        images: [
          {
            src: "/projects/airbus/giga-map.png",
            alt: "GIGA map of the aircraft leasing system",
            caption: "The GIGA map assembled the leasing cycle, roles, exchanges, and wider system into one view.",
          },
          {
            src: "/projects/airbus/asset-management-team-structure.png",
            alt: "Aircraft Asset Management team structure",
            caption: "The team structure clarified how portfolio, operations, placements, and technical roles related to the work.",
          },
        ],
      },
      {
        type: "imageGrid",
        images: [
          {
            src: "/projects/airbus/journey-map-persona.png",
            alt: "Aircraft recovery journey map and lessor persona",
            caption: "The journey and persona connected operational stages, tools, pain points, and responsibility.",
          },
          {
            src: "/projects/airbus/recovery-transition-map.png",
            alt: "Recovery and transition process map",
            caption: "The process map traced recovery, return-condition analysis, re-delivery, and aircraft transfer.",
          },
        ],
      },
      {
        type: "fullWidthVisual",
        image: {
          src: "/projects/airbus/pain-points-overview.png",
          alt: "More than 50 aircraft-management pain points collected and analysed",
          caption: "More than 50 pain points were collected, connected, and analysed across asset data, alerts and reporting, and process management.",
        },
      },
      {
        type: "text",
        content: {
          eyebrow: "04 — The turning point",
          heading: "Prioritisation turned a system map into a product bet.",
          body: [
            "The research did not produce one isolated eureka quote. It made a broad pattern visible: more than 50 connected pain points across tools, information access, administration, collaboration, and process ownership.",
            "Those pain points were translated into ideas and prioritised collaboratively with product, architecture, design management, and design perspectives. Only then did the broad unified-tool ambition narrow to a concrete product focus: Recovery, Re-delivery & Transition.",
            "The turning point was the move from mapping everything to choosing where a shared tool could create coherence across the most consequential handoffs.",
          ],
        },
      },
      {
        type: "largeImage",
        image: {
          src: "/projects/airbus/prioritisation-matrix.png",
          alt: "Collaborative impact and feasibility prioritisation matrix",
          caption: "Ideas were assessed by impact and team feasibility before the tool concept was defined.",
        },
      },
      {
        type: "text",
        content: {
          eyebrow: "05 — From complexity to product direction",
          heading: "Design the coordination, not just the screens.",
          body: [
            "Problem: recovery and transition involved multiple parties working through disconnected processes and tools. Evidence: the ecosystem, journey, and interview synthesis showed repeated handoffs around status, technical records, inspections, and approvals. Design response: organise the concept around a shared transition project rather than isolated tasks.",
            "Problem: aircraft state and documentary state had to progress together. Evidence: the mapped journey connected physical inspection, current aircraft data, maintenance history, checklists, acceptance, and transfer. Design response: make the workflow visible as staged progress, with clear responsibility and document status at each point.",
            "The wider concept considered a virtual platform, project organisation, schedules and alerts, document management and records, a unified tool, and comprehensive search. The focused Recovery & Transition flow became the place to make that direction tangible.",
            "A concept map, multi-user task flows, user flows, and information architecture translated the prioritised direction into a testable product experience.",
          ],
        },
      },
      {
        type: "imageGrid",
        images: [
          {
            src: "/projects/airbus/feature-prioritisation.jpg",
            alt: "Feature mapping and prioritisation for the aircraft-management concept",
            caption: "Feature mapping narrowed a broad opportunity space into a focused product direction.",
          },
          {
            src: "/projects/airbus/concept-map.jpg",
            alt: "Concept map for the unified aircraft-management experience",
            caption: "The concept map connected the selected capabilities before screen design began.",
          },
        ],
      },
      {
        type: "imageGrid",
        images: [
          {
            src: "/projects/airbus/multi-user-task-flow.jpg",
            alt: "Task flow showing multiple users in aircraft recovery and transition",
            caption: "The task flow made cross-user responsibility explicit.",
          },
          {
            src: "/projects/airbus/information-architecture.jpg",
            alt: "Information architecture for the unified aircraft-management product",
            caption: "Information architecture organised the experience around the work users needed to coordinate.",
          },
        ],
      },
      {
        type: "text",
        content: {
          eyebrow: "06 — The experience",
          heading: "A shared path from project setup to transfer.",
          body: [
            "The final concept concentrated on a few connected moments: seeing the aircraft portfolio, opening a transition project, assigning lessor and lessee representatives, creating the checklist, exchanging and accepting documents, tracking status, and completing the aircraft-and-document transfer.",
            "Each screen is presented as part of that shared workflow—not as an isolated feature gallery.",
          ],
        },
      },
      {
        type: "largeImage",
        image: {
          src: "/projects/airbus/aircraft-cards.jpg",
          alt: "Aircraft portfolio cards in the unified asset-management concept",
          caption: "Aircraft cards provided an entry point into each asset and its management state.",
        },
      },
      {
        type: "imageGrid",
        images: [
          {
            src: "/projects/airbus/project-management.jpg",
            alt: "Aircraft recovery and transition project-management screen",
            caption: "A transition project brought the shared workflow into one place.",
          },
          {
            src: "/projects/airbus/assign-representatives.jpg",
            alt: "Screen for assigning lessor and lessee representatives",
            caption: "Named representatives made responsibility visible across organisations.",
          },
        ],
      },
      {
        type: "imageGrid",
        images: [
          {
            src: "/projects/airbus/create-checklist.jpg",
            alt: "Checklist creation screen for aircraft recovery and transition",
            caption: "Checklist creation structured the evidence required for the handover.",
          },
          {
            src: "/projects/airbus/document-acceptance.png",
            alt: "Document review and acceptance screen",
            caption: "Document acceptance made review status part of the shared process.",
          },
        ],
      },
      {
        type: "largeImage",
        image: {
          src: "/projects/airbus/aircraft-document-transfer.jpg",
          alt: "Final aircraft and document transfer screen",
          caption: "The workflow culminated in the coordinated transfer of the aircraft and its documentation.",
        },
      },
      {
        type: "text",
        content: {
          eyebrow: "07 — What this changed",
          heading: "A fragmented operation became a coherent product direction.",
          body: [
            "The work produced an end-to-end concept that connected stakeholder responsibility, aircraft status, documentary evidence, review, and transfer within one recovery-and-transition workflow.",
            "The presentation records a final prototype and testing, but does not include enough test detail to claim a validated production outcome. The supported value is the clarity created: a researched domain model, a prioritised opportunity area, and a product direction carried through to detailed flows and interface designs.",
            "The project was also selected as one of the India projects presented at the 2022 Airbus UX Conclave in Toulouse.",
          ],
        },
      },
      {
        type: "text",
        content: {
          eyebrow: "08 — Reflection",
          heading: "Find the system before designing the interface.",
          body: [
            "Starting in an unfamiliar domain reinforced a principle I still use: build enough shared understanding to design with evidence rather than assumption.",
            "The research and core design outputs were my contribution; ideation, prioritisation, definition, and prototype work were developed with PM, SA, DM, and design colleagues. The quality of the direction depended on both deep synthesis and sustained collaboration.",
            "This project reflects how I work in ambiguity: make the ecosystem visible, align around the right level of the problem, and translate complexity into an experience people can follow.",
          ],
        },
      },
    ],
    sourceUrl: "https://www.rajeeshnittoor.nl/airbusaircraftmanagementproject",
    sourceArchive: [
      {
        chapter: "Context and research",
        items: [
          "Project overview",
          "Sponsor: Airbus",
          "Design team: Innovation Team — Digital Solutions for Customer Services",
          "Design process and timeline artefact",
          "Airbus and stakeholder context",
          "Stakeholder ecosystem and value exchange",
          "Primary and secondary research",
          "Four books used for aviation and leasing domain research",
          "Twelve interviews and contextual enquiries",
          "GIGA map and Asset Management team structure",
          "Leasing cycle and proto-personas",
          "Information-source documents",
          "Interview questions, expectations, insights, and persona",
        ],
      },
      {
        chapter: "Synthesis and direction",
        items: [
          "Aircraft recovery-to-transition journey and journey map",
          "More than 50 pain points collected and analysed",
          "Ideation session material",
          "Feature clusters, mapping, prioritisation, and refinement",
          "Concept map",
          "Scenarios and task flows",
          "Recovery and transition process map",
          "Dashboard user flow",
          "Information architecture",
          "Selected concept areas: virtual platform, project organiser, schedules and alerts, document management and records, unified tool, and comprehensive search",
        ],
      },
      {
        chapter: "Quantitative source notes — not rendered as outcomes",
        items: [
          "The presentation maps a 96-week Recovery-to-Transition process context",
          "The presentation references 6.5% historical project delay and 6.4 weeks across the previous four years",
          "The presentation projects a 20% reduction and 19.2 weeks saved; these are estimates, not measured production results",
        ],
      },
      {
        chapter: "Experience",
        items: [
          "Original demo video reference",
          "Aircraft cards",
          "Project-management and project-creation screens",
          "Interview dossier",
          "Lessor and lessee representative assignment",
          "Checklist creation and upload",
          "Document review, acceptance, and status",
          "Aircraft and document transfer",
          "Airbus UX Conclave selection in Toulouse in 2022",
        ],
      },
    ],
    relatedProjects: ["loog-search-engine", "unicamp-pos"],
  },
  {
    slug: "loog-search-engine",
    index: "04",
    title: "Loog — Search Engine Redesign",
    client: "Systems research",
    year: "2023",
    disciplines: ["System Design", "Information Ecosystem", "UI / UX"],
    hook: "What if search clustered information around a person’s life, not just their query?",
    shortSummary:
      "A system-design approach to digital information ecosystems — GIGA mapping, multi-level modelling, and a rethought search results page for someone living with diabetes.",
    featured: false,
    accent: "blue",
  },
  {
    slug: "calicut-beach",
    index: "05",
    title: "Connecting the Calicut Beach Experience",
    client: "Calicut Beach",
    year: "",
    disciplines: ["Service Design", "Experience Design", "Research"],
    hook: "Connecting physical journeys, public services and destination information into one visitor experience through on-site research.",
    shortSummary:
      "A field-researched service design project spanning real visitor journeys, existing-service mapping and a connected mobile prototype.",
    featured: false,
    accent: "sky",
    media: "/projects/calicut-beach/calicut-beach-context.jpg",
  },
  {
    slug: "unicamp-pos",
    index: "06",
    title: "Unicamp — Campaign Planning Dashboard",
    client: "Retail POS",
    year: "2023",
    disciplines: ["Product Design", "Dashboards", "UI / UX"],
    hook: "One dashboard to plan, launch, and watch a festive campaign across 14 stores.",
    shortSummary:
      "A point-of-sale campaign planning tool for HQ and store managers — multi-channel campaign creation, health monitoring, and real-time analytics.",
    featured: false,
    accent: "steel",
  },
  {
    slug: "teamwork-value",
    index: "07",
    title: "Visualising Teamwork in FIFA World Cup Finals",
    client: "Self-initiated visual exploration",
    year: "",
    disciplines: ["Information Visualisation", "Motion Design"],
    hook: "A visual exploration of how players from different clubs, leagues and continents come together as a national team for the FIFA World Cup.",
    shortSummary:
      "A multidimensional sports dataset transformed into a visual narrative across FIFA Men’s World Cup finals from 1930–2018.",
    featured: false,
    accent: "blue",
    media: "/projects/fifa-teamwork-value/thumbnail.png",
    video: "/projects/fifa-teamwork-value/fifa-motion.mp4",
  },
  {
    slug: "avear",
    index: "08",
    title: "Avear — Wearable Sanitiser",
    client: "Industrial design",
    year: "2020",
    disciplines: ["Industrial Design", "Behaviour"],
    hook: "We touch our faces 16 times an hour. What if clean hands came with us?",
    shortSummary:
      "A wearable concept addressing indirect Covid-19 transmission by nudging hand hygiene around unconscious face-touching.",
    featured: false,
    accent: "ink",
  },
];

// Explorations that are not yet part of the main projects collection.
export const upcomingProjects = [
  {
    title: "Research Mapping",
    disciplines: ["Research", "Synthesis"],
    note: "Mapping research across a complex problem space. Case study in progress.",
  },
] as const;

export const featuredProjects = projects.filter((p) => p.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
