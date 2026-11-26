# Écoconception

- Site statique : aucun framework, aucune librairie JavaScript lourde.
- Polices chargées avec `preconnect` et une seule requête Google Fonts.
- Une seule feuille de style chargée par page en HTML (`css/styles.css`) ; le thème alternatif est ajouté/retiré dynamiquement par `js/theme.js`, sans requête double.
- Vidéo de démonstration en `preload="none"` avec poster WebP : aucun octet vidéo n'est téléchargé avant la lecture.
- `css/styles.min.css` est la version minifiée de la feuille de base, à utiliser à la place de `css/styles.css` en production.
- Peu de requêtes réseau et aucun service externe superflu.
