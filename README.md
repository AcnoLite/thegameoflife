# The Game of Life

Projet IUT (département informatique — IUT d'Aix-Marseille) : un site statique en français consacré au **jeu de la vie de Conway**, avec un plateau interactif jouable directement dans le navigateur.

Site en ligne : <https://thegameoflife.alwaysdata.net/>

## Les pages

| Page | Contenu |
|---|---|
| `index.html` | Histoire du jeu de la vie (d'après Wikipédia, licence CC BY-SA 4.0) |
| `rules.html` | Les trois règles (B3/S23) et les familles de structures |
| `game.html` | Plateau interactif (canvas) : dessiner, démarrer, pas à pas, hasard, planeur, vitesse ; vidéo de démonstration embarquée avec sous-titres WebVTT |
| `feedback.html` | Formulaire d'avis envoyé par e-mail (`mailto:`) |

## Structure du dépôt

```
index.html / rules.html / game.html / feedback.html   4 pages statiques
css/          styles.css (source commentée), styles.min.css (production), styles-alt.css (thème clair)
js/           game-engine.js (moteur MIT), game.js, theme.js, feedback.js, top.js
assets/       favicon, og-image, vidéo de démo (MP4 + VTT + poster WebP)
docs/         maquette Figma, fiches oral/code, écoconception, audit
sitemap.xml / robots.txt                                 SEO
audit-scores/ captures et rapports Lighthouse, axe, WAVE, W3C
```

## Lancer en local

Site 100 % statique, aucun build : ouvrir `index.html` dans un navigateur, ou servir le dossier :

```bash
python3 -m http.server 8000
# puis http://localhost:8000
```

## Déploiement

Le site est hébergé sur alwaysdata (`~/www` sur le serveur).
Mise à jour après un push sur `main` :

```bash
ssh thegameoflife@ssh-thegameoflife.alwaysdata.net "cd ~/www && git pull"
```

## Techniques et crédits

- Aucune librairie lourde : HTML/CSS/JS vanilla, deux thèmes (sombre/clair) persistés en `localStorage`.
- Moteur du jeu : [conway-game-of-life-js](https://github.com/nomatteus/conway-game-of-life-js) de Matthew Ruten (2012), licence MIT — copié dans `js/game-engine.js`.
- Polices : Fraunces et Instrument Sans (Google Fonts, licence Open Font).
- Vidéo de démonstration générée avec le filtre `life` de FFmpeg, sous-titres WebVTT en français.
- Contenu des pages Histoire/Règles : Wikipédia, licence CC BY-SA 4.0.

## Qualité

- HTML et CSS validés W3C (0 erreur), métadonnées SEO/OG complètes, `sitemap.xml`.
- Accessibilité : audits Lighthouse (accessibilité 100), WAVE (0 erreur), axe DevTools (0 violation) — rapports dans `audit-scores/` et `docs/audit.md`.
- Écoconception : voir `docs/eco.md` (vidéo en `preload="none"`, CSS minifié, images vectorielles privilégiées).
