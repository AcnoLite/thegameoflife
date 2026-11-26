/* Scrolls back to the top of the page. */

(function () {
  'use strict';

  const lien = document.getElementById('back-to-top');
  if (!lien) return;

  lien.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo(0, 0);
  });
})();
