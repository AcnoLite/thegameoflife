/*
 * Lien « Haut de page » : défilement doux vers le haut, sans animation
 * si l'utilisateur préfère réduire les mouvements.
 */

(function () {
  'use strict';

  const lien = document.getElementById('back-to-top');
  if (!lien) return;

  lien.addEventListener('click', function (e) {
    e.preventDefault();
    const reduit = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduit ? 'auto' : 'smooth' });
  });
})();
