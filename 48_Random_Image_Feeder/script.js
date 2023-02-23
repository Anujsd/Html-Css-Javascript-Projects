const container = document.querySelector('.container');
const count = document.querySelector('.count');
const URL = 'https://source.unsplash.com/random';

let rows = 1;
count.focus();

count.addEventListener('change', (e) => {
  const input = +e.target.value;
  console.log(input);

  if (input < 1) rows = 0;
  if (input > 100) rows = 100;
  rows = input;
  generateImages(rows);
});

const randomDimesion = () => {
  const num = 300 + Math.round(Math.random() * 10);
  return num;
};

function generateImages(rows) {
  container.innerHTML = '';
  for (let i = 0; i < rows; i++) {
    const img = document.createElement('img');
    img.src = `${URL}/${randomDimesion()}x${randomDimesion()}`;
    container.appendChild(img);
  }
}

generateImages(10);
