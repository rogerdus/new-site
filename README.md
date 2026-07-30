# Supervivencia Linux

Blog personal sobre Linux, administración de sistemas y desarrollo web. Construido con [Astro](https://astro.build/).

## Comandos

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo (http://localhost:4321)
npm run build    # build de producción → dist/
npm run preview  # previsualizar el build de producción
```

## Estructura

```
src/
├── assets/
│   ├── images/              # imágenes del sitio (avatar, etc.)
│   └── site-config.yaml     # configuración del sitio (copy, email, socials)
├── components/
│   ├── MainSection.astro     # hero
│   ├── AboutSection.astro    # sobre mí + skills + foto
│   ├── FeaturedSection.astro # proyectos destacados (cards alternadas)
│   ├── ProjectsSection.astro # otros proyectos (grid)
│   ├── GetInTouch.astro      # contacto
│   └── ui/                   # Button, Link
├── content/
│   ├── blog/                 # posts del blog (.md / .mdx)
│   ├── featured/             # proyectos destacados (.md)
│   ├── projects/             # proyectos secundarios (.md)
│   └── config.js             # schemas de content collections (zod)
├── layouts/
│   ├── Layout.astro          # layout principal (nav, sidebars, footer)
│   ├── BlogPostLayout.astro  # layout para posts individuales
│   └── components/            # Navbar, Sidebars, Footer, Meta
├── pages/
│   ├── index.astro           # home
│   └── blog/
│       ├── index.astro       # listing del blog
│       └── [slug].astro      # post individual
├── styles/
│   └── global.css            # sistema de diseño (paleta, tipografía, layout)
└── config.js                 # parser de site-config.yaml (zod)
```

## Cómo publicar un post

1. Crea un archivo en `src/content/blog/` con extensión `.md` (o `.mdx` si necesita componentes).

2. Frontmatter requerido:

```yaml
---
title: "Título del post"
description: "Descripción corta para SEO y cards"
date: 2026-01-15           # fecha (sin comillas — tipo date, no string)
author: "Rogelio Interino"
tags: ["linux", "terminal"]  # opcional
---
```

3. Escribe el contenido en Markdown debajo del frontmatter.

4. Si usas imágenes, ponlas en `src/assets/images/` y en `.mdx` importa con:

```mdx
import { Image } from 'astro:assets';
import miImagen from '../../assets/images/mi-imagen.jpg';

<Image src={miImagen} alt="Descripción" />
```

El post aparece automáticamente en `/blog` y el sitemap.

## Cómo agregar un proyecto

### Proyecto destacado (Featured)

Aparece en el home como card grande alternada. Crear en `src/content/featured/`:

```yaml
---
title: "Nombre del proyecto"
description: "Descripción"
tech: ["Astro", "CSS"]
github: "https://github.com/user/repo"    # opcional
external: "https://example.com"           # opcional
date: "1"                                  # ordinal de orden (string)
---
```

### Proyecto secundario (Projects)

Aparece en el home como card en grid. Crear en `src/content/projects/`:

```yaml
---
title: "Nombre del proyecto"
description: "Descripción"
tech: ["Git", "Bash"]
github: "https://github.com/user/repo"    # opcional
external: "https://example.com"           # opcional
showInProjects: true                       # false = solo visible en archive
date: "2026-01-15"                         # string, sort DESC
---
```

## Configuración del sitio

Todo el copy del home (hero, about, contacto, email, redes) está en `src/assets/site-config.yaml`. Editar ahí y el build lo propaga automáticamente.

## Stack

- **Astro 4** — static site generator, sin JS de cliente por defecto
- **Content Collections** — Markdown con schema validation (zod)
- **astro:assets** — optimización automática de imágenes (WebP)
- **@astrojs/sitemap** — sitemap.xml automático
- **@astrojs/mdx** — soporte MDX para posts con componentes

## Licencia

MIT