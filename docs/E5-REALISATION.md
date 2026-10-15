# Fiche de réalisation professionnelle — brouillon E5

**Intitulé :** Mise en ligne de mon portfolio professionnel.  
**Nom et prénom :** Nathan S. — nom civil complet à renseigner par l’étudiant.  
**Préparation des sources :** à partir du 12 octobre 2026.  
**Publication confirmée :** 14 octobre 2026.  
**Durée d’une publication réussie relevée dans Actions :** 49 secondes.  
**Lieu, matériel personnel et navigateur :** à compléter avec les conditions réelles.

## Contexte

Pour l’épreuve E5 et ma présentation professionnelle, j’ai besoin de documenter mes réalisations en BTS SIO, option SISR. Le site publié est consultable à l’adresse https://ensigitsu.github.io/ns-portfolio/. Les sources sont dans https://github.com/ensigitsu/ns-portfolio.

## Compétences mobilisées

| Code | Libellé exact du bloc 1 | Action et preuve |
| --- | --- | --- |
| c3 | Développer la présence en ligne de l’organisation | Portfolio publié, URL et dépôt disponibles ; captures et contrôles publics à joindre |
| c6 | Organiser son développement professionnel | Fiches Markdown et matrice pour suivre les réalisations ; TP Web publié avec ses sources |

Ces associations doivent être expliquées à partir du travail réel et relues avec le professeur. Elles ne remplacent pas une validation du jury. Le nouveau TP est associé seulement à c6.

## Conditions et moyens

Le modèle Jekyll du professeur a été adapté avec une assistance IA dans ChatGPT Work. Les sources utilisent HTML, CSS, JavaScript, Markdown, YAML et GLSL. Le hero utilise Three.js ; le fond utilise WebGL natif. La police et les ressources de l’interface sont locales.

Le dépôt public `ensigitsu/ns-portfolio` est publié avec GitHub Pages, branche `main`, dossier racine. Jekyll génère les pages de la collection `_projets` sans plugin personnalisé. `baseurl` correspond au chemin `/ns-portfolio`.

Les sources originales sont sous licence MIT et leurs contenus originaux sous CC BY 4.0, sous réserve des droits de tiers. Les notices des bibliothèques sont conservées. Le contact public et l’identité à afficher doivent être vérifiés par l’étudiant. Les captures doivent être relues et autorisées.

## Description de l’activité

J’ai fait préparer les sources de mon portfolio à partir du modèle du professeur. J’ai conservé la collection des réalisations, les six libellés officiels et la génération automatique des cartes, du compteur et de la matrice. J’ai fait adapter l’interface en français et en anglais et conserver le liquid dans le hero avec des reflets aquatiques en arrière-plan.

J’ai téléversé les fichiers et leurs dossiers dans le dépôt GitHub, activé Pages et suivi les étapes build et deploy dans Actions. Le site a d’abord présenté un problème d’affichage : les chemins utilisaient `/portfolio/` alors que mon dépôt est nommé `ns-portfolio`. J’ai fait corriger la configuration puis confirmé que le site était accessible. Une publication réussie a duré 49 secondes.

J’ai transmis mon exercice de découverte du Web pour en préparer une deuxième fiche. La démonstration contient une saisie de prénom, un message, un compteur, une condition à cinq clics et une remise à zéro. La relecture et les corrections ont été faites avec assistance ; je dois comprendre le code et savoir le présenter. La fiche et la démonstration sont publiées. Le 15 octobre 2026, j’ai fait contrôler les deux cartes, le compteur 02, la matrice et les interactions dans la démonstration publique.

## Productions et preuves

Disponibles : URL du portfolio, dépôt public, historique Actions, sources Jekyll complètes, deux fiches de projets et quatre fichiers de démonstration du TP Web.

À joindre : capture réelle de l’accueil après ajout du TP avec compteur 02 et matrice ; capture des mentions ; résultat W3C ; note Lighthouse ; capture du workflow avec durée. Les contrôles locaux sont décrits dans `TEST-REPORT.md` et ne constituent pas une note Lighthouse.

## Difficultés et apprentissages

Le chemin du dépôt doit correspondre à `baseurl`. Une différence entre `/portfolio` et `/ns-portfolio` empêche de charger les ressources au bon endroit. Après correction, il faut attendre la publication et ouvrir le site pour vérifier le résultat.

Un workflow vert ne vérifie pas les faits écrits dans les pages. Je dois contrôler le contenu, les ressources et les compétences après chaque ajout. Je dois aussi pouvoir expliquer les fichiers préparés avec assistance.

## Préparation à l’oral

**1. Comment un fichier devient-il une page en ligne ?** Un commit sur la branche publiée déclenche le workflow. Jekyll lit le YAML et le Markdown, applique les layouts et génère le HTML et les ressources. Pages publie ces fichiers. Ma publication relevée dans Actions a duré 49 secondes.

**2. Que contrôler après un ajout ?** La carte, le compteur, la page et ses cinq parties, les images, les liens et la nouvelle colonne de compétences. Je lis aussi les journaux si quelque chose manque.

**3. Mentions et captures de stage ?** Identifier l’éditeur et l’hébergeur. Avant diffusion d’une capture, retirer les secrets et les données confidentielles et obtenir l’accord de l’entreprise.

**4. Quelle compétence travailler ensuite ?** Les lignes c1, c2, c4 et c5 n’ont pas encore de projet associé. Je choisirai avec mon formateur un vrai TP pertinent, puis j’en documenterai les actions et les preuves. Je dois encore préciser l’intitulé de ce prochain travail.

## Personnalisation restante

Confirmer nom complet, lieu, matériel et logiciels réellement utilisés. Ajouter les preuves publiques et le résultat Lighthouse. Relire la fiche au passé avec ses propres mots et compléter la difficulté vécue. Ne pas annoncer comme effectuée une opération encore en attente.
