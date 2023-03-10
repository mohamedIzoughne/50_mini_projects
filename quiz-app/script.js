const quizContainer = document.querySelector('.quiz-container')

let grade = 0
let questionIndex = 0

const quesAndAnswers = {
  'Which language runs in a web browser': ['Java', 'C', 'Python', 'Javascript'],
  'What does CSS stand for': [
    'Centeral Style Sheets',
    'Cascading Style Sheets',
    'Cascading Simple Sheets',
    'Cars SUVs Sailboats',
  ],
  'What does Html stand for': [
    'Hypertext Markup Language',
    'Hypertext Markdown Language',
    'Hyperloop Machine Language',
    'Helicopters Teminals Motorboats Lambarginis',
  ],
  'What year was Javascript launched': [
    '1996',
    '1995',
    '1994',
    'none of the above',
  ],
}
const questions = Object.keys(quesAndAnswers)

updateQuiz(questionIndex)
const correctAnswers = [
  'Javascript',
  'Cascading Style Sheets',
  'Hypertext Markup Language',
  '1995',
]

function gradeIncrement() {
  if (questionIndex < questions.length) {
    if (correctAnswers[questionIndex] === getSelectedAnswer()) {
      grade++
    }
    if (questionIndex === 3) {
      showGrade()
    } else {
      questionIndex++
      updateQuiz(questionIndex)
    }
  }
}
function getSelectedAnswer() {
  const radios = document.querySelectorAll('[type="radio"]')
  let selected = ''
  radios.forEach((radio) => {
    if (radio.checked) {
      selected = radio.nextElementSibling.innerText
    }
  })
  return selected
}

function updateQuiz(i) {
  quizContainer.innerHTML = `
    <h3 class="text-center mt-5" id="question">
              ${questions[i]}?
            </h3>
            <ul class="list-group">
              <li class="list-group-item border-0 p-3">
                <input type="radio" name="answer" id="ques-1" />
                <label for="ques-1">${quesAndAnswers[questions[i]][0]}</label>
              </li>
              <li class="list-group-item border-0 p-3">
                <input type="radio" name="answer" id="ques-2" />
                <label for="ques-2">${quesAndAnswers[questions[i]][1]}</label>
              </li>
              <li class="list-group-item border-0 p-3">
                <input type="radio" name="answer" id="ques-3" />
                <label for="ques-3">${quesAndAnswers[questions[i]][2]}</label>
              </li>
              <li class="list-group-item border-0 p-3">
                <input type="radio" name="answer" id="ques-4" />
                <label for="ques-4">${quesAndAnswers[questions[i]][3]}</label>
              </li>
              <button class="submit-btn btn btn-primary my-3">Submit</button>
            </ul>
          </div>
    `
  submitBtn = document.querySelector('.submit-btn')
  submitBtn.addEventListener('click', () => gradeIncrement())
}

function showGrade() {
  quizContainer.innerHTML = `<h3 class="text-center p-3">
  You answered ${grade.toString()}/${questions.length} questions correctly
  </h3>
  <button class="btn btn-primary w-100 mb-2" id="reload-btn">Reload</button>
`
  const reloadBtn = document.getElementById('reload-btn')
  reloadBtn.addEventListener('click', () => reload())
}

function reload() {
  questionIndex = 0
  grade = 0
  updateQuiz(questionIndex)
}
