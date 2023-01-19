const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const clearBtn = document.getElementById('clear');

const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');

let x;
let y;
let size = 10;
colorEl.value = '#000000';
let color = colorEl.value;
let isPressed = false;

canvas.addEventListener('touchend', (e) => {
  e.preventDefault();
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener('touchstart', (e) => {
  e.preventDefault();
  isPressed = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener('touchmove', (e) => {
  e.preventDefault();
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

canvas.addEventListener('mousedown', (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener('mouseup', (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener('mousemove', (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

increaseBtn.addEventListener('click', () => {
  size += 5;
  if (size > 50) {
    size = 50;
  }
  sizeEl.innerText = size;
});
decreaseBtn.addEventListener('click', () => {
  size -= 5;
  if (size < 5) {
    size = 5;
  }
  sizeEl.innerText = size;
});

clearBtn.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

colorEl.addEventListener('change', (e) => {
  color = e.target.value;
});
