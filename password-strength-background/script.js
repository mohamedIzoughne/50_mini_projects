const bgImg = document.querySelector('.bg-img')
const pssInput = document.getElementById('password')
let initialBlur = 24

pssInput.addEventListener('keyup', () => {
  const length = pssInput.value.length
  if (length <= 8) {
    bgImg.style.filter = `blur(${initialBlur - length * 3}px)`
  }
})
