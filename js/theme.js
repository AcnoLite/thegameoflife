/* Toggles the stylesheet between the default and the alternative theme. */

(function () {
  'use strict';

  const bouton = document.getElementById('theme-toggle');
  const feuille = document.getElementById('theme-stylesheet');
  if (!bouton || !feuille) return;

  bouton.addEventListener('click', function () {
    const alt = feuille.getAttribute('href') === 'css/styles.css'
      ? 'css/styles-alt.css'
      : 'css/styles.css';
    feuille.setAttribute('href', alt);
    bouton.textContent = alt === 'css/styles-alt.css' ? 'Style clair' : 'Style sombre';
    bouton.setAttribute('aria-pressed', alt === 'css/styles-alt.css' ? 'true' : 'false');
  });
})();
