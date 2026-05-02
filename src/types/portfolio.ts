export interface Action {
  label: string;
  href: string;
  variant: "primary" | "secondary";
  target: string;
  rel: string;
}

export interface NavItem {
  href: string;
  label: string;
  disabled?: boolean;
}

export interface Basics {
  name: string;
  headline: string;
  subHeadline: string;
  image: string;
  email: string;
  seoTitle: string;
  seoDescription: string;
  footerText: string;
  links: {
    github: string;
    linkedin: string;
  };
  nav: NavItem[];
  actions: Action[];
}

export interface About {
  title: string;
  description: string;
  longDescription: string;
  highlights: string[];
}

export interface Technology {
  category: string;
  technologies: string[];
}

export interface ExperienceJob {
  company: string;
  role: string;
  date: string;
  description: string;
  skills: string[];
  type: string;
}

export interface ProjectLinks {
  demo: string;
  repo?: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  tags: string[];
  keywords: string[];
  challenge: string;
  solution: string;
  outcome: string;
  deliverables: string[];
  links: ProjectLinks;
  image: string;
}

export interface Service {
  slug: string;
  title: string;
  summary: string;
  description: string;
  deliverables: string[];
  keywords: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServicesPage {
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  intro: string;
}

export interface AboutPage {
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
}

export interface ProjectsPage {
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  intro: string;
  sectionTitle: string;
  viewAllLabel: string;
  caseStudyLabel: string;
  backLabel: string;
  studyEyebrow: string;
  challengeTitle: string;
  solutionTitle: string;
  outcomeTitle: string;
  deliverablesTitle: string;
  linksTitle: string;
  keywordsTitle: string;
  demoLabel: string;
  repoLabel: string;
  noRepoTooltip: string;
}

export interface HomePage {
  title: string;
  description: string;
  servicesTitle: string;
  servicesIntro: string;
  servicesCtaLabel: string;
  faqTitle: string;
}

export interface PagesContent {
  home: HomePage;
  about: AboutPage;
  services: ServicesPage;
  projects: ProjectsPage;
}

export interface PortfolioData {
  basics: Basics;
  about: About;
  stack: Technology[];
  experience: ExperienceJob[];
  services: Service[];
  projects: Project[];
  faq: FaqItem[];
  pages: PagesContent;
}
