# Verification report — 15 October 2026

This report covers the maintenance export prepared from public repository commit `6feab0fa8ae377eff19a6694f95989d4354f1e56`. The website and Web exercise were already published. The assistant has not committed or deployed this maintenance patch.

## Live public checks

The homepage, both project pages, legal page, demo and public Actions history were inspected in a browser on 15 October 2026.

- Two project cards, count 02 and six competency rows were present.
- The portfolio associated c3/c6; the Web exercise associated c6.
- French/English switching worked.
- All four homepage images loaded, the local Manrope font was applied, and no horizontal desktop page overflow was observed.
- The demo showed a named greeting on the first click, a different message on the fifth click and a counter of zero after reset.
- Successful 49-second runs were visible in Actions, consistent with the student's reported publication duration.
- The repository's About website field was still empty.

The cloud browser could not create a WebGL context. Static fallbacks appeared; this does not establish how the animation performs on the student's phone or GPU.

## Maintenance export checks

| Check | Observed result |
| --- | --- |
| Jekyll | 3.10.0; safe mode and strict front matter build passed |
| Source metadata | Two projects, five sections each, six official codes; copy template excluded |
| Validator | Removed the hardcoded /portfolio requirement; configured /ns-portfolio build passed |
| Generated content | Two cards, count 02 and expected c3/c6 associations passed |
| Local resources and anchors | All generated page references checked under /ns-portfolio |
| Translations | 83 FR/EN pairs; generated JSON matches YAML |
| HTML, CSS and SVG | Local Nu validator passed 30 files: 15 build files and 15 preview files; zero errors |
| Demo behaviour | Existing jsdom checks passed: named and empty greeting, five-click threshold, later clicks, reset, safe text output and cancelled form navigation |
| Local preview | Five portfolio pages loaded with the actual classic bundle through file URLs; language, menu, proof anchors, copy deterrence and local links passed |
| Local assets | Embedded ocean shaders and hero fallback worked without external requests in simulated DOM/WebGL |
| Source preservation | Existing design, shaders, demo implementation, fonts and third-party licence files unchanged |
| Packaging | Complete source coverage, small-patch application and ZIP CRC checked; extracted full source rebuilt and validated |

The local Nu check is not a captured public W3C result. The DOM/WebGL simulation is not an actual phone test or Lighthouse audit. These results do not supply a score for Q6.

## Content changes

Evidence labels now say that evidence remains to be completed, rather than suggesting that already public projects still need publication. The two project pages describe the observed public checks. Deployment instructions use the actual repository path. The academic documents distinguish known results from missing personal details and evidence.

The source retains `evidence_pending: true`. The classroom dates, public contact, original student role, personal working conditions and real screenshots remain to be supplied.

Authored implementation files were not rewritten in this maintenance update, apart from the local validator. Markdown headings, CSS colours and ID selectors, Liquid expressions and GLSL directives are syntax. Third-party source and licence notices remain intact.

## Reproduce the build

```sh
bundle install
bundle exec jekyll build --safe --strict_front_matter
python3 scripts/validate.py --site _site
```

The Python validator requires PyYAML. See `LOCAL-PREVIEW.md` to rebuild the optional file preview. GitHub Pages publication itself does not need Node or Prettier.

See `FINISHING-THE-ASSIGNMENT.md` for the remaining student information and device captures.
