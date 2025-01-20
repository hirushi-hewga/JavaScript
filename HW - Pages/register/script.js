
// document.getElementById("username").value = ""
// document.getElementById("email").value = ""
// document.getElementById("password").value = ""
// document.getElementById("repeatPassword").value = ""
// document.getElementById("firstname").value = ""
// document.getElementById("lastname").value = ""





function validateForm(form) {
    const usernameError = document.getElementById("username-error")
    const emailError = document.getElementById("email-error")
    const passwordError = document.getElementById("password-error")
    const repeatPasswordError = document.getElementById("repeatPassword-error")
    const firstnameError = document.getElementById("firstname-error")
    const lastnameError = document.getElementById("lastname-error")
    let isValid = true


    if (form.username.trim().length === 0) {
        usernameError.hidden = false
        isValid = false
    } else {
        usernameError.hidden = true
    }

    if (form.email.trim().length === 0) {
        emailError.hidden = false
        isValid = false
    } else {
        emailError.hidden = true
    }

    if (form.password.trim().length === 0) {
        passwordError.hidden = false
        isValid = false
    } else {
        passwordError.hidden = true
    }

    if (form.repeatPassword.trim().length === 0) {
        repeatPasswordError.hidden = false
        isValid = false
    } else {
        repeatPasswordError.hidden = true
    }

    if (form.firstname.trim().length === 0) {
        firstnameError.hidden = false
        isValid = false
    } else {
        firstnameError.hidden = true
    }

    if (form.lastname.trim().length === 0) {
        lastnameError.hidden = false
        isValid = false
    } else {
        lastnameError.hidden = true
    }


    return isValid
}

function registerHandler() {
    const form = {}

    form.username = document.getElementById("username").value
    form.email = document.getElementById("email").value
    form.password = document.getElementById("password").value
    form.repeatPassword = document.getElementById("repeatPassword").value
    form.firstname = document.getElementById("firstname").value
    form.lastname = document.getElementById("lastname").value

    if (!validateForm(form)) {
        return
    }

    const users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []
    users.push(form)
    localStorage.setItem("users", JSON.stringify(users))

    window.location = "../login"
}