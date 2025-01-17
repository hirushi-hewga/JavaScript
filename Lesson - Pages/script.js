function characterPage() {
    const chId = document.getElementById("chId").value
    const chName = document.getElementById("chName").value

    let url = "character/?"

    if (chId) {
        url += "id=" + chId
    }

    if (chName.trim()) {
        if (chId)
            url += "&"
        url += "name=" + chName
    }

    window.location = url
}