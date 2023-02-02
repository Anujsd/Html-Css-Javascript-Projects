const toggle = document.querySelector('.toggle');
const heading = document.querySelector('.heading');

toggle.addEventListener('change', (e) => {
  console.log(toggle.checked);
  if (toggle.checked === true) {
    heading.innerText = 'Lights on';
    heading.style.color = '#fff';
    document.body.style.backgroundColor = '#000';
  } else {
    heading.innerText = 'Lights off';
    heading.style.color = '#000';
    document.body.style.backgroundColor = '#fff';
  }
});
