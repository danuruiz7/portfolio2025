import type { Locale } from './config';

export const ROUTES: Record<Locale, Record<string, string>> = {
  es: {
    home: '/',
    'sobre-mi': '/sobre-mi',
    servicios: '/servicios',
    proyectos: '/proyectos',
    privacy: '/privacy',
  },
  en: {
    home: '/en/',
    'sobre-mi': '/en/about',
    servicios: '/en/services',
    proyectos: '/en/projects',
    privacy: '/en/privacy',
  },
};

export function getPathForLocale(page: string, locale: Locale): string {
  return ROUTES[locale][page] || ROUTES[locale].home;
}

export function getCurrentPageFromPath(pathname: string): string | null {
  if (pathname === '/') return 'home';
  if (pathname === '/en/' || pathname === '/en') return 'home';
  
  // Check EN routes first for /en/* paths
  const enMatch = Object.entries(ROUTES.en).find(([, path]) => pathname === path || pathname === path + '/');
  if (enMatch) return enMatch[0];
  
  const esMatch = Object.entries(ROUTES.es).find(([, path]) => pathname === path || pathname === path + '/');
  if (esMatch) return esMatch[0];
  
  const projectMatch = pathname.match(/^\/proyectos\/([^/]+)/);
  if (projectMatch) return `projects/${projectMatch[1]}`;
  
  return null;
}

export function translatePath(fromPath: string, targetLocale: Locale): string {
  const currentPage = getCurrentPageFromPath(fromPath);
  
  if (currentPage?.startsWith('projects/')) {
    const slug = currentPage.replace('projects/', '');
    if (targetLocale === 'en') {
      return `/en/projects/${slug}`;
    }
    return `/proyectos/${slug}`;
  }
  
  if (currentPage && ROUTES[targetLocale][currentPage]) {
    return ROUTES[targetLocale][currentPage];
  }
  
  if (targetLocale === 'en') {
    return '/en/';
  }
  return '/';
}