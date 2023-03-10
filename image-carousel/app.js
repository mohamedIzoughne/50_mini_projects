const firstImage = document.querySelector('.first-image')
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const imgsNum = document.querySelectorAll('.image img').length
let index = 0

let interval = setInterval(() => {
  moveImage('plus')
}, 2000)

function moveImage(dir) {
  if (dir === 'plus') {
    index < imgsNum - 1 ? index++ : (index = 0)
  } else if (dir === 'minus') {
    index > 0 ? index-- : (index = imgsNum - 1)
  }
  firstImage.style.marginLeft = `-${index}00%`
}

function resetInterval() {
  clearInterval(interval)
  interval = setInterval(() => {
    moveImage('plus')
  }, 2000)
}

nextBtn.addEventListener('click', () => {
  moveImage('plus')
  resetInterval()
})
prevBtn.addEventListener('click', () => {
  moveImage('minus')
  resetInterval()
})
