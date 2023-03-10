const fill = document.querySelector('.fill')
const boxes = document.querySelectorAll('.box')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for (const box of boxes) {
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragover', dragOver)
    box.addEventListener('dragleave', dragLeave)
    box.addEventListener('drop', drop)
}




function dragStart() {
    this.classList.add('hover')
    setTimeout(() => {
        this.classList.remove('fill')
    }, 0);
}

function dragEnd() {
    this.classList.remove('hover')
    this.classList.add('fill')
}

function dragEnter(e) {
    e.preventDefault()
}

function dragOver(e) {
    e.preventDefault()
    this.classList.add('over')

}
function dragLeave() {
    this.classList.remove('over')
}

function drop() {
    this.append(fill)
}