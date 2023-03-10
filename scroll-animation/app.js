const contents = document.querySelectorAll('.content')

const show = () => {
    contents.forEach(content => {
        const position = content.getBoundingClientRect().top
        if (position < window.innerHeight / 5 * 4) {
            content.classList.add('show')
        } else {
            content.classList.remove('show')
        }
    })
}

show()

window.addEventListener('scroll', () => show())
