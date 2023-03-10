const container = document.querySelector('.container')
const pokemonCount = 15
const API = 'https://pokeapi.co/api/v2/pokemon/'

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
}

async function fetchPokemons() {
  for (i = 1; i <= pokemonCount; i++) {
    await getPokemon(API, i)
  }
}

async function getPokemon(api, id) {
  const result = await fetch(api + id)
  const data = await result.json()
  showPokemonCard(data)
}

function showPokemonCard(pokemon) {
  const id = pokemon.id
  const type = pokemon.types[0].type.name
  const card = document.createElement('div')
  card.className = 'card'
  card.innerHTML = `
    <div class="image">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            pokemon.id
          }.png"" alt="${pokemon.species.id}">
        </div>
        <p class="id">#${
          id >= 100 ? id : id < 100 && id >= 10 ? '0' + id : '00' + id
        }</p>
        <h3>${pokemon.species.name}</h3>
        <div class="type">Type: ${type}</div>
    `
  card.style.backgroundColor = colors[type]
  container.appendChild(card)
}

fetchPokemons()
