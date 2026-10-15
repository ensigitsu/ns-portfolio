---
title: "Web basics: an interactive page"
title_fr: "Découverte du Web : une page interactive"
date: 2026-10-15
context: "Practical assignment · documentation date"
context_fr: "TP · date de documentation"
summary: "An HTML, CSS and JavaScript exercise with a personalised greeting, a click counter and a reset button."
summary_fr: "Un TP HTML, CSS et JavaScript avec un message personnalisé, un compteur de clics et une remise à zéro."
competencies: [c6]
technologies: [HTML, CSS, JavaScript, SVG]
category: academic
cover: /assets/demos/web-basics/landscape.svg
cover_alt: "A sun above two green hills, the original illustration supplied with the exercise"
cover_alt_fr: "Un soleil au-dessus de deux collines vertes, illustration fournie dans le TP"
cover_caption: "Original exercise illustration; this is not a screenshot of the published page."
cover_caption_fr: "Illustration originale du TP ; ce visuel n’est pas une capture du site publié."
cover_label: "WEB / 002"
github_url: https://github.com/ensigitsu/ns-portfolio/tree/main/assets/demos/web-basics
demo_url: https://ensigitsu.github.io/ns-portfolio/assets/demos/web-basics/
has_english: false
evidence_pending: true
---

## Contexte

Cette réalisation présente mon exercice de découverte du Web : une page personnelle avec un titre, une liste de passions, un lien, une illustration et une interaction en JavaScript. Le dossier de départ transmis contient quatre fichiers : `index.html`, `style.css`, `script.js` et `mon-image.svg`.

Le 15 octobre 2026 correspond à la date de documentation dans le portfolio. La date exacte de réalisation du TP en cours reste à préciser.

## Conditions et moyens

- Une page HTML, une feuille CSS, un script JavaScript et une illustration SVG locale.
- Un navigateur pour afficher la page et utiliser les boutons ; aucun compte ni outil payant n’est nécessaire pour la démonstration.
- Le prénom saisi sert uniquement à composer un message dans le navigateur. Il n’est ni transmis par le formulaire ni enregistré.
- La relecture du code, les corrections et cette documentation ont été préparées avec une assistance IA. Je dois les relire et pouvoir expliquer leur fonctionnement à l’oral.

## Description de l’activité

La version de départ comporte déjà la saisie d’un prénom, un bouton qui augmente un compteur, un message différent à partir de cinq clics et une remise à zéro. La page utilise des balises HTML pour le contenu, des sélecteurs CSS pour son apparence et des événements JavaScript pour réagir aux actions.

Après relecture, j’ai fait simplifier les règles CSS imbriquées et supprimer le doublon de `body`. Les couleurs effectivement utilisées dans la page ont été conservées. L’image est limitée à la largeur de l’écran, les boutons peuvent passer à la ligne et la page possède un réglage `viewport` pour les écrans étroits.

Les identifiants du code sont en anglais. Le message de débogage dans la console a été retiré. Le formulaire traite son événement `submit` avec `preventDefault()` : le bouton et la touche Entrée mettent à jour le compteur sans recharger la page. Le résultat est écrit avec `textContent`, et le message utilise `role="status"` pour annoncer ses changements aux outils d’assistance.

J’ai documenté ce TP dans mon portfolio pour suivre mes acquis en HTML, CSS et JavaScript et identifier les points à approfondir pendant ma formation.

<h2 id="evidence">Productions et preuves</h2>

- [Ouvrir la démonstration]({{ '/assets/demos/web-basics/' | relative_url }}).
- [Consulter le HTML dans le dépôt](https://github.com/ensigitsu/ns-portfolio/blob/main/assets/demos/web-basics/index.html).
- [Consulter le CSS]({{ '/assets/demos/web-basics/style.css' | relative_url }}).
- [Consulter le JavaScript]({{ '/assets/demos/web-basics/script.js' | relative_url }}).
- [Voir l’illustration SVG originale]({{ '/assets/demos/web-basics/landscape.svg' | relative_url }}).

Les fichiers corrigés constituent les productions disponibles. La vérification locale contrôle le message avec un prénom, le compteur, le changement à cinq clics, la remise à zéro et l’absence de rechargement lors de la soumission. Le rapport se trouve dans `docs/TEST-REPORT.md`.

**À compléter après l’envoi sur GitHub :** ouvrir la démonstration publique et ajouter une capture personnelle montrant le compteur et le message. Les liens GitHub de cette fiche deviennent disponibles après la publication des nouveaux fichiers. Aucune capture de publication n’a été inventée.

### Compétence associée

**c6 — Organiser son développement professionnel.** « J’ai documenté ce TP dans mon portfolio pour suivre mes acquis en HTML, CSS et JavaScript et identifier les points à approfondir pendant ma formation. » La fiche et ses sources rendent ce suivi consultable. Je compléterai ce suivi avec mes prochaines réalisations et mes vérifications personnelles.

## Ce que j’en retiens

La relecture a mis en évidence des règles CSS imbriquées et un deuxième `body` placé à l’intérieur du premier : ce dernier ne pouvait pas cibler la page comme un `body` indépendant. Des sélecteurs à plat rendent les règles plus simples à comprendre et à modifier.

Je dois être capable d’expliquer le rôle de chaque fichier, la différence entre une variable et un élément HTML, l’événement `submit`, la condition `clickCount >= 5` et l’utilisation de `textContent`. Mon prochain objectif est de refaire une petite interaction sans recopier la solution, puis de documenter le résultat et mes difficultés réelles.
