const ratings = document.querySelectorAll('.rating')
const panel = document.getElementById('panel')
const sendBtn = document.querySelector('.send-btn')
const ratingsContainer = document.querySelector('.ratings')

let selectedChoice
// Event Bubbling
ratingsContainer.addEventListener('click', (e) => {
  const target = e.target
  if (target.classList.contains('rating')) {
    removeAllActive()
    selectedChoice = target.getAttribute('data-rating')
    target.classList.add('active')
  } else if (target.parentNode.classList.contains('rating')) {
    removeAllActive()
    selectedChoice = target.getAttribute('data-rating')
    target.parentNode.classList.add('active')
  }
})

sendBtn.addEventListener(
  'click',
  () => {
    showResponse(selectedChoice)
  },
  { once: true }
)

// Remove active class from ratings
function removeAllActive() {
  ratings.forEach((ele) => {
    ele.classList.remove('active')
  })
}

// Show Thank you
function showResponse(msg) {
  panel.innerHTML = `
  <div class="response">
  <div class="icon">
    <i class="fa-solid fa-heart heart-icon"></i>
  </div>
  <h4>Thank you</h4>
  <p class="feedback-msg">Feedback: ${msg}</p>
  <p>We'll use your feedback to improve our customer support</p>
    `
}
