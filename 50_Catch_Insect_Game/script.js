const screens = document.querySelectorAll('.screen');
const choose_insect_btns = document.querySelectorAll('.choose-insect-btn');
const start_btn = document.getElementById('start-btn');
const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const messageEl = document.getElementById('message');
const game_container = document.querySelector('.game-container');

let selected_insect = {};
let time_laspsed_seconds = 0;
let score = 0;

start_btn.addEventListener('click', () => screens[0].classList.add('up'));

choose_insect_btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const img = btn.querySelector('img');
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');

    selected_insect = { src, alt };
    screens[1].classList.add('up');
    setTimeout(createInsect, 1000);
    startGame();
  });
});

function startGame() {
  setInterval(increaseTime, 1000);
}

function increaseTime() {
  let m = Math.floor(time_laspsed_seconds / 60);
  let s = time_laspsed_seconds % 60;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;
  timeEl.innerHTML = `Time: ${m}:${s}`;
  time_laspsed_seconds++;
}

function createInsect() {
  const insect = document.createElement('div');
  insect.classList.add('insect');
  const { x, y } = getRandomLocation();
  insect.style.top = `${y}px`;
  insect.style.left = `${x}px`;
  insect.innerHTML = `<img src="${selected_insect.src}" alt="${
    selected_insect.alt
  }" style="transform: rotate(${Math.random() * 360}deg)" />`;
  insect.addEventListener('click', catchInsect);
  game_container.appendChild(insect);
}

function getRandomLocation() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const x = Math.random() * (width - 200) + 50;
  const y = Math.random() * (height - 200) + 50;
  return { x, y };
}

function catchInsect() {
  increaseScore();
  this.classList.add('caught');
  setTimeout(() => this.remove(), 2000);
  addInsects();
}

function increaseScore() {
  score++;
  if (score > 10) {
    messageEl.classList.add('visible');
  }
  scoreEl.innerHTML = `Score: ${score}`;
}

function addInsects() {
  setTimeout(createInsect, 1000);
  setTimeout(createInsect, 1300);
}
