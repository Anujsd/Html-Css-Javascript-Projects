const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > nav.offsetHeight) {
    nav.classList.add('active');
  } else {
    nav.classList.remove('active');
  }
});
