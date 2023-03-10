// Select Elements
const inputEl = document.getElementById('input')
const formEl = document.getElementById('search-form')
const userEl = document.querySelector('.user')

const USERS_URL = 'https://api.github.com/users/'

// fetch user info
async function getProfile(username) {
  try {
    const { data } = await axios(USERS_URL + username)

    showUser(data)
    getRepos(username)
  } catch (err) {
    if (err.response.status === 404) {
      showErrorCard('No Profile with This Username')
    }
  }
}

// EventListener for submit
formEl.addEventListener('submit', (e) => {
  e.preventDefault()
  const user = inputEl.value
  userEl.style.padding = '20px'
  if (user) {
    getProfile(user)
  }

  inputEl.value = ''
})

// get repositories sorted by time
async function getRepos(username) {
  try {
    const { data } = await axios(USERS_URL + username + '/repos?sort=created')

    showRepos(data)
  } catch (err) {
    showErrorCard('Problem Fetching Repos')
  }
}

function showUser(user) {
  userEl.innerHTML = `
    <div class="profile-img">
    <img src='${user.avatar_url}' alt="username"></img>
        </div>
        <div class="info">
          <h4 class="username">${user.name}</h4>
          <p class="description">
          </p>
          <div class="data">
            <div class="followers"><span>${user.followers} </span>Followers</div>
            <div class="following"><span>${user.following} </span>Following</div>
            <div class="repos-count"><span>${user.public_repos} </span>Repos</div>
          </div>
          <div id="last-repos">
          </div>
        </div>
    `
}

// message card
function showErrorCard(msg) {
  userEl.innerHTML = `
          <div class="not-found">
              <h1>
                ${msg}
              </h1>
            </div>
          `
}

// display repos on the Dom
function showRepos(repos) {
  const lastRepos = document.getElementById('last-repos')

  for (let i = 0; i < 6; i++) {
    if (i < repos.length) {
      const repoEl = document.createElement('a')
      repoEl.innerHTML = repos[i].name
      repoEl.href = repos[i].html_url
      repoEl.target = '_blank'
      lastRepos.appendChild(repoEl)
    } else {
      break
    }
  }
}
