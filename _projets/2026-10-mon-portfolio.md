---
title: Building and publishing my professional portfolio
title_fr: Mise en ligne de mon portfolio professionnel
date: 2026-10-14
context: Professional development workshop
context_fr: Atelier de professionnalisation
summary: A bilingual Jekyll portfolio published with GitHub Pages to document my BTS SIO systems and networks projects.
summary_fr: Un portfolio Jekyll bilingue publié sur GitHub Pages pour documenter mes réalisations en BTS SIO SISR.
competencies: [c3, c6]
technologies: [Jekyll, Markdown, Three.js, WebGL, GitHub Pages]
category: academic
cover: /assets/images/portfolio-cover.svg
cover_alt: Illustration of Nathan S.’s portfolio and the Jekyll publishing chain
cover_alt_fr: Illustration du portfolio Nathan S. et de la chaîne de publication Jekyll
cover_caption: Original illustration; this is not a screenshot of the published website.
cover_caption_fr: Illustration originale ; ce visuel n’est pas une capture du site publié.
cover_label: PORTFOLIO / 001
github_url: https://github.com/ensigitsu/ns-portfolio
demo_url: https://ensigitsu.github.io/ns-portfolio/
has_english: true
evidence_pending: true
---

<div class="lang-block" data-lang="fr" lang="fr" markdown="1">

## Contexte

Pour l’épreuve E5 et ma présentation professionnelle, j’ai besoin d’un espace qui décrit mes réalisations, leurs conditions et leurs preuves. Je suis étudiant en BTS SIO, option SISR, avec un intérêt pour l’architecture cloud et sa sécurité.

Le portfolio a été publié sur mon compte GitHub. Sa mise en ligne a été confirmée le 14 octobre 2026. Cette date distingue la publication de la préparation initiale des sources, commencée le 12 octobre.

## Conditions et moyens

- Travail individuel avec assistance IA dans ChatGPT Work pour préparer le code et sa documentation. Je dois comprendre et pouvoir expliquer les fichiers livrés.
- Base : modèle Jekyll du professeur, `AbidHamza/modele-portfolio-bts-sio`, avec sa collection `_projets` et ses six compétences officielles.
- Sources HTML, CSS, JavaScript, Markdown, YAML et GLSL ; Three.js dans le hero, WebGL natif pour les reflets aquatiques.
- Hébergement GitHub Pages : dépôt public `ensigitsu/ns-portfolio`, branche `main`, dossier racine, préfixe `/ns-portfolio`.
- Ressources de l’interface hébergées avec le site ; préférence de langue enregistrée localement dans le navigateur.

## Description de l’activité

J’ai fait adapter le modèle pour présenter mon profil, mes projets et les compétences du bloc 1 dans une interface française et anglaise. Les cartes, le compteur et les colonnes de compétences sont générés à partir des mêmes fichiers Markdown. Le modèle `_A-COPIER.md` permet de poursuivre cette documentation sans réécrire les composants HTML.

Le liquid reste dans le hero. Le fond affiche des reflets de soleil sous l’eau légèrement floutés, avec une pause, une réduction des mouvements et un visuel de secours. Les liens LinkedIn et GitHub sont configurés.

J’ai téléversé les sources dans mon dépôt et suivi la publication dans Actions. Après un problème d’affichage, j’ai fait corriger `_config.yml` : le dépôt s’appelle `ns-portfolio`, donc `baseurl` doit être `/ns-portfolio`. Les chemins générés utilisent le filtre `relative_url`. J’ai ensuite confirmé que le site était accessible. Une publication réussie relevée dans Actions a duré **49 secondes**.

J’ai ajouté une fiche consacrée à mon TP de découverte du Web, avec les sources de sa démonstration. La fiche et la démonstration sont publiées. Le 15 octobre 2026, j’ai fait contrôler l’affichage des deux cartes, le compteur 02, le tableau des compétences et les interactions de la démonstration.

<span id="preuves" class="legacy-anchor" aria-hidden="true"></span>
<h2 id="evidence" data-proof-heading>Productions et preuves</h2>

