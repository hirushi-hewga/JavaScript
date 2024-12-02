const url = "https://swapi.dev/api/people/"

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


async function swapiGet() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        const pageCount = Math.ceil(data.count / 10)
        const pagination = document.getElementById("pagination")

        for(let i = 0; i <= pageCount; i++) {
            pagination.innerHTML += `<li class="page-item"><a class="page-link" href="#">${i}</a></li>`;
        }

        //console.log(data.results);

        const tbody = document.getElementById("tbody");
        for (let i = 0; i < data.results.length; i++) {
            const person = data.results;
            tbody.innerHTML += `<tr>
                <td>${person.name}</td>
                <td>${person.hair_color}</td>
                <td>${person.eye_color}</td>
                <td>${person.Name}</td>
                <td>${person.Name}</td>
                <td>${person.Name}</td>
            </tr>`
        }

        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

swapiGet();


//Math.round();
//Math.ceil();
//Math.floor();