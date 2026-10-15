# GitHub Pages deployment

## Current repository

Repository: https://github.com/ensigitsu/ns-portfolio. Website: https://ensigitsu.github.io/ns-portfolio/.

Keep the current configuration:

```yaml
url: https://ensigitsu.github.io
baseurl: /ns-portfolio
```

The workshop example repository name portfolio would instead require /portfolio. No rename is part of this update.

## Apply the personalised patch

1. Extract mise-a-jour-personnalisee.zip and open a-envoyer.
2. At repository root, use Code, Add file, Upload files.
3. Drag the files and folders inside a-envoyer, preserving their paths. Upload the contents rather than the ZIP or parent folder.
4. This patch includes _config.yml with the supplied public name and contact. Review those values before committing.
5. Commit to main, wait for Actions and reload the public website.
6. Check name, email, dates, two projects, count 02, evidence images and matrix.

The source patch has not been committed by the assistant. The About website link is already configured.

## Complete-source installation

Extract nathan-portfolio.zip and upload only the contents of its portfolio folder. The repository root must contain _config.yml, index.html, Gemfile, _data, _includes, _layouts, _projets and assets.

Keep the enclosing folder, OPEN-ME.html, local-preview and guides on the computer. Do not upload the ZIP, add .nojekyll or replace source with a generated _site directory.

For a fresh repository, configure Settings, Pages, Deploy from a branch, main, / (root), then Save. Existing publication settings do not need to be reset after each upload.

The old mentions-legales.md template file is excluded; legal.md is active. The unused original layout and stylesheet do not affect the active design.

## Validation

The supplied Lighthouse screenshot shows Accessibility 100/100. The public W3C result on 15 October had no errors or warnings. Those results concern the public version before the personal update.

After publishing, open both projects, verify the images and links, try FR/EN and the demo, and check the phone layout. Repeat quality checks after changes. A green workflow alone does not establish correct content.

## Troubleshooting

| Symptom | Check |
| --- | --- |
| Raw YAML or Liquid after local double-click | Open OPEN-ME.html; source HTML needs Jekyll |
| CSS or images absent online | Preserve /ns-portfolio and exact folder paths |
| Missing translation.html include | Upload the complete _includes folder |
| New project absent | Put the Markdown file in _projets with valid front matter |
| Missing competency | Use exact c1-c6 codes and justified evidence |
| Old version | Latest Actions result, actual public URL and hard refresh |

See FINISHING-THE-ASSIGNMENT.md for the last publication and submission steps.

Official references:
- https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
