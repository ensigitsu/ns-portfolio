# Local preview

## Build

The HTML in this repository is Jekyll source. A direct double-click does not process its front matter, includes or project collection.

GitHub Pages builds the source automatically when the publishing branch changes. For local work, install Jekyll 3.10 with its GFM parser, and Node 20 or newer. Then run at repository root:

```sh
jekyll build --safe --strict_front_matter
npm install
npm run check -- --site _site
npm run preview:build
```

The generator writes a sibling `local-preview` folder. Open its `index.html`. It uses the built content and styles, with JavaScript bundled into a classic script, embedded interface translations and an embedded font. Local links point to explicit `index.html` files. Effects use CSS and JavaScript.

The preview is a snapshot. Edit the source and repeat the build to refresh it. This patch ZIP contains source changes only, so it does not include a compiled preview or an OPEN-ME.html launcher. Do not upload a generated preview to GitHub.

## Development server

```sh
jekyll serve
```

Open http://127.0.0.1:4000/ns-portfolio/. The server rebuilds after source changes. GitHub Pages supplies its own Jekyll runtime; the repository does not need a Gemfile for branch publication.
