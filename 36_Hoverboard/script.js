const container = document.querySelector('.container');

const SQUARE = 10000;
const colors = [
  '#ff1dce',
  '#ffbcd9',
  '#ff496c',
  '#ff6e4a',
  '#ffff66',
  '#9d81ba',
  '#00b9fb',
  '#1dacd6',
  '#3d9979',
  '#ccff00',
];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 2px ${color}`;
}
function removeColor(element) {
  const color = '#222';
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}`;
}

for (let i = 0; i < SQUARE; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseout', () => removeColor(square));
  container.appendChild(square);
}
