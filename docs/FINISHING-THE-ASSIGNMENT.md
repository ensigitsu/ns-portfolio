# Terminer le devoir

Le portfolio et le TP Web sont déjà publiés. Les PDF de consignes et les sources ont été relus. Les réponses connues sont dans `TP-CHECKLIST.md` et le brouillon E5 dans `E5-REALISATION.md`.

## 1. Informations à transmettre dans la conversation

Copiez cette liste et remplissez-la avec votre situation réelle. Si vous ne connaissez pas encore un élément, dites-le.

- Nom et prénom complets pour le PDF :
- Nom souhaité sur le site public : Nathan S. ou autre :
- E-mail que vous acceptez de publier : adresse d'école ou de candidature :
- Date de la séance portfolio :
- Date réelle du TP de découverte du Web :
- Établissement et lieu de travail : en classe ou à domicile, ville si utile ; aucune adresse personnelle :
- Matériel et logiciels réellement utilisés : ordinateur, système, navigateur, éditeur éventuel :
- TP réalisé seul ou en binôme, et ce que vous avez fait personnellement :
- Deux ou trois compétences déjà pratiquées, avec un exemple concret pour chacune :
- Recherche actuelle : stage, alternance ou pas encore ; période si connue :
- Difficulté réelle du TP Web et manière de la résoudre, s'il y en a une :
- Prochain TP déjà prévu, si vous le connaissez :

La difficulté du portfolio est déjà connue : les ressources pointaient vers `/portfolio` alors que le dépôt s'appelle `ns-portfolio`. Le correctif `baseurl: /ns-portfolio` a rétabli l'affichage. Le LinkedIn et les 49 secondes sont déjà connus aussi.

Ces informations serviront à personnaliser le profil, les deux fiches et le PDF E5. Précisez séparément le nom destiné au PDF et celui souhaité sur le site public.

## 2. Deux vérifications à faire sur vos appareils

Faites-les après publication de la version contenant vos informations pour conserver des preuves du résultat final.

### Lighthouse sur ordinateur

1. Ouvrez https://ensigitsu.github.io/ns-portfolio/ dans Chrome ou Edge.
2. Appuyez sur F12, ou Ctrl + Maj + I. Si nécessaire, cherchez l'onglet Lighthouse dans le menu de débordement des outils.
3. Sélectionnez Accessibility / Accessibilité et lancez Analyze page load / Analyser le chargement de la page.
4. Envoyez une capture montrant la note, l'adresse analysée et le nom Lighthouse. Indiquez aussi la date du test.
5. Si la note est inférieure à 100, développez un point signalé par l'outil et envoyez sa capture ou son texte exact.

Le score réel permettra de terminer Q6. Une validation HTML locale ne remplace pas ce résultat.

### Affichage sur téléphone

1. Ouvrez le site dans votre vrai navigateur de téléphone.
2. Ouvrez le menu, allez dans Projets et vérifiez les deux cartes et le compteur 02.
3. Envoyez une capture de cette section, avec l'adresse visible si possible.
4. Dans Compétences, vérifiez que le tableau défile dans son cadre sans faire déborder toute la page. Dites si vous observez un problème ; envoyez une capture supplémentaire seulement s'il y en a un.
5. Ouvrez la démonstration du TP Web et essayez un prénom, cinq clics, puis Remettre à zéro. Signalez seulement un éventuel problème.

## 3. Captures publiques à collecter après publication

L'assistant peut réaliser ces captures à partir des pages publiques finales. Il n'est pas nécessaire de toutes les refaire de votre côté.

- Accueil, compteur 02 et matrice des compétences.
- Page légale avec l'identité publique et l'hébergeur.
- Exécution Actions réussie de 49 secondes et historique des modifications.
- Démonstration Web et page du projet.
- Résultat du validateur W3C sur l'adresse publique.

Si un résultat public ne peut pas être récupéré depuis l'environnement de travail, la demande sera limitée à cette capture précise. N'utilisez pas une illustration SVG à la place d'une capture de preuve.

## 4. Appliquer la petite mise à jour

1. Extrayez `correctifs-portfolio.zip`.
2. Ouvrez le dossier `a-envoyer`.
3. Dans https://github.com/ensigitsu/ns-portfolio, ouvrez **Code → Add file → Upload files**.
4. Glissez les fichiers et dossiers qui se trouvent dans `a-envoyer`, en conservant les dossiers eux-mêmes. Ne glissez pas le ZIP ni le dossier parent `a-envoyer`.
5. Vérifiez les chemins, puis **Commit changes** sur `main`.
6. Attendez la réussite dans **Actions**, puis actualisez le site.

Le fichier `_config.yml` n'est pas remplacé par cette petite mise à jour. Aucun fichier existant n'est à supprimer.

Dans **Code → About → roue dentée**, cochez aussi **Use your GitHub Pages website**, puis **Save changes**.

## 5. Finaliser le rendu

Après réception des informations et des vrais résultats, intégrer les preuves dans les fiches, compléter Q6, personnaliser le PDF E5, puis relire le rendu. Le rendu de l'atelier comporte l'adresse publique, les réponses Q1 à Q7 et le premier projet ajouté publié. Ne pas envoyer au professeur le PDF modèle encore vide.

Les associations actuelles sont c3/c6 pour le portfolio et c6 pour le TP Web. Les autres lignes seront complétées plus tard avec de vrais travaux justifiés.
