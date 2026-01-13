export interface Action {
  label: string;
  href: string;
  variant: "primary" | "secondary";
  target: string;
  rel: string;
}

export interface Basics {
  name: string;
  headline: string;
  subHeadline: string;
  image: string;
  email: string;
  links: {
    github: string;
    linkedin: string;
  };
  actions: Action[];
}

export interface About {
  title: string;
  description: string;
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
  repo: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  links: ProjectLinks;
  image: string;
}

export interface PortfolioData {
  basics: Basics;
  about: About;
  stack: Technology[];
  experience: ExperienceJob[];
  projects: Project[];
}
