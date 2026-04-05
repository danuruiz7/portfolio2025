import type { APIRoute } from "astro";
import { portfolio } from "../data/portfolio";

const staticUrls = [
  "",
  "/sobre-mi",
  "/servicios",
  "/proyectos"
];

export const GET: APIRoute = () => {
  const urls = [
    ...staticUrls,
    ...portfolio.projects.map((project) => `/proyectos/${project.slug}`)
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (path) => `  <url>
    <loc>https://druiz.dev${path}</loc>
    <changefreq>weekly</changefreq>
    <priority>${path === "" ? "1.0" : "0.8"}</priority>
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
