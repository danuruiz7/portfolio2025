import siteEs from "./es/site.json";
import homeEs from "./es/home.json";
import aboutEs from "./es/about.json";
import servicesEs from "./es/services.json";
import projectsEs from "./es/projects.json";
import privacyEs from "./es/privacy.json";

import siteEn from "./en/site.json";
import homeEn from "./en/home.json";
import aboutEn from "./en/about.json";
import servicesEn from "./en/services.json";
import projectsEn from "./en/projects.json";
import privacyEn from "./en/privacy.json";

import type { PortfolioData, Project, Service } from "../types/portfolio";
import type { Locale } from "../i18n/config";
import { DEFAULT_LOCALE } from "../i18n/config";

const DATA: Record<Locale, PortfolioData> = {
  es: {
    basics: siteEs.basics,
    about: homeEs.about,
    stack: siteEs.stack,
    experience: siteEs.experience,
    services: servicesEs.services,
    projects: projectsEs.projects,
    faq: homeEs.faq,
    pages: {
      home: homeEs.page,
      about: aboutEs.page,
      services: servicesEs.page,
      projects: projectsEs.page,
    },
  },
  en: {
    basics: siteEn.basics,
    about: homeEn.about,
    stack: siteEn.stack,
    experience: siteEn.experience,
    services: servicesEn.services,
    projects: projectsEn.projects,
    faq: homeEn.faq,
    pages: {
      home: homeEn.page,
      about: aboutEn.page,
      services: servicesEn.page,
      projects: projectsEn.page,
    },
  },
};

export function getPortfolio(locale: Locale = "es"): PortfolioData {
  return DATA[locale];
}

export default getPortfolio(DEFAULT_LOCALE);

export function getProjectBySlug(slug: string, locale: Locale = "es"): Project | undefined {
  return DATA[locale].projects.find((project) => project.slug === slug);
}

export function getServiceBySlug(slug: string, locale: Locale = "es"): Service | undefined {
  return DATA[locale].services.find((service) => service.slug === slug);
}