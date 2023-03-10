
const nextBtn = document.querySelector(".next")
const previousBtn = document.querySelector(".prev")

let activeNumber = 1


const calc = (action) => {

    if (action === 'up' && activeNumber < 4) {
        activeNumber++
        document.querySelector(`.step-${activeNumber}`).classList.add("active")
    } else if (action === 'down' && activeNumber > 1) {
        document.querySelector(`.step-${activeNumber}`).classList.remove("active")
        activeNumber--
    }

    if (activeNumber === 1) {
        previousBtn.classList.add("un-active")
    } else {
        previousBtn.classList.remove("un-active")
    }

    if (activeNumber === 4) {
        nextBtn.classList.add("un-active")
    } else {
        nextBtn.classList.remove("un-active")
    }

}



nextBtn.addEventListener('click', () => calc("up"))
previousBtn.addEventListener('click', () => calc("down"))
