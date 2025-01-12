function formHandler(event) {
    event.preventDefault()

    const form = event.target

    const params = {}

    params.login = form["login"].value
    params.email = form["email"].value
    params.password = form["password"].value
    params.repeatPassword = form["repeat"].value

    printText(email)
}

function printText(email) {
    const text = document.getElementById("text")
    if (email.trim() != "") {
        text.innerHTML = `<label>На ${email} надіслано лист із підтвердженням</label>`
    } else text.innerHTML = ""
}