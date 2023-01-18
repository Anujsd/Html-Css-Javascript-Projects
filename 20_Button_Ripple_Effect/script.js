const btn = document.querySelector('.ripple');

btn.addEventListener('click', function (e) {
  const x = e.pageX;
  const y = e.pageY;

  const btnTop = e.target.offsetTop;
  const btnLeft = e.target.offsetLeft;

  const xInside = x - btnLeft;
  const yInside = y - btnTop;

  const circle = document.createElement('span');
  circle.classList.add('circle');
  circle.style.top = yInside + 'px';
  circle.style.left = xInside + 'px';

  this.appendChild(circle);

  setTimeout(() => circle.remove(), 500);
});
