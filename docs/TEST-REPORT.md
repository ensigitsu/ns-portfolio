# Verification report — 19 October 2026

The update starts from public repository commit 492215ed27c8e0c39b8625e8174c849472c2cb8c. It is a local source patch for the student's manual upload; it has not been deployed to GitHub.

## Implementation

- Public display name: Nathan S.
- Hero: existing vector illustration animated in CSS, with pointer tilt in JavaScript confined to the hero.
- Background: local reflection image animated in CSS with light blur.
- Shared pause control, reduced-motion support, hidden-tab pause and offscreen hero pause.
- Python validator replaced with scripts/validate.mjs.
- Ruby dependency files, GLSL shaders, Three.js, loaders and unused avatar code removed.
- Jekyll collection, configuration, translations, project content, evidence and licences retained.

The application source languages are HTML, CSS and JavaScript. Markdown project content, YAML configuration, JSON and binary/vector assets remain. The inventory checks the actual source files; no .gitattributes rule hides languages. GitHub calculates its own language statistics after the files are uploaded and obsolete files are deleted.

## Local verification

| Check | Result |
| --- | --- |
| Jekyll 3.10 | Safe build with strict front matter passed without Gemfile or Gemfile.lock |
| JavaScript validator | Two projects, six official competency codes, 85 FR/EN translations, local resources and anchors passed |
| Validator failure cases | Unknown competency, missing image and malformed front matter rejected |
| Project generation | Two cards, count 02, six rows, portfolio c3/c6 and Web exercise c6 |
| Web demonstration | Empty/named greeting, fifth-click threshold, later clicks, reset, safe text and cancelled form navigation passed |
| Bundled application | Five portfolio pages loaded through local file URLs with no network requests or canvas calls in jsdom |
| Interaction | Pause/resume, pointer boundaries, touch handling, reduced-motion changes, hidden-tab state and offscreen state passed in jsdom |
| Interface | FR/EN, evidence anchors, menu state/focus, content deterrence and editable fields passed in jsdom |
| Syntax | CSS parser and Nu validation of 30 generated HTML/CSS/SVG files passed with zero errors |
| Source cleanup | No Python, Ruby, GLSL source files or explanatory source comments remain; font and project licence notices retained |

The tests use a simulated DOM. They do not measure browser frame rates or establish a new Lighthouse score. A local rendered browser preview was unavailable in this environment. The responsive CSS and motion preferences were checked in source and functional tests; the published site still needs a visual check in Edge and on a phone.

## Existing evidence

Screenshots dated 15 October, the observed 49-second publication, W3C validation and the supplied Lighthouse Accessibility score of 100/100 remain historical evidence of that version. They were not retouched and do not establish scores for this update. The complete civil name remains outside the public source.

## Reproduce

With Jekyll 3.10 and its GFM parser installed, and Node 20 or newer:

```sh
jekyll build --safe --strict_front_matter
npm install
npm run check -- --site _site
npm run preview:build
```

Apply every replacement and deletion listed in the patch before checking the published version. Wait for Pages to finish, then verify the name, effects, pause control, language switch, project pages, matrix and demo. Repeat W3C and Lighthouse checks after publication.
