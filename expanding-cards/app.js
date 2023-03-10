const boxes = document.querySelectorAll(".box")

boxes.forEach((box) => {
    box.addEventListener("click", (e) => {
        boxes.forEach(ele => {
            if (ele !== e.target) {
                ele.classList.remove("active")
            }
        })
        e.target.classList.toggle("active")
    })
})
