const closeBtn = document.querySelector('.close-btn');
const openBtn = document.querySelector('.open-btn');
const nav = document.querySelectorAll('.nav');

openBtn.addEventListener('click', () => {
  nav.forEach((n) => {
    n.classList.add('visible');
  });
});

closeBtn.addEventListener('click', () => {
  nav.forEach((n) => {
    n.classList.remove('visible');
  });
});
