



function ensureLoggedIn() {
    const users = JSON.parse(localStorage.getItem("users"))
    const params = new URLSearchParams(window.location.search)
    const username = params.get("username")
    const index = users.findIndex((item) => item.username == username)

    if (!users || !username || index == -1) {
        window.location = "./login"
    }

    const firstname = document.getElementById("firstname")
    const lastname = document.getElementById("lastname")
    const name = document.getElementById("username")
    const email = document.getElementById("email")

    firstname.innerHTML += `<label>${users[index].firstname}</label>`
    lastname.innerHTML += `<label>${users[index].lastname}</label>`
    name.innerHTML += `<label>${users[index].username}</label>`
    email.innerHTML += `<label>${users[index].email}</label>`
}

ensureLoggedIn()