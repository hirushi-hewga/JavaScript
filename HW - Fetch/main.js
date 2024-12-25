
const gitHubUsersAPI = "https://api.github.com/users"
const avatarImg = document.getElementById("avatar-img")
const searchBtn = document.getElementById("search-btn")
const name_ = document.getElementById("name")
const login_ = document.getElementById("login")
const url = document.getElementById("url")
const blog = document.getElementById("blog")
const city = document.getElementById("city")
const email = document.getElementById("email")
const followers = document.getElementById("followers")
const following = document.getElementById("following")



searchBtn.onclick = () => {
    const login = document.getElementById("loginInput").value
    showGithubUserAvatar(login)
    showGithubUserUrl(login)
    showGithubUserBlog(login)
    showGithubUserCity(login)
    showGithubUserEmail(login)
    showGithubUserFollowers(login)
    showGithubUserFollowing(login)
    showGithubUserName(login)
    showGithubUserLogin(login)
}



async function showGithubUserAvatar(login) {
    const responce = await fetch(gitHubUsersAPI + "/" + login)
    const result = await responce.json()
    avatarImg.src = result.avatar_url
}

async function showGithubUserUrl(login) {
    const responce = await fetch(gitHubUsersAPI + "/" + login)
    const result = await responce.json()
    url.innerHTML = result.html_url
}

async function showGithubUserBlog(login) {
    const responce = await fetch(gitHubUsersAPI + "/" + login)
    const result = await responce.json()
    blog.innerHTML = result.blog
}
//////////////////////////////////
async function showGithubUserCity(login) {
    const responce = await fetch(gitHubUsersAPI + "/" + login)
    const result = await responce.json()
    city.innerHTML = result.location
}

async function showGithubUserEmail(login) {
    const responce = await fetch(gitHubUsersAPI + "/" + login)
    const result = await responce.json()
    email.innerHTML = result.email
}

async function showGithubUserFollowers(login) {
    const responce = await fetch(gitHubUsersAPI + "/" + login)
    const result = await responce.json()
    followers.innerHTML = result.followers
}

async function showGithubUserFollowing(login) {
    const responce = await fetch(gitHubUsersAPI + "/" + login)
    const result = await responce.json()
    following.innerHTML = result.following
}

async function showGithubUserName(login) {
    const responce = await fetch(gitHubUsersAPI + "/" + login)
    const result = await responce.json()
    name_.innerHTML = result.name
}

async function showGithubUserLogin(login) {
    const responce = await fetch(gitHubUsersAPI + "/" + login)
    const result = await responce.json()
    login_.innerHTML = result.login
}