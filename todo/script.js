// check local storage
const tasksContainer = document.querySelector('.tasks')
if (window.localStorage.getItem('tasks')) {
  tasksContainer.innerHTML = window.localStorage.getItem('tasks')
  const tasksElements = document.querySelectorAll('.task')
  tasksElements.forEach((task) => {
    toggleAndRemove(task)
  })
}

// Adding tasks functionality
const todoInp = document.querySelector('.todo-inp')

todoInp.addEventListener('keyup', (e) => {
  const key = e.key
  if (key === 'Enter') {
    const value = e.target.value
    e.target.value = ''
    addTask(value)
  }
})

// line through task when completed and remove function
function toggleAndRemove(ele) {
  ele.addEventListener('contextmenu', (e) => {
    e.preventDefault()
    e.target.remove()
    updateLocalStorage()
  })
  ele.addEventListener('click', (e) => {
    e.target.classList.toggle('through')
    updateLocalStorage()
  })
}

const addTask = (value) => {
  const task = document.createElement('div')
  task.classList.add('task')
  task.innerText = value
  toggleAndRemove(task)
  tasksContainer.appendChild(task)
  updateLocalStorage()
}

function updateLocalStorage() {
  const tasksContainer = document.querySelector('.tasks')
  window.localStorage.setItem('tasks', tasksContainer.innerHTML)
}
