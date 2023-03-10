

// Toggle Active class

const btnElements = document.querySelectorAll('button')


btnElements.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const activeBtn = document.querySelectorAll('.active')
        e.currentTarget.classList.toggle('active')
        
        if(e.currentTarget.classList.contains('active')) {
            if (activeBtn.length === 2) {
                if (e.currentTarget.id === 'fast') {
                    document.getElementById('cheap').classList.remove('active')
                } else if (e.currentTarget.id === 'cheap') {
                    document.getElementById('good').classList.remove('active')
                } else { 
                    document.getElementById('fast').classList.remove('active')
                }
            }
        }

    })
})

// Loader
window.onload =() => {
    setTimeout(() => {
        document.querySelector('.wrapper-loader').style.opacity = 0
        setTimeout(()=> {
            document.querySelector('.wrapper-loader').remove()
        }, 400)
    }, 2000);
}