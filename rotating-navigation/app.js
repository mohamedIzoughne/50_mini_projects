const navBtn = document.querySelectorAll('.nav-icon i')

const showNav = () => {
    document.querySelector('.container1').classList.toggle('rotated')
    document.querySelector('.navigation').classList.toggle('active')
    document.querySelector('.nav-icon').classList.toggle('rotated')
}

navBtn.forEach(ele => {
    ele.addEventListener('click', showNav)
})