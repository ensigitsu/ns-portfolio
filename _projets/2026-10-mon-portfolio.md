---
title: "Publishing my professional portfolio"
title_fr: "Mise en ligne de mon portfolio professionnel"
date: 2026-10-15
context: "Professional workshop"
context_fr: "Atelier de professionnalisation"
summary: "A bilingual Jekyll portfolio published through GitHub Pages to document my BTS SIO systems and networks work."
summary_fr: "Un portfolio Jekyll bilingue publié sur GitHub Pages pour documenter mes réalisations en BTS SIO SISR."
competencies: [c3, c6]
technologies: [Jekyll, Markdown, Three.js, WebGL, GitHub Pages]
category: academic
cover: /assets/images/portfolio-cover.svg
cover_alt: "Illustration of Nathan’s portfolio and the Jekyll publishing chain"
cover_alt_fr: "Illustration du portfolio de Nathan et de la chaîne de publication Jekyll"
cover_caption: "Project illustration, separate from the real screenshots below."
cover_caption_fr: "Illustration du projet, distincte des captures réelles présentées ci-dessous."
cover_label: "PORTFOLIO / 001"
github_url: https://github.com/ensigitsu/ns-portfolio
demo_url: https://ensigitsu.github.io/ns-portfolio/
has_english: true
evidence_pending: false
---

<div class="lang-block" data-lang="fr" lang="fr" markdown="1">

## Contexte

La séance portfolio du **15 octobre 2026** m’a permis de documenter ma présence professionnelle en ligne pour le BTS SIO, option SISR. Je suis déjà en alternance. Le site rassemble mes réalisations, leurs conditions de travail et leurs preuves.

La première mise en ligne avait été confirmée le 14 octobre. La date de cette fiche correspond à la séance du 15 octobre, avec l’ajout et la vérification du TP Web réalisé le 12 octobre.

## Conditions et moyens

- Travail individuel, en classe et à domicile.
- PC portable sous Windows 11, Microsoft Edge et Visual Studio Code.
- Compte GitHub et dépôt public `ensigitsu/ns-portfolio`, branche `main`, dossier racine.
- Modèle Jekyll du professeur : `AbidHamza/modele-portfolio-bts-sio`.
- HTML, CSS, JavaScript, Markdown et YAML ; Three.js et WebGL pour les effets.
- Préparation et relecture du code avec une assistance IA. J’ai défini les choix de présentation et de contenu ; je dois comprendre les fichiers livrés et pouvoir les expliquer.

## Description de l’activité

J’ai choisi le contenu, la présentation et les évolutions visuelles de mon portfolio. J’ai fait adapter le modèle pour conserver les six compétences officielles, les fiches Markdown, les cartes, le compteur et la matrice automatique.

J’ai téléversé les fichiers et les dossiers dans GitHub, suivi la publication dans Actions et vérifié le site public. Une publication réussie a duré **49 secondes**. J’ai ajouté la fiche de mon TP Web et sa démonstration : le site contient maintenant **deux projets**.

Le problème d’affichage provenait du chemin `/portfolio/`, alors que le dépôt se nomme `ns-portfolio`. J’ai fait corriger `baseurl` en `/ns-portfolio`, puis vérifié le chargement des styles et des ressources. Le liquid reste dans le hero et les reflets animés restent en arrière-plan.

Le 15 octobre, j’ai fourni mes conditions réelles de travail, mon contact public et mes captures sur téléphone. Mon rapport Lighthouse affiche **100/100 en accessibilité**. Le contrôle public W3C du même jour ne signale **aucune erreur ni avertissement**.

<h2 id="evidence" data-proof-heading>Productions et preuves</h2>

