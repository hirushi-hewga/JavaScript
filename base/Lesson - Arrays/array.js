// -=-=-=-=-=-=-=-=- arrays -=-=-=-=-=-=-=-=-
let obj = new Object()

// initialization type 1
var array = new Array(3) // lenght : 3
array[0] = 100
array[1] = 200
array[2] = 300
var array = new Array(3) // lenght : 3
var array = new Array(6.5, 2.2, 0, 100)

for (let i = 0; i < array.length; i++) {
    console.log(`Element[${i}] : ${array[i]}`)
}

// initialization type 2
var array = [] // empty array
var array = [3, -5, 123, 44, -1, 23, 123, 66] // lenght : 8

array[0] = 44
console.log(array[0]) // 44

console.log("Before : " + array)
array[5] = 60
console.log("After : " + array)

array[20] = 55
console.log("Array : " + array)

console.log(`Array lenght : ${array.length}`)

for (let i = 0; i < array.length; i++) {
    console.log(`Element[${i}] : ${array[i]}`)
}


array.forEach((elem, ind) => {
    console.log(`Element[${ind}] : ${elem}`)
})

console.log("for in")
// 0, 1, 2, 3, 4...
for (const key in array) {
    console.log(key)
}

console.log("for of")
// 3, -5, 123, 44...
for (const value of array) {
    console.log(value)
}


// -=-=-=-=-=-=-=-=- Array Methods -=-=-=-=-=-=-=-=-
console.log("Original Array : ", array)

array.push(777) // adda element to the end
console.log("Array : ", array)

array.pop() // remove the last element
console.log("Array : ", array)

array.shift() // remove the first element
console.log("Array : ", array)

array.unshift(555) // add to the beginning
console.log("Array : ", array)

console.log("Index of first 123 : ", array.indexOf(123))
console.log("Index of last 123 : ", array.lastIndexOf(123))

console.log("Found : ", array.find((elem) => elem < 0))

array.sort()
console.log("Sorted with custom func : ", array)

// compare result:
// 0 - itms are equals
// <0 - less
// >0 - bigger
array.sort((a, b) => a - b)
console.log("Sorted with custom func : ", array)

array.splice(2, 3)
console.log("After remove : ", array)

const copy = array.slice(1, array.length - 1)
console.log("Copied array : ", copy)

array = [4, 6, 8, 1, 13, 16, -4, 0, 99]

const filtered = array.filter((el) => el % 2 == 0)
console.log("Filtered array : ", filtered)

const colors = ["red", "brown", "green", "gold", "silver"]

const str = colors.join(" - ")
console.log("Str after join : ", str)

console.log("Elements after split : ", str.split(' - ').length)