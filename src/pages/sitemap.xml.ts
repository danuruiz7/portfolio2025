import type { APIRoute } from "astro";
import { getPortfolio } from "../data/portfolio";

const staticUrls = {
  es: ["", "/sobre-mi", "/servicios", "/proyectos", "/privacy"],
  en: ["/en", "/en/about", "/en/services", "/en/projects", "/en/privacy"]
};

export const GET: APIRoute = () => {
  const portfolioEs = getPortfolio('es');
  const portfolioEn = getPortfolio('en');
  
  const projectPaths = portfolioEs.projects.flatMap((project) => [
    `/proyectos/${project.slug}`,
    `/en/projects/${project.slug}`
  ]);

  const urls = [
    ...staticUrls.es,
    ...staticUrls.en,
    ...projectPaths
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (path) => `  <url>
    <loc>https://druiz.dev${path}</loc>
    <changefreq>weekly</changefreq>
    <priority>${path === "" || path === "/en" ? "1.0" : "0.8"}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
};