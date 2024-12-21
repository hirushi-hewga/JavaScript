// -=-=-=-=-=-=-=-=- strings -=-=-=-=-=-=-=-=-

// 1
function NumberOfSpaces(str) {
    return str.split("").filter(elem => elem == " ").length
}
let text = "how are you today? And, blabla. Goodbye!"
console.log(`Number of spaces : ${NumberOfSpaces(text)}`)

// 2
function ToUpper(str) {
    str = str.split("")
    str[0] = str[0].toUpperCase()
    return str.join("")
}
console.log("Before : ", text)
console.log("After : ", ToUpper(text))

// 3
function NumberOfWords(str) {
    return str.split(" ").length
}
console.log("Number of words : ", NumberOfWords(text))

// 4
function ToAbbr(str) {
    str = str.split(" ")
    let abbr = ""
    for (let i = 0; i < str.length; i++) {
        abbr += str[i][0]
    }
    return abbr.toUpperCase()
}
console.log("abbr : ", ToAbbr(text))

// 5
function IsPalindrom(str) {
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    return str == str.split('').reverse().join('')
}
console.log("Is palindrom : ", IsPalindrom(text))

// 6
function UrlInfo(url) {
    const Url = new URL(url)
    console.log('Protocol : ', Url.protocol);  
    console.log('Domain : ', Url.hostname);  
    console.log('Path : ', Url.pathname); 
}
const url = "https://itstep.org/ua/about"
UrlInfo(url)