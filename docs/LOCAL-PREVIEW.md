# Local preview and Jekyll source

## View without installing anything

1. Extract the entire ZIP. Opening a file inside the ZIP is not enough.
2. Keep `OPEN-ME.html`, `local-preview` and `portfolio` together.
3. Double-click `OPEN-ME.html`, or open `local-preview/index.html` in your browser.
4. Follow project and legal links inside that preview. The generated URLs include `index.html`, so local file navigation works.

The preview uses the same CSS, content and application modules as the Jekyll build. JavaScript is bundled into a classic script so it can load from `file:` without module requests. Translations and shaders are embedded in that bundle; the font is embedded in CSS. WebGL uses the original effects when supported, with the same static fallbacks when unavailable. Viewing the included preview requires no Node or Ruby installation.

## Edit the source

Edit files in `portfolio`, especially `_includes/sections`, `_projets`, `_data/translations.yml` and `assets/css/style.css`. Do not edit the generated preview bundle. A preview is a snapshot and does not refresh automatically when source files change.

The text `--- layout: ... ---` and `{% include ... %}` is Jekyll syntax. It belongs in source files and is replaced during the build. A direct browser opening of source HTML does not perform that build. GitHub Pages performs it after publication.

## Rebuild the snapshot after editing

With Ruby, Bundler and Node installed, run inside `portfolio`:

```sh
bundle install
bundle exec jekyll build --strict_front_matter
npm install
npm run preview:build
```

The preview is rebuilt in the sibling `local-preview` folder. Its generator is `scripts/build-local-preview.mjs`. Node and Prettier are only used for this optional packaging step; GitHub Pages does not need them. Do not include `node_modules` in a source ZIP.

For automatic rebuilding while editing, use the Jekyll development server instead:

```sh
bundle exec jekyll serve
```

Open `http://127.0.0.1:4000/ns-portfolio/` while that command runs. This uses HTTP and the original source modules.

## Publish to GitHub

Use the existing `ensigitsu/ns-portfolio` repository, upload only the contents of the source `portfolio` folder at repository root, then set Pages to `main` and `/ (root)`. Keep the compiled local preview outside that repository. Detailed steps are in DEPLOYMENT.md.
