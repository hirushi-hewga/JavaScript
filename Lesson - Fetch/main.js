
const gitHubUsersAPI = "https://api.github.com/users"
const privateAPI = ""


async function showAPIResult(api) {
    const responce = await fetch(api)
    console.log("Status responce " + responce.status)
    const json = await responce.json()
    console.log(json)
}

showAPIResult(privateAPI)


//async function showGitHubUsers() {
//    const responce = await fetch(gitHubUsersAPI)
//    console.log("Status responce " + responce.status)
//    const users = await responce.json()
//    console.log(users)
//    console.log(users[0].id)
//    console.log(users[0].login)
//}

showGitHubUsers()