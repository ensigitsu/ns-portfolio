# Atelier Portfolio — réponses Q1 à Q7

Mise à jour du 15 octobre 2026, à partir des PDF de l’atelier et des informations réellement fournies. La réponse Q3 correspond au TP Web publié et vérifié le 15 octobre 2026. Q6 nécessite encore une mesure réelle dans le navigateur de l’étudiant.

## Q1 — Adresse publique

L’adresse publique de mon portfolio est : https://ensigitsu.github.io/ns-portfolio/.

## Q2 — Durée et croix rouge

La publication de l’étape 3 a duré 49 secondes. Si elle se termine par une croix rouge, la nouvelle version n’est pas publiée. Les visiteurs continuent à voir la dernière version publiée avec succès. Il faut consulter le journal dans Actions, corriger le problème et relancer la publication.

## Q3 — Premier projet ajouté et compétence justifiée

Le fichier de mon premier projet ajouté est `_projets/2026-10-decouverte-web.md`. Il s’intitule « Découverte du Web : une page interactive » et utilise le code `c6` : « Organiser son développement professionnel ».

La phrase de la page qui le justifie est : « J’ai documenté ce TP dans mon portfolio pour suivre mes acquis en HTML, CSS et JavaScript et identifier les points à approfondir pendant ma formation. »

Cette fiche rassemble mon exercice, ses sources et les points à travailler. La date du 15 octobre est celle de sa documentation ; la date du TP en cours est à confirmer dans la fiche.

## Q4 — Pourquoi la coche verte ne suffit pas

La coche verte indique que la publication s’est terminée sans erreur bloquante ; elle ne garantit pas que le contenu est juste. Une carte peut être vide à cause du YAML, une image peut avoir un mauvais chemin et un code de compétence peut être mal écrit.

Après chaque publication, j’ouvre le site et je vérifie le titre et le résumé de la nouvelle carte, le compteur augmenté de un, la page complète avec ses cinq parties, les images et les liens. Je contrôle aussi la nouvelle colonne du tableau et ses compétences. En cas d’anomalie, je consulte les journaux du job build dans Actions.

## Q5 — Éditeur, hébergeur et capture de stage

Mes mentions légales doivent identifier l’éditeur du site, c’est-à-dire moi, Nathan S., et l’hébergeur, GitHub, Inc., qui fournit GitHub Pages.

Avant de publier une capture de stage, je masque par exemple un mot de passe pour éviter de donner accès à un compte ou au système de l’entreprise. Je vérifie aussi les autres informations confidentielles et l’autorisation de l’entreprise.

## Q6 — Accessibilité Lighthouse

Ma note d’accessibilité Lighthouse est de [NOTE RÉELLE À RENSEIGNER] / 100.

Si ma note est inférieure à 100 : « Le point signalé par l’outil est : [RECOPIER UN POINT RÉEL DU RAPPORT]. »

Si ma note est de 100 : « Une nouvelle image informative sans attribut alt pourrait faire baisser la note, car les personnes qui utilisent un lecteur d’écran ne disposeraient pas de son texte alternatif. »

Choisir seulement la phrase correspondant au résultat obtenu. Pour mesurer : ouvrir le site dans Chrome ou Edge sur ordinateur, appuyer sur F12, ouvrir Lighthouse, sélectionner Accessibility et lancer l’analyse. Ne pas recopier 100 sans l’avoir mesuré.

## Q7 — Étapes pour ajouter mon prochain TP

1. Dans GitHub, onglet Code, j’ouvre `_projets`, puis `_A-COPIER.md`, et je copie son contenu avec Copy raw file.
2. Toujours dans `_projets`, je choisis Add file puis Create new file. Je donne un nom comme `2026-11-sujet-du-tp.md`, sans espace ni accent et sans tiret bas au début.
3. Dans l’éditeur GitHub, je colle le modèle. Je renseigne le titre, la date réelle, le contexte, le résumé et les codes de compétences prouvés. Je conserve les deux lignes `---` et les guillemets autour des textes.
4. Dans ce même fichier, je rédige les cinq parties : Contexte, Conditions et moyens, Description de l’activité, Productions et preuves, Ce que j’en retiens. Je décris uniquement les opérations et les résultats réels.
5. Pour les captures, je les relis et masque les informations confidentielles. Dans Code, j’ouvre images, puis Add file et Upload files. Je reporte le chemin exact et une description dans la fiche du projet.
6. Je clique sur Commit changes avec un message précis. Dans Actions, j’ouvre la publication, j’attends sa fin et je vérifie que build et deploy réussissent.
7. Dans Settings, puis Pages, j’ouvre Visit site. Je recharge le site et je vérifie la nouvelle carte, le compteur augmenté de un, la page du projet, ses images et ses liens.
8. Sur l’accueil du site, je contrôle la nouvelle colonne du tableau des compétences et je clique sur ses associations pour vérifier qu’elles mènent aux bonnes preuves. Je vérifie aussi l’affichage sur téléphone.

## Avant de rendre

- Publier les dernières corrections, attendre Actions et vérifier les pages publiques.
- Confirmer la date exacte du TP et relire sa fiche avec ses propres mots.
- Renseigner le contact public attendu par l’atelier dans `_config.yml` si nécessaire.
- Mesurer Lighthouse pour terminer Q6 et lancer le validateur W3C sur l’URL publique.
- Joindre les captures réelles demandées : accueil avec compteur et matrice, mentions, W3C, Lighthouse et Actions.
- Personnaliser la fiche E5 : nom, lieu, matériel, vécu et preuves.
