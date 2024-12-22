// var obj = new Object()

// var obj = {}
// obj.name = "Olena"
// obj.name = "Mukola"
// obj.number = 1010
// obj.address = "Soborna 16"
// console.log(`Name : ${obj.name}. Address : ${obj.address}`)
// delete obj.address;
// console.log(`Name : ${obj.name}. Address : ${obj.address}`)

// let product = {
//     name:"matarola G8",
//     price:3500,
//     memory:256,
//     isLocked:true,
//     aplications:["Facebook","PlayMarket","Viber"],
//     owner:{
//         name:"Vitia",
//         surname:"Ivanchuk"
//     }
// }
// console.log(`Model : ${product.name}. Owner : ${product.owner.name}`)




// -=-=-=-=-=-=-=-=- objects -=-=-=-=-=-=-=-=-
/*
let product = {};
product["name"] = "Ball"
product["size"] = 20.5
product["price"] = 420
product["type"] = "mini-football"

product["name"] = "Football" // override

console.log("Name : " + product["name"])
console.log("Size : " + product["size"])
console.log("Price : " + product["price"])
console.log("Type : " + product["type"])
*/


/*
let student = {}
student.name = "Vova"
student.age = 30

student["Average Mark"] = 7.8
student.averageMark = 7.8

delete student.averageMark

student.address = "Leemontova 45b"
if ('address' in student) {
    alert(student.address)
}
else {
    alert("Student has not an address")
}

//view all properties
for (var property in student) {
    alert(property + " : " + student[property])
}
*/


/*
var car = {
    model:"X",
    power:250,
    color:"Dark Blue",
    year:2018
}

var res = "\tCar info :\n"
for (var property in car) {
    res += property + " : " + car[property] + "\n"
}
alert(res)
*/


/*
// inner objects
let person = {
    firstName:"Bob",
    lastName:"Bobovich",
    birthdate:2010,
    address:{
        street:"Soborna",
        city:"Rivne",
        building:"5a"
    },
    cars:["Nissan Primera","Ford Focus","Toyota Avensise"]
}
alert(`Name : ${person.firstName} ${person.lastName}
Birthdate : ${person.birthdate}\nCity : ${person.city}
Address: ${person.address.street} ${person.address.building}
Cars : ${person.cars[0]}, ${person.cars[1]}, ${person.cars[2]}`)
*/