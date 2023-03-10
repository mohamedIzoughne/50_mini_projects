const text = 'Give Your Workout A New Style!'.split('')
const textEl = document.getElementById('heading')
const range = document.querySelector('input[type="number"]')

let rangeValue = range.value

let speed = 300 / rangeValue

let i = 0

addText()

function addText() {
    textEl.innerHTML += text[i]
    i++

    if (i > text.length) {
        textEl.innerHTML = ''
        i = 0
    }

    setTimeout(addText, speed);
}

range.addEventListener('input', () => {
    rangeValue = range.value
    speed = 300 / rangeValue
})


