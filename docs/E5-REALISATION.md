# Fiche de réalisation professionnelle — brouillon E5

**Intitulé :** Mise en ligne de mon portfolio professionnel.  
**Nom et prénom :** Nathan S. — nom civil complet à renseigner par l’étudiant.  
**Date de préparation des sources :** 12 octobre 2026.  
**Date de publication effective :** à compléter après mise en ligne.  
**Lieu :** à compléter ; aucun établissement ou lieu personnel n’a été fourni.

## Contexte

Pour l’épreuve E5 et ma présentation professionnelle, j’ai besoin d’un espace unique pour documenter mes réalisations pendant le BTS SIO, option SISR. Ce dossier contient les sources du site et une procédure de mise en ligne gratuite. La publication réelle reste à réaliser sur mon compte GitHub.

## Compétences mobilisées

| Code | Libellé exact du bloc 1 | Action et état de preuve |
| --- | --- | --- |
| c3 | Développer la présence en ligne de l’organisation | Sources du portfolio et mentions préparées ; publication, W3C et Lighthouse publics à compléter |
| c6 | Organiser son développement professionnel | Modèle de réalisation et matrice automatiques préparés ; suivi régulier des réalisations à poursuivre |

Ces associations ne remplacent pas la validation du professeur. Elles sont affichées comme incomplètes tant que les preuves de publication manquent. Bloc 1 : Support et mise à disposition de services informatiques, épreuve E5.

## Conditions et moyens

**Matériel et logiciels.** Préparation dans ChatGPT Work avec assistance IA ; sources HTML, CSS, JavaScript, Markdown, YAML et GLSL. Jekyll issu du modèle de classe, Three.js pour le hero, WebGL natif pour le fond et police Manrope locale. Hébergement prévu : compte GitHub gratuit, sans abonnement. Matériel personnel et versions de mon navigateur à renseigner.

**Conditions techniques.** Collection `_projets`, route `/projets/:name/`, build Jekyll sans plugin personnalisé. Dépôt attendu `portfolio`, branche `main`, racine. Le site fonctionne comme un ensemble statique ; les reflets sont rendus sur l’appareil du visiteur. Le fond animé est facultatif pour accéder au contenu.

**Outils de contrôle.** Résultats locaux dans `TEST-REPORT.md`. Contrôles W3C, Lighthouse, navigateur, téléphone et URL publique à effectuer après publication.

**Cadre légal.** Mentions et licences préparées ; identification/contact public à finaliser. Code MIT, contenus originaux CC BY 4.0 sous réserve des droits de tiers ; dépendances selon leurs propres notices. Aucun formulaire ni mesure d’audience. La langue peut être mémorisée localement, ce qui est décrit dans les mentions. Les captures doivent être relues et les autorisations obtenues avant publication.

## Description de l’activité — au passé, à la première personne

J’ai fait préparer les sources de mon portfolio avec l’assistance de ChatGPT Work à partir du modèle Jekyll du professeur. J’ai conservé les fichiers Markdown de réalisations, leurs métadonnées YAML et les six libellés officiels. J’ai fait adapter l’identité visuelle, la navigation et la version anglaise de l’interface. Le projet contient une sculpture liquide limitée au hero et des reflets de soleil sous l’eau en WebGL, des visuels de secours et une gestion de la réduction des mouvements.

J’ai préparé une première fiche consacrée au portfolio, un modèle pour les prochaines réalisations et une matrice alimentée par les mêmes métadonnées que les cartes. J’ai gardé les chemins compatibles avec le sous-dossier `/portfolio/`. J’ai fait préparer les mentions et les notices de licence, ainsi qu’un guide de téléversement et de vérification.

**Je n’ai pas encore créé ou publié mon dépôt GitHub dans cette préparation. Je n’ai pas relevé de durée Actions ni de note Lighthouse publique.** Après mes opérations réelles, je remplacerai ce paragraphe par ce que j’ai effectivement fait : création du dépôt, activation Pages, lecture des journaux, validation de l’URL, contrôles et ajout de preuves. Je devrai relire le code et être capable de l’expliquer devant le jury.

## Productions et preuves

Préparés : projet source complet, fichier de réalisation initial, modèle Markdown, données de compétences, interface bilingue, mentions, documentation et rapport des contrôles locaux.

À joindre après publication : URL ouverte devant le jury ; accueil avec compteur et matrice ; mentions avec nom et hébergeur ; validation W3C ; note Lighthouse réelle ; historique des commits ; workflow Actions et durée. Les emplacements et règles de captures se trouvent dans `images/README.md`.

## Difficultés et apprentissages

Le sous-chemin `/portfolio/` impose de ne pas utiliser des liens codés en dur depuis `/assets`. Le projet emploie `relative_url` et des imports relatifs. Les preuves publiques ne doivent pas être confondues avec la préparation des sources. Remplacer/compléter ces constats par une vraie difficulté rencontrée lors de ma séance, sa résolution et les résultats vérifiés.

## Préparation à l’oral — quatre réponses à personnaliser

**1. Comment un fichier devient-il une page en ligne ?** Après un commit sur la branche publiée, GitHub lance Jekyll. Il lit le YAML et Markdown, applique les layouts, génère HTML et assets puis publie ces fichiers avec Pages. Le workflow se suit dans Actions ; la durée réelle reste à relever.

**2. Que contrôler après un ajout ?** La carte, le compteur, la page, les images et la nouvelle colonne de compétences. Une coche verte ne valide pas le contenu : une erreur YAML ou un code inconnu peut produire un résultat incomplet sans bloquer la publication.

**3. Mentions et captures de stage ?** Identifier l’éditeur et l’hébergeur, décrire le traitement réel des données et les licences. Avant diffusion, retirer secrets, IP internes et données de tiers, et obtenir l’accord de l’entreprise pour les captures de stage.

**4. Compétence encore non prouvée et prochain projet ?** Le tableau n’associe aucun projet à c1, c2, c4 et c5 ; les preuves publiques de c3/c6 restent à compléter. Je choisirai avec mon formateur un vrai TP pour l’une de ces compétences. Aucun TP futur n’a encore été fourni : intitulé, objectif et preuve attendue à renseigner, sans annoncer une réalisation déjà faite.
