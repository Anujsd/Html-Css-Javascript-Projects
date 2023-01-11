const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
  counter.innerText = '0';
  const updateCounter = () => {
    const target = parseInt(counter.getAttribute('data-target'));
    const increment = target / 100;
    const currentCount = parseInt(counter.innerText);
    if (currentCount < target) {
      counter.innerText = `${Math.ceil(currentCount + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      currentCount = target;
    }
  };
  updateCounter();
});
