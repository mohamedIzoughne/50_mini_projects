const glasses = document.querySelectorAll('.glass')
const filledQuantity = document.querySelector('.quantity-figure')
let quantityDemanded = document.querySelector('.quantity-demanded span').textContent

glasses.forEach(glass => {
    glass.addEventListener('click', (e) => calcDrink(e))
})

const calcDrink = (e) => {
    const groupItems = e.currentTarget.parentElement.children
    const drinkingAmount = e.currentTarget.getAttribute('data-amount')

    for (i = 0; i < groupItems.length; i++) {
        groupItems[i].classList.remove('drunk')
    }
    for (i = 0; i < drinkingAmount; i++) {
        e.currentTarget.parentElement.children[i].classList.add('drunk')
    }

    const drunkCups = document.querySelectorAll('.drunk').length

    document.querySelector('.quantity-demanded span').textContent = quantityDemanded - quantityDemanded / glasses.length * drunkCups

    let fill = `${drunkCups / glasses.length * 100}%`

    if (fill === '100%') {
        document.querySelector('.quantity-demanded').style.display = 'none'
        filledQuantity.style.height = '101%'
    } else {
        document.querySelector('.quantity-demanded').style.display = 'block'
        filledQuantity.style.height = fill
    }
    filledQuantity.textContent = fill
}
