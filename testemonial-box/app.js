const wrapper = document.querySelector('.wrapper')

const profiles = [
  'Jonatham Nunfiez',
  'Mohamed Izourne',
  'Ayman Makrizi',
  'Mohamed Sousi',
  'David Kataro',
  'Kakashi Amoro',
]

const jobs = [
  'Graphic Designer',
  'Mobile Developer',
  'Web Developer',
  'Hacker',
  'Youtuber',
  'Mangaka',
]

let idx = 0
updateTestimonial(idx)

setInterval(() => {
  idx++
  if (idx >= profiles.length) {
    idx = 0
  }
  updateTestimonial(idx)
}, 10000)

function updateTestimonial(i) {
  wrapper.innerHTML = `
    <div class="progress-bar"></div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat,
        aspernatur! Ratione, expedita doloremque rem dolor et vero vel quae.
        Facilis provident dicta cupiditate non distinctio tempore est, minima
        nisi dolores!
      </p>
      <div class="person">
        <div class="avatar">
          <img src="imgs/avatar-0${i + 1}.png" alt="" />
        </div>
        <div class="info">
          <h4 class="profile-name">${profiles[i]}</h4>
          <p>${jobs[i]}</p>
        </div>
      </div>
    `
}
