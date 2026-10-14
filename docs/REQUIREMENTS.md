# Audit des exigences et décisions

Sources lues : atelier 13 pages, fiche E5 3 pages et cahier des charges joint. Modèle inspecté : dépôt du professeur, commit `e773b52bdc81e179c3a266cbbbf54b29dee2085d`, sans workflow `.github` à conserver. Collection, route, tri, `future: true`, modèle non publié et six libellés sont repris ; frontend et mentions adaptés.

| Exigence | Livraison | Vérification restante |
| --- | --- | --- |
| Une réalisation = Markdown, page, carte, compteur et colonne | Collection Jekyll et composants automatiques | Contrôler le site après upload |
| Six compétences officielles | Données du modèle conservées, table sémantique | Justifier les nouveaux codes au fil des TP |
| Premier portfolio, c3/c6 | Projet initial bilingue avec statut de preuves incomplet | Publier, joindre les captures et suivre les mises à jour |
| Cinq parties par projet | Projet initial et modèle | Personnaliser les faits de chaque nouveau projet |
| Deuxième projet réel pour Q3 | Aucun projet inventé | Fournir et documenter un vrai TP |
| Q1–Q7 | TP-CHECKLIST.md | URL, durée, nouveau projet et note réels |
| Fiche E5 au passé et oral | E5-REALISATION.md, brouillon explicite | Nom, lieu, publication et expérience personnelle |
| GitHub Pages main/racine | baseurl /portfolio, pas de plugin personnalisé | Configurer compte et Pages |
| Mentions, confidentialité et licences | Page bilingue et notices complètes | Finaliser identification publique et autorisations |
| Interface FR/EN et preuves fidèles | Données centralisées et projet traduit | Traduire les futures pages si désiré |
| Fond lumineux demandé dans la dernière révision | Sculpture Three.js uniquement dans le hero ; reflets aquatiques en fond, flou 1,5 px ; aucun objet flottant | QA visuelle dans le navigateur |
| Mobile, clavier et réduction des mouvements | CSS responsive, menu accessible, fallback et pause | Tests utilisateur et Lighthouse sur URL publique |
| Avatar futur désactivé | Point de montage et GLTFLoader local | Ajouter un modèle autorisé puis activer |
| Sources simples à modifier | Anglais dans les identifiants et champs modernes, commentaires propres retirés, sections HTML séparées, guides d’édition | Ajouter les futurs projets avec le modèle |
| Ouverture locale après extraction | OPEN-ME.html et aperçu compilé dans local-preview, séparés des sources | Vérifier le rendu sur le navigateur personnel |
| ZIP de sources complet | Projet dans portfolio/, sans cache ni build | Voir TEST-REPORT.md pour vérification de l’archive |

## Système visuel

Fond #050914, surfaces #101b2b, texte #f1f4f8, secondaire #a4b1c4, accent nacré #a9c3e5. Manrope variable auto-hébergée et monospace système. Espacement généreux, arrondis réservés à la navigation et aux composants interactifs. Grille maximale 1240 px. Typographie fluide, breakpoints 1100/800/390 px, composition mobile dédiée.

Le fond est un rendu WebGL plein écran, inspiré des caustiques de lumière au fond de l’eau. Deux réseaux de cellules déformées évoluent lentement, avec une teinte perle discrète et une illumination diffuse. Les shaders sont locaux ; flou CSS 1,5 px. Le fond est derrière le contenu, ne reçoit aucun événement de pointeur et ne contient aucun objet flottant. La pause, le mode de réduction des mouvements, l’arrêt dans un onglet masqué et le SVG de secours préservent l’accès au contenu. La sculpture nacrée d’origine reste dans le hero, avec sa géométrie et ses shaders initiaux. Elle ne quitte jamais son emplacement et suspend son rendu hors écran. La commande de pause est partagée avec le fond aquatique.

Le curseur natif reste visible. Le cercle décoratif ne reçoit pas les événements et ne gêne ni clic ni sélection. Les boutons ont un déplacement magnétique limité. Aucun défilement détourné. Révélations déclenchées une fois, contenu toujours disponible sans JavaScript.

À la demande de l’utilisateur : sélection/copie et clic droit découragés, noindex ajouté sur les pages, consignes robots fournies avec leur routage racine GitHub Pages. Ces mesures ne rendent pas un dépôt ou un HTML public confidentiel ; CAPTCHA omis faute de validation serveur dans la cible statique.
