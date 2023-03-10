const container = document.querySelector('.container')

if (window.localStorage.getItem('notes')) {
    container.innerHTML = window.localStorage.getItem('notes')
}
const notes = document.querySelectorAll('.note')

notes.forEach(note => {
    addFunctionToNote(note)
})

// Adding functionality to note
function addFunctionToNote(el) {
    const noteTextEl = el.querySelector('textarea')
    const toggleBtn = el.querySelector('.toggle-btn')
    const removeBtn = el.querySelector('.remove-btn')
    const toggledTextEl = el.querySelector('.sec-2')

    toggleBtn.addEventListener('click', () => {
        const text = noteTextEl.value
        toggledTextEl.innerHTML = text
        noteTextEl.style.display = 'none'
        toggledTextEl.style.display = 'block'
        window.localStorage.setItem('notes', container.innerHTML)
    })
    
    removeBtn.addEventListener('click', () => {
        el.remove()
    })
}

// Adding note function 
const addNoteBtn = document.querySelector('.add')
function addNote() {
    const note = document.createElement('div')
    note.classList.add('note')
    note.innerHTML = `<div class="note">
    <div class="sec-1">
        <i class="fa-regular fa-pen-to-square toggle-btn"></i>
        <i class="fa-regular fa-trash-can remove-btn"></i>
    </div>
    <textarea name="" id="" cols="30"></textarea>
    <div class="sec-2"></div>
    </div>`
    container.appendChild(note)
    addFunctionToNote(note)
}

addNoteBtn.addEventListener('click', () => {
    addNote()
})