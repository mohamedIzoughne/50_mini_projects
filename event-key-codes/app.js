const container = document.querySelector('.container')


document.addEventListener('keydown', (e) => {
    container.classList.add('active')
    const keyName = e.key
    const keyCode = e.keyCode
    const code = e.code

    document.querySelector('.key').textContent = keyName === ' ' ? 'Space' : keyName
    document.querySelector('.key-code').textContent = keyCode
    document.querySelector('.code').textContent = code

})