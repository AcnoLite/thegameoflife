# Écoconception

- Site statique : aucun framework, aucune librairie JavaScript lourde.
- Polices chargées avec `preconnect` et une seule requête Google Fonts.
- Images au format WebP et chargement différé (`loading="lazy"`) pour celles hors écran.
- CSS minifié dans `css/styles.min.css` pour la production.
- Peu de requêtes réseau et aucun service externe superflu.
