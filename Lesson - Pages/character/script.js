function homePage() {
    window.location = "/Lesson - Pages"
}

async function loadCharacter() {
    const params = new URLSearchParams(window.location.search)
    const id = params.get("id")
    const name = params.get("name")

    if (name) {
        const url = `https://thronesapi.com/api/v2/Characters`

        const responce = await fetch(url)
        const data = await responce.json()
        
        const character = data.find((ch) => ch.fullName.includes(name))

        if (character != undefined) {
            printCharacter(character)
        }
    }

    if (id) {
        const url = `https://thronesapi.com/api/v2/Characters/${id}`

        const responce = await fetch(url)
        const data = await responce.json()
        printCharacter(data)
    }
}

function printCharacter(character) {
    const container = document.getElementById('container')
    container.innerHTML = `<h1>${character.fullName}</h1>
                    <img src="${character.imageUrl}">
                    <div class="m-2">
                        <span>ID:</span>
                        <span style="font-weight: bold;">${character.id}</span>
                    </div>
                    <div class="m-2">
                        <span>First Name:</span>
                        <span style="font-weight: bold;">${character.firstName}</span>
                    </div>
                    <div class="m-2">
                        <span>Last Name:</span>
                        <span style="font-weight: bold;">${character.lastName}</span>
                    </div>
                    <div class="m-2">
                        <span>Full Name:</span>
                        <span style="font-weight: bold;">${character.fullName}</span>
                    </div>
                    <div class="m-2">
                        <span>Title:</span>
                        <span style="font-weight: bold;">${character.title}</span>
                    </div>
                    <div class="m-2">
                        <span>Family:</span>
                        <span style="font-weight: bold;">${character.family}</span>
                    </div>


                    <button onclick="homePage()" class="btn btn-danger">Go home</button>`
}

// const search = window.location.search
// const params =  new URLSearchParams(search)
// console.log(params.get("id"))

loadCharacter()