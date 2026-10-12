// Central site configuration — brand, nav, contact, and studio copy.

export const site = {
  name: "Nittoor",
  fullName: "Nittoor Freelance Studio",
  founder: "Rajeesh Nittoor",
  role: "UX · Product · Service Design",
  location: "Amsterdam, NL",
  available: true,
  availabilityLabel: "Open to senior design opportunities",

  email: "rajeeshnittoor@gmail.com",
  linkedin: "https://www.linkedin.com/in/rajeeshnittoor/",

  // Legal (from the existing site footer)
  kvk: "94193622",
  vat: "NL005070003B10",

  nav: [
    { label: "Work", href: "/#work" },
    { label: "Contact", href: "/#contact" },
  ],

  hero: {
    // The big statement — carries the brand.
    lead: "Design for complex systems,",
    leadAccent: "made simple to use.",
    sub: "Senior UX & Product Designer in Amsterdam, working across product, service and systems design.",
  },

  // Bio blurb — craft-forward, first person as a practice.
  bio: {
    eyebrow: "About",
    body: "I’m Rajeesh, a Senior UX & Product Designer with 7+ years of experience turning complex systems into clear, usable experiences. With a background in architecture, I work across product, service and systems design — understanding the wider system before deciding what the interface needs to do.",
    highlights: [
      "7+ years in UX",
      "Architecture background",
      "Amsterdam · working worldwide",
    ],
  },
} as const;
