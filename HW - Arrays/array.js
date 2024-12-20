// -=-=-=-=-=-=-=-=- arrays -=-=-=-=-=-=-=-=-

// 1
let array = new Array(20)
for (let i = 0; i < array.length; i++) {
    array[i] = Math.floor(Math.random() * (100 - 1)) + 1;
}

// 2
for (const key in array) {
    console.log(`[${key}] - ${array[key]}`)
}

// 3
const divisibleBy7 = array.filter(num => num % 7 == 0)
if (divisibleBy7.length == 0) console.log("Element not found")
else console.log("Element found with index ", array.indexOf(divisibleBy7[0]))

// 4
array.sort((a, b) => b - a)
console.log(array)

// 5
for (let i = array.length/2; i < array.length; i++) {
    array[i] = 0
}
console.log(array)

// 6
array.splice(0, 3)
console.log(array)

// 7
let sameElementIndex = -1;
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if (array[i] == array[j]) {
            sameElementIndex = i
            break
        }
    }
}
if (sameElementIndex != -1) console.log("Same element : " + array[sameElementIndex])
else console.log("Same element not found!")

// 8
let array2 = array.slice(1, array.length-1)
console.log(array2)

// 9
const even = array2.filter(num => num % 2 == 0)
if (even.length == 0) console.log("Even elements not found")
else console.log("Number of even elements : ", even.length)