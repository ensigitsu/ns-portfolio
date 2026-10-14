# Adding a real project

1. On GitHub, open **Code → `_projets` → `_A-COPIER.md` → Copy raw file**.
2. Return to `_projets` and choose **Add file → Create new file**.
3. Name the file `YYYY-MM-subject.md`, with lowercase letters, hyphens, no spaces or accents, and no leading underscore.
4. Paste the template. Fill `title`, the actual `date`, `context`, `summary` and `competencies`. Fill the `_fr` fields for the French interface. Use only the exact codes `c1`–`c6` and justify each with evidence.
5. Write the five academic sections: **Contexte**, **Conditions et moyens**, **Description de l’activité**, **Productions et preuves**, **Ce que j’en retiens**. The template’s headings are in French for E5; its instructions are in English. Replace the instructions with your actual work, normally in French for the examination.
6. Keep `<h2 id="evidence">` on the evidence section. This is the target used by the matrix for new projects.
7. Upload authorised screenshots through **Code → images → Add file → Upload files**. Remove confidential information in the image file before upload.
8. Add the cover path and meaningful alternative text, or leave the cover empty. Do not link to an image that has not been uploaded.
9. Keep optional URLs empty until real URLs exist. Keep `evidence_pending: true` until the required evidence is present and checked.
10. Click **Commit changes**, then check **Actions → pages build and deployment**.
11. Open the published site and verify the new page, card, count, matrix column, images and links. A successful build does not validate the facts you wrote.

## Screenshot syntax

```markdown
![What this screenshot proves]({{ '/images/result.png' | relative_url }})
```

Replace both the description and filename with the real evidence.

## English project content

`has_english: false` keeps the detailed evidence in French and shows a notice in the English interface. For a fully bilingual page, follow the initial project: one block per language with `markdown="1"`, and `has_english: true`. Use `id="evidence" data-proof-heading` on the French heading and `id="evidence-en" data-proof-heading` on the English heading. The script assigns `evidence` to the visible heading and keeps IDs unique.

## Compatibility

Older class files with `cadre`, `resume` and `competences` are accepted. The collection still uses `_projets`, so the teacher’s publishing workflow remains valid. The homepage HTML and competency table update automatically for either field format.

## Local validation

```sh
bundle exec jekyll build --strict_front_matter
python3 scripts/validate.py --site _site
```

The Python check requires PyYAML: `python3 -m pip install PyYAML`. It checks metadata, codes, links and resources; it does not replace browser testing, W3C or Lighthouse.
