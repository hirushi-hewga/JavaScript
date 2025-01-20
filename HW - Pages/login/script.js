







function validateForm(form) {
    const emailError = document.getElementById("email-error")
    const passwordError = document.getElementById("password-error")
    let isValid = true


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


    return isValid
}



function loginHandler() {
    const form = {}

    form.email = document.getElementById("email").value
    form.password = document.getElementById("password").value

    if (!validateForm(form)) {
        return
    }

    const users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []

    const index = users.findIndex((item) => item.email == form.email && item.password == form.password)
    
    if (index === -1) {
        alert("Error!!!")
        document.getElementById("email").value = ""
        document.getElementById("password").value = ""
        return
    }

    window.location = `../?username=${users[index].username}`
}