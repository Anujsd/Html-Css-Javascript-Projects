const banner = document.querySelector('.banner');
const speed = document.getElementById('speed');

const text = 'Hello My Name Is Anuj';

let currentSpeed = 200 / speed.value;
let idx = 1;

const showBanner = () => {
  banner.innerText = text.slice(0, idx);

  idx++;

  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(showBanner, currentSpeed);
};

showBanner();

speed.addEventListener('click', (e) => (currentSpeed = 300 / e.target.value));
