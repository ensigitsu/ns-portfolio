# Audit du TP portfolio — 12 octobre 2026

Le projet est préparé pour Jekyll, mais le rendu pédagogique n’est pas encore terminé. Cet audit compare les sources aux treize pages du livret Atelier Portfolio et aux trois pages de la fiche E5 jointes. Aucune note officielle ni preuve publique ne sont inventées.

## Ce qui est présent et vérifié

- Collection `_projets`, tri chronologique, `future: true`, modèle `_A-COPIER.md` non publié.
- Page, carte, compteur et matrice générés automatiquement ; essais modernes et anciens réalisés dans une copie isolée.
- Les six libellés officiels ; le seul projet réel prépare les associations c3 et c6, avec état de preuve incomplet explicite.
- Les cinq sections académiques dans le projet et le modèle.
- Sources complètes, notices de licences, mentions, interface bilingue et guides de publication/maintenance.
- Crédit « © 2026 - NS », vrai lien LinkedIn et aperçu local séparé des sources.
- Build Jekyll 3.10.0 avec safe/strict, ressources/ancres valides, HTML/CSS/SVG sans erreur Nu.
- Tests de logique FR/EN, menu, clavier, filtres, fallbacks et pause des animations dans DOM/WebGL simulés.

## Corrections faites pendant l’audit

Le champ du profil GitHub a été renommé `github_url` : `site.github` est le namespace des métadonnées de GitHub Pages. Sa simulation reproduisait un lien incorrect avec l’ancien champ. Le texte du projet a aussi été actualisé pour indiquer que LinkedIn est déjà configuré. Le ZIP contient ces corrections.

## État des questions

| Question | État | Action restant à réaliser |
| --- | --- | --- |
| Q1 | Manquante | Publier sur son GitHub et recopier la vraie URL depuis Settings → Pages. Le lien privé Sites ne remplace pas cette preuve. |
| Q2 | Incomplète | Relever la durée réelle de la publication de l’identité dans Actions, l’exécution et le commit. L’explication de l’échec est préparée. |
| Q3 | Manquante | Ajouter un nouveau TP/une mission réellement réalisé, autre que le portfolio fourni, et citer une phrase factuelle pour chaque code. |
| Q4 | Réponse préparée | Relire/personnaliser l’explication, examiner les journaux et vérifier carte, compteur, page, images et associations après publication. |
| Q5 | Incomplète | Finaliser identité/contact public attendus par le TP, garder GitHub comme hébergeur après publication et joindre la capture des mentions. |
| Q6 | Manquante | Mesurer Lighthouse Accessibility sur l’URL publique et recopier un point signalé, ou expliquer une erreur possible si le score est 100. |
| Q7 | Réponse préparée | Relire la routine, la réaliser sur un nouveau projet et savoir l’expliquer avec les écrans concernés. |

## Priorités avant de rendre

1. Envoyer uniquement le contenu de `portfolio` à la racine du dépôt public `portfolio` ; configurer Pages sur main / (root), renseigner url et le profil GitHub réel. Ne pas ajouter .nojekyll.
2. Compléter l’identité et le contact public dans `_config.yml` et les mentions. Le nom affiché est encore Nathan S., l’e-mail et l’URL GitHub personnelle sont vides. Aucun nom civil ou e-mail n’a été deviné.
3. Compléter le profil avec des compétences déjà pratiquées et la recherche réelle de stage/alternance, si c’est l’objectif. Le texte actuel présente surtout les centres d’intérêt et le métier visé.
4. Ajouter un second projet authentique pour Q3 et justifier les codes, sans inventer un TP ni cocher les six compétences.
5. Ajouter les preuves réelles : URL, accueil avec compteur et matrice, mentions lisibles, W3C, Lighthouse, Actions et historique des commits. Le dossier images ne contient pour l’instant que les instructions. L’illustration du projet n’est pas une capture.
6. Terminer le projet du portfolio et la fiche E5 au passé avec les opérations réellement faites, le matériel, le lieu/date et une difficulté vécue. Garder l’assistance IA décrite honnêtement et être capable d’expliquer le code.
7. Tester le site publié sur un téléphone, au clavier, avec réduction des mouvements et dans un navigateur réel. La note Lighthouse et les performances réelles n’ont pas été mesurées ici.

Les lignes c1, c2, c4 et c5 vides ne sont pas une faute pour cet atelier : elles doivent être prouvées au fil des réalisations. L’objectif de couverture avant l’E5 ne signifie pas qu’il faut inventer des coches aujourd’hui. Avatar, CAPTCHA, domaine payant et CV PDF ne sont pas exigés par ce livret.

## Points à surveiller

- Si le dépôt provient du modèle du professeur, supprimer son ancien mentions-legales.md avant d’importer legal.md pour éviter deux fichiers à la même URL.
- Le blocage de copie gêne certains usages et ne protège pas les contenus publics. Pour un rendu scolaire, une interface sans ce blocage serait plus pratique pour le professeur ; il reste en place selon la demande de Nathan.
- Les règles robots du dépôt projet ne s’appliquent pas à la racine du domaine sans configuration supplémentaire. Cela ne bloque pas l’accès direct ni la notation du TP.
- Le générateur d’aperçu ne nettoie pas les anciennes pages après suppression d’un projet : reconstruire dans un dossier d’aperçu vide dans ce cas. C’est une limite de l’aperçu local, pas du rendu Jekyll.

## Estimation de note

Sans barème fourni, l’estimation reste indicative : environ **12/20 si rendu maintenant**, car l’adresse GitHub, Q3, les mesures et les captures demandées manquent. Après publication, correction des contrôles publics, ajout du vrai projet, preuves et réponses personnelles, **17–18/20 est une cible plausible**. Le professeur peut pondérer autrement et l’oral dépend de la maîtrise personnelle. Les effets graphiques ne remplacent aucune preuve demandée.
