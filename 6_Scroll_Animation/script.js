const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', moveBoxes);

moveBoxes();

function moveBoxes() {
  const screenBottom = (window.innerHeight / 5) * 4;
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < screenBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}

// for mobile version it is not working correctly resolve that
