function formHandler(event) {
    event.preventDefault()

    const form = event.target

    const params = {}

    params.login = form["login"].value
    params.password = form["password"].value

    if (form["checkbox"].checked)
        saveToCookie(params)

    printText(form["checkbox"].checked, login)
}

function saveToCookie(params) {
    const today = new Date()
    today.setDate(today.getDate() + 5)
    document.cookie = `${params.login}=${params.password}; path=/; expires=${today.toUTCString()}`
}

function printText(checked, name) {
    const text = document.getElementById("text")
    if (checked) {
        text.innerHTML = `<label>Привіт, ${name}! Я тебе запам'ятав</label>`
    } else {
        text.innerHTML = `<label>Привіт, ${name}! Я тебе не запам'ятав</label>`
    }
}

function loadUser() {
    const name = document.cookie.split("; ")[0].split("=")[0]
    if (name != "")
        printText(true, name)
}
loadUser()