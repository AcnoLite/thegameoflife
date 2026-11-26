/*
 * Formulaire d'avis : ouvre le client mail par défaut de l'utilisateur
 * avec les destinataires, le sujet et le corps pré-remplis (mailto:).
 * La validation est native (required, pattern, select).
 */

(function () {
  'use strict';

  const form = document.getElementById('feedback-form');
  const status = document.getElementById('form-status');
  if (!form) return;

  const DESTINATAIRES = 'aurelien.castel@etu.univ-amu.fr,'
    + 'julien.prax@etu.univ-amu.fr,'
    + 'mario-junior.COSTA-FERREIRA@etu.univ-amu.fr';

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const data = new FormData(form);
    const nom = String(data.get('name') || '').trim();
    const note = String(data.get('rating') || '');
    const message = String(data.get('message') || '').trim();

    const sujet = encodeURIComponent('Avis The Game of Life — ' + nom + ' (' + note + '/5)');
    const corps = encodeURIComponent(
      'Nom : ' + nom + '\n' +
      'Note : ' + note + '/5\n\n' +
      message
    );

    const url = 'mailto:' + DESTINATAIRES
      + '?subject=' + sujet
      + '&body=' + corps;

    const web = 'https://outlook.office.com/mail/deeplink/compose?to=' + DESTINATAIRES
      + '&subject=' + sujet
      + '&body=' + corps;

    if (status) {
      status.textContent = 'Choisissez comment envoyer votre avis :';

      const lienWeb = document.createElement('a');
      lienWeb.href = web;
      lienWeb.target = '_blank';
      lienWeb.rel = 'noopener';
      lienWeb.textContent = 'Ouvrir dans Outlook Web';
      lienWeb.style.display = 'block';
      status.appendChild(lienWeb);

      const lienMail = document.createElement('a');
      lienMail.href = url;
      lienMail.textContent = 'Ouvrir avec le client mail (3 destinataires)';
      lienMail.style.display = 'block';
      status.appendChild(lienMail);

      status.appendChild(document.createElement('br'));
      status.appendChild(document.createTextNode('Destinataires : ' + DESTINATAIRES));
    }
  });
})();
