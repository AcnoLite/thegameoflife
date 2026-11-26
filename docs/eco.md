# Écoconception — The Game of Life

Choix déjà en place pour limiter l'empreinte du site :

- Polices Google Fonts chargées en `preconnect` avec `display=swap`, deux familles uniquement.
- Aucun framework, aucune librairie JS externe au projet : le moteur du jeu est un fichier local unique.
- Pas de tracking, pas de cookie, pas de requête analytics.
- Feuille de style minifiée fournie (`css/styles.min.css`) pour réduire la taille transférée.
- Vidéo de démonstration légère (< 2 min) avec chargement différé (`preload="metadata"`) et sous-titres.
- Favicon SVG vectoriel (quelques octets) au lieu d'un PNG.
- Site statique servi tel quel, sans base de données ni traitement serveur.
