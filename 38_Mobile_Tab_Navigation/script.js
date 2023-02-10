const contents = document.querySelectorAll('.content');
const listItems = document.querySelectorAll('ul li');

listItems.forEach((item, idx) => {
  item.addEventListener('click', () => {
    hideAllContent();
    hideAllItems();
    item.classList.add('active');
    contents[idx].classList.add('show');
  });
});

const hideAllContent = () => {
  contents.forEach((content) => content.classList.remove('show'));
};
const hideAllItems = () => {
  listItems.forEach((item) => item.classList.remove('active'));
};
