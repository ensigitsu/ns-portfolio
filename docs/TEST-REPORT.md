# Rapport de vérification — 12 octobre 2026

Version actuelle : portfolio Jekyll avec reflets aquatiques animés en fond, avec le liquid original uniquement dans le hero et sans sculpture flottante. Le site de consultation privé a été préparé avec Sites ; aucune publication sur le compte GitHub de Nathan n’a été réalisée. Les scores et preuves publics restent à compléter.

## Contrôles réellement réalisés

| Contrôle | Résultat observé |
| --- | --- |
| Modèle du professeur | Architecture inspectée, collection `_projets`, modèle Markdown et six compétences conservés |
| Jekyll | Ruby 3.3.6, Bundler 2.5.22, Jekyll 3.10.0 ; build strict réussi en 0,273 s (durée locale, pas Actions) |
| Métadonnées et contenu | 1 projet réel, cinq sections, associations c3/c6, modèle non publié |
| Interface | 83 traductions FR/EN ; JSON généré identique aux données YAML |
| Routes, ressources et ancres | Accueil, projet, mentions et 404 générés ; ressources et liens locaux présents sous `/portfolio/` |
| Ajout automatique | Deux tests après nettoyage : champs anglais puis champs anciens du professeur ; nouvelle page, carte, compteur 02, colonne, associations et filtres ; fixtures retirées |
| HTML/CSS/SVG | Validateur Nu officiel 26.10.12, sur les pages et assets générés : aucune erreur |
| JavaScript | Syntaxe vérifiée pour les neuf modules ; contrôleur de suivi global absent ; liquid limité au hero |
| Rendu réel des reflets | Shaders compilés, liés et rendus dans un contexte OpenGL ES 3.2 Mesa/llvmpipe : aucune erreur GL |
| Évolution des reflets | Images aux phases t=8 et t=14 différentes ; aperçu du fond rendu inspecté, avec composition sur bleu nuit, opacité 0,65 et flou 1,5 px |
| Gestion du fond | Tests DOM + WebGL simulé réussis : initialisation, pause/reprise, arrêt dans un onglet masqué, réduction des mouvements, résolution mobile, perte de contexte, shader absent et compilation en erreur |
| Limites de résolution | Test logique : grand côté plafonné à 900 px sur ordinateur et 600 sur mobile |
| Liquid du hero | Sculpture et shaders d’origine restaurés uniquement dans le hero ; aucun module de détachement ou de suivi global |
| Interface dans DOM simulé | FR/EN, stockage de langue, labels officiels, menu ARIA, Échap/focus, ancres, filtres et ancre des preuves bilingues : succès |
| Contraste des couleurs principales | Les six paires opaques calculées précédemment sont inchangées et dépassent 4,5:1 ; composition sur le fond à vérifier dans un navigateur |

Ces tests ne sont pas une note Lighthouse. Le rendu OpenGL ES vérifie le shader hors navigateur ; le DOM simulé vérifie la logique, pas la mise en page réelle. Le plafond 24 images/s sur ordinateur / 18 sur mobile est implémenté ; les FPS réels des appareils ne sont pas mesurés.

## Architecture du fond

Un seul canvas plein écran utilise WebGL natif pour deux réseaux de cellules déformées et une lumière diffuse. Il reste derrière tous les contenus, avec un flou CSS de 1,5 px, sans événement de souris. Le bouton pause reste accessible en bas à droite. Avec réduction des mouvements, le rendu est statique. Sans JavaScript, sans WebGL ou si un shader échoue, le SVG local fournit un fond statique. La sculpture Three.js d’origine reste dans le hero ; elle se met en pause hors écran et partage le bouton pause avec le fond. Le futur avatar reste désactivé.

## Vérifications restantes

- Navigateur réel sur ordinateur et téléphone : composition, luminosité, fluidité, console, lecture au clavier et lecteur d’écran. Aucun contrôle de navigateur adapté n’était exposé dans cet environnement.
- Publication GitHub Pages, URL réelle, durée Actions et historique des commits.
- Validation W3C par URL publique, Lighthouse Accessibility (note non mesurée, objectif 100), performances réelles.
- Nom/contact public, profils réels, premier nouveau TP de Q3 et preuves E5 autorisées.
- Captures réelles de l’accueil, compteur, matrice, mentions, validateur et Lighthouse. Aucune preuve de publication ou note n’est inventée.

## Reproduire les contrôles

```sh
bundle install
bundle exec jekyll build --strict_front_matter
python3 -m pip install PyYAML
python3 scripts/validate.py --site _site
```

Validateur Nu : https://github.com/validator/validator . Contrôles de l’examen : https://validator.w3.org/nu/ sur le site publié puis Lighthouse dans Chrome/Edge.

## ZIP

