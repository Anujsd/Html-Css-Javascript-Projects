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

  const secondsDegrees = (seconds / 60) * 360 + 90;
  console.log(seconds, secondsDegrees);
  if (secondsDegrees == 90) {
    secondEle.classList.add('no-transition');
  } else {
    secondEle.classList.remove('no-transition');
  }
  secondEle.style.transform = `translate(-50%, -100%) rotate(${secondsDegrees}deg)`;

  const minutesDegrees = (minutes / 60) * 360 + 0;
  if (minutesDegrees == 90) {
    minuteEle.classList.add('no-transition');
  } else {
    minuteEle.classList.remove('no-transition');
  }
  minuteEle.style.transform = `translate(-50%, -100%) rotate(${minutesDegrees}deg)`;

  const hoursDegrees = (hoursIn12format / 60) * 360 + 240;

  if (hoursDegrees == 90) {
    hourEle.classList.add('no-transition');
  } else {
    hourEle.classList.remove('no-transition');
  }
  hourEle.style.transform = `translate(-50%, -100%) rotate(${hoursDegrees}deg)`;

  //   hourEle.style.transform = `translate(-50%, -100%) rotate(${scale(
  //     hoursIn12format,
  //     0,
  //     12,
  //     0,
  //     360
  //   )}deg)`;

  //   minuteEle.style.transform = `translate(-50%, -100%) rotate(${scale(
  //     minutes,
  //     0,
  //     60,
  //     0,
  //     360
  //   )}deg)`;

  //   secondEle.style.transform = `translate(-50%, -100%) rotate(${scale(
  //     seconds,
  //     0,
  //     60,
  //     0,
  //     360
  //   )}deg)`;

  timeEle.innerHTML = `${hoursIn12format}:${
    minutes < 10 ? `0${minutes}` : minutes
  } ${amorpm}`;
  dateEle.innerHTML = `${daysArr[day]},<span class="circle">${date}</span>${monthsArr[month]} ${year}`;
}

updateTime();

setInterval(updateTime, 1000);
