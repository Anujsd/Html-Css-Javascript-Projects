const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

const APIURL = 'https://api.github.com/users/';

const getUser = async (username) => {
  try {
    const { data } = await axios(APIURL + username);

    createUserCard(data);
    getRepos(username);
  } catch (error) {
    createErrorCard('No profile with this username');
    console.log(error);
  }
};

const getRepos = async (username) => {
  try {
    const { data } = await axios(APIURL + username + '/repos?sort=created');
    const reposEl = document.querySelector('.repos');
    data.slice(0, 5).forEach((repo) => {
      const repoEl = document.createElement('a');
      repoEl.classList.add('repo');
      repoEl.href = repo.html_url;
      repoEl.target = '_black';
      repoEl.innerText = repo.name;

      reposEl.appendChild(repoEl);
    });
  } catch (error) {
    createErrorCard('Problem Fectching Repos');
    console.log(error);
  }
};

const createUserCard = (user) => {
  const userID = user.name || user.login;
  const userBio = user.bio ? user.bio : '';
  const cardHTML = `
  <div class="card">
        <div class="img">
          <img
            src="${user.avatar_url}"
            alt="${user.name}"
            class="avatar"
          />
        </div>
        <div class="user-info">
          <h2>${userID}</h2>
          <p>
            ${userBio}
          </p>
          <ul>
            <li>${user.followers}<strong>Followers</strong></li>
            <li>${user.following}<strong>Following</strong></li>
            <li>${user.public_repos}<strong>Repos</strong></li>
          </ul>
          <div class="repos">
          </div>
        </div>
      </div>`;

  main.innerHTML = cardHTML;
};

const createErrorCard = (msg) => {
  const cardHTML = `
  <div class="card">
       <h1>${msg}</h1>
      </div>`;

  main.innerHTML = cardHTML;
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = search.value;
  if (username) {
    getUser(username);
    search.value = '';
  }
});
