const container = document.getElementById('container')
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const squares = document.querySelectorAll('.square')
const squareNumber = 500


for (i = 0; i < squareNumber; i++) {
    const square = document.createElement('div')
    square.className = 'square'
    
    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}


function setColor(el) {
    el.style.background = getRandomColor()
}

function removeColor(el) {
    el.style.background = '#1d1d1d'
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}