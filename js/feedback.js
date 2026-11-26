/*
 * Formulaire d'avis : ouvre le client e-mail de l'utilisateur avec le
 * message pré-rempli (mailto:). La validation est faite nativement par
 * les attributs HTML (required, pattern, type="email").
 */

(function () {
  'use strict';

  // À remplacer par la vraie adresse de réception des avis.
  const DESTINATAIRE = 'avis@thegameoflife.fr';

  const form = document.getElementById('feedback-form');
  const status = document.getElementById('form-status');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const data = new FormData(form);
    const nom = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const note = String(data.get('rating') || '');
    const message = String(data.get('message') || '').trim();

    const sujet = encodeURIComponent('Avis The Game of Life — ' + nom + ' (' + note + '/5)');
    const corps = encodeURIComponent(
      'Nom : ' + nom + '\n' +
      'E-mail : ' + email + '\n' +
      'Note : ' + note + '/5\n\n' +
      message
    );

    window.location.href = 'mailto:' + DESTINATAIRE + '?subject=' + sujet + '&body=' + corps;

    if (status) {
      status.textContent = 'Votre client e-mail vient de s’ouvrir avec votre avis pré-rempli.';
    }
  });
})();
