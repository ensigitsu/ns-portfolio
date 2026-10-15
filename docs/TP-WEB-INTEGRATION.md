# Web exercise integration

## Input and changes

The input was the student’s attached `nathans-mon-site.zip`, containing four files in `mon-site/`. The original upload is preserved. Its existing behaviour includes a first-name greeting, a click counter, a different message from five clicks onwards and a reset action.

The delivery keeps these features and the original SVG illustration. The CSS uses flat selectors with no duplicate nested body rule, preserves the previously effective colours, and adds responsive sizing. The HTML includes a viewport, main landmark, explicit image dimensions, labelled input and a status message. The script uses English identifiers, handles form submission without navigation, uses textContent and removes the console debug message. The UI remains in French.

## Files

- `_projets/2026-10-decouverte-web.md`: new project, five academic sections and c6 justification.
- `assets/demos/web-basics/index.html`: standalone demo page.
- `assets/demos/web-basics/style.css`: readable styles.
- `assets/demos/web-basics/script.js`: form and counter behaviour.
- `assets/demos/web-basics/landscape.svg`: the original illustration, renamed with an English filename.
- `_projets/2026-10-mon-portfolio.md`: existing project updated with publication and the reported 49-second duration.
- `legal.md`: actual hosting wording and local-only demo field described.
- `scripts/build-local-preview.mjs`: standalone demo scripts now copied into the optional local preview.
- `README.md` and `docs/`: current instructions, academic records, answers and actual test report.

The small update archive contains only added or modified files. The full archive contains the entire Jekyll project. Neither requires uploading generated local-preview files to GitHub.

## Apply the update

1. Extract the update archive and open its `a-envoyer` folder.
2. In the GitHub repository, choose Code, Add file, Upload files.
3. Drag every file and folder inside `a-envoyer` into the upload area. Drag the folders themselves, keeping their internal paths.
4. Check that the upload includes `_projets/2026-10-decouverte-web.md` and `assets/demos/web-basics/index.html`. Do not put `a-envoyer` itself inside the repository.
5. Commit to main, wait for Actions, then open the site. The total should be 02 projects. The new project associates c6, while the original portfolio retains c3 and c6.
6. Open the demo, enter a first name, click five times and reset. Test it on a phone as well.

The patch does not replace `_config.yml`, so public contact details already edited in GitHub are preserved. The full archive contains the known baseline configuration; review its public contact before a full replacement.

## Complete the academic evidence

15 October 2026 is the documentation date, not an invented classroom date. Confirm the TP date in the metadata and text. Keep evidence_pending true until the public checks and requested evidence are attached. Complete Q6 with the real Lighthouse score, not the local checks. The source files are evidence of the implementation; they do not replace the student’s explanation at the oral examination.
