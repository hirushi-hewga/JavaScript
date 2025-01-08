function printBooks(books) {
    const table = document.getElementById("booksTable")
    table.innerHTML = ""

    for (let i = 0; i < books.length; i++) {
        const book = books[i]
        const row = `<tr>
                       <th scope="row">${i + 1}</th>
                       <td>${book.title}</td>
                       <td>${book.author}</td>
                       <td>${book.year}</td>
                       <td>${book.price}</td>
                       <td><button onclick="removeBook('${i}')" class="btn btn-danger">Remove</button></td>
                     </tr>`
        table.innerHTML += row
    }
}

function loadBooks() {
    const json = localStorage.getItem("books")

    if (json) {
        const books = JSON.parse(json)
        printBooks(books)
    }
}

loadBooks()

function removeBook(index) {
    const books = JSON.parse(localStorage.getItem("books"))
    books.splice(index, 1)
    localStorage.setItem("books", JSON.stringify(books))
    printBooks(books)
}

function validateForm(book) {
    const titleError = document.getElementById("title-error")
    const authorError = document.getElementById("author-error")
    const yearError = document.getElementById("year-error")
    const priceError = document.getElementById("price-error")

    if (book.title.trim().length === 0) {
        titleError.hidden = false
        return false
    } else {
        titleError.hidden = true
    }

    if (book.author.trim().length === 0) {
        authorError.hidden = false
        return false
    } else {
        authorError.hidden = true
    }

    if (book.year.trim().length === 0) {
        yearError.hidden = false
        return false
    } else {
        yearError.hidden = true
    }

    if (book.price.trim().length === 0) {
        priceError.hidden = false
        return false
    } else {
        priceError.hidden = true
    }

    return true
}

function addBookHandler() {
    const book = {}

    book.title = document.getElementById("title").value
    book.author = document.getElementById("author").value
    book.year = document.getElementById("year").value
    book.price = document.getElementById("price").value

    if (!validateForm(book)) {
        return
    }

    document.getElementById("title").value = ""
    document.getElementById("author").value = ""
    document.getElementById("year").value = ""
    document.getElementById("price").value = ""

    const json = localStorage.getItem("books")

    const books = json ? JSON.parse(json) : []

    books.push(book)

    localStorage.setItem("books", JSON.stringify(books))

    printBooks(books)
}






















function localstorageFunc() {
    // запис
    localStorage.setItem("day", "Friday")
    
    // читання
    // якщо ключа немає повертається null
    const day = localStorage.getItem("day")
    if (day) { //спрацює якщо об'єкт не null
        console.log(day)
    } else {
        console.log("key day not found")
    }


    localStorage.removeItem("day")
}

//localstorageFunc()






















// JSON

function json() {
    const json = `{
        "first_name": "John",
        "last_name": "Smith",
        "is_alive": true,
        "age": 27,
        "address": {
          "street_address": "21 2nd Street",
          "city": "New York",
          "state": "NY",
          "postal_code": "10021-3100"
        },
        "phone_numbers": [
          {
            "type": "home",
            "number": "212 555-1234"
          },
          {
            "type": "office",
            "number": "646 555-4567"
          }
        ],
        "children": [
          "Catherine",
          "Thomas",
          "Trevor"
        ],
        "spouse": null
      }`
    
    // JSON.parse(json) -> перетворює json у JS об'єкт
    const object = JSON.parse(json)
    console.log(object.first_name)
    
    const user = {
        name: "John",
        surname: "Cena",
        age: 50
    }
    
    const userJson = JSON.stringify(user)
    console.log(userJson)
}