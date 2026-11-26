/*
 * Formulaire d'avis : ouvre le client e-mail de l'utilisateur avec le
 * message pré-rempli (mailto:). La validation est faite nativement par
 * les attributs HTML (required, pattern, type="email").
 */

(function () {
  'use strict';

  // TODO: remplacer par l'adresse e-mail réelle de l'équipe (EMAIL_EQUIPE).
  const EMAIL_EQUIPE = 'email-equipe@exemple.fr';

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

    window.location.href = 'mailto:' + EMAIL_EQUIPE + '?subject=' + sujet + '&body=' + corps;

    if (status) {
      status.textContent = "Votre messagerie va s'ouvrir.";
    }
  });
})();
