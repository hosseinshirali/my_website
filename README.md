# Hossein Shirali — research website

Static Astro website: a concise homepage, publications, project case studies, and background. The CV, website, and LinkedIn are coordinated by the shared AGENTS.md workflow; synchronization is not automatic.

## Local development
Use Node 22.12 or newer and npm. Run `npm ci`, `npm run dev`, then open http://127.0.0.1:4321. Run `npm run build` and `npm test` before review. `npm run preview` serves the production output locally.

## Content
- `src/data/profile.json`: profile links, education, skills, talks.
- `src/data/experience.json`: experience.
- `src/data/publications.json`: one record per work, reused on both pages; order newest first within publication groups. Earlier versions belong to the same record.
- `src/data/projects.json`: six independent case studies, separate from citation prose.
- `src/components/Publication.astro`: illustrated citations and native author expansion.
- `src/layouts/Layout.astro` and `src/styles/global.css`: shared presentation.
- `public/`: only public assets, verification, sitemap, and approved CV PDF.
- `docs/content-migration.md`: retained destinations, verified corrections and unresolved claims.
- `docs/asset-attribution.md` and `docs/cv-provenance.json`: source records.

Keep scientific status, author lists, and career facts evidence-bound. After adding a route, update public/sitemap.xml. If refreshing the CV, copy the accepted My_CV PDF to the existing path, record the source commit and SHA-256, then run the build checks.

## Review and deployment
Work is on a separate redesign branch. No production deployment is authorized by the implementation request. Netlify configuration is prepared for static output (`npm run build`, publish `dist`); this does not change the live service until separately approved and published. Keep the existing repository and Netlify site. Astro requires no Netlify runtime adapter for static output: https://docs.astro.build/en/guides/deploy/netlify/.

Legacy source files outside public/ are not served by Astro and are retained as historical reference. LICENSE.txt retains the original HTML5 UP license.
