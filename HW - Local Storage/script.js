
function printTasks(tasks) {
    const table = document.getElementById("tasksTable")
    table.innerHTML = ""

    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i]
        let decoration = ""
        let status = ""
        if (task.status == 1) {
            decoration = "style='text-decoration:line-through;'"
            status = "checked"
        }
        const row = `<tr>
                        <th class="col-1" scope="row">${i + 1}</th>
                        <td ${decoration} class="col-2">${task.name}</td>
                        <td ${decoration} class="col-5">${task.description}</td>
                        <td class="col-2"><input onclick="checkboxHandler(${i})" class="form-check-input" type="checkbox" value="" id="checkbox" ${status}></td>
                        <td class="col-2"><button onclick="removeTask(${i})" class="btn btn-danger">Remove</button></td>
                    </tr>`
        table.innerHTML += row
    }
}

function loadTasks() {
    const json = localStorage.getItem("tasks")

    if (json) {
        const tasks = JSON.parse(json)
        printTasks(tasks)
    }
}
loadTasks()

function removetasksHandler() {
    const tasks = []
    localStorage.setItem("tasks", JSON.stringify(tasks))
    printTasks(tasks)
}

function removeTask(index) {
    const tasks = JSON.parse(localStorage.getItem("tasks"))
    tasks.splice(index, 1)
    localStorage.setItem("tasks", JSON.stringify(tasks))
    printTasks(tasks)
}

function validateForm(task) {
    const nameError = document.getElementById("name-error")
    const descriptionError = document.getElementById("description-error")

    if (task.name.trim().length === 0) {
        nameError.hidden = false
        return false
    } else {
        nameError.hidden = true
    }

    if (task.description.trim().length === 0) {
        descriptionError.hidden = false
        return false
    } else {
        descriptionError.hidden = true
    }

    return true
}

function addtaskHandler() {
    const task = {}

    task.name = document.getElementById("nameInput").value
    task.description = document.getElementById("descriptionInput").value
    task.status = 0

    if (!validateForm(task)) {
        return
    }

    document.getElementById("nameInput").value = ""
    document.getElementById("descriptionInput").value = ""

    const json = localStorage.getItem("tasks")
    const tasks = json ? JSON.parse(json) : []
    tasks.push(task)
    localStorage.setItem("tasks", JSON.stringify(tasks))

    printTasks(tasks)
}

function checkboxHandler(index) {
    const tasks = JSON.parse(localStorage.getItem("tasks"))
    if (tasks[index].status === 0) {
        tasks[index].status = 1
    } else {
        tasks[index].status = 0
    }
    localStorage.setItem("tasks", JSON.stringify(tasks))
    printTasks(tasks)
}