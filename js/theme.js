/* Persists the selected theme across pages by adding/removing the alt stylesheet. */

(function () {
  'use strict';

  const bouton = document.getElementById('theme-toggle');
  if (!bouton) return;

  const KEY = 'theme';
  let feuilleAlt = null;

  function appliquer(alt) {
    if (alt) {
      if (!feuilleAlt) {
        feuilleAlt = document.createElement('link');
        feuilleAlt.id = 'theme-stylesheet';
        feuilleAlt.rel = 'stylesheet';
        feuilleAlt.href = 'css/styles-alt.css';
        document.head.appendChild(feuilleAlt);
      }
      bouton.textContent = 'Style clair';
      bouton.setAttribute('aria-pressed', 'true');
    } else {
      if (feuilleAlt) {
        feuilleAlt.remove();
        feuilleAlt = null;
      }
      bouton.textContent = 'Changer de style';
      bouton.setAttribute('aria-pressed', 'false');
    }
  }

  appliquer(localStorage.getItem(KEY) === 'alt');

  bouton.addEventListener('click', function () {
    const alt = !feuilleAlt;
    appliquer(alt);
    localStorage.setItem(KEY, alt ? 'alt' : 'base');
  });
})();
