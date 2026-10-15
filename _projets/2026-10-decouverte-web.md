---
title: "Web basics: an interactive page"
title_fr: "Découverte du Web : une page interactive"
date: 2026-10-12
context: "Practical assignment"
context_fr: "Travail pratique"
summary: "An HTML, CSS and JavaScript exercise with a personalised greeting, a click counter and a reset button."
summary_fr: "Un TP HTML, CSS et JavaScript avec un message personnalisé, un compteur de clics et une remise à zéro."
competencies: [c6]
technologies: [HTML, CSS, JavaScript, SVG]
category: academic
cover: /assets/demos/web-basics/landscape.svg
cover_alt: "A sun above two green hills, the original exercise illustration"
cover_alt_fr: "Un soleil au-dessus de deux collines vertes, illustration originale du TP"
cover_caption: "Original exercise illustration, separate from the real screenshots below."
cover_caption_fr: "Illustration originale du TP, distincte des captures réelles ci-dessous."
cover_label: "WEB / 002"
github_url: https://github.com/ensigitsu/ns-portfolio/tree/main/assets/demos/web-basics
demo_url: https://ensigitsu.github.io/ns-portfolio/assets/demos/web-basics/
has_english: false
evidence_pending: false
---

## Contexte

J’ai réalisé ce TP de découverte du Web le **12 octobre 2026**, puis je l’ai documenté dans le portfolio le 15 octobre. L’exercice présente une page avec un titre, des passions, un lien, une illustration et des interactions en JavaScript.

J’ai travaillé seul. J’ai personnellement préparé la maquette, les idées, le contenu et la mise en page. Les fichiers transmis pour relecture étaient `index.html`, `style.css`, `script.js` et `mon-image.svg`.

## Conditions et moyens

- Travail individuel, en classe et à domicile.
- PC portable sous Windows 11, Microsoft Edge et Visual Studio Code.
- Une page HTML, une feuille CSS, un script JavaScript et une illustration SVG locale.
- Relecture, corrections techniques et documentation préparées avec une assistance IA. Je dois comprendre le résultat et pouvoir l’expliquer.
- Le prénom saisi sert seulement au message dans le navigateur ; le formulaire ne l’envoie pas et ne l’enregistre pas.

## Description de l’activité

J’ai choisi le contenu et organisé la présentation de la page à partir de ma maquette. Le HTML structure les titres, la liste, le lien, l’image et les boutons. Le CSS règle la présentation.

La version transmise comportait déjà la saisie d’un prénom, un compteur, un message différent à partir de cinq clics et une remise à zéro. Lors de la relecture, j’ai fait simplifier les règles CSS imbriquées et supprimer le doublon de `body`. Les couleurs réellement utilisées ont été conservées.

La correction limite l’image à la largeur disponible et permet aux boutons de passer à la ligne. Le formulaire traite `submit` avec `preventDefault()` pour éviter un rechargement. Le message utilise `textContent` et `role="status"`. Les identifiants du code sont en anglais et le message de débogage a été retiré.

J’ai documenté ce TP dans mon portfolio pour suivre mes acquis en HTML, CSS et JavaScript et identifier les points à approfondir pendant ma formation.

<h2 id="evidence">Productions et preuves</h2>

- [Ouvrir la démonstration]({{ '/assets/demos/web-basics/' | relative_url }}).
- [Consulter les quatre fichiers dans le dépôt](https://github.com/ensigitsu/ns-portfolio/tree/main/assets/demos/web-basics).
- [Lire le HTML]({{ '/assets/demos/web-basics/index.html' | relative_url }}), [le CSS]({{ '/assets/demos/web-basics/style.css' | relative_url }}) et [le JavaScript]({{ '/assets/demos/web-basics/script.js' | relative_url }}).
- [Illustration SVG originale]({{ '/assets/demos/web-basics/landscape.svg' | relative_url }}).

![Carte du TP et compteur 02 sur le téléphone de Nathan, capture fournie le 15 octobre 2026]({{ '/assets/evidence/2026-10/mobile-web.png' | relative_url }})

Cette capture provient de la version publique avant correction de la date de réalisation. La date réelle du TP est le 12 octobre 2026.

Le contrôle du 15 octobre a confirmé le message personnalisé, le compteur, le changement à cinq clics et la remise à zéro dans la démonstration publique. Les mêmes cas ont été vérifiés localement.

### Compétence associée

**c6 — Organiser son développement professionnel.** « J’ai documenté ce TP dans mon portfolio pour suivre mes acquis en HTML, CSS et JavaScript et identifier les points à approfondir pendant ma formation. » La fiche, les sources et les captures rendent cette progression consultable.

## Ce que j’en retiens

Le point technique relevé lors de la relecture était le CSS imbriqué avec un deuxième `body`. Des sélecteurs à plat rendent la mise en page plus simple à comprendre et à modifier. La correction a été préparée avec assistance.

Mes premiers acquis portent sur la structure HTML et la présentation CSS. Je dois encore savoir refaire et expliquer l’interaction : lire un champ, compter les clics, tester `clickCount >= 5`, éviter le rechargement et afficher du texte sans l’interpréter comme du HTML.

Le prochain TP n’est pas encore choisi. Je sélectionnerai avec mon formateur une réalisation réelle et les preuves qu’elle apporte avant d’ajouter de nouvelles compétences.
