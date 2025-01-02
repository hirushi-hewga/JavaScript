//const api = "https://www.omdbapi.com/?apikey=6126fcdb&s=potter&type=movie"




const apiKey = "6126fcdb";
const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&s=`;


async function fetchMovies(query, type, page) {
    const response = await fetch(`${apiUrl}${query}&type=${type}&page=${page}`)
    const data = await response.json()
    return data
}

async function search(page) {
    const title = document.getElementById('titleSelect').value
    const type = document.getElementById('typeSelect').value

    try {
        const data = await fetchMovies(title, type, page)
        const pageCount = Math.ceil(data.totalResults / 10)
        //console.log(pageCount)
        display(data)
        pagination_(pageCount, page)
    } catch (error) {
        console.log(error)
    }
}

document.getElementById('searchButton').addEventListener('click', () => {  
    search(1)
})

function display(data) {
    const films = document.getElementById('films')

    films.innerHTML = ''
    for (let i = 0; i < data.Search.length; i++) {
        const current = data.Search[i]
        films.innerHTML += `<div class="film">
                              <img src="${current.Poster}" alt="${current.Title}" class="img-fluid">  
                              <h5>${current.Title}</h5>  
                              <p>${current.Year}</p>
                            </div>`
    }
}

function pagination_(pageCount, page) {
    //console.log(pageCount)
    //console.log(page)
    const pagination = document.getElementById('pagination')
    pagination.innerHTML = ''
    
    let prevPage = page - 1
    let nextPage = page + 1
    if (prevPage < 1) {
        prevPage = 1
    }
    if (nextPage > pageCount) {
        nextPage = pageCount
    }
    
    pagination.innerHTML += `<li onclick="search(${prevPage})" class="page-item"><a class="page-link" href="#">prev</a></li>`
    for (let i = 1; i <= pageCount; i++) {
        pagination.innerHTML += `<li onclick="search(${i})" class="page-item"><a class="page-link" href="#">${i}</a></li>`
    }
    pagination.innerHTML += `<li onclick="search(${nextPage})" class="page-item"><a class="page-link" href="#">next</a></li>`
}