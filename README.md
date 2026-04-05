# Portfolio 2025

Portfolio personal construido con Astro 5, Tailwind CSS v4 y despliegue estático sobre Nginx.

## Stack

- Astro 5
- Tailwind CSS 4
- React 19 disponible para islas si hace falta
- Bun para build en Docker
- Nginx para servir `dist/`

## Scripts

```bash
npm run dev
npm run build
npm run preview
```

## Estructura

```text
src/
  components/      Componentes de UI
  data/            Datos del sitio separados por dominio/página
  layouts/         Layout base y metadatos SEO
  pages/           Rutas estáticas y sitemap
  styles/          CSS global
  types/           Tipos TypeScript del contenido
public/
  fonts/           Fuentes locales
  robots.txt       Reglas de rastreo
```

## Datos del proyecto

Toda la información editable sale de `src/data/`.

- `site.json`: navegación, hero, links, stack y experiencia
- `home.json`: contenido de home, about y FAQ
- `about.json`: SEO y copy de `/sobre-mi`
- `services.json`: servicios y copy de `/servicios`
- `projects.json`: proyectos y copy de `/proyectos` y `/proyectos/[slug]`
- `portfolio.ts`: agregador de todos los JSON en un único objeto tipado

Si vas a cambiar contenido, toca primero esos JSON. No metas copy nuevo en componentes salvo que sea texto puramente estructural o técnico.

## Rutas

- `/`
- `/sobre-mi`
- `/servicios`
- `/proyectos`
- `/proyectos/[slug]`
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

Las imágenes de proyectos y perfil viven en `src/assets/images/`.

Cuando añadas un proyecto:

1. añade la imagen en `src/assets/images/`
2. registra el proyecto en `src/data/projects.json`
3. usa un `slug` único

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

## Docker

Build multi-stage:

- etapa 1: Bun instala dependencias y genera `dist/`
- etapa 2: Nginx sirve el contenido estático

Archivos implicados:

- `Dockerfile`
- `docker-compose.yml`
- `nginx.conf`

Levantar con Docker Compose:

```bash
docker compose up --build
```

## Convenciones

- Contenido en JSON, no hardcodeado en páginas
- SEO por página desde datos
- Componentes presentacionales simples
- Rutas de proyectos generadas estáticamente desde data

## Pendiente recomendable

- Sustituir `#` en demos/repos por URLs reales
- Añadir `astro check` si se instala `@astrojs/check`
- Separar también `experience` y `stack` en JSON dedicados si el contenido sigue creciendo
