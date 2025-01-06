// "key=value; path=/; expires=дата видалення"
//document.cookie = "auth=111111111; path=/; expires=Fri, Jan 7 2025 19:29:00 GMT+2;"

//console.log(document.cookie)




// const today = new Date();
// today.setMinutes(today.getMinutes() + 5)
// document.cookie = `test=time; path=/; expires=${today.toUTCString()};`

// const cookies = document.cookie
// console.log(cookies)

// const keys = cookies.split("; ")
// console.log(keys)

// const mapKeys = new Map()
// for (const item of keys) {
//     const data = item.split("=")
//     mapKeys.set(data[0], data[1])
// }
// console.log(mapKeys)

// const user = mapKeys.get("test")
// if (user != undefined) {
//     console.log(user)
// }






// запис значення у кукі
function setCookie(key, value, expires = null) {
    document.cookie = `${key}=${value}; path=/; expires=${expires != null ? expires : ""}`
}
setCookie("cookies", "cookie")


// видалення кукі
function deleteCookie(key) {
    document.cookie = `${key}=; path=/; expires=Sun, Dec 1 2024 00:00:00 GMT;`
}
deleteCookie("cookies")


// отримання кукі
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
const time = getCookie("auth")
console.log(time)