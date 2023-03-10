const navBtn = document.querySelector('.nav-btn')
const closeBtn = document.querySelector('.close-btn')
const nav = document.querySelector('nav')

navBtn.addEventListener('click', () => {
  nav.className = 'active'
})
closeBtn.addEventListener('click', () => {
  nav.classList.remove('active')
})
