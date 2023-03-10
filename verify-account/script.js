const inputs = document.querySelectorAll('.inputs input')

inputs.forEach((inp) => {
  inp.addEventListener('keyup', (e) => {
    e.target.value = ''
    const key = e.key
    e.target.value = key
    if (!isNaN(+key) || key === 'Enter') {
      const nextInp = e.target.nextElementSibling
      if (nextInp !== null) {
        nextInp.focus()
      }
    } else if (key === 'Backspace') {
      const prevInp = e.target.previousElementSibling
      if (prevInp !== null) {
        prevInp.focus()
      }
    }
  })
})

// What is the difference between keyup and keydown ?
