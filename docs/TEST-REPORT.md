# Verification report - 15 October 2026

This personalised export starts from repository commit 4944660603c0d4052c53eb590f9f347f34286d6b, downloaded from the current public repository. It matched the previously supplied maintenance source. The assistant has not committed or deployed the personal changes.

## Student information and evidence

The student supplied the public name Nathan, the public contact, work-study status, the 15 October portfolio date and the 12 October Web TP date. Working conditions are a Windows 11 laptop, Edge and Visual Studio Code, alone, in class and at home.

The student declared responsibility for the mockup, ideas, content and presentation. The documentation identifies assisted technical implementation and review.

Three original attachments were inspected. The Lighthouse image shows Accessibility 100/100 for the homepage. Two phone images show the project cards, with count 02 in the Web card capture. The portfolio phone capture is used in the separate teacher PDF.

## Public browser checks

- Two projects, count 02, six competency rows and the expected c3/c6 associations.
- French/English switching.
- Named demo greeting, fifth-click message and reset.
- Public W3C Nu result: no errors or warnings.
- Actions run 38771346787: Success, total duration 49s.
- A later successful run took 42s; Q2 retains the student's observed 49-second run.
- Public commit history and About website link.
- Actual screenshots of the homepage, matrix, legal page, Actions and commits.

These captures concern the public version before the personal update. They may show the earlier display initial, pending labels or incomplete contact. They were not retouched. The matrix is retained as part of a full-page original; the PDF frames the table region.

The cloud browser's WebGL limitation does not establish performance on the student's GPU. Phone screenshots establish the visible cards, not every touch interaction.

## Source and local-preview checks

| Check | Result |
| --- | --- |
| Jekyll 3.10.0 | Safe mode and strict front matter build passed |
| Metadata | Two projects, actual dates, five sections and six official codes |
| Translations | 85 FR/EN pairs; generated JSON matches YAML |
| Public identity | Nathan and the supplied public email; full civil name absent from public source |
| Generated pages | Two cards, count 02, correct matrix associations and proof anchors |
| Resources | Evidence images, local links and generated resources resolve under /ns-portfolio |
| Demo regression | jsdom greeting, empty name, fifth and later clicks, reset, safe text and cancelled navigation passed |
| Local preview | Five portfolio pages, actual classic bundle, language, menu, evidence anchors, copy deterrence and local links passed |
| HTML, CSS and SVG | Local Nu validator checked 30 build/preview files with zero errors |
| Third-party source | Libraries and licence notices preserved |
| Packaging | ZIP CRC, complete source coverage and patch application verified; extracted complete source rebuilt and validated |
| Teacher PDF | Q1-Q7, personal E5 account, real images and clickable links; rendered and visually inspected |

The quality scores belong to the observed public version. The local tests do not claim a new Lighthouse score for the unuploaded personalised files.

## Final publication check

Upload the personalised patch, wait for Actions, open the website and check the name, email, dates, images, demo, language and matrix. Repeat quality checks after modifications. No future TP, employer or school name was invented.

The full civil name appears only in the separate teacher PDF, outside the public archive. See FINISHING-THE-ASSIGNMENT.md for the exact upload and submission steps.

## Reproduce

```sh
bundle install
bundle exec jekyll build --safe --strict_front_matter
python3 scripts/validate.py --site _site
```

The validator needs PyYAML. The optional local preview also needs Node and Prettier to rebuild; viewing the delivered snapshot and GitHub Pages publication do not.
