function formHandler(event) {
    event.preventDefault()

    const form = event.target
    const checkboxes = form.querySelectorAll('input[type="checkbox"]')

    const params = {}
    
    params.firstname = form["firstname"].value
    params.lastname = form["lastname"].value
    params.birthday = form["birthday"].value
    params.gender = form["male"].checked ? "Male" : "Famale"
    params.country = form["country"].value
    params.city = form["city"].value
    params.skills = []

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            params.skills.push(checkboxes[i].name);
        }
    }
    
    if (!validateForm(params)) {
        return
    }

    printResult(params)
}

function printResult(params) {
    const firstname = document.getElementById("table-firstname")
    const lastname = document.getElementById("table-lastname")
    const birthday = document.getElementById("table-birthday")
    const gender = document.getElementById("table-gender")
    const country = document.getElementById("table-country")
    const city = document.getElementById("table-city")
    const skills = document.getElementById("table-skills")
    
    firstname.innerHTML = params.firstname
    lastname.innerHTML = params.lastname
    birthday.innerHTML = params.birthday
    gender.innerHTML = params.gender
    country.innerHTML = params.country
    city.innerHTML = params.city
    skills.innerHTML = params.skills.join(", ")
}




function validateForm(params) {
    const firstnameError = document.getElementById("firstname-error")
    const lastnameError = document.getElementById("lastname-error")
    const birthdayError = document.getElementById("birthday-error")
    const datePattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d{2}$/

    if (params.firstname.trim().length === 0) {
        firstnameError.hidden = false
        return false
    } else {
        firstnameError.hidden = true
    }

    if (params.lastname.trim().length === 0) {
        lastnameError.hidden = false
        return false
    } else {
        lastnameError.hidden = true
    }

    if (!datePattern.test(params.birthday)) {
        birthdayError.hidden = false
        return false
    } else {
        birthdayError.hidden = true
    }

    return true
}