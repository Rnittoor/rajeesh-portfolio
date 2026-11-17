import type { MetadataRoute } from "next";
import { publicProjectSlugs } from "@/data/projects";

const baseUrl = "https://www.rajeeshnittoor.nl";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/work", ...publicProjectSlugs.map((slug) => `/work/${slug}`)].map(
    (path) => ({
      url: `${baseUrl}${path || "/"}`,
    }),
  );
}
