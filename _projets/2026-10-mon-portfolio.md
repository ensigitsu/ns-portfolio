---
title: Building my professional portfolio
date: 2026-10-12
technologies:
- Jekyll
- Markdown
- Three.js
- WebGL
- GitHub Pages
category: academic
cover: /assets/images/portfolio-cover.svg
cover_alt: Illustration of Nathan S.’s portfolio and the Jekyll, HTML and GitHub Pages publishing chain
cover_caption: Original project illustration. This image is not deployment evidence.
cover_label: PORTFOLIO / 001
evidence_pending: true
has_english: true
title_fr: Mise en ligne de mon portfolio professionnel
context: Professional development workshop
context_fr: Atelier de professionnalisation
summary: A bilingual Jekyll portfolio to document my BTS SIO systems and networks projects. GitHub Pages
  deployment is pending.
summary_fr: Conception d’un portfolio Jekyll bilingue pour documenter mes réalisations en BTS SIO SISR.
  Publication GitHub Pages à effectuer.
competencies:
- c3
- c6
cover_alt_fr: Illustration du portfolio Nathan S. et de la chaîne Jekyll, HTML et GitHub Pages
cover_caption_fr: Illustration originale du projet. Cette image n’est pas une capture de publication.
---
<div class="lang-block" data-lang="fr" lang="fr" markdown="1">

## Contexte

Pour l’épreuve E5 et ma présentation professionnelle, j’ai besoin d’un espace qui décrit mes réalisations, leurs conditions et les preuves associées. Je suis étudiant en première année de BTS SIO, option SISR, avec une orientation à long terme vers l’architecture cloud et sa sécurité.

Cette réalisation concerne **la préparation du portfolio et de ses sources**. La publication sur mon compte GitHub et les preuves publiques restent à effectuer.

## Conditions et moyens

- Développement individuel avec assistance IA dans ChatGPT Work. Le code et la documentation devront être relus et expliqués avant l’oral.
- Base : modèle Jekyll du professeur, `AbidHamza/modele-portfolio-bts-sio`, adapté sans modifier les conventions de la collection `_projets`.
- HTML, CSS, JavaScript natif, WebGL natif, shaders GLSL et fichiers Markdown avec en-tête YAML.
- Hébergement prévu : GitHub Pages gratuit, dépôt `portfolio`, branche `main`, dossier racine.
- Aucun formulaire, aucune mesure d’audience ; ressources de l’interface auto-hébergées. La préférence de langue utilise le stockage local du navigateur.

## Description de l’activité

J’ai fait préparer un portfolio avec assistance IA en conservant l’architecture Jekyll du modèle de classe. Les réglages de l’identité se trouvent dans `_config.yml` ; les six libellés officiels restent dans `_data/competences.yml`.

J’ai fait adapter la page d’accueil en six sections et ajouter une version anglaise de l’interface. Les cartes, le compteur et les colonnes de compétences sont générés à partir des mêmes fichiers Markdown. Le modèle `_A-COPIER.md` permet de poursuivre cette documentation sans réécrire les composants HTML.

Un fond WebGL dessine des reflets de lumière inspirés du soleil sous l’eau. Il reste derrière le contenu et ses ondulations lentes sont adoucies par un flou léger de 1,5 px. Le rendu dispose d’un visuel SVG de secours, d’une pause et d’un mode de réduction des mouvements. Ce fond ne suit pas le pointeur. La sculpture Three.js nacrée d’origine est conservée exclusivement dans le hero, où elle réagit doucement au pointeur sans se détacher de sa section. Une commande commune permet de mettre les deux rendus en pause.

Les chemins passent par le filtre Jekyll `relative_url` afin de fonctionner sous `/portfolio/`. Mon lien LinkedIn est configuré. Le lien GitHub sera activé après ajout de mon véritable profil. Les notices et licences décrivent les ressources réellement présentes.

**Je n’ai pas encore publié ce site sur GitHub Pages.** Je devrai téléverser les sources, renseigner mes coordonnées publiques, contrôler le workflow puis vérifier l’URL réelle.

<span id="preuves" class="legacy-anchor" aria-hidden="true"></span>
<h2 id="evidence" data-proof-heading>Productions et preuves</h2>

- Sources complètes : `_config.yml`, `_layouts`, `_includes`, `_projets`, `_data` et `assets`.
- Rapport des contrôles locaux : `docs/TEST-REPORT.md` dans le dépôt livré.
- Procédure de maintenance : `docs/ADDING-PROJECTS.md`.
- Fiche E5 à relire et personnaliser : `docs/E5-REALISATION.md`.
- **À compléter après publication** : URL exacte, historique des commits, durée du workflow, capture de l’accueil avec compteur, matrice et mentions légales, validation W3C, note Lighthouse et vérification sur téléphone. Le dossier `images` explique les noms et textes alternatifs à utiliser.

