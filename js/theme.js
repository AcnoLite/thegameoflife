/*
 * Thème clair/sombre : bascule data-theme sur <html>, mémorisé en localStorage.
 * Le bouton #theme-toggle est présent dans la nav de chaque page.
 */

(function () {
  'use strict';

  const CLE = 'theme';
  const bouton = document.getElementById('theme-toggle');
  if (!bouton) return;

  function appliquer(theme) {
    document.documentElement.dataset.theme = theme;
    bouton.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
    bouton.textContent = theme === 'dark' ? 'Style clair' : 'Style sombre';
  }

  const sauvegarde = localStorage.getItem(CLE);
  const prefereSombre = window.matchMedia('(prefers-color-scheme: dark)').matches;
  appliquer(sauvegarde || (prefereSombre ? 'dark' : 'light'));

  bouton.addEventListener('click', function () {
    const actuel = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
    const suivant = actuel === 'dark' ? 'light' : 'dark';
    appliquer(suivant);
    localStorage.setItem(CLE, suivant);
  });
})();
