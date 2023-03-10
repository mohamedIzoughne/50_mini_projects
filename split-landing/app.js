const sections = document.querySelectorAll('.container > div')


sections.forEach(section => {
    section.addEventListener('mouseenter', (e) => {
        sections.forEach(section => {
            section.classList.remove('active')
        })
        e.currentTarget.classList.add('active')
    })
});
