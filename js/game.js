/*
 * Interface du jeu : boutons, compteurs et clics sur le canvas.
 * Le moteur (règles et dessin) vient de game-engine.js, voir crédits dans game.html.
 */

(function () {
  'use strict';

  const COLONNES = 60;
  const LIGNES = 30;
  const TAILLE_CASE = 12;

  const canvas = document.getElementById('life');
  const boutonDemarrer = document.getElementById('demarrer');
  const boutonPas = document.getElementById('pas');
  const boutonHasard = document.getElementById('hasard');
  const boutonEffacer = document.getElementById('effacer');
  const champVitesse = document.getElementById('vitesse');
  const affichageGeneration = document.getElementById('generation');
  const affichageVivantes = document.getElementById('vivantes');

  let grille = [];
  let jeu = null;
  let generation = 0;
  let enCours = false;
  let timer = null;

  function grilleVide() {
    const resultat = [];
    for (let y = 0; y < LIGNES; y++) {
      resultat.push(new Array(COLONNES).fill(0));
    }
    return resultat;
  }

  // Le moteur modifie le tableau reçu : on lui passe donc une copie.
  function creerPartie() {
    const copie = grille.map(function (ligne) { return ligne.slice(); });
    jeu = new GameOfLife({
      canvas_id: 'life',
      cell_width: TAILLE_CASE,
      cell_height: TAILLE_CASE,
      init_cells: copie
    });
    afficher();
  }

  function compterVivantes() {
    let total = 0;
    const cellules = jeu.getCurrentGenCells();
    for (let y = 0; y < cellules.length; y++) {
      for (let x = 0; x < cellules[y].length; x++) {
        if (cellules[y][x].getState() === 'alive') total++;
      }
    }
    return total;
  }

  function afficher() {
    affichageGeneration.textContent = generation;
    affichageVivantes.textContent = compterVivantes();
  }

  function etapeSuivante() {
    jeu.step();
    generation++;
    afficher();
  }

  function arreterTimer() {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
    }
  }

  function lancerTimer() {
    arreterTimer();
    timer = setInterval(etapeSuivante, 1000 / Number(champVitesse.value));
  }

  function basculerLecture() {
    enCours = !enCours;
    boutonDemarrer.textContent = enCours ? 'Pause' : 'Démarrer';
    if (enCours) lancerTimer();
    else arreterTimer();
  }

  function gereHasard() {
    arreterTimer();
    enCours = false;
    boutonDemarrer.textContent = 'Démarrer';
    generation = 0;
    grille = grilleVide().map(function (ligne) {
      return ligne.map(function () { return Math.random() < 0.25 ? 1 : 0; });
    });
    creerPartie();
  }

  function gereEffacer() {
    arreterTimer();
    enCours = false;
    boutonDemarrer.textContent = 'Démarrer';
    generation = 0;
    grille = grilleVide();
    creerPartie();
  }

  const ctx = canvas.getContext('2d');

  // Un clic bascule la cellule dans le moteur existant et redessine
  // seulement cette case : pas besoin de recréer la partie.
  canvas.addEventListener('click', function (e) {
    const rect = canvas.getBoundingClientRect();
    const x = Math.floor((e.clientX - rect.left) * canvas.width / rect.width / TAILLE_CASE);
    const y = Math.floor((e.clientY - rect.top) * canvas.height / rect.height / TAILLE_CASE);
    if (x < 0 || x >= COLONNES || y < 0 || y >= LIGNES) return;

    const cellule = jeu.getCurrentGenCells()[y][x];
    const nouvelEtat = cellule.getState() === 'alive' ? 'dead' : 'alive';
    cellule.setState(nouvelEtat);
    grille[y][x] = nouvelEtat === 'alive' ? 1 : 0;

    const px = x * TAILLE_CASE;
    const py = y * TAILLE_CASE;
    if (nouvelEtat === 'alive') {
      ctx.fillStyle = '#000';
      ctx.fillRect(px, py, TAILLE_CASE, TAILLE_CASE);
    } else {
      ctx.clearRect(px, py, TAILLE_CASE, TAILLE_CASE);
    }
    afficher();
  });

  boutonDemarrer.addEventListener('click', basculerLecture);
  boutonPas.addEventListener('click', function () {
    arreterTimer();
    enCours = false;
    boutonDemarrer.textContent = 'Démarrer';
    etapeSuivante();
  });
  boutonHasard.addEventListener('click', gereHasard);
  boutonEffacer.addEventListener('click', gereEffacer);
  champVitesse.addEventListener('input', function () {
    if (enCours) lancerTimer();
  });

  grille = grilleVide();
  creerPartie();
})();
