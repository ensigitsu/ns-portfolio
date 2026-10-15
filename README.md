# Nathan - BTS SIO SISR portfolio

A bilingual Jekyll portfolio for a first-year systems and networks student on a work-study programme. It preserves the liquid hero, subtle ocean reflections, project cards and the six official competency labels.

## Current configuration

- Public display name: Nathan.
- Public contact: nathan-s.jet230@passinbox.com.
- Repository: https://github.com/ensigitsu/ns-portfolio.
- Website: https://ensigitsu.github.io/ns-portfolio/.
- Portfolio workshop: 15 October 2026.
- Web exercise: 12 October 2026; documented on 15 October.
- Equipment supplied by the student: Windows 11 laptop, Microsoft Edge and Visual Studio Code; work in class and at home.

The complete civil name appears only in the separately delivered teacher PDF. That PDF is not part of the public source archive.

## Upload the personalised update

Extract `mise-a-jour-personnalisee.zip`. Open `a-envoyer`, then use **Code → Add file → Upload files** at the repository root. Drag the contents, preserving folders, and commit to `main`. This update includes `_config.yml` with the public identity and contact supplied by the student.

Wait for Actions, open the real website and check the new name, email, dates, project cards, count 02, evidence images and matrix. The assistant has prepared these files; it has not committed or deployed them.

For a complete replacement, upload only the contents of this archive's `portfolio` folder. Keep the enclosing folder, ZIP, `OPEN-ME.html`, guides and `local-preview` off GitHub. Keep `baseurl: /ns-portfolio` for the current repository. A new repository named `portfolio` would require `/portfolio` instead.

## Open the extracted archive locally

Extract everything and open `OPEN-ME.html` beside the `portfolio` folder. It opens a separately compiled local snapshot with working file navigation and scripts.

The HTML inside `portfolio` is Jekyll source. A direct double-click does not compile front matter or Liquid. Edit source files, publish through GitHub Pages, and rebuild the optional snapshot when needed. See `docs/LOCAL-PREVIEW.md`.

## Edit and add projects

- `_config.yml`: public identity and links.
- `_data/translations.yml`: French and English interface text.
- `_includes/sections/`: homepage sections.
- `_projets/`: project Markdown.
- `_layouts/project.html`: project page layout.
- `assets/css/style.css`: styles.
- `assets/evidence/2026-10/`: real evidence and provenance notes.

Copy `_projets/_A-COPIER.md` to a new `YYYY-MM-subject.md` file. Fill the metadata and five academic sections, justify selected competency codes and attach authorised evidence. Cards, count and matrix columns update automatically. The copy template is excluded from publication. See `docs/ADDING-PROJECTS.md`.

## Recorded evidence

The supplied Lighthouse screenshot shows **100/100 for Accessibility** on 15 October 2026. The public W3C check on the same day reported **no errors or warnings**. A successful 49-second Actions run and the commit history were checked. The student supplied phone captures showing the project cards and count 02.

The screenshots record the public version before the name, email and date update. They are retained without retouching. They do not establish how a later version performs. The source flags now reflect the attached evidence; check the personalised website after publishing.

Q1-Q7 are in `docs/TP-CHECKLIST.md`. The public E5 account is in `docs/E5-REALISATION.md`; final upload steps are in `docs/FINISHING-THE-ASSIGNMENT.md`.

## Build

```sh
bundle install
bundle exec jekyll build --safe --strict_front_matter
python3 -m pip install PyYAML
python3 scripts/validate.py --site _site
```

For development, run `bundle exec jekyll serve` and open `http://127.0.0.1:4000/ns-portfolio/`. GitHub Pages does not need Node. Node and Prettier are used only by the optional local-preview builder.

The source archive excludes Git metadata, dependency installations, caches and `_site`. The compiled snapshot is separate and supplied for local double-click viewing.

## Effects and licences

The liquid sculpture stays inside the hero. Ocean reflections remain behind the content, with a light blur, a shared pause control, reduced-motion support and local static fallbacks. The optional avatar remains disabled; see `assets/models/README.md`.

The template comes from https://github.com/AbidHamza/modele-portfolio-bts-sio. Original code is MIT; original content is CC BY 4.0 subject to third-party rights. Third-party source and licence notices are preserved. UI copy deterrence and robot directives do not make a public repository confidential; see `docs/CONTENT-PROTECTION.md`.
