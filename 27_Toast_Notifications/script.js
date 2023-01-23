const notiBtn = document.querySelector('.btn');
const toastArea = document.querySelector('.toasts');

const randomText = ['heading1', 'heading2', 'heading3', 'heading4'];
const types = ['info', 'success', 'error'];

const getRandomText = () => {
  return randomText[Math.floor(Math.random() * randomText.length)];
};

const getRandomType = () => {
  return types[Math.floor(Math.random() * types.length)];
};

const showToast = () => {
  const toast = document.createElement('div');
  toast.classList.add('toast');
  toast.classList.add(`${getRandomType()}`);
  toast.innerText = getRandomText();
  toastArea.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
};

notiBtn.addEventListener('click', showToast);
