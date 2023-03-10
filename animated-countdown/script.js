const replayBtn = document.getElementById('replay')
const finalMessage = document.querySelector('.final')
const counterEl = document.querySelector('.counter')
const nums = document.querySelectorAll('.nums span')

replayBtn.addEventListener('click', () => {
  finalMessage.classList.remove('show')
  counterEl.classList.remove('hide')
  startInterVal()
})

function startInterVal() {
  nums.forEach((num) => {
    num.className = ''
  })

  let i = 0

  nums[i].classList.add('in')
  i++

  let interval = setInterval(() => {
    if (i < 4) {
      nums[i - 1].className = 'out'
      setTimeout(() => {
        nums[i].classList.add('in')
        i++
      }, 400)
    } else {
      clearInterval(interval)
      setTimeout(() => {
        nums[i - 1].classList.remove('in')
        counterEl.classList.add('hide')
        finalMessage.classList.add('show')
        i = 0
      }, 400)
    }
  }, 500)
}
