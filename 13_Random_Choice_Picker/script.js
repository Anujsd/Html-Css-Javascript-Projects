const textarea = document.getElementById('textarea');
const tagsEL = document.querySelector('.tags');
console.log(tagsEL);
textarea.focus();

textarea.addEventListener('keyup', (e) => {
  //   console.log(e.target.value);
  createTags(e.target.value);

  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = '';
    }, 10);
    randomSelect();
  }
});

const createTags = (input) => {
  const tagsText = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim());
  tagsEL.innerHTML = '';

  tagsText.forEach((tag) => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerText = tag;
    tagsEL.appendChild(tagEl);
  });
};

const randomSelect = () => {
  const times = 30;
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    if (randomTag !== undefined) {
      randomTag.classList.add('highlight');
      setTimeout(() => {
        randomTag.classList.remove('highlight');
      }, 100);
    }
  });

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag();
      randomTag.classList.add('highlight');
    }, 100);
  }, times * 100);
};

const pickRandomTag = () => {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)];
};
