function formHandler(event) {
    event.preventDefault()

    const form = event.target

    const params = {}
    
    params.red = form["red"].value
    params.green = form["green"].value
    params.blue = form["blue"].value

    if (!validateForm(params)) {
        return
    }

    addColor(params)
}

function addColor(params) {
    const colors = document.getElementById("colors")

    colors.innerHTML += `<div class="color-container m-3">
            <div class="color" style="background-color: rgb(${params.red}, ${params.green}, ${params.blue});"></div>
            <label>RGB (${params.red}, ${params.green}, ${params.blue})</label>
        </div>`
}




function validateForm(params) {
    const redError = document.getElementById("red-error")
    const greenError = document.getElementById("green-error")
    const blueError = document.getElementById("blue-error")

    if (params.red > 255) {
        redError.hidden = false
        return false
    } else {
        redError.hidden = true
    }

    if (params.green > 255) {
        greenError.hidden = false
        return false
    } else {
        greenError.hidden = true
    }

    if (params.blue > 255) {
        blueError.hidden = false
        return false
    } else {
        blueError.hidden = true
    }

    return true
}