// Central site configuration — brand, nav, contact, and studio copy.

export const site = {
  name: "Nittoor",
  fullName: "Nittoor Freelance Studio",
  founder: "Rajeesh Nittoor",
  role: "UX · Product · Service Design",
  location: "Relocating to London, UK",
  available: true,
  availabilityLabel: "Open to senior design opportunities",

  email: "rajeeshnittoor@gmail.com",
  linkedin: "https://www.linkedin.com/in/rajeeshnittoor/",

  // Legal (from the existing site footer)
  kvk: "94193622",
  vat: "NL005070003B10",

  nav: [
    { label: "Work", href: "/#work", newTab: false },
    { label: "Resume", href: "/Rajeesh_Nittoor_CV.pdf", newTab: true },
  ],

  hero: {
    headline: "I turn complex systems into products people can use.",
    pills: [
      "UX & Product Design",
      "7+ years",
      "Service Design",
      "Research → Product",
      "Relocating to London",
    ],
  },

  // Bio blurb — craft-forward, first person as a practice.
  bio: {
    eyebrow: "About",
    body: "I’m Rajeesh, a Senior UX & Product Designer with 7+ years of experience turning complex systems into clear, usable experiences. With a background in architecture, I work across product, service and systems design — understanding the wider system before deciding what the interface needs to do.",
    highlights: [
      "7+ years in UX",
      "Architecture background",
      "Relocating to London · working worldwide",
    ],
  },
} as const;
