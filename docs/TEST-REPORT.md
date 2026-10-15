# Verification report — 15 October 2026

This report covers the delivered source update. The student confirmed that the original portfolio was online and reported a successful Actions publication lasting 49 seconds. The assistant has not uploaded this update to GitHub. The new TP must be published by the student.

## Checks completed

| Check | Observed result |
| --- | --- |
| Jekyll | Version 3.10.0; safe mode and strict front matter build passed |
| Source metadata | Two real project files, five required sections, six official competency codes; copy template excluded |
| Generated content | Two cards, count 02, two project columns; c3/c6 for the portfolio and c6 for the web exercise |
| Resources and anchors | Homepage, both projects, legal page, 404 and standalone demo generated; local URLs valid under /ns-portfolio |
| Translations | 83 FR/EN pairs; generated JSON matches YAML |
| JavaScript | Eleven authored files parsed successfully; no authored explanatory comments |
| Other authored code | Thirty HTML/CSS/GLSL/Python/YAML files checked for explanatory comments; none found |
| HTML, CSS and SVG | Local Nu validator passed for 28 files: 14 published-build files and 14 local-preview files; zero errors |
| Demo behaviour | Empty name and named greeting, five-click threshold, later clicks, reset, retained input and safe text output passed in jsdom |
| Form behaviour | Submission prevented navigation; labelled input and status message present |
| Responsive rules | Image max-width and wrapping button group verified; real phone layout remains a user check |
| Local preview | Five portfolio pages loaded with the actual classic bundle through file URLs; interface translation, menu, proof anchors, copy deterrence and local links passed |
| Local assets | Demo script copied and executed; embedded shaders and hero fallback loaded without external requests in simulated DOM/WebGL |
| Third-party files | Source libraries and their licence notices preserved byte for byte |
| Packaging | Source and patch file coverage compared; ZIP CRC verified; full source rebuilt and validated after extraction |

The tests use a simulated DOM/WebGL environment and a local standards validator. They are not a real-browser layout inspection, a public W3C result or a Lighthouse score. The original hero and ocean rendering code were not modified in this update.

## Input and cleanup

The original student attachment contains index.html, style.css, script.js and mon-image.svg. Its interactive features were retained. The cleaned version uses flat CSS selectors, English identifiers, a cancelled form submission, responsive image sizing and the original illustration. The console debug message was removed. Third-party comments and licences were retained.

Markdown heading markers, CSS colour values, ID selectors, Liquid expressions and shader directives are syntax, not comments, and remain intact.

## Remaining academic evidence

- Upload the patch, check Actions, open both projects and test the public demo.
- Confirm the original classroom TP date; 15 October is explicitly the documentation date.
- Add actual screenshots of the homepage/count/matrix, legal page, Actions and demo.
- Run W3C on the public URL and Lighthouse in the student's browser. Record the real score for Q6.
- Complete the public contact and personalise the E5 working conditions.

## Reproduce the build

```sh
bundle install
bundle exec jekyll build --safe --strict_front_matter
python3 scripts/validate.py --site _site
```

The Python validator needs PyYAML. Rebuild the optional file preview as described in LOCAL-PREVIEW.md. GitHub Pages itself does not require Node or Prettier.
