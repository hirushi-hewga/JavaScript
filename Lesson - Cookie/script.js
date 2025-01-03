// "key=value; path=/; expires=дата видалення"
//document.cookie = "auth=111111111; path=/; expires=Fri, Jan 5 2025 19:29:00 GMT+2;"

//console.log(document.cookie)




const today = new Date();
today.setMinutes(today.getMinutes() + 5)
document.cookie = `test=time; path=/; expires=${today.toUTCString()};`

const cookies = document.cookie
console.log(cookies)

const keys = cookies.split("; ")
console.log(keys)

const mapKeys = new Map()
for (const element of object) {
    
}

