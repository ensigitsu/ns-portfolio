# Nathan S. — BTS SIO SISR portfolio

Bilingual portfolio published at https://ensigitsu.github.io/ns-portfolio/.

The application uses HTML, CSS and JavaScript. Images, fonts, Markdown project entries and Jekyll configuration are kept alongside the application. GitHub Pages generates the published pages from these sources.

## Edit the site

| Content | File |
| --- | --- |
| Public name, contact and links | `_config.yml` |
| French and English interface text | `_data/translations.yml` |
| Homepage sections | `_includes/sections/` |
| Project entries | `_projets/` |
| Project layout | `_layouts/project.html` |
| Styles | `assets/css/style.css` |
| JavaScript entry point | `assets/js/main.js` |

Copy `_projets/_A-COPIER.md` to `YYYY-MM-subject.md`, complete its metadata and five sections, then add your evidence. Cards, the project count and the competency matrix update during the next build. See `docs/ADDING-PROJECTS.md`.

The public name is Nathan S. Only the supplied public contact belongs in `_config.yml`. Teacher PDFs and private backups must stay outside the repository.

## Visual effects

The hero uses a local vector illustration with CSS animation and a JavaScript pointer tilt confined to the hero. The background uses a lightly blurred reflection image animated in CSS. The pause button stops both effects. Reduced-motion preferences disable animation, and the hero pauses outside the viewport.

## GitHub Pages

Keep `baseurl: /ns-portfolio`. Publish from `main`, `/ (root)`, in **Settings → Pages**. Upload source files with their folders. Do not upload a ZIP, a compiled `_site`, `node_modules` or the optional local preview. Do not add `.nojekyll`.

This repository has no Gemfile, custom Ruby script, Python script, GLSL shader or WebGL library. GitHub provides the Jekyll build environment. Markdown, YAML and Liquid are still required by the class project structure. See `docs/DEPLOYMENT.md`.

## Local checks

With Jekyll 3.10 and its GFM parser installed:

```sh
jekyll build --safe --strict_front_matter
```

With Node 20 or newer:

```sh
npm install
npm run check -- --site _site
```

These Node dependencies are development tools; GitHub Pages does not need to install them. To serve the source locally, run `jekyll serve` and open http://127.0.0.1:4000/ns-portfolio/.

A direct double-click on source HTML does not run Jekyll. After a build, `npm run preview:build` creates an optional sibling `local-preview` folder for local opening. See `docs/LOCAL-PREVIEW.md`.

## Evidence and licences

The two project entries describe the portfolio workshop on 15 October 2026 and the Web exercise completed on 12 October. Existing screenshots, the observed 49-second publication, the W3C result and the Lighthouse Accessibility score of 100/100 record the version checked on 15 October. They are historical evidence, not new scores for this update.

The class template is https://github.com/AbidHamza/modele-portfolio-bts-sio. Original code uses MIT; original content uses CC BY 4.0 subject to third-party rights. Manrope's font licence is included. See `LICENSE`, `CONTENT-LICENSE.md` and `THIRD-PARTY-NOTICES.md`.
