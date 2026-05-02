# Portfolio 2025

Portfolio personal construido con Astro 5, Tailwind CSS v4 y despliegue estático en Vercel.

## Stack

- Astro 5 (modo estático)
- Tailwind CSS 4
- TypeScript
- Vercel para deployment

## Scripts

```bash
npm run dev
npm run build
npm run preview
```

## Estructura

```
src/
  components/      Componentes de UI
  data/            Datos del sitio separados por dominio/página
  layouts/         Layout base y metadatos SEO
  pages/           Rutas estáticas y sitemap
  styles/          CSS global
  types/           Tipos TypeScript del contenido
public/
  fonts/           Fuentes locales
  proyectos/        Imágenes de proyectos
  robots.txt        Reglas de rastreo
```

## Datos del proyecto

Toda la información editable está en `src/data/`.

- `site.json`: navegación, hero, links, stack y experiencia
- `home.json`: contenido de home, about y FAQ
- `about.json`: SEO y copy de `/sobre-mi`
- `services.json`: servicios y copy de `/servicios`
- `projects.json`: proyectos y copy de `/proyectos` y `/proyectos/[slug]`
- `privacy.json`: política de privacidad
- `portfolio.ts`: agregador de todos los JSON en un único objeto tipado

Si vas a cambiar contenido, toca primero esos JSON. No metas copy nuevo en componentes salvo que sea texto puramente estructural o técnico.

## Rutas

- `/`
- `/sobre-mi`
- `/servicios`
- `/proyectos`
- `/proyectos/[slug]`
- `/privacy`
- `/sitemap.xml`

## SEO

El layout base en `src/layouts/Layout.astro` gestiona:

- `title`
- `description`
- `canonical`
- `robots`
- Open Graph
- Twitter Cards
- JSON-LD básico

El sitemap es dinámico desde `src/pages/sitemap.xml.ts`.

## Imágenes

Las imágenes de proyectos viven en `public/proyectos/`.

La imagen de perfil vive en `src/assets/images/`.

## Desarrollo

Instalación:

```bash
npm install
```

Servidor local:

```bash
npm run dev
```

Build de producción:

```bash
npm run build
```

## Convenciones

- Contenido en JSON, no hardcodeado en páginas
- SEO por página desde datos
- Componentes presentacionales simples
- Rutas de proyectos generadas estáticamente desde data
- React solo para iconos con lucide-react