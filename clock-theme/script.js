// Adding Dark-mode feature
const darkWhiteBtn = document.getElementById('mode')

darkWhiteBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-white')
})

// Adding Functionality to the clock
const minutesEl = document.querySelector('.minutes')
const hoursEl = document.querySelector('.hours')
const secondsNeedle = document.querySelector('.seconds-needle')
const minuteNeedle = document.querySelector('.minutes-needle')
const hourNeedle = document.querySelector('.hours-needle')

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'wednsday', 'Thursday', 'Friday', 'Saturday']
const yearMonths = []

document.getElementById('current-day').textContent = weekDays[new Date().getDay()]
document.getElementById('day').textContent = new Date().getDate()

function getTime() {
    const [minutes, hours] = [new Date().getMinutes(), new Date().getHours()]
    if (minutesEl.textContent != minutes) {
        minutesEl.textContent = minutes < 10 ? `0${minutes}` : minutes
    }
    if (hoursEl.textContent != hours) {
        hoursEl.textContent = hours < 10 ? `0${hours}` : hours
    }
    secondsNeedle.style.transform = `rotate(${new Date().getSeconds() * 6 - 90}deg)`
    minuteNeedle.style.transform = `rotate(${minutes * 6 - 90}deg)`
    hourNeedle.style.transform = `rotate(${hours * 30 - 90}deg)`
}


getTime()

setInterval(() => {
    getTime()
}, 1000);


