const api = "https://jsonplaceholder.typicode.com/users";  
const tableBody = document.getElementById("users-table-body");  
const tasksContainer = document.getElementById("tasks-display");  

fetch(api)  
    .then((response) => response.json())  
    .then((data) => {  
        for (const user of data) {  
            const row = document.createElement('tr');  
            row.className = "table-primary";  
            row.innerHTML = `  
                <th scope="row">${user.id}</th>  
                <td>${user.name}</td>  
                <td>${user.username}</td>  
                <td>${user.email}</td>  
                <td>${user.address.city}</td>  
                <td>${user.phone}</td>  
                <td>${user.company.name}</td>  
            `;  

            // Add click event listener for each user row  
            row.addEventListener('click', () => {  
                fetchTasks(user.id);  
            });  

            tableBody.appendChild(row);  
        }  
    })  
    .catch((error) => {  
        console.log(error);  
    });  

function fetchTasks(userId) {  
    const todosApi = `https://jsonplaceholder.typicode.com/todos?userId=${userId}`;  
    fetch(todosApi)  
        .then((response) => response.json())  
        .then((tasks) => {  
            displayTasks(userId, tasks);  
        })  
        .catch((error) => {  
            console.log(error);  
        });  
}  

function displayTasks(userId, tasks) {  
    // Clear previous tasks display  
    tasksContainer.innerHTML = `<h2>Tasks for User ID ${userId}</h2>`;  

    if (tasks.length === 0) {  
        tasksContainer.innerHTML += `<p>No tasks found for this user.</p>`;  
        return;  
    }  

    const tasksList = document.createElement('table');  
    tasksList.className = "table";  
    tasksList.innerHTML = `  
        <thead>  
            <tr>  
                <th>Id</th>  
                <th>Title</th>  
                <th>Completed</th>  
            </tr>  
        </thead>  
        <tbody id="tasks-table-body">  
        </tbody>  
    `;  

    const tasksTableBody = tasksList.querySelector('#tasks-table-body');  
    
    for (const task of tasks) {  
        tasksTableBody.innerHTML += `  
            <tr>  
                <td>${task.id}</td>  
                <td>${task.title}</td>  
                <td>${task.completed}</td>  
            </tr>  
        `;  
    }  

    tasksContainer.appendChild(tasksList);  
}  