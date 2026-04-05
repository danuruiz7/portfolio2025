import siteData from "./site.json";
import homeData from "./home.json";
import aboutPageData from "./about.json";
import servicesData from "./services.json";
import projectsData from "./projects.json";
import type { PortfolioData, Project, Service } from "../types/portfolio";

export const portfolio: PortfolioData = {
  basics: siteData.basics,
  about: homeData.about,
  stack: siteData.stack,
  experience: siteData.experience,
  services: servicesData.services,
  projects: projectsData.projects,
  faq: homeData.faq,
  pages: {
    home: homeData.page,
    about: aboutPageData.page,
    services: servicesData.page,
    projects: projectsData.page
  }
};

export const getProjectBySlug = (slug: string): Project | undefined =>
  portfolio.projects.find((project) => project.slug === slug);

export const getServiceBySlug = (slug: string): Service | undefined =>
  portfolio.services.find((service) => service.slug === slug);
