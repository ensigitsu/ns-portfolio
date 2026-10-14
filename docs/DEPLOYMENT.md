# Publication et dépannage GitHub Pages

## Extraction et envoi exacts

Décompressez le ZIP et entrez dans le dossier `portfolio`. Vous devez voir `_config.yml`, `index.html`, `Gemfile`, `_data`, `_includes`, `_layouts`, `_projets`, `assets` et `docs`.

Dans GitHub : modèle de classe → **Use this template → Create a new repository**, ou **New repository**. Nom `portfolio`, **Public**, branche `main`. Dans **Code → Add file → Upload files**, glissez les fichiers et dossiers qui se trouvent **à l’intérieur** du dossier extrait. Validez avec **Commit changes**. Les fichiers essentiels commencent parfois par `_` : ne les oubliez pas. Le fichier `.gitignore` est fourni pour les utilisateurs de Git, mais n’est pas nécessaire à la construction sur GitHub.

Vérifiez la racine : `_config.yml` et `index.html` ne doivent pas être dans `portfolio/portfolio/`. Si GitHub refuse de remplacer un fichier existant via upload, ouvrez-le avec le crayon et remplacez son contenu, ou utilisez GitHub Desktop : **File → Clone repository**, copiez les sources dans le dossier cloné, puis **Commit to main → Push origin**. Conservez le dossier `.git` créé par Desktop, qui n’appartient pas au ZIP.

## Configuration de l’identité

Éditez `_config.yml` avec **Edit this file**. Renseignez la vraie origine dans `url`, sans `/portfolio`, et gardez `baseurl: "/portfolio"`. Complétez les profils si vous les connaissez. Ajoutez les données publiques nécessaires dans les mentions ; les champs non fournis sont clairement signalés. **Commit changes** avec un message précis.

## Activation et contrôle

**Settings → Pages → Build and deployment** : `Deploy from a branch`, `main`, `/ (root)`, **Save**. Le moteur Jekyll natif de GitHub Pages transforme les sources. Aucun plugin personnalisé, build JavaScript ni service payant.

Dans **Actions**, ouvrez `pages build and deployment` ; lisez les étapes `build` puis `deploy`. Relevez la durée réelle de l’exécution réussie. Une erreur de build ne remplace pas la version précédemment publiée. En cas de problème de déploiement, vérifiez aussi la version qui est effectivement accessible.

Dans **Settings → Pages**, recopiez **Your site is live at**. Ouvrez **Visit site**. N’inscrivez pas cette URL comme preuve avant de l’avoir chargée avec succès. Dans **Code → About → roue dentée**, cochez **Use your GitHub Pages website** pour l’afficher en tête du dépôt.

## Contrôles du site public

- Contrôlez une carte, le compteur, le contenu complet, les images, les six lignes et chaque lien du tableau. Comparez les codes du front matter.
- Testez FR/EN et rechargez : `html lang` doit suivre la langue ; les compétences officielles restent en français.
- Clavier : Tab, Entrée, Espace ; sur mobile, ouvrez le menu puis fermez-le avec Échap. Le lien d’évitement doit atteindre le contenu.
- Sur téléphone, aucune barre horizontale pour la page ; seule la matrice peut défiler dans son cadre. Vérifiez les tailles de boutons.
- Activez « Réduire les animations » dans le système : les reflets doivent être statiques, les révélations immédiates et le curseur décoratif absent. Le bouton pause doit arrêter le rendu en mode normal.
- Dans les outils développeur, bloquez les shaders `ocean.vert.glsl` / `ocean.frag.glsl`, puis rechargez : le SVG conserve un fond de reflets statiques, les projets restent accessibles. Avec JavaScript désactivé, le site reste en français et la navigation demeure visible.
- **W3C** : https://validator.w3.org/nu/ → **Address** → URL publique → **Check**. Corrigez les erreurs, recommencez et capturez le résultat réel.
- **Lighthouse** : Chrome/Edge, F12 → **Lighthouse** → **Accessibility** → **Analyze page load**. Notez URL, date, appareil et note réelle. Vérifiez aussi la page projet et les mentions. Une note de 100 est un objectif, pas une garantie universelle d’accessibilité.
- Consignez console JavaScript, chargement des ressources et performances dans `TEST-REPORT.md`. Capturez les preuves après avoir masqué tout secret.

## Pannes fréquentes

| Symptôme | Vérification |
| --- | --- |
| 404 partout | Dépôt `portfolio`, branche `main`, dossier racine, dépôt public, activation Pages et workflow terminé |
| HTML brut ou balises Liquid visibles | Ne pas ouvrir les sources par `file://`, ne pas ajouter `.nojekyll`, attendre le build Jekyll |
| CSS ou WebGL absent | `baseurl` vaut `/portfolio`, `url` n’inclut pas le sous-dossier ; chemins et casse exacts |
| Carte vide avec workflow vert | Guillemets YAML, les deux lignes `---`, titre et résumé remplis ; lire les avertissements du job `build` |
| Compétence absente | Codes stricts `c1` à `c6`, pas `C3` ni `c 3` |
| Nouveau projet absent | Fichier dans `_projets`, extension `.md`, nom sans `_` initial ; `future: true` conservé |
| Image cassée | Même nom et casse dans l’upload et le Markdown ; `relative_url` ; fichier réellement présent |
| Ancienne version | Ctrl+F5, cache vidé, dernier workflow vert et bonne URL |
| Importmap non pris en charge | Navigateur récent ; l’avatar est optionnel, le contenu et le hero utilisent des imports relatifs |

## Mises à jour

Chaque **Commit changes** sur `main` déclenche une nouvelle génération. Ajoutez les projets via Markdown, attendez Actions et vérifiez le résultat public. Pour revenir à une version antérieure, utilisez l’historique Git ou annulez le commit fautif avec GitHub Desktop. Ne remplacez pas les sources par les fichiers de `_site`.

Sources officielles à consulter pour les libellés pouvant évoluer : https://docs.github.com/en/pages/quickstart et https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site .

## Consignes aux robots
Chaque page porte `noindex` ; le portfolio est donc volontairement moins visible dans les moteurs. Le `robots.txt` de ce ZIP est généré dans le sous-chemin du projet : pour qu’un robot l’applique, publiez aussi les directives à `https://VOTRE_PSEUDO.github.io/robots.txt` via le dépôt utilisateur racine. Suivez `CONTENT-PROTECTION.md` ; ne supposez pas que `/portfolio/robots.txt` bloque le domaine. Aucun CAPTCHA applicatif n’est imposé à GitHub Pages.

Après le nettoyage, la page légale se trouve dans `legal.md`, mais son URL `/mentions-legales/` reste la même. Si vous repartez du modèle du professeur, retirez son ancien `mentions-legales.md` avant d’envoyer les sources pour éviter deux pages à la même URL. Les champs modernes `context`, `summary` et `competencies` remplacent les champs du modèle dans le nouveau fichier à copier ; les anciens restent acceptés. Voir EDITING.md et ADDING-PROJECTS.md.

## Ouvrir le ZIP sur votre ordinateur

Extrayez toute l’archive, puis ouvrez OPEN-ME.html à côté du dossier portfolio. Il ouvre local-preview/index.html, une version déjà compilée. Les fichiers HTML dans portfolio sont les sources Jekyll : un double-clic affiche leur en-tête et leurs instructions Liquid, ce qui est normal. Modifiez ces sources, puis envoyez uniquement le contenu de portfolio sur GitHub. La prévisualisation locale reste sur votre ordinateur. Voir LOCAL-PREVIEW.md pour la reconstruire après modification.
