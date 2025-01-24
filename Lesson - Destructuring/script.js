// деструктизація

// з масивами
const arr1 = [1,4,43,54,7,8,9,0]

const [f, s, t, fo, fi] = arr1

// отримати 1 та 4 елементи
const [value1, , , value4] = arr1


// console.log(f)
// console.log(s)
// console.log(t)
// console.log(fo)
// console.log(fi)

// з об'єктами

const user = {
    name: "Mike",
    surname: "Anderson",
    email: "user@email.com",
    password: "qwerty",
    age: 60,
    city: "Rivne"
}

const {email, password} = user

data = ["name", "mike"]





// вкладені об'єкти

const user2 = {
    name: "Mike",
    surname: "Anderson",
    email: "user@email.com",
    password: "qwerty",
    age: 60,
    address: {
        city: "Lviv",
        country: "Ukraine",
        postalCode: "33000"
    }
}

const credentials = {
    email: "user@email.com",
    password: "qwerty"
}

const {address: {city}} = user2
// console.log(city)

user2.address.city = "Rivne"

// console.log(city)




// деструктизація та функції
function loginPage({email, password}) {
    //console.log(email)
    //console.log(password)
}

loginPage(credentials)




// ... - решта

const array1 = [1,7,2,65,87,3,7]
const array2 = [...array1]

//console.log("arr1 : ", array1)
//console.log("arr2 : ", array2)






// об'єкти
const obj1 = {
    value: "test",
    name: "Mike"
}

const obj2 = {...obj1}


const [first, ...other] = array1

// [1,7,2,65,87,3,7]
// first = 1
// other = [7,2,65,87,3,7]

// console.log(first)
// console.log(other)


const styles = {
    color: "red",
    fontSize: "1.5em",
    fontWeight: "bold"
}

const {color, ...fontStyles} = styles

// console.log(color)
// console.log(fontStyles)






// об'єднання масивів
const colors = ["red", "blue", "yellow", "green"]
const lightColors = ["lightred", "lightgray", "lightyellow"]

const allColors = [...colors, ...lightColors]

console.log(allColors)







// об'єднання об'єктів

const boxStyles = {
    size: "2px",
    color: "black",
    radius: "50%"
}

const divStyles = {
    width: "100px",
    color: "green",
    height: "100px"
}

const allStyles = {...divStyles, ...boxStyles}

// allStyles.width = divStyles.width
// allStyles.height = divStyles.height
// allStyles.color = divStyles.color
// allStyles.size = boxStyles.size
// allStyles.color = boxStyles.color
// allStyles.radius = boxStyles.radius

// console.log(allStyles)



// const myObj = {
//     width: 200
// }

// myObj.width = 500
// myObj.height = 600







const initState = {
    products: [],
    productsLoaded: false,
    categories: [],
    categoriesLoaded: false
}

function ShopActions(state, action) {
    if (action === "load_products") {
        
        // state.products = ["prod1", "prod2"]
        // state.productsLoaded = true
        // return state
        const data = ["prod1", "prod2"]
        return {...state, products: data, productsLoaded: true}
        
    } else if (action === "delete_products") {
        
        // state.products = []
        // state.productsLoaded = false
        // return state
        return {...state, products: [], productsLoaded: false}

    } else if (action === "load_categories") {
        // state.categories = ["cat1", "cat2"]
        // state.categoriesLoaded = true
        // return state
        const data = ["cat1", "cat2"]
        return {...state, categories: data, categoriesLoaded: true}

    } else if (action === "delete_categories") {
        // state.categories = []
        // state.categoriesLoaded = false
        // return state
        return {...state, categories: [], categoriesLoaded: false}

    } else {
        return state
    }
}

let state = {...initState}

state = ShopActions(state ,"load_categories")
console.log(state)

state = ShopActions(state ,"load_products")
console.log(state)
state = ShopActions(state ,"delete_products")
console.log(state)



































