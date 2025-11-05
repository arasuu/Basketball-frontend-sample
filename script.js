let homeScore = 0;
let awayScore = 0;

function addPoints(team, points) {
  if (team === 'home') {
    homeScore += points;
    document.getElementById('home-score').textContent = homeScore;
  } else {
    awayScore += points;
    document.getElementById('away-score').textContent = awayScore;
  }
  updateHighlight();
}

function updateHighlight() {
  const home = document.getElementById('home-score');
  const away = document.getElementById('away-score');

  if (homeScore > awayScore) {
    home.classList.add('highlight');
    away.classList.remove('highlight');
  } else if (awayScore > homeScore) {
    away.classList.add('highlight');
    home.classList.remove('highlight');
  } else {
    home.classList.remove('highlight');
    away.classList.remove('highlight');
  }
}

function newGame() {
  homeScore = 0;
  awayScore = 0;
  document.getElementById('home-score').textContent = 0;
  document.getElementById('away-score').textContent = 0;
  updateHighlight();
}
