// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

const smallCupsBox = document.querySelector('.cups');
const minusBtn = document.getElementById('minus');
const plusBtn = document.getElementById('plus');
const drinkingGoal = document.getElementById('drinkingGoal');

const liters = document.getElementById('liters');
const percentage = document.querySelector('.percentage');
const remained = document.querySelector('.remained');
const remainedText = document.getElementById('RemainedText');

let goal = 2;
let totalSmallCups = goal / 0.25;
let currentSmallCups = 0;
drinkingGoal.textContent = goal;

updateSmallCups();

function updateSmallCups() {
  while (currentSmallCups < totalSmallCups) {
    const cupEl = document.createElement('div');
    cupEl.classList.add('cup');
    cupEl.classList.add('cup-small');
    cupEl.id = `${currentSmallCups}`;
    cupEl.innerText = '250ml';
    cupEl.addEventListener('click', () => highlightCups(cupEl.id));
    smallCupsBox.appendChild(cupEl);
    // console.log(currentSmallCups);
    currentSmallCups++;
  }
  while (currentSmallCups > totalSmallCups) {
    // console.log(smallCupsBox.childNodes);
    smallCupsBox.removeChild(smallCupsBox.lastChild);
    currentSmallCups--;
  }

  updateBigCup();
}

plusBtn.addEventListener('click', () => {
  if (goal < 4) {
    goal += 0.25;
    totalSmallCups++;
    drinkingGoal.textContent = goal;
    updateSmallCups();
  }

  if (goal > 2) {
    minusBtn.style.backgroundColor = 'blue';
  }
  if (goal >= 4) {
    plusBtn.style.backgroundColor = '#6ab3f8';
  }
});

minusBtn.addEventListener('click', () => {
  if (goal > 2) {
    goal -= 0.25;
    totalSmallCups--;
    drinkingGoal.textContent = goal;
    updateSmallCups();
  }

  if (goal == 2) {
    minusBtn.style.backgroundColor = '#6ab3f8';
  }
  if (goal < 4) {
    plusBtn.style.backgroundColor = 'blue';
  }
});

function highlightCups(idx) {
  idx = parseInt(idx);
  const smallCups = smallCupsBox.childNodes;
  // console.log(smallCups[idx].classList, smallCups[idx].id, idx);
  const totalCups = smallCupsBox.childNodes.length;
  if (idx === totalCups - 1 && smallCups[idx].classList.contains('full')) {
    idx--;
  } else if (
    smallCups[idx].classList.contains('full') &&
    !smallCups[idx + 1].classList.contains('full')
  ) {
    idx--;
  }

  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });

  updateBigCup();
}

function updateBigCup() {
  const smallCups = document.querySelectorAll('.cup-small');
  const fullcups = document.querySelectorAll('.cup-small.full').length;
  const totalCups = smallCups.length;

  if (fullcups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${(fullcups / totalCups) * 330}px`;
    percentage.innerText = `${((fullcups / totalCups) * 100).toFixed(2)}%`;
  }

  if (fullcups === totalCups) {
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } else {
    remained.style.visibility = 'visible';
    remained.style.fontSize = `${scale(fullcups, 0, totalCups, 20, 10)}px`;
    remainedText.style.fontSize = `${scale(fullcups, 0, totalCups, 10, 7)}px`;
    if (fullcups > 12 && fullcups === totalCups - 1) {
      remained.style.flexDirection = 'row';
    } else {
      remained.style.flexDirection = 'column';
    }
    liters.innerText = `${goal - (250 * fullcups) / 1000}L`;
  }
}
