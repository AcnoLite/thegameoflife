# Audit rapide — outils du conseil

## Outils lancés

| Outil | Cible | Résultat | Correction |
|---|---|---|---|
| Lighthouse (Chrome DevTools) | 4 pages, perf + accessibilité | Performance 90+, accessibilité 100 | Aucune |
| WAVE (extension navigateur) | 4 pages | 0 erreur, 0 alerte de contraste | Aucune |
| axe DevTools | 4 pages | 0 violation critique ou sérieuse | Aucune |
| HeadingsMap (extension) | 4 pages | Hiérarchie H1 → H2 correcte, sans saut | Aucune |
| GreenIT Analysis (extension) | Page d'accueil | Score correct, images vectorielles (SVG) privilégiées | Vidéo compressée en H.264 CRF 30 |

## Contrôles manuels complémentaires

- Validation W3C HTML : 0 erreur sur les 4 pages.
- Validation W3C CSS : 0 erreur sur la feuille principale.
- Métadonnées EXIF des médias retirées (`ffmpeg` ne produit pas d'EXIF).
- Vidéo de démonstration : 45 s (< 2 min), sous-titres WebVTT français synchronisés.
