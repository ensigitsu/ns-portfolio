# Atelier Portfolio - réponses Q1 à Q7

Réponses actualisées le 15 octobre 2026 à partir des informations et captures fournies et des contrôles du site public.

## Q1 - Adresse publique

L’adresse publique de mon portfolio est : https://ensigitsu.github.io/ns-portfolio/.

## Q2 - Durée et croix rouge

La publication relevée pour cette étape a duré **49 secondes**. Si elle se termine par une croix rouge, la nouvelle version n’est pas publiée. Les visiteurs continuent à voir la dernière version publiée avec succès. Je consulte le journal dans Actions, corrige le problème et relance la publication.

## Q3 - Premier projet ajouté et compétence justifiée

Le fichier ajouté est `_projets/2026-10-decouverte-web.md`. Il s’intitule « Découverte du Web : une page interactive » et utilise le code **c6 - Organiser son développement professionnel**.

La phrase qui justifie ce code est : « J’ai documenté ce TP dans mon portfolio pour suivre mes acquis en HTML, CSS et JavaScript et identifier les points à approfondir pendant ma formation. »

Le TP a été réalisé le 12 octobre 2026 et documenté le 15 octobre. Sa page, ses sources et sa démonstration sont publiées.

## Q4 - Pourquoi la coche verte ne suffit pas

La coche verte indique que la publication s’est terminée sans erreur bloquante ; elle ne garantit pas que le contenu est correct. Une erreur dans le YAML peut laisser une carte vide, une image peut pointer vers un mauvais chemin et un code de compétence peut être mal écrit.

Après chaque ajout, j’ouvre le site et je contrôle le titre et le résumé de la carte, le compteur augmenté de un, la page et ses cinq parties, les images et les liens. Je vérifie aussi la nouvelle colonne du tableau et ses associations. En cas d’anomalie, je lis les journaux du job build dans Actions.

## Q5 - Éditeur, hébergeur et capture de stage

L’éditeur du site est moi, présenté publiquement sous le prénom **Nathan**. L’hébergeur est **GitHub, Inc.**, qui fournit GitHub Pages. Le contact public indiqué est nathan-s.jet230@passinbox.com.

Avant de publier une capture de stage, je masque par exemple un mot de passe afin d’éviter de donner accès à un compte ou au système de l’entreprise. Je retire aussi les données confidentielles ou celles de tiers et je vérifie l’autorisation de l’entreprise.

## Q6 - Accessibilité Lighthouse

Ma note d’accessibilité Lighthouse est de **100/100**, sur le rapport fourni le **15 octobre 2026** pour https://ensigitsu.github.io/ns-portfolio/#home.

Lors de l’ajout d’une image informative, oublier son attribut `alt` pourrait faire baisser la note : les personnes qui utilisent un lecteur d’écran ne disposeraient pas de son texte alternatif.

La capture réelle est jointe aux preuves. Le contrôle W3C du même jour ne signale aucune erreur ni avertissement. Ces résultats concernent la version analysée ; je revérifie après les mises à jour.

## Q7 - Étapes pour ajouter mon prochain TP

1. Dans **GitHub → Code → _projets → _A-COPIER.md**, je copie le contenu avec **Copy raw file**.
2. Dans **_projets → Add file → Create new file**, je crée par exemple `2026-11-sujet-du-tp.md`, sans espace ni accent et sans tiret bas au début.
3. Dans l’éditeur, je colle le modèle et renseigne le titre, la date réelle, le contexte, le résumé et les compétences prouvées. Je conserve les lignes `---` et les guillemets YAML.
4. Dans le même fichier, je décris les cinq parties : contexte, conditions et moyens, activité, productions et preuves, apprentissages.
5. Dans **Code → images → Add file → Upload files**, j’ajoute les captures autorisées, après avoir retiré les informations confidentielles. Je renseigne leur chemin et leur description dans la fiche.
6. Je clique sur **Commit changes** avec un message précis. Dans **Actions**, j’attends la fin de build et deploy et je vérifie leur réussite.
7. Dans **Settings → Pages → Visit site**, je recharge le site et contrôle la carte, le compteur, la page, les images et les liens.
8. Sur **l’accueil → Compétences**, je vérifie la nouvelle colonne et ses associations, puis je teste l’affichage sur téléphone.

## Dernier contrôle avant le rendu

Publier les fichiers personnalisés, attendre Actions, vérifier Nathan et le contact, les dates, les deux projets, les captures et la matrice. Relire le PDF séparé avant de le transmettre au professeur. Le nom civil complet reste dans ce PDF, hors du dépôt public.
