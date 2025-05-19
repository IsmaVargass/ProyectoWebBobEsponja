"use strict";

const buttons = document.querySelectorAll('.game-button');
const startBtn = document.getElementById('startBtn');
const scoreDisplay = document.getElementById('score');
const message = document.getElementById('message');

let sequence = [];
let userSequence = [];
let score = 0;
const maxScore = 100;

function getRandom() {
  return Math.floor(Math.random() * 4);
}

function playSequence() {
  let delay = 0;
  sequence.forEach((id) => {
    setTimeout(() => highlightButton(id), delay);
    delay += 800;
  });
}

function highlightButton(id) {
  const btn = document.getElementById(id);
  btn.classList.add('active');
  setTimeout(() => btn.classList.remove('active'), 400);
}

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const id = parseInt(btn.id);
    userSequence.push(id);
    highlightButton(id);
    checkUserInput();
  });
});

function checkUserInput() {
  const index = userSequence.length - 1;
  if (userSequence[index] !== sequence[index]) {
    gameOver();
    return;
  }
  if (userSequence.length === sequence.length) {
    score++;
    updateScore();
    if (score >= maxScore) {
      winGame();
    } else {
      userSequence = [];
      nextRound();
    }
  }
}

function updateScore() {
  scoreDisplay.textContent = `Puntos: ${score} / ${maxScore}`;
}

function nextRound() {
  sequence.push(getRandom());
  setTimeout(playSequence, 1000);
}

function gameOver() {
  message.textContent = '¡Juego terminado! Has perdido.';
  startBtn.disabled = false;
}

function winGame() {
  message.textContent = '¡Felicidades! Has alcanzado 100 puntos!';
  startBtn.disabled = false;
}

startBtn.addEventListener('click', () => {
  sequence = [];
  userSequence = [];
  score = 0;
  updateScore();
  message.textContent = '';
  startBtn.disabled = true;
  nextRound();
});
