const background = document.getElementById('background');
const password = document.getElementById('password');

password.addEventListener('input', (e) => {
  console.log(e.target.value);
});
