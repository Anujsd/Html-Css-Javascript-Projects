const background = document.getElementById('background');
const password = document.getElementById('password');

password.addEventListener('input', (e) => {
  const pass = e.target.value;
  const len = 20 - pass.length;
  background.style.filter = `blur(${len}px)`;
});
