# Editing the portfolio

## Where to edit

| Change | File |
| --- | --- |
| Name, profile links, GitHub Pages URL | `_config.yml` |
| Homepage section order | `index.html` |
| Hero | `_includes/sections/home.html` |
| Profile | `_includes/sections/profile.html` |
| Project listing | `_includes/sections/projects.html` |
| Competency section | `_includes/sections/competencies.html` |
| Education | `_includes/sections/education.html` |
| Contact | `_includes/sections/contact.html` |
| Navigation items | `_data/navigation.yml` |
| French and English interface text | `_data/translations.yml` |
| Official competency labels | `_data/competences.yml` |
| Project card design | `_includes/project-card.html` |
| Project page design | `_layouts/project.html` |
| Shared page structure | `_layouts/default.html` |
| Legal page content | `legal.md` |
| Colours, typography and spacing | `assets/css/style.css` |
| Main JavaScript entry point | `assets/js/main.js` |

Adding a project only requires a Markdown file. You do not need to edit the homepage HTML, project count or competency matrix.

## New project fields

The template uses English field names:

| Field | Meaning |
| --- | --- |
| `title` | English title or fallback title |
| `title_fr` | French title; falls back to `title` when empty |
| `date` | Actual project date, `YYYY-MM-DD` |
| `context` / `context_fr` | Context in English / French |
| `summary` / `summary_fr` | Short summary in English / French |
| `competencies` | Only the demonstrated codes: `c1` to `c6` |
| `technologies` | Tools actually used |
| `category` | Shared filter category, such as `academic`, `systems` or `networks` |
| `cover` | Local image path; leave empty to use the default illustration |
| `cover_alt` / `cover_alt_fr` | Meaningful alternative text |
| `github_url` / `demo_url` | Real HTTPS URL, or an empty string |
| `has_english` | Whether the detailed content has both language blocks |
| `evidence_pending` | Keep `true` until the required evidence is present |

The teacher’s legacy fields `cadre`, `resume` and `competences` still work. Their compatibility mapping is isolated in `_includes/project-metadata.html`. `_projets`, `_A-COPIER.md`, `_data/competences.yml` and the `/projets/` URLs are retained for the class workflow. The official French competency labels remain identifiable in both interface languages.

## Reading the HTML

Templates use two Liquid statements:

```liquid
{{ project.title }}
{% include sections/home.html %}
```

The first prints a value. The second inserts another file. The homepage includes one file per section. The shared layouts insert navigation and footer automatically.

Keep `relative_url` on asset and page paths so the site works under `/ns-portfolio/`.

## Language content

Put interface translations in `_data/translations.yml`. Source identifiers use English; French values belong under `fr` or fields ending in `_fr`.

Project evidence for E5 may remain in French. The initial project includes separate `data-lang="fr"` and `data-lang="en"` blocks. The French academic documents are prose, not application code.

## Dependencies and source comments

Application code uses HTML, CSS and JavaScript without explanatory source comments. The hero illustration and background reflections are animated in CSS; `assets/js/liquid-scene.js` adds the hero pointer tilt. Markdown headings, CSS colours and URL fragments are functional syntax. The font licence remains in `assets/fonts/OFL.txt`.

Jekyll uses Markdown, YAML and Liquid for project content and page generation. These files remain necessary for the workshop. There are no Python, Ruby or GLSL source files, custom shaders or WebGL dependencies in the repository.

## GitHub profile field

Use `github_url` in `_config.yml` for the personal GitHub profile, and keep it empty until a real URL is supplied. `site.github` is used by GitHub Pages for repository metadata and must not be used as a profile URL. The LinkedIn field remains `linkedin`.