Les sources complètes sont regroupées sous `portfolio/`, sans Git, caches ou sortie Jekyll. L’archive est contrôlée par CRC et comparaison des fichiers puis une véritable compilation Jekyll est lancée depuis son contenu extrait avant livraison.

## Restauration du liquid dans le hero
La géométrie et les shaders d’origine ont été remis dans la section d’accueil, avec leur SVG de secours et la composition mobile initiale. Le module de sculpture flottante reste absent. La pause partagée continue à fonctionner même si un des deux effets échoue. Des tests d’intégration DOM/renderer vérifient l’absence de détachement, la suspension du hero hors écran, la poursuite indépendante des reflets et la pause/reprise commune.

## Limitation de la copie et consignes robots
Tests DOM réussis pour les événements copier/couper/coller, sélection, clic droit et glisser ; Ctrl/Cmd+A/C/X/V ; champs éditables autorisés ; images non glissables. Navigation par liens, Tab/Entrée/Échap, recherche et zoom ne sont pas bloqués. Les quatre pages générées portent noindex/nosnippet et le robots.txt généré vise /portfolio/. Le déploiement de consultation inclut aussi ce fichier à la racine de l’origine. La procédure spécifique GitHub Pages est dans CONTENT-PROTECTION.md. Aucun test ne prouve une résistance à un scraper hostile : ces mesures ne sont pas un contrôle d’accès. Aucun CAPTCHA client seul n’est ajouté.

## Nettoyage et facilité d’édition

Les six sections de l’accueil sont réparties dans `_includes/sections/`. Le layout des projets se trouve dans `_layouts/project.html`. Les nouveaux champs de métadonnées et les identifiants de section sont en anglais ; les traductions françaises, les libellés officiels et les textes E5 sont conservés. Les anciennes ancres françaises et les champs `cadre`, `resume`, `competences` restent acceptés. La correspondance est isolée dans `project-metadata.html`.

Les sources originales HTML, CSS, JavaScript, YAML, Python et GLSL ont été formatées et contrôlées sans commentaires. Les neuf modules JavaScript passent la vérification de syntaxe. Les calculs des shaders sont identiques à ceux de la version précédente après retrait des commentaires et espaces ; les fichiers tiers sont inchangés octet par octet. Le validateur Nu ne trouve aucune erreur sur les dix fichiers HTML/CSS/SVG générés. Les guides EDITING.md et ADDING-PROJECTS.md décrivent les fichiers et les champs à modifier.

## Crédit et consultation locale

Le crédit du pied de page est « © 2026 - NS ». Les mentions sont conservées : l’étape 6, page 10 du livret demande leur relecture, leur capture et la réponse Q5. Le nouveau ZIP inclut OPEN-ME.html et un dossier local-preview séparé des sources Jekyll. Les sorties compilées sont présentes uniquement pour permettre l’ouverture locale demandée ; les sources à envoyer sur GitHub restent dans portfolio.

Les quatre pages locales ont été chargées sous des URL file dans jsdom avec le véritable bundle classique. Traductions FR/EN, menu, ancre des preuves, copie découragée, liens vers les fichiers locaux, chargement des shaders aquatiques et fallback du hero : succès, sans appel réseau. Le contexte WebGL de ce test est simulé. Le validateur Nu n’a trouvé aucune erreur sur les vingt fichiers HTML/CSS/SVG du build publié et de l’aperçu local. L’ouverture et la fluidité dans le navigateur réel de Nathan restent à vérifier ; aucun navigateur adapté n’est exposé ici.

Le générateur d’aperçu est fourni dans scripts/build-local-preview.mjs. La dépendance Node/Prettier sert uniquement à reconstruire l’aperçu ; elle n’est nécessaire ni pour ouvrir l’aperçu fourni ni pour publier avec Jekyll sur GitHub Pages.

## Audit avant dépôt GitHub

Le build a été relancé avec safe et strict_front_matter : succès. Les dix fichiers HTML/CSS/SVG générés passent le validateur Nu sans erreur. Les tests de projets modernes et anciens ont été exécutés dans une copie isolée, sans ajouter de réalisation fictive aux sources livrées. Les tests FR/EN, menu, liens, pause partagée et aperçu file réussissent.

Une simulation de l’objet site.github décrit par GitHub Pages a reproduit un lien GitHub incorrect dans le contact et le footer. Le champ du profil personnel a été renommé github_url dans la configuration, les composants et le validateur. Le projet précise maintenant que LinkedIn est configuré. La vérification après correction contrôle l’absence de lien fictif et la bonne URL lorsque le profil est renseigné. La publication réelle sur le dépôt de Nathan et les plugins complets de GitHub Pages restent à vérifier dans Actions.

L’état pédagogique détaillé est dans AUDIT-TP.md : le dossier n’est pas prêt à être noté comme un TP terminé tant que la publication et les preuves personnelles ne sont pas présentes.
