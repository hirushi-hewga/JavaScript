function setCookie(key, value, expires = null) {
    document.cookie = `${key}=${value}; path=/; expires=${expires != null ? expires : ""}`
}

function deleteCookie(key) {
    document.cookie = `${key}=; path=/; expires=Sun, Dec 1 2024 00:00:00 GMT;`
}

function getCookie(key) {
    const cookies = document.cookie.split("; ")
    for (const item of cookies) {
        const data = item.split("=")
        if (data[0] === key) {
            return data[1]
        }
    }
    return null
}


function getMainPage(email) {
    return `<div>
        <h1 style="text-align: center;">Hello ${email}</h1>
    </div>`
}


function getLoginPage() {
    return `<div style="text-align: center; width: 35%; margin: auto;">
            <div>
                <label>Email</label>
            </div>
            <div>
                <input id="email" class="w-100 m-2" type="email">
            </div>
            <div>
                <button onclick="loginHandler(event)" class="btn btn-success w-100 m-2">Login</button>
            </div>
        </div>`
}


document.addEventListener("DOMContentLoaded", () => {
    const user = getCookie("user")
    if (user != null) {
        const root = document.getElementById("root")
        root.innerHTML = getMainPage(user)
    }
})

function loginHandler(event) {
    const email = document.getElementById("email").value
    const today = new Date()
    today.setDate(today.getDate() + 1)
    setCookie("user", email, today.toUTCString())
    
    const root = document.getElementById("root")
    root.innerHTML = getMainPage(email)
}