const audioBtns = document.querySelectorAll('.container >div')

audioBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        audioBtns.forEach(ele => {
            ele.children[0].pause()
            ele.children[0].currentTime = 0
        })
        e.currentTarget.children[0].play()
    })
})