- [Portfolio public](https://ensigitsu.github.io/ns-portfolio/).
- [Dépôt des sources](https://github.com/ensigitsu/ns-portfolio).
- [Publications dans Actions](https://github.com/ensigitsu/ns-portfolio/actions).
- Durée de publication communiquée après la mise en ligne : **49 secondes**.
- Fichiers livrés : `_config.yml`, `_layouts`, `_includes`, `_projets`, `_data`, `assets` et documentation.
- Rapport des contrôles locaux : `docs/TEST-REPORT.md` ; guide d’ajout : `docs/ADDING-PROJECTS.md` ; fiche E5 : `docs/E5-REALISATION.md`.

**Preuves à joindre :** captures personnelles de l’accueil avec le compteur et la matrice, des mentions et du workflow ; résultat W3C et note Lighthouse réels. Le contact public, le matériel utilisé et le lieu de la séance restent à personnaliser. Aucun résultat Lighthouse ni capture n’a été inventé.

### Compétences associées

**c3 — Développer la présence en ligne de l’organisation.** « Le portfolio a été publié sur mon compte GitHub. » L’URL publique et le dépôt permettent de consulter cette présence professionnelle. Les captures et contrôles demandés par l’atelier restent à joindre.

**c6 — Organiser son développement professionnel.** « Les cartes, le compteur et les colonnes de compétences sont générés à partir des mêmes fichiers Markdown. Le modèle `_A-COPIER.md` permet de poursuivre cette documentation sans réécrire les composants HTML. » Je poursuivrai ce suivi pendant ma formation.

## Ce que j’en retiens

Le site a d’abord chargé des ressources sous `/portfolio/` alors que son adresse réelle contient `/ns-portfolio/`. Le décalage empêchait le chargement du style, des scripts et des images. La correction de `baseurl`, suivie d’une publication réussie et d’une vérification du site, a rétabli l’affichage.

Je retiens qu’un workflow vert ne valide pas tout le contenu : je dois aussi ouvrir les pages, contrôler les liens et relier chaque compétence à une réalisation vérifiable. Je dois relire les fichiers préparés avec assistance pour pouvoir présenter mon travail à l’oral.

</div>

<div class="lang-block" data-lang="en" lang="en" hidden markdown="1">

## Context

I need a professional portfolio to document my BTS SIO systems and networks projects, their working conditions and their evidence. The website was published on my GitHub account, with successful access confirmed on 14 October 2026. Source preparation began on 12 October.

## Conditions and resources

- Individual project with AI assistance in ChatGPT Work for code and documentation. I must understand and explain the delivered files.
- Based on the teacher’s `AbidHamza/modele-portfolio-bts-sio` Jekyll template, preserving `_projets` and the six official competency labels.
- HTML, CSS, JavaScript, Markdown, YAML and GLSL; Three.js for the hero and native WebGL for the ocean reflections.
- GitHub Pages hosting: public repository `ensigitsu/ns-portfolio`, branch `main`, root directory and `/ns-portfolio` prefix.
- Interface resources hosted with the website; language preference stored locally in the browser.

## Activity description

I had the template adapted for a bilingual profile, project cards and a competency matrix. Cards, the project count and matrix columns are generated from the same Markdown files. `_A-COPIER.md` supports future updates without rewriting the HTML components.

The liquid sculpture remains in the hero. Subtle ocean-light reflections stay behind the content and include a pause control, reduced-motion support and a fallback image. My LinkedIn and GitHub links are configured.

I uploaded the source and followed publication in Actions. Broken styling was traced to `baseurl: /portfolio`, although the actual repository is named `ns-portfolio`. I had the configuration corrected to `/ns-portfolio` and confirmed that the website was accessible. A successful publication recorded in Actions took **49 seconds**.

The web exercise and its demonstration source are published. On 15 October 2026, I had both project cards, the count of 02, the competency matrix and the demo interactions checked on the public website.

<h2 id="evidence-en" data-proof-heading>Outputs and evidence</h2>

- [Public portfolio](https://ensigitsu.github.io/ns-portfolio/).
- [Source repository](https://github.com/ensigitsu/ns-portfolio).
- [Actions history](https://github.com/ensigitsu/ns-portfolio/actions).
- Successful publication duration supplied by the student: **49 seconds**.
- Complete Jekyll source and documentation, including `docs/TEST-REPORT.md`, `docs/ADDING-PROJECTS.md` and `docs/E5-REALISATION.md`.

**Still required:** real screenshots of the homepage, count, matrix, legal page and workflow; actual W3C and Lighthouse results; public contact details and personal working conditions. No Lighthouse score or screenshot has been fabricated.

### Associated competencies

**c3 — Développer la présence en ligne de l’organisation.** The portfolio has been published on my GitHub account. Its public URL and repository support this professional presence; the requested screenshots and public audits remain to be attached.

**c6 — Organiser son développement professionnel.** Markdown projects and their shared template support a record of skills developed during my studies. I will continue adding genuine projects and evidence.

## Lessons learned

The browser initially requested resources under `/portfolio/` instead of `/ns-portfolio/`. Correcting `baseurl`, publishing successfully and opening the website restored the styling, scripts and images.

A green workflow alone does not establish correct content. I also need to check pages, links and competency evidence, and understand the source prepared with assistance.

</div>
