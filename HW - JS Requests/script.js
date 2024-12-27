//const api = "https://www.omdbapi.com/?apikey=6126fcdb&s=potter&type=movie"




const apiKey = "6126fcdb";  
const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&s=`;  
const filmsContainer = document.getElementById('films');  
const paginationContainer = document.getElementById('pagination');  
let currentPage = 1;  
let totalPages = 1;   
let movies = [];  

// Function to fetch movies based on the selected title and type  
async function fetchMovies(query, type) {  
    const response = await fetch(`${apiUrl}${query}&type=${type}`);  
    
    // Check for errors in response  
    if (!response.ok) {  
        throw new Error("Network response was not ok");  
    }  
    
    const data = await response.json();  
    return data;  
}  

// Function to display movies in the DOM  
function displayMovies() {  
    filmsContainer.innerHTML = ''; // Clear previous results  
    const startIndex = (currentPage - 1) * 3; // Calculate starting index  
    const moviesToDisplay = movies.slice(startIndex, startIndex + 3); // Display up to 3 movies  
    
    moviesToDisplay.forEach(movie => {  
        if (movie.Poster !== "N/A") {  
            const filmDiv = document.createElement('div');  
            filmDiv.classList.add('film');  
            filmDiv.innerHTML = `  
                <img src="${movie.Poster}" alt="${movie.Title}" class="img-fluid">  
                <h5>${movie.Title}</h5>  
                <p>${movie.Year}</p>  
            `;  
            filmsContainer.appendChild(filmDiv);  
        }  
    });  
}  

// Function to setup pagination  
function setupPagination() {  
    paginationContainer.innerHTML = ''; // Clear previous pagination  
    const prevButton = document.createElement('button');  
    prevButton.innerText = 'Prev';  
    prevButton.classList.add('btn', 'btn-secondary', 'mx-2');  
    prevButton.disabled = currentPage === 1; // Disable if on the first page  
    prevButton.onclick = () => paginate(currentPage - 1);  

    const nextButton = document.createElement('button');  
    nextButton.innerText = 'Next';  
    nextButton.classList.add('btn', 'btn-secondary', 'mx-2');  
    nextButton.disabled = currentPage === totalPages; // Disable if on the last page  
    nextButton.onclick = () => paginate(currentPage + 1);  
    
    paginationContainer.appendChild(prevButton);  

    for (let i = 1; i <= totalPages; i++) {  
        const button = document.createElement('button');  
        button.classList.add('btn', 'btn-secondary', 'mx-1');  
        button.innerText = i;  
        button.disabled = i === currentPage; // Disable current page button  
        button.onclick = () => paginate(i);  
        paginationContainer.appendChild(button);  
    }  

    paginationContainer.appendChild(nextButton);  
}  

// Function to handle pagination  
function paginate(page) {  
    currentPage = page;  
    displayMovies();  
    setupPagination(); // Update pagination buttons after changing the current page  
}  

// Function to search for movies based on selected options  
async function searchMovies() {  
    const title = document.getElementById('titleSelect').value;  
    const type = document.getElementById('typeSelect').value;  
    
    try {  
        const data = await fetchMovies(title, type);  
        if (data.Response === "True") {  
            movies = data.Search;  
            totalPages = Math.ceil(movies.length / 3); // Calculate total pages based on the number of movies  
            displayMovies();  
        } else {  
            filmsContainer.innerHTML = '<p>No results found.</p>';  
            paginationContainer.innerHTML = '';  
            totalPages = 0; // Reset total pages if no results  
        }  
    } catch (error) {  
        console.error("Error fetching movies:", error);  
        filmsContainer.innerHTML = '<p>Error fetching movies, please try again later.</p>';  
        paginationContainer.innerHTML = '';  
    }  
}  

// Event listener for the search button  
document.getElementById('searchButton').addEventListener('click', () => {  
    currentPage = 1; // Reset to the first page  
    searchMovies();  
});  