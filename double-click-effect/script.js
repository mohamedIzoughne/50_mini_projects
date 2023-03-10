

const imgHolderEl = document.querySelector('.img-holder')
const heartEl = document.createElement('i')
const imgTop = imgHolderEl.offsetTop
const imgLeft = imgHolderEl.offsetLeft
const clickTimesEl = document.querySelector('.title span')

let i = 0
heartEl.classList.add('fa-solid')
heartEl.classList.add('fa-heart')
imgHolderEl.addEventListener('dblclick', (e) => {
    clickTimesEl.innerText = ++i
    const [x, y] = [e.clientX - imgLeft,e.clientY - imgTop]


    heartEl.style.top = y + 'px'
    heartEl.style.left = x + 'px'

    imgHolderEl.appendChild(heartEl)
})