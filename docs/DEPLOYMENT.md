# GitHub Pages deployment

Repository: https://github.com/ensigitsu/ns-portfolio.
Website: https://ensigitsu.github.io/ns-portfolio/.

Keep the current configuration:

```yaml
url: https://ensigitsu.github.io
baseurl: /ns-portfolio
```

## Apply the HTML, CSS and JavaScript update

Extract `mise-a-jour-html-css-js.zip`. Follow its `LIRE-MOI.txt` and `A-SUPPRIMER.txt`. Upload the contents of `a-envoyer` at repository root, preserving paths, and delete the obsolete files listed separately. An upload replaces matching files but cannot delete files that are absent from the archive.

The patch removes the Python validator, Ruby dependency files, GLSL shaders and the unused WebGL libraries. Its replacement validator is `scripts/validate.mjs`. Jekyll project entries, layouts and configuration stay in place.

With a local Git checkout, copy the contents of `a-envoyer` into that checkout, delete the listed paths, and commit all changes together with GitHub Desktop or Git. With GitHub's website, upload the files and folders through **Code → Add file → Upload files**, then delete the obsolete paths. The archive guide describes both methods.

Keep Pages set to **Deploy from a branch → main → / (root)**. Do not reset these settings after each update. Do not upload the ZIP, its guides, `node_modules`, a compiled preview or `_site`, and do not add `.nojekyll`.

## Verify publication

Wait for the latest **pages build and deployment** run to succeed, then reload the site. Check Nathan S. in the hero, the animated illustration, the reflections, the pause control, FR/EN, both project pages, count 02, six competency rows, images, contact and the Web demonstration.

The existing W3C and Lighthouse screenshots record 15 October. Repeat those checks after publishing; a green build does not validate the page content or establish a new score.

## Troubleshooting

| Symptom | Check |
| --- | --- |
| Raw front matter or Liquid after double-click | Build Jekyll first; see LOCAL-PREVIEW.md |
| Missing styles or images | Preserve /ns-portfolio and exact folder paths |
| Missing translation.html | Preserve the _includes folder |
| Old languages still listed | Delete all paths in A-SUPPRIMER.txt from main; GitHub recomputes statistics after branch changes |
| New project absent | Use valid front matter in a Markdown file under _projets |
| Missing competency | Use justified, exact c1-c6 codes |
| Old site version | Check the newest Actions run, then hard-refresh the public URL |

Official references:
- https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll
- https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-repository-languages
