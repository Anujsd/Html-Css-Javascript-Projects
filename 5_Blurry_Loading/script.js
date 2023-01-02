const bg = document.querySelector('.bg');
const loadingText = document.querySelector('.loading-text');

let num = setInterval(removeBlur, 30);
let tmp = 0;
function removeBlur() {
  tmp++;
  if (tmp == 100) {
    clearInterval(num);
  }
  bg.style.filter = `blur(${scale(tmp, 0, 100, 10, 0)}px)`;
  loadingText.innerText = `${tmp}%`;
  loadingText.style.opacity = `${scale(tmp, 0, 100, 1, 0)}`;
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
