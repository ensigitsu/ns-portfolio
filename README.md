# Nathan S. — BTS SIO SISR portfolio

A bilingual Jekyll portfolio with the original liquid hero, subtle ocean-light reflections, automatic Markdown project pages and the six official BTS SIO competencies. The source uses English identifiers and metadata. French interface text and academic evidence remain available.

## Open the extracted ZIP

Extract the whole archive, then open `OPEN-ME.html` beside the `portfolio` folder. It opens the compiled `local-preview/index.html` with local navigation, translations and effects. No installation is needed to view that snapshot.

The HTML inside `portfolio` is Jekyll source. Opening `portfolio/index.html` directly shows front matter and Liquid instructions because a browser cannot compile them. Edit those source files and upload their contents to GitHub; GitHub Pages compiles the website. See `docs/LOCAL-PREVIEW.md` to refresh the local snapshot after editing.

## Publish with GitHub Pages

1. Extract `nathan-portfolio.zip` and open its `portfolio` folder.
2. Use the existing public repository `ensigitsu/ns-portfolio`. The sources come from the [teacher’s template](https://github.com/AbidHamza/modele-portfolio-bts-sio).
3. If starting from that template, delete its old `mentions-legales.md` before uploading `legal.md`, because both would otherwise generate the same legal URL. The old `_layouts/projet.html` and `css/style.css` are no longer used and can also be removed.
4. Open **Code → Add file → Upload files**. Upload the **contents** of the extracted folder, with `_config.yml` and `index.html` directly at repository root. Commit to `main`.
5. The configuration is prepared for `url: https://ensigitsu.github.io` and `baseurl: /ns-portfolio`. The path must match the GitHub repository name. Fill the appropriate public contact details before completing the academic evidence.
6. Open **Settings → Pages → Deploy from a branch → main → / (root) → Save**.
7. Wait for **Actions → pages build and deployment** to succeed, then open **Settings → Pages → Visit site**. Verify the real public URL and content.
8. Complete the actual E5 screenshots and Lighthouse results. The student reported a successful publication lasting 49 seconds. No Lighthouse score has been supplied.

Upload only the contents of `portfolio`. Keep `local-preview`, `OPEN-ME.html` and `START-HERE.txt` on your computer. Do not upload the ZIP itself or place all source files inside an extra repository subfolder. Do not add `.nojekyll`. GitHub Pages builds Jekyll automatically; Node is not required for publication.

## Edit the site

Start with `docs/EDITING.md`. The main files are:

- `_config.yml`: identity and profile links.
- `index.html`: homepage section order.
- `_includes/sections/`: one readable HTML file per homepage section.
- `_data/translations.yml`: French and English interface text.
- `_projets/`: real project Markdown files.
- `_layouts/project.html`: project page design.
- `assets/css/style.css`: readable, formatted styles.

To add a project, copy `_projets/_A-COPIER.md` to a new `YYYY-MM-subject.md` file. Fill the English metadata fields and the five academic sections. Cards, page count and competency columns update automatically. See `docs/ADDING-PROJECTS.md`.

The teacher’s `_projets` collection, template filename, competency data filename and published `/projets/` URLs remain compatible. Legacy `cadre`, `resume` and `competences` fields are supported by one metadata adapter.

## Included practical assignment

`_projets/2026-10-decouverte-web.md` documents the four-file exercise supplied by the student. Its cleaned demonstration is in `assets/demos/web-basics/`: HTML, CSS, JavaScript and the original SVG illustration. The first-name greeting, click counter, five-click message and reset action are preserved. The page can also be opened directly from the extracted source folder.

The new project uses competency `c6` and includes an exact supporting sentence. Its date is explicitly the documentation date; the student must confirm the original classroom date and add a real public screenshot. The source now generates two projects. New files still need to be uploaded by the student before this addition appears on the public website. See `docs/TP-WEB-INTEGRATION.md`.

## Local preview

Install Ruby 3.3 and Bundler, then run inside the project folder:

```sh
bundle install
bundle exec jekyll build --strict_front_matter
bundle exec jekyll serve
```

Open `http://127.0.0.1:4000/ns-portfolio/`. Opening the source HTML directly does not run Jekyll.

Optional checks:

```sh
python3 -m pip install PyYAML
python3 scripts/validate.py --site _site
```

Do not publish `_site`, dependency caches, `node_modules` or `.git` in a source archive.

## Effects and optional avatar

The liquid sculpture stays inside the hero and pauses outside the viewport. Ocean reflections remain behind the content with a light 1.5 px blur. A shared pause control and reduced-motion support apply to both. Static local assets preserve the content when WebGL is unavailable. There is no floating sculpture after scrolling.

The future avatar is disabled. Add an authorised, self-contained `assets/models/avatar.glb`, then set `avatar.enabled: true`. Three.js and the loader are already included. See `assets/models/README.md`.

## Content and robot limits

Selection, clipboard shortcuts, context menus and image dragging are discouraged in the interface. Pages request `noindex`; these measures do not make public HTML confidential. A real CAPTCHA gate is not included without server-side validation. `docs/CONTENT-PROTECTION.md` explains how to publish `robots.txt` at the domain root for GitHub Pages.

## Academic records and licences

The `docs` folder contains the E5 draft, Q1–Q7 checklist, publishing guide and actual test report. Keep only facts and evidence you can explain and verify. Code is MIT; original content is CC BY 4.0 subject to third-party rights. Dependency licence notices are preserved. The third-party source is intentionally kept separate from the files you normally edit.
