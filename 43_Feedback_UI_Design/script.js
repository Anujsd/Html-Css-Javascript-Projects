const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.rating-container');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');
let SelectedRating = 'Satisfied';

ratingsContainer.addEventListener('click', (e) => {
  if (
    e.target.parentNode.classList.contains('rating') &&
    e.target.nextElementSibling
  ) {
    removeActive();
    e.target.parentNode.classList.add('active');
    SelectedRating = e.target.nextElementSibling.innerHTML;
  } else if (
    e.target.parentNode.classList.contains('rating') &&
    e.target.previousSibling &&
    e.target.previousElementSibling.nodeName === 'IMG'
  ) {
    removeActive();
    e.target.parentNode.classList.add('active');
    SelectedRating = e.target.innerHTML;
  }
});

function removeActive() {
  ratings.forEach((rating) => rating.classList.remove('active'));
}

sendBtn.addEventListener('click', (e) => {
  panel.innerHTML = `
    <i class="fa fa-heart"></i>
    <strong>Thank You!</strong>
    <br/>
    <strong>Feedback : ${SelectedRating}</strong>
    <p>We will use your feedback to improve our customer support</p>
  `;
});
