/* Toggles the alternative theme by adding/removing its stylesheet on top of the base one. */

(function () {
  'use strict';

  const bouton = document.getElementById('theme-toggle');
  if (!bouton) return;

  let feuilleAlt = null;

  bouton.addEventListener('click', function () {
    if (feuilleAlt) {
      feuilleAlt.remove();
      feuilleAlt = null;
      bouton.textContent = 'Changer de style';
      bouton.setAttribute('aria-pressed', 'false');
    } else {
      feuilleAlt = document.createElement('link');
      feuilleAlt.id = 'theme-stylesheet';
      feuilleAlt.rel = 'stylesheet';
      feuilleAlt.href = 'css/styles-alt.css';
      document.head.appendChild(feuilleAlt);
      bouton.textContent = 'Style clair';
      bouton.setAttribute('aria-pressed', 'true');
    }
  });
})();
