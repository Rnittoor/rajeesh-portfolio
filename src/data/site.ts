// Central site configuration — brand, nav, contact, and studio copy.

export const site = {
  name: "Nittoor",
  fullName: "Nittoor Freelance Studio",
  founder: "Rajeesh Nittoor",
  role: "UX · Service · System Design",
  location: "Amsterdam, NL",
  available: true,
  availabilityLabel: "Available for projects — 2026",

  email: "rajeeshnittoor@gmail.com",
  linkedin: "https://www.linkedin.com/in/rajeeshnittoor/",

  // Legal (from the existing site footer)
  kvk: "94193622",
  vat: "NL005070003B10",

  nav: [
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    // The big statement — carries the brand.
    lead: "Design for complex systems,",
    leadAccent: "made simple to use.",
    sub: "A freelance design practice in Amsterdam working across UX, service, and system design.",
  },

  // Bio blurb — craft-forward, first person as a practice.
  bio: {
    eyebrow: "The practice",
    body: "I’m Rajeesh, the designer behind Nittoor. I work where UX, service, and system design meet — from a single interface to the service and systems around it. With a background in architecture and five years in UX, I help teams untangle complex problems and turn them into experiences people actually understand.",
    highlights: [
      "5+ years in UX",
      "Architecture background",
      "Amsterdam · working worldwide",
    ],
  },
} as const;
