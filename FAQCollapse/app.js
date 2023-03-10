const icons = document.querySelectorAll('.icon')
const answers = document.querySelectorAll('.container li')

icons.forEach(icon => [
    icon.addEventListener('click', (e) => expand(e))
])

const expand = (e) => {
    e.currentTarget.parentElement.classList.toggle('expand')
}


