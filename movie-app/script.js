const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d29ad354ea79df8d602cc85eae8ed388&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=d29ad354ea79df8d602cc85eae8ed388&query="'

// const moviesCollection = document.querySelector('.movi')
const form = document.getElementById('form')
const main = document.getElementById('main')
const search = document.querySelector('.search-bar')

// get initial movies
getMovies(API_URL)

async function getMovies(url) {
  const res = await fetch(url)
  const data = await res.json()

  const movies = data.results
  showMovies(movies)
}

const showMovies = (movies) => {
  main.innerHTML = ''
  movies.forEach((movie) => {
    const { title, vote_average, poster_path, overview } = movie
    const movieEl = document.createElement('div')
    movieEl.className = 'movie'
    movieEl.innerHTML = `
        <div class="image">
                <img src="${IMG_PATH + poster_path}" alt="${title}">
            </div>
            <div class="info">
                <h5 class="title">${title}</h3>
                    <span class="vote-average ${getClassbyRate(
                      vote_average
                    )}">${vote_average}</span>
            </div>
            <div class="details">
                <h4>
                    Overview
                </h4>
                <p>
                    ${overview}
                </p>
            </div>
        `
    main.appendChild(movieEl)
  })
}

function getClassbyRate(vote) {
  if (vote >= 8) {
    return 'green'
  } else if (vote >= 5) {
    return 'orange'
  } else {
    return 'red'
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const searchTerm = search.value

  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_API + searchTerm)
    search.value = ''
  } else {
    window.location.reload()
  }
})

// Loader
window.onload = () => {
  document.querySelector('.wrapper-loader').remove()
  document.body.style.cssText = `
  height: auto;
  overflow-y: initial;
  `
}