- [Portfolio public](https://ensigitsu.github.io/ns-portfolio/).
- [Dépôt des sources](https://github.com/ensigitsu/ns-portfolio).
- [Publication réussie de 49 secondes](https://github.com/ensigitsu/ns-portfolio/actions/runs/38771346787).
- [Historique des modifications](https://github.com/ensigitsu/ns-portfolio/commits/main/).
- Sources Jekyll, deux fiches et démonstration Web consultables.

### Accessibilité et validité du HTML

![Rapport Lighthouse fourni le 15 octobre 2026 : 100 sur 100 en accessibilité pour le portfolio]({{ '/assets/evidence/2026-10/lighthouse-accessibility.png' | relative_url }})

![Contrôle public W3C du 15 octobre 2026 : aucune erreur ni avertissement sur l’accueil]({{ '/assets/evidence/2026-10/w3c-validation.jpg' | relative_url }})

Ces résultats concernent la version publique testée le 15 octobre. Ils ne garantissent pas à eux seuls l’accessibilité complète. Après chaque modification, je dois vérifier le site à nouveau.

### Publication, accueil et compétences

![Exécution GitHub Actions réussie avec une durée totale de 49 secondes]({{ '/assets/evidence/2026-10/actions-49s.jpg' | relative_url }})

![Accueil du portfolio public lors du contrôle du 15 octobre 2026]({{ '/assets/evidence/2026-10/home.jpg' | relative_url }})

[Ouvrir la capture complète de l’accueil et de la matrice à six compétences]({{ '/assets/evidence/2026-10/competency-matrix.jpg' | relative_url }}).

![Historique GitHub qui date les ajouts et corrections du portfolio]({{ '/assets/evidence/2026-10/commits.jpg' | relative_url }})

![Mentions légales de la version publique contrôlée le 15 octobre 2026]({{ '/assets/evidence/2026-10/legal.jpg' | relative_url }})

Les captures sont des preuves de la version vérifiée, prises avant l’actualisation du prénom public et du contact. Elles restent conservées sans retouche. Le nom d’affichage actuel est Nathan.

### Compétences associées

**c3 — Développer la présence en ligne de l’organisation.** J’ai publié une présentation de mes réalisations, avec un lien public, un contact et des contrôles de qualité documentés.

**c6 — Organiser son développement professionnel.** Je rassemble mes projets et leurs preuves dans des fiches Markdown pour suivre mes acquis et préparer leur présentation à l’oral.

## Ce que j’en retiens

Le nom du dépôt et `baseurl` doivent correspondre : une différence empêche les styles et scripts de se charger correctement. Une coche verte ne garantit pas que la page contient les bonnes informations ; je contrôle aussi les cartes, les liens et le tableau.

Je sais distinguer les sources Jekyll de la page compilée, structurer des contenus en HTML et Markdown, organiser leur présentation en CSS et suivre une publication dans GitHub. Je continue à comprendre le code préparé avec assistance.

</div>

<div class="lang-block" data-lang="en" lang="en" hidden markdown="1">

## Context

The portfolio workshop took place on **15 October 2026**. I am a BTS SIO systems and networks student on a work-study programme. My portfolio records my projects, working conditions and evidence.

The first publication was confirmed on 14 October. This entry records the 15 October workshop and the documentation of the web exercise completed on 12 October.

## Conditions and resources

- Individual work in class and at home.
- Windows 11 laptop, Microsoft Edge and Visual Studio Code.
- Public GitHub repository `ensigitsu/ns-portfolio`, branch `main`, root source directory.
- The teacher’s Jekyll template, with HTML, CSS, JavaScript, Markdown and YAML.
- AI-assisted implementation and review. I directed the presentation and content and must understand the delivered source.

## Activity description

I chose the portfolio content and presentation, uploaded the source folders and followed publication in Actions. The shared project files generate the cards, count and competency matrix. Both projects are published.

A successful publication lasted **49 seconds**. Broken styling was traced to `/portfolio/` paths, although the repository is named `ns-portfolio`. The configuration was corrected to `baseurl: /ns-portfolio`.

On 15 October I supplied my working conditions, public contact, actual phone screenshots and a Lighthouse report showing **100/100 for accessibility**. The public W3C check reported **no errors or warnings**.

<h2 id="evidence-en" data-proof-heading>Outputs and evidence</h2>

- [Public portfolio](https://ensigitsu.github.io/ns-portfolio/).
- [Source repository](https://github.com/ensigitsu/ns-portfolio).
- [Successful 49-second publication](https://github.com/ensigitsu/ns-portfolio/actions/runs/38771346787).
- [Commit history](https://github.com/ensigitsu/ns-portfolio/commits/main/).
- Two project entries and the web exercise demonstration.

![Student-supplied Lighthouse report: accessibility score of 100 out of 100]({{ '/assets/evidence/2026-10/lighthouse-accessibility.png' | relative_url }})

![Public W3C check on 15 October 2026: no errors or warnings]({{ '/assets/evidence/2026-10/w3c-validation.jpg' | relative_url }})

![Successful GitHub Actions run with a total duration of 49 seconds]({{ '/assets/evidence/2026-10/actions-49s.jpg' | relative_url }})

![Public homepage checked on 15 October 2026]({{ '/assets/evidence/2026-10/home.jpg' | relative_url }})

[Open the complete homepage and six-row matrix screenshot]({{ '/assets/evidence/2026-10/competency-matrix.jpg' | relative_url }}).

![GitHub commit history recording the project updates]({{ '/assets/evidence/2026-10/commits.jpg' | relative_url }})

![Legal page from the public version checked on 15 October 2026]({{ '/assets/evidence/2026-10/legal.jpg' | relative_url }})

These original screenshots record the checked version before the display-name and contact update. A score of 100 does not establish complete accessibility. Future changes need further checks.

### Associated competencies

**c3 — Développer la présence en ligne de l’organisation.** A public presentation of my work, with contact details and documented quality checks.

**c6 — Organiser son développement professionnel.** Markdown entries and evidence track my learning and support an oral presentation of my work.

## Lessons learned

The repository name must match `baseurl`. A successful workflow does not establish correct content: I also check cards, images, links, project pages and matrix associations.

I distinguish Jekyll source from compiled pages and practise structuring HTML/Markdown content, CSS presentation and GitHub Pages publication. I continue learning to explain the assisted implementation.

</div>
