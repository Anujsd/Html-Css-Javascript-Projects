const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

const range = document.getElementById('range');

// Here we have used + lots of time it convers string num to integer
range.addEventListener('input', (e) => {
  const value = +e.target.value;
  const label = e.target.nextElementSibling;
  //   console.log(value, label);

  let range_width = getComputedStyle(e.target).getPropertyValue('width');
  let label_width = getComputedStyle(label).getPropertyValue('width');
  //   console.log(range_width, label_width);

  // Get only values in integer form without px
  range_width = +range_width.substring(0, range_width.length - 2);
  label_width = +label_width.substring(0, label_width.length - 2);
  //   console.log(range_width, label_width);

  const max = +e.target.max;
  const min = +e.target.min;

  const left =
    value * (range_width / max) -
    label_width / 2 +
    scale(value, min, max, 10, -10);

  label.style.left = `${left}px`;
  label.innerHTML = value;
});
