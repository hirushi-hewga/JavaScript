const url = "https://swapi.py4e.com/api/people/?page=";

// fetch(url)
//     .then(response => {
//         if(response.ok) {
//             const data = response.json();
//             return data;
//         }
//     }).then(data => {
//         console.log(data);
//     }).catch(error => {
//         console.log(error);
//     });



// "name": "C-3PO", 
// "height": "167", 
// "mass": "75", 
// "hair_color": "n/a", 
// "skin_color": "gold", 
// "eye_color": "yellow", 
// "birth_year": "112BBY", 
// "gender": "n/a",


/*{ <tr>
        <td>Name</td>
        <td>Hair color</td>
        <td>Eye colo</td>
        <td>Birth year</td>
        <td>Gender</td>
        <td>Height</td>
</tr> }*/

async function swapiGet(page) {    
    try {
        const response = await fetch(url + page);
        const data = await response.json();
        
        const pageCount = Math.ceil(data.count / 10)
        const pagination = document.getElementById('pagination')

        pagination.innerHTML = ''

        let prevPage = parseInt(page) - 1
        let nextPage = parseInt(page) + 1
        if (page === '1') {
            prevPage = '1'
        }
        if (page === `${pageCount}`) {
            nextPage = pageCount.toString()
        }

        pagination.innerHTML += `<li onclick="swapiGet('${prevPage}')" class="page-item"><a class="page-link" href="#">prev</a></li>`
        for(let i = 1; i <= pageCount; i++) {
            pagination.innerHTML += `<li onclick="swapiGet('${i}')" class="page-item"><a class="page-link" href="#">${i}</a></li>`
        }
        pagination.innerHTML += `<li onclick="swapiGet('${nextPage}')" class="page-item"><a class="page-link" href="#">next</a></li>`
        
        //<li class="page-item"><a class="page-link" href="#">1</a></li>
        
        //console.log(pageCount)
        //console.log(data.results)
        
        const tbody = document.getElementById('tbody')
        tbody.innerHTML = ''
        data.results.forEach(person => {
            tbody.innerHTML += `<tr>
                                  <td>${person.name}</td>
                                  <td>${person.hair_color}</td>
                                  <td>${person.eye_color}</td>
                                  <td>${person.birth_year}</td>
                                  <td>${person.gender}</td>
                                  <td>${person.height}</td>
                                </tr>`
        });
    } catch (error) {
        console.log(error);
    }
}

swapiGet("1");