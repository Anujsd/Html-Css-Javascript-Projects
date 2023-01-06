const jokeButton = document.querySelector('.jokeButton');
const joke = document.querySelector('.joke');

const getNewJoke = async () => {
  let data = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    },
  });
  data = await data.json();
  joke.innerText = data.joke;
};
getNewJoke();
jokeButton.addEventListener('click', getNewJoke);
