# Atelier Portfolio — Q1 à Q7

Brouillon du 12 octobre 2026. Sources pédagogiques : atelier 13 pages et fiche de réalisation 3 pages joints à la demande. Ne pas inventer les résultats encore absents.

## Q1 — Adresse publique

**À compléter après publication réussie et ouverture du site** : ____________________ . Copiez **Settings → Pages → Your site is live at**. Forme attendue : `https://VOTRE_PSEUDO.github.io/portfolio/` ; ceci est un modèle, pas une URL validée.

## Q2 — Durée et panne

Durée réelle de la publication de l’identité dans **Actions** : ____ secondes. Exécution / commit : ____ . Cette durée n’a pas encore été mesurée.

Si la construction échoue, la nouvelle version n’est pas publiée et les visiteurs conservent la dernière version publiée avec succès. Ouvrez le job en rouge et corrigez l’erreur avant le commit suivant.

## Q3 — Premier projet ajouté et justifications

Le seul projet fourni est `_projets/2026-10-mon-portfolio.md`, adaptation de la réalisation initiale du modèle, associée à `[c3, c6]`. Il **ne constitue pas un deuxième projet réel ajouté pendant l’exercice**. L’ajout demandé reste à effectuer avec un vrai TP ou une mission ; ne pas reprendre le projet fictif de sauvegarde de la démonstration.

Pour le portfolio : c3 prépare la présence en ligne mais sa preuve de publication est en attente. Pour c6, la page explique que cartes, compteur et colonnes sont générés depuis les mêmes fichiers Markdown et que `_A-COPIER.md` permet de poursuivre la documentation.

Premier nouveau projet réel : ______ . Fichier : ______ . Codes : ______ . Pour chaque code, recopiez la phrase factuelle du projet qui prouve l’action et son résultat : ______ .

## Q4 — Pourquoi la coche verte ne suffit pas

Elle indique que le workflow a terminé, pas que le contenu est correct. Un en-tête YAML ignoré peut laisser une carte vide, un code `C3` ne coche pas `c3`, un chemin d’image peut être faux alors que le site se construit.

Après publication : vérifier titre et résumé de la carte, compteur, page détaillée et ses cinq sections, images, liens, colonne de la matrice et les codes attendus. Lire les avertissements du job `build`. Garder `title: "Projet : détail"`, les deux délimiteurs `---`, les noms de fichiers sans `_` initial et `future: true`.

## Q5 — Éditeur, hébergeur et captures

Éditeur : Nathan S. (nom d’affichage fourni ; identité/contact public à finaliser). Hébergeur prévu : GitHub, Inc., via GitHub Pages. Les mentions identifient ces deux rôles et décrivent le stockage de la langue sur l’appareil.

Retirer notamment les mots de passe, clés, jetons, IP internes, noms et données de tiers : leur exposition peut compromettre le système et révéler des informations confidentielles. Une capture de stage nécessite l’autorisation de l’entreprise ; sinon produire une preuve dans un laboratoire autorisé.

## Q6 — Accessibilité Lighthouse

**Note publique réelle : ____ / 100. Non mesurée.** URL, date, navigateur et appareil : ____ . Point signalé : ____ . Lancez Chrome/Edge → F12 → Lighthouse → Accessibility → Analyze page load.

Si la note obtenue est 100, expliquer qu’une nouvelle image informative sans attribut `alt` peut faire échouer l’audit des textes alternatifs et abaisser la note. Ne pas transformer l’objectif 100 en résultat réel.

## Q7 — Routine d’ajout

1. **Code → `_projets` → `_A-COPIER.md` → Copy raw file**.
2. **`_projets` → Add file → Create new file**, nom `AAAA-MM-sujet.md`.
3. Coller puis remplir titre, date réelle, contexte, résumé et codes prouvés.
4. Rédiger les cinq sections avec les commandes et résultats effectifs.
5. **Code → images → Add file → Upload files**, captures autorisées, noms et casse exacts ; ajouter leurs descriptions et chemins `relative_url` au projet.
6. **Commit changes**, message précis ; **Actions**, attendre le workflow et lire ses journaux.
7. **Settings → Pages → Visit site**, recharger, contrôler carte, compteur +1 et page détaillée.
8. Sur l’accueil, vérifier la nouvelle colonne et chaque association du tableau, puis cliquer pour lire les preuves. Contrôler images, liens et mobile.

## Preuves à joindre

- [ ] URL réelle et ouverture devant le jury.
- [ ] Accueil avec compteur et matrice.
- [ ] Mentions légales avec nom et hébergeur.
- [ ] W3C : résultat réel sans erreur après corrections.
- [ ] Lighthouse : note et périmètre réels.
- [ ] Actions : workflow, commit et durée.
- [ ] Premier nouveau TP réel ajouté et compétences justifiées.
