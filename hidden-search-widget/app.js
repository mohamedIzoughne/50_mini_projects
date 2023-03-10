const widget = document.querySelector('.widget')
const searchBtn = document.querySelector('.icon')


function showBar() {
    widget.classList.toggle('active')
}

searchBtn.addEventListener('click', showBar)