const assetRoot = "/projects/ikea-data-visualisation";

export const ikeaDataVisualisationCaseStudy = {
  hero: {
    eyebrow: "IKEA · 2025",
    headline: "Building a shared system for data visualisation at IKEA.",
    intro:
      "I helped improve how marketing dashboards communicate performance, then turned what we learned into reusable data-visualisation guidance and patterns for IKEA’s SKAPA design system.",
    metadata: [
      { label: "Role", value: "Product Designer" },
      { label: "Scope", value: "Dashboard Design · Data Visualisation · Design Systems" },
      { label: "Collaborated with", value: "Marketing · Product · Data · SKAPA" },
    ],
    visual: {
      principles: {
        label: "Principles",
        src: `${assetRoot}/metric-tile-anatomy.png`,
        alt: "Anatomy of a reusable KPI metric tile",
        width: 1286,
        height: 508,
      },
      visuals: {
        label: "Visuals",
        src: `${assetRoot}/metric-tile-variants.png`,
        alt: "Reusable metric patterns for KPIs, goals, shares and trends",
        width: 2282,
        height: 602,
      },
      dashboards: {
        label: "Dashboards",
        src: `${assetRoot}/marketing-dashboard-redesign.png`,
        alt: "Redesigned IKEA Marketing Performance Dashboard",
        width: 1555,
        height: 875,
      },
    },
  },
  context: {
    eyebrow: "The context",
    headline: "Marketing teams relied on dashboards, but there was no shared way to design them.",
    body: [
      "Marketing managers used dashboards to understand performance and support decision-making. These dashboards were built in Power BI by Data teams, but there wasn’t enough guidance for structuring complete data experiences—how information should be prioritised, how KPIs should be presented, or how charts and supporting insights should work together.",
      "SKAPA provided foundational design guidance, but teams needed more comprehensive guidance for designing data visualisations and dashboards.",
    ],
    image: {
      src: `${assetRoot}/marketing-dashboard-existing.png`,
      alt: "Existing IKEA Marketing Performance Dashboard",
      caption: "Existing Marketing Performance Dashboard",
      width: 1059,
      height: 619,
    },
    observations: [
      {
        title: "Weak hierarchy",
        body: "Important and supporting information competed for attention.",
      },
      {
        title: "Inconsistent patterns",
        body: "Different metrics and data types needed a clearer, reusable visual language.",
      },
      {
        title: "Limited guidance",
        body: "Teams needed more than chart colours—they needed guidance for composing complete dashboards.",
      },
    ],
  },
  opportunity: {
    eyebrow: "The opportunity",
    headline: "What began as a dashboard redesign revealed a larger system problem.",
    paths: [
      {
        index: "01",
        label: "Real product",
        title: "Improve the Marketing Performance Dashboard",
        details: ["Marketing managers", "Product team", "Data team", "Power BI"],
      },
      {
        index: "02",
        label: "Design system",
        title: "Create reusable guidance for future data experiences",
        details: ["Principles", "Visual patterns", "Metric tiles", "Dashboard layouts", "Hierarchy", "SKAPA"],
      },
    ],
    bridge:
      "Working with Marketing, Product and Data gave us a real product context for identifying the problems. Instead of solving those issues only for one dashboard, we used what we learned to help establish reusable guidance that other teams could apply.",
  },
  collaboration: {
    headline: "One problem, three perspectives.",
    perspectives: [
      {
        title: "Marketing managers",
        body: "What information is needed to understand performance and make decisions?",
      },
      {
        title: "Data team",
        body: "What can realistically be implemented in Power BI?",
      },
      {
        title: "Product team",
        body: "How should the dashboard support the product and business needs?",
      },
    ],
    role: {
      eyebrow: "My role",
      body:
        "I was the product designer on the project, working with Marketing, Product and Data, with support from my design lead. I helped facilitate workshops, redesigned the dashboard within Power BI constraints, developed reusable visualisation patterns and Figma components, and later worked with the SKAPA team to shape the broader guidance.",
    },
  },
  systemTransition: {
    eyebrow: "From product to system",
    headline: "The dashboard exposed a bigger design-system gap.",
    body: [
      "As we worked through the dashboard, the same design questions kept recurring: how should KPIs be structured? Which visual should answer which question? How should trends and comparisons be communicated consistently?",
      "These weren’t questions unique to one Power BI report. They pointed to a need for reusable guidance.",
    ],
    progression: ["One dashboard", "Reusable guidance"],
  },
  principles: {
    eyebrow: "01 — Principles",
    headline: "We started by defining what good data visualisation should achieve.",
    body: [
      "The guidance was built on four principles that could apply regardless of the dashboard, dataset or implementation tool.",
    ],
    items: [
      { title: "Purpose", body: "Start with a clear intent and make the main takeaway understandable." },
      { title: "Clarity", body: "Show what is necessary and reduce visual clutter." },
      { title: "Consistency", body: "Use familiar structures, colours and elements across experiences." },
      { title: "Accessibility", body: "Design data so it can be understood and accessed in different ways." },
    ],
    image: {
      src: `${assetRoot}/design-principles.png`,
      alt: "IKEA data visualisation principles covering purpose, clarity, consistency and accessibility",
      width: 1171,
      height: 702,
    },
  },
  visuals: {
    eyebrow: "02 — Visuals",
    headline: "The principles became practical rules for representing data.",
    body: [
      "The next layer focused on how data should be represented: choosing appropriate visual encodings, selecting charts based on the question being answered, and keeping individual visualisations clear and comparable.",
    ],
    sections: [
      {
        eyebrow: "Visual encoding",
        headline: "Match the visual encoding to the type of data.",
        body: "Quantitative values can be communicated through attributes such as length and position, while qualitative categories can use attributes such as colour and shape.",
        image: {
          src: `${assetRoot}/quantitative-qualitative-encoding.jpg`,
          alt: "Guidance comparing quantitative and qualitative visual encoding methods",
          width: 1624,
          height: 884,
        },
      },
      {
        eyebrow: "Chart guidance",
        headline: "Choosing the right visual",
        body: "Common analytical questions—comparison, trends, distribution, composition and relationships—were connected to appropriate chart types.",
        image: {
          src: `${assetRoot}/approved-charts.jpg`,
          alt: "Approved chart types organised by analytical question",
          width: 1900,
          height: 1460,
        },
      },
      {
        eyebrow: "Chart anatomy",
        headline: "Standardising how context is communicated",
        body: "Titles, labels, axes and supporting information were treated as part of the visual system, not decoration.",
        image: {
          src: `${assetRoot}/layered-chart-anatomy.jpg`,
          alt: "Layered chart example showing how KPI, trend and benchmark context are communicated",
          width: 1604,
          height: 1378,
        },
      },
    ],
  },
  reusablePatterns: {
    eyebrow: "Reusable metric patterns",
    headline: "I translated recurring data needs into reusable metric patterns.",
    body: [
      "Across the dashboard, the same communication needs kept recurring: a value, whether it changed, the direction of change, and what it was being compared against. I translated these recurring needs into reusable metric-tile patterns in Figma.",
    ],
    hierarchy: [
      { title: "Label", body: "What is being measured" },
      { title: "Value", body: "The primary number" },
      { title: "Trend", body: "How it is changing" },
      { title: "Comparison", body: "The context for interpreting that change" },
    ],
    anatomy: {
      src: `${assetRoot}/metric-tile-anatomy.png`,
      alt: "Anatomy of a reusable metric tile showing label, value, trend and comparison context",
      width: 1286,
      height: 508,
    },
    variantsHeadline: "One structure, multiple data needs.",
    variants: ["KPI + Trend", "KPI + Goal + Trend", "Share + Trend", "Share + Goal + Trend"],
    variantsImage: {
      src: `${assetRoot}/metric-tile-variants.png`,
      alt: "Four reusable metric tile variants for KPIs, goals, shares and trends",
      width: 2282,
      height: 602,
    },
  },
  dashboards: {
    eyebrow: "03 — Dashboards",
    headline: "The patterns then needed a clear dashboard hierarchy.",
    body: [
      "Once the individual patterns were defined, the next step was deciding how they should work together—what deserves attention first, which information belongs together, and where supporting context should live.",
    ],
    layout: {
      headline: "Give every type of information a role.",
      image: {
        src: `${assetRoot}/Layouts & Grouping.jpg`,
        alt: "Dashboard layout guidance identifying primary, supporting and contextual information zones",
        width: 4542,
        height: 2664,
      },
      roles: [
        { title: "Primary", body: "Key KPIs and performance indicators establish the starting point." },
        { title: "Supporting", body: "Related charts and tables help explain what is happening." },
        { title: "Contextual", body: "Filters, notes, legends and related information provide additional context without competing with the primary story." },
      ],
    },
    hierarchy: {
      headline: "Establishing a reading order",
      body: "Placement, scale and grouping created a deliberate hierarchy rather than giving every element equal visual weight.",
      image: {
        src: `${assetRoot}/prioritisation & hierarchy- layout.jpg`,
        alt: "Dashboard hierarchy showing KPIs first, explanatory visuals second and supporting insights third",
        width: 2228,
        height: 2068,
      },
      levels: [
        { index: "01", title: "KPI", body: "What should I notice first?" },
        { index: "02", title: "Visuals", body: "What explains what is happening?" },
        { index: "03", title: "Insights", body: "What helps me interpret it?" },
      ],
    },
    application: {
      eyebrow: "Applying the system",
      headline: "Testing the guidance against a real Power BI dashboard.",
      body: [
        "The guidance had to work within the reality of Power BI, not just in Figma. The redesigned direction brought together reusable metric patterns, information hierarchy, grouping and consistent navigation while accounting for Power BI’s implementation constraints.",
      ],
      image: {
        src: `${assetRoot}/Template_ Landing _ Mock data.jpg`,
        alt: "Dashboard direction using mock data to apply the emerging visualisation guidance",
        caption: "Dashboard direction applying the emerging data-visualisation guidance.",
        width: 3840,
        height: 2160,
      },
    },
  },
  outcome: {
    eyebrow: "Outcome",
    headline: "From one dashboard problem to reusable design guidance.",
    areas: [
      {
        index: "01",
        level: "Product level",
        title: "Marketing Performance Dashboard",
        body: "The redesigned Marketing Performance Dashboard direction was approved by the Data team and implemented in Power BI.",
      },
      {
        index: "02",
        level: "System level",
        title: "SKAPA Data Visualisation Guidance",
        body: "The broader guidance was structured across Principles, Visuals and Dashboards. The first-phase guidance was reviewed and approved by the SKAPA design-system team.",
      },
    ],
    closing: "What started as an effort to improve one dashboard became a reusable approach to designing data experiences—grounded in SKAPA, applicable across tools, and tested against the realities of Power BI.",
  },
} as const;
