const pokemonContainer = document.getElementById('pokemon-container');
const options = document.querySelector('.options');
const pokemon_count = 100;
const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5',
};
const pokemon_types = Object.keys(colors);

pokemon_types.forEach((type) => {
  const createOption = document.createElement('option');
  createOption.value = type;
  createOption.innerText = type[0].toUpperCase() + type.slice(1);
  options.appendChild(createOption);
});

document.addEventListener('input', (e) => {
  if (e.target.id != 'options') return;
  fetchPokemons(e.target.value);
});

const fetchPokemons = async (type) => {
  pokemonContainer.textContent = '';
  if (type === 'ALL') {
    for (let i = 1; i <= pokemon_count; i++) {
      const ALLURL = `https://pokeapi.co/api/v2/pokemon/${i}`;
      await getPokemon(ALLURL);
    }
  } else {
    const url = `https://pokeapi.co/api/v2/type/${type}`;
    const res = await fetch(url);
    const data = await res.json();
    for (let i = 0; i < data.pokemon.length; i++) {
      const CURRENT_POKE_URL = data.pokemon[i].pokemon.url;
      getPokemon(CURRENT_POKE_URL);
    }
  }
};

const getPokemon = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  createPokemonCard(data);
};

const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement('div');
  pokemonEl.classList.add('pokemon');
  const current_poke_types = pokemon.types.map((type) => type.type.name);
  const type = pokemon_types.find(
    (type) => current_poke_types.indexOf(type) > -1
  );
  const id = pokemon.id.toString().padStart(3, '0');

  pokemonEl.style.backgroundColor = `${colors[type]}`;
  pokemonEl.innerHTML = `
   <div class="img-container">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.order}.png"
            alt="${pokemon.name}"
          />
        </div>
        <div class="info">
          <span class="number">#${id}</span>
          <h3 class="name">${pokemon.name}</h3>
          <small class="type">Type: <span>${type}</span></small>
        </div>
  `;
  pokemonContainer.appendChild(pokemonEl);
};

fetchPokemons('ALL');
