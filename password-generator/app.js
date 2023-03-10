const lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "{", "}", "[", "]", "|", "\\", ":", ";", "\"", "'", "<", ">", ",", ".", "?", "/"]

const listsObj = {
    'lowerCase': lowerCase,
    'upperCase': upperCaseLetters,
    'numbers': numbers,
    'symbols': symbols
}

const generateBtn = document.getElementById('generate')
const checkboxes = document.querySelectorAll('[type="checkbox"]')
const passwordEl = document.querySelector('.password .pass')

function randomInRange(min, max) {  
    return Math.floor(Math.random() * (max - min) + min); 
}

generateBtn.addEventListener('click', () => {
    let password = ''
    const length = document.querySelector('.length').value
    const checked = []
    checkboxes.forEach(checkbox => {
        if(checkbox.checked) {
            checked.push(checkbox.getAttribute('data-name'))
        }
    })
    for (i = 0; i < length; i++) {
        const l = randomInRange(0, checked.length)
        password += listsObj[checked[l]][randomInRange(0, listsObj[checked[l]].length)]
    }

    passwordEl.innerHTML = password
})

//  Make Copy function

const copyBtn = document.querySelector('.copy')

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(passwordEl.textContent)
})