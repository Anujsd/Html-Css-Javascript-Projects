const toggleBtn = document.querySelector('.toggle');
const htmlEle = document.querySelector('html');
const secondEle = document.querySelector('.second');
const hourEle = document.querySelector('.hour');
const minuteEle = document.querySelector('.minute');
const timeEle = document.querySelector('.time');
const dateEle = document.querySelector('.date');

const daysArr = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const monthsArr = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

toggleBtn.addEventListener('click', () => {
  if (htmlEle.classList.contains('dark')) {
    htmlEle.classList.remove('dark');
    toggleBtn.innerText = 'Dark Mode';
  } else {
    htmlEle.classList.add('dark');
    toggleBtn.innerText = 'Light Mode';
  }
});

function updateTime() {
  const datetime = new Date();
  const seconds = datetime.getSeconds();
  const minutes = datetime.getMinutes();
  const hours = datetime.getHours();
  const hoursIn12format = hours % 12;
  const amorpm = hours < 12 ? 'AM' : 'PM';

  const date = datetime.getDate();
  const day = datetime.getDay();
  const month = datetime.getMonth();
  const year = datetime.getFullYear();

  hourEle.style.transform = `translate(-50%, -100%) rotate(${scale(
    hoursIn12format,
    0,
    12,
    0,
    360
  )}deg)`;

  minuteEle.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    60,
    0,
    360
  )}deg)`;

  secondEle.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    60,
    0,
    360
  )}deg)`;

  timeEle.innerHTML = `${hoursIn12format}:${
    minutes < 10 ? `0${minutes}` : minutes
  } ${amorpm}`;
  dateEle.innerHTML = `${daysArr[day]},<span class="circle">${date}</span>${monthsArr[month]} ${year}`;
}

updateTime();

setInterval(updateTime, 1000);

// In this project clock resetting need to be solved do it
