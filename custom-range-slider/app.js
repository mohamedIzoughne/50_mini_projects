const rangeEl = document.getElementById('range')
const label = document.querySelector('#range + label')

rangeEl.addEventListener('input', () => {
  const value = rangeEl.value
  label.innerText = value
  label.style.left = value + '%'
})
