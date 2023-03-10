const emailInp = document.getElementById('email-input')
const passwordInp = document.getElementById('password-input')
const emailLabel = document.querySelector('.email-label')
const passwordLabel = document.querySelector('.password-label')


emailInp.addEventListener('focus', () => {
    emailLabel.classList.add('active')
});
emailInp.addEventListener('blur', () => {
    emailLabel.classList.remove('active')
});

passwordInp.addEventListener('focus', () => {
    passwordLabel.classList.add('active')
});
passwordInp.addEventListener('blur', () => {
    passwordLabel.classList.remove('active')
});