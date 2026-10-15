# GitHub Pages deployment

## Update the existing repository

The working repository is `ensigitsu/ns-portfolio`. Its public URL is https://ensigitsu.github.io/ns-portfolio/. Keep that name when applying this update.

1. Extract `correctifs-portfolio.zip` and open `a-envoyer`.
2. Open the repository's **Code** tab at its root, then **Add file → Upload files**.
3. Drag the files and folders inside `a-envoyer` into the upload area. Drag actual folders to preserve their paths. Do not upload the ZIP or the enclosing `a-envoyer` folder.
4. Check paths such as `_data/translations.yml`, `_projets/2026-10-decouverte-web.md` and `scripts/validate.py`. Commit to `main`.
5. Open **Actions**, wait for the new publication to succeed, then reload the public website. There should still be two cards, a count of 02 and two project columns.

This small patch does not replace `_config.yml`. Enter personal information only after checking what the student wants to publish.

## Install the complete source instead

Extract `nathan-portfolio.zip`, open its `portfolio` folder, and upload that folder's contents to the repository root. The root must contain `_config.yml`, `index.html`, `Gemfile`, `_data`, `_includes`, `_layouts`, `_projets` and `assets`.

Keep `OPEN-ME.html`, `START-HERE.txt`, `INFOS-ET-CAPTURES.txt` and `local-preview` on the computer. They are viewing aids, not the Jekyll publication source. Do not add `.nojekyll`, upload `_site` or put the whole source under an extra repository subfolder.

The current configuration is:

```yaml
url: https://ensigitsu.github.io
baseurl: /ns-portfolio
```

For a different repository name, change `baseurl` to that repository's path. The workshop's example name `portfolio` would require `/portfolio`; it is not the current repository name.

The old template file `mentions-legales.md` is excluded in `_config.yml`. The active legal page is `legal.md`, which keeps the public route `/mentions-legales/`. The unused template layout and stylesheet may remain without affecting the active layout.

## Publishing settings

The existing site is already published. There is no need to reset its settings for each update.

If configuring a fresh repository, open **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save. GitHub Pages runs Jekyll for this source. A Node build is not required.

In **Code → About → gear**, select **Use your GitHub Pages website** and save. This displays the public link on the repository page. It is an account-side action, not a source-file change.

## Verify the result

A green workflow means the deployment completed. Also check the actual page, count, matrix, images, links and demo. A failed publication does not replace the last successful version.

The public browser check on 15 October 2026 confirmed both projects, their matrix associations, French/English switching and the demo's greeting, five-click message and reset. The student reported a 49-second successful publication; that duration also appeared in the public Actions history. This new source patch still needs the student's upload.

The remaining personal information and evidence are listed in `FINISHING-THE-ASSIGNMENT.md`. A local HTML validator does not supply a Lighthouse score.

## Troubleshooting

| Symptom | Check |
| --- | --- |
| Raw YAML or Liquid text after opening a local file | Open the archive's `OPEN-ME.html`; source HTML needs a Jekyll build |
| CSS or images missing online | Keep `baseurl: /ns-portfolio`; preserve folders and exact filename case |
| Missing include such as translation.html | Upload the complete `_includes` folder with its paths |
| New project absent | Put the Markdown file in `_projets`, preserve its front matter and wait for Actions |
| Missing competency | Use the exact codes `c1` to `c6`, with evidence supporting each selected code |
| Old page still visible | Check the latest workflow, the public URL and a hard refresh |
| Build succeeds but evidence label remains | `evidence_pending: true` remains until real evidence is attached |

For a repeat upload problem, GitHub Desktop can clone the existing repository, accept the extracted source files, commit and push. Keep Desktop's own Git metadata; it is not part of this archive.

Official references:
- https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
