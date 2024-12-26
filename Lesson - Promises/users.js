const api = "https://api.github.com/users"
const tableBody = document.getElementById("users-table-body")

fetch(api).then((responce) => {
    console.log(responce.status)
    return responce.json()
}).then((data) => {
    console.log(data)
    for (const u of data) {
        tableBody.innerHTML += `<tr>
                                <td>${u.id}</td>
                                <td>${u.login}</td>
                                <td>${u.followers_url}</td>
                                <td>${u.following_url}</td>
                            </tr>`
    }
}).catch((error) => {
    console.log(error)
})