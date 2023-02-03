const img = document.querySelector('.img');
const times = document.querySelector('.times');

let clickTime = 0;
let oldx = 0;
let oldy = 0;
let timesClicked = 0;

// we can use dblclick event lister also but it will not work with
// touch as it is based on mousedown and mouseup
img.addEventListener('click', (e) => {
  if (clickTime !== 0 && new Date().getTime() - clickTime < 300) {
    createHeart(e);
    clickTime = 0;
  } else {
    clickTime = new Date().getTime();
  }
});

const createHeart = (e) => {
  const heart = document.createElement('i');
  heart.classList.add('fas');
  heart.classList.add('fa-heart');

  const x = e.clientX;
  const y = e.clientY;
  const offsetX = e.target.offsetLeft;
  const offsetY = e.target.offsetTop;

  const xInside = x - offsetX;
  const yInside = y - offsetY;
  //   console.log(x, y, offsetX, offsetY, xInside, yInside);

  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  img.appendChild(heart);

  times.innerHTML = ++timesClicked;

  setTimeout(() => heart.remove(), 1000);
};
