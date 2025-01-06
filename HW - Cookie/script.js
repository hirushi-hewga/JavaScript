function getRGBcolor(color, type, code) {
    return `<div class="m-3 p-5" style="border-radius: 10px; background-color: rgb(${code}); width: 350px; height: 250px;">
            <div class="m-auto text-center" style="background-color: rgba(255,255,255,0.7); width: auto; height: auto; border-radius: 10px; display: flex; flex-direction: column;">
                <label class="mt-3">${color}</label>
                <label class="m-3">${type}</label>
                <label class="mb-3">${code}</label>
            </div>
        </div>`
}


function getRGBAcolor(color, type, code) {
    return `<div class="m-3 p-5" style="border-radius: 10px; background-color: rgba(${code}); width: 350px; height: 250px;">
            <div class="m-auto text-center" style="background-color: rgba(255,255,255,0.7); width: auto; height: auto; border-radius: 10px; display: flex; flex-direction: column;">
                <label class="mt-3">${color}</label>
                <label class="m-3">${type}</label>
                <label class="mb-3">${code}</label>
            </div>
        </div>`
}


function getHEXcolor(color, type, code) {
    return `<div class="m-3 p-5" style="border-radius: 10px; background-color: #${code}; width: 350px; height: 250px;">
            <div class="m-auto text-center" style="background-color: rgba(255,255,255,0.7); width: auto; height: auto; border-radius: 10px; display: flex; flex-direction: column;">
                <label class="mt-3">${color}</label>
                <label class="m-3">${type}</label>
                <label class="mb-3">#${code}</label>
            </div>
        </div>`
}


class Color {
    constructor(info) {
        const data = info.split(":",3)
        this.color = data[0]
        this.type = data[1]
        this.code = data[2]
    }
}


function setCookie(key, value, expires = null) {
    document.cookie = `${key}=${value}; path=/; expires=${expires != null ? expires : ""}`
}


function deleteCookie(key) {
    document.cookie = `${key}=; path=/; expires=Sun, Dec 1 2024 00:00:00 GMT;`
}


function getCookies() {
    return cookies = document.cookie.split("; ")
}


function contains(color_) {
    const cookies = getCookies()
    for (const item of cookies) {
        const data = item.split("=")
        const color = new Color(data[1])
        if (color.color == color_)
            return true
    }
    return false
}

function isLetters(color_) {
    for (const symbol of color_) {
        const code = symbol.charCodeAt(0);
        if (!((code >= 65 && code <= 90) || (code >= 97 && code <= 122)))
            return false;
    }
    return true;
}


document.addEventListener("DOMContentLoaded", () => {
        const cookies = getCookies()
        for (const item of cookies) {
            const data = item.split("=")
            const color = new Color(data[1])
            addColor(color.color, color.type, color.code)
        }
})

function saveHandler(event) {
    const color_ = document.getElementById("colorInput").value
    const type_ = document.getElementById("typeSelect").value
    const code_ = document.getElementById("codeInput").value
    if (color_ != "" && !contains(color_) && isLetters(color_)) {
        const today = new Date()
        today.setDate(today.getDate() + 1)
        setCookie(color_, `${color_}:${type_}:${code_}`, today.toUTCString())

        addColor(color_, type_, code_)
    }        
}

function addColor(color_, type_, code_) {
    const colors = document.getElementById("colors")
    if (type_ == "RGB")
        colors.innerHTML += getRGBcolor(color_, type_, code_)
    if (type_ == "RGBA")
        colors.innerHTML += getRGBAcolor(color_, type_, code_)
    if (type_ == "HEX")
        colors.innerHTML += getHEXcolor(color_, type_, code_)
}