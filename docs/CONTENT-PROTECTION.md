# Limitation de la copie et consignes aux robots

## Ce que la version actuelle fait

- Sélection de texte et menu tactile désactivés par CSS sur les contenus.
- Événements copier, couper, coller, clic droit, sélection et glisser-déposer annulés par JavaScript hors champs éditables.
- Raccourcis Ctrl/Cmd+A/C/X/V interceptés dans la page, hors champs éditables. Les liens, la navigation clavier, la recherche dans le navigateur, le zoom et les boutons restent utilisables.
- Images non glissables.
- Chaque page contient `robots: noindex, nofollow, nosnippet, noimageindex` pour demander de ne pas indexer ni produire d’extraits.
- `robots.txt` demande aux robots respectueux des règles de ne pas parcourir `/portfolio/`.
- Aucune empreinte du navigateur, liste noire de visiteurs, collecte d’IP dans l’application, requête à un CAPTCHA ou cookie supplémentaire.

Ces mesures découragent la copie manuelle et les robots qui suivent les consignes. Elles ne rendent pas les informations confidentielles : désactivation du JavaScript, accès direct au HTML, lecture du dépôt public, captures d’écran ou robots qui ignorent les règles restent possibles. Le contenu reste lisible avec un lecteur d’écran. Ne jamais publier un secret ou une donnée privée en supposant que ce blocage le protège.

## robots.txt sur GitHub Pages : le point indispensable

Les robots lisent **`https://VOTRE_PSEUDO.github.io/robots.txt`**, à la racine de l’origine. Ils ne considèrent pas `https://VOTRE_PSEUDO.github.io/portfolio/robots.txt` comme le fichier de politique du domaine.

Le ZIP fournit un `robots.txt` Jekyll qui génère ces directives :

```text
User-agent: *
Disallow: /portfolio/
```

Pour les activer sur un site projet GitHub Pages :

1. Créez ou ouvrez le dépôt utilisateur **`VOTRE_PSEUDO.github.io`**. Remplacez le pseudo par votre vrai nom d’utilisateur.
2. Ajoutez à la racine un fichier `robots.txt` contenant les deux lignes ci-dessus, **sans l’en-tête YAML**. Si ce dépôt héberge déjà un site, fusionnez les directives existantes ; ne les remplacez pas aveuglément.
3. Activez Pages sur ce dépôt racine si nécessaire. Vérifiez que `https://VOTRE_PSEUDO.github.io/robots.txt` sert le texte exact, puis conservez le portfolio dans son dépôt `portfolio`.
4. Ne publiez pas de règles qui bloquent les autres sites du compte sans l’avoir choisi. Ici, la règle vise seulement `/portfolio/`.

Le lien de consultation privé actuel dispose de son `robots.txt` à la racine, dans le déploiement Sites. Cette configuration racine ne peut pas être imposée par le seul dépôt projet `portfolio` sur GitHub Pages.

## Indexation et portée des directives

`noindex` est une consigne pour les moteurs qui la respectent. Un moteur doit pouvoir lire la page pour la connaître. Si `robots.txt` bloque déjà la lecture, une URL liée depuis ailleurs peut encore apparaître dans les résultats, sans extrait. Pour retirer un site déjà indexé, faites d’abord lire `noindex` au moteur ou utilisez ses outils de retrait avant de bloquer l’exploration. Ces fichiers ne remplacent jamais un contrôle d’accès.

Désactiver l’indexation réduit aussi la visibilité du portfolio pour les recruteurs qui le cherchent sur Google. Le lien direct reste utilisable.

## Pourquoi aucun CAPTCHA n’est ajouté

GitHub Pages sert des fichiers statiques et ne fournit pas de vérification applicative côté serveur. Un widget ou une question en JavaScript devant les mêmes fichiers publics serait contournable. Un service comme Turnstile demande de valider son jeton côté serveur, sans publier la clé secrète.

Un vrai contrôle d’accès ou un filtrage réseau nécessiterait une infrastructure complémentaire (authentification, proxy ou backend), qui sort de cette version GitHub Pages autonome. Aucun faux CAPTCHA ni clé secrète n’est livré. L’aperçu Sites reste privé avec son contrôle d’accès existant ; ce mécanisme ne se transfère pas au futur site public GitHub Pages.

## Licences

Les restrictions d’interface ne modifient pas les licences déjà indiquées pour le code, les contenus et les dépendances. Elles ne sont pas une protection juridique supplémentaire. Les informations personnelles sensibles et documents confidentiels doivent rester hors du dépôt et du site.

Sources officielles vérifiées le 12 octobre 2026 :
- https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
- https://developers.google.com/search/docs/crawling-indexing/robots/intro
- https://developers.google.com/search/docs/crawling-indexing/robots/create-robots-txt
- https://developers.cloudflare.com/turnstile/get-started/server-side-validation/