### Compétences associées

**c3 — Développer la présence en ligne de l’organisation.** Les sources préparent une présence professionnelle et une page de mentions légales ; la preuve de publication et les contrôles du site public sont encore attendus. L’association affichée dans la matrice est donc signalée comme incomplète.

**c6 — Organiser son développement professionnel.** « Les cartes, le compteur et les colonnes de compétences sont générés à partir des mêmes fichiers Markdown. Le modèle `_A-COPIER.md` permet de poursuivre cette documentation sans réécrire les composants HTML. » La mise à jour régulière pendant la formation devra compléter cette preuve.

## Ce que j’en retiens

Une difficulté technique de la préparation était le risque de chemins cassés lorsque GitHub Pages sert le site dans le sous-dossier `/portfolio/`. L’utilisation de `relative_url` dans les layouts et les liens Markdown, et de chemins relatifs dans les imports JavaScript, garde les ressources rattachées au bon emplacement.

Je retiens aussi qu’une carte et une coche ne suffisent pas à prouver une compétence. Les associations doivent renvoyer à des faits et les contrôles publics doivent être réalisés après publication. Ce texte est un brouillon à ajuster avec ma propre difficulté de séance et mes vérifications réelles.

</div>

<div class="lang-block" data-lang="en" lang="en" hidden markdown="1">

## Context

For the E5 examination and my professional presentation, I need a space documenting my projects, working conditions and evidence. I am a first-year BTS SIO student specialising in systems and networks, with a long-term interest in cloud architecture and cloud security.

This project covers **preparation of the portfolio source**. Deployment to my GitHub account and public evidence are still pending.

## Conditions and resources

- Individual project with AI assistance in ChatGPT Work. The source and documentation must be reviewed and understood before the examination.
- Based on the teacher’s `AbidHamza/modele-portfolio-bts-sio` Jekyll template, preserving the `_projets` collection conventions.
- HTML, CSS, native JavaScript, native WebGL, GLSL shaders and Markdown with YAML front matter.
- Planned hosting: free GitHub Pages, repository `portfolio`, branch `main`, root directory.
- No form or analytics. Interface resources are hosted with the site. Language preference uses browser local storage.

## Activity description

I had the portfolio source prepared with AI assistance while retaining the class template’s Jekyll architecture. Identity is configured in `_config.yml`, and the six official French competency labels remain in `_data/competences.yml`.

The homepage contains six sections with a bilingual interface. Cards, project count and competency columns are generated from the same Markdown files. `_A-COPIER.md` allows future documentation without rewriting HTML components.

A WebGL background draws sunlight reflections inspired by underwater caustics. Slow motion remains behind the content, softened by a light 1.5 px blur. It includes an SVG fallback, a pause control and reduced-motion support. This background does not follow the pointer. The original pearlescent Three.js sculpture remains confined to the hero, with gentle local pointer interaction. A shared control pauses both effects.

Jekyll’s `relative_url` filter preserves paths under `/portfolio/`. My LinkedIn profile link is configured. The GitHub link will be enabled when my actual profile URL is supplied. Legal notices and licences describe the included resources.

**I have not deployed this site to GitHub Pages yet.** Uploading the source, configuring public details, checking the deployment workflow and verifying the real URL remain to be done.

<h2 id="evidence-en" data-proof-heading>Outputs and evidence</h2>

- Complete source: `_config.yml`, `_layouts`, `_includes`, `_projets`, `_data` and `assets`.
- Local verification report: `docs/TEST-REPORT.md` in the delivered repository.
- Maintenance guide: `docs/ADDING-PROJECTS.md`.
- E5 draft to review and personalise: `docs/E5-REALISATION.md`.
- **Pending after deployment**: actual public URL, commit history, workflow duration, homepage, matrix and legal-notice screenshots, W3C validation, Lighthouse score and testing on a real phone. The `images` directory documents evidence filenames and alternative text.

### Associated competencies

**c3 — Développer la présence en ligne de l’organisation.** The source prepares a professional online presence and legal notices. Deployment evidence and public checks are pending; the matrix marks this association as incomplete.

**c6 — Organiser son développement professionnel.** Cards, count and competency columns are generated from the same Markdown files. The project template supports future documentation. Regular updates during the course must complete this evidence.

## Lessons learned

One technical concern was broken paths when GitHub Pages serves a repository under `/portfolio/`. Jekyll `relative_url` and relative JavaScript imports keep resources attached to the correct location.

A card or checkmark alone does not establish a competency. Associations must point to facts, and public verification must follow deployment. This draft should be adjusted with my own workshop experience and actual checks.

</div>
