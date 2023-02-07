const images = document.querySelectorAll('.panel img');
const imgContainer = document.querySelector('.images');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let idx = 0;

let interval = setInterval(run, 2000);

function run() {
  idx++;
  changeImage();
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

function changeImage() {
  if (idx > images.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = images.length - 1;
  }
  console.log(idx);
  imgContainer.style.transform = `translateX(${-idx * 350}px)`;
}

prevBtn.addEventListener('click', () => {
  idx++;
  changeImage();
  resetInterval();
});

nextBtn.addEventListener('click', () => {
  idx++;
  changeImage();
  resetInterval();
});
