

const joke = document.querySelector('.joke')
const jokeBtn = document.querySelector('.joke-btn')

const config = {
    headers: {
        'Accept': 'application/json'
    }
}


const generateJokes = () => {
    fetch('https://icanhazdadjoke.com/', config)
        .then(response => response.json())
        .then(result => joke.innerHTML = result.joke)
}

jokeBtn.addEventListener('click', generateJokes)
