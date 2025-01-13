function formHandler(event) {
    event.preventDefault()

    const form = event.target

    const params = {}
    
    params.question = form["questionInput"].value
    params.correctAnswer = form["correctAnswerInput"].value
    params.wrongAnswer = form["wrongAnswerInput"].value

    if (!validateForm(params)) {
        return
    }

    addQuestion(params)
}

function addQuestion(params) {
    const questions = document.getElementById("questions")

    questions.innerHTML += `<div class="mt-3">
                                <label>${params.question}</label>
                                <br>
                                <label>${params.correctAnswer}</label>
                                <br>
                                <label>${params.wrongAnswer}</label>
                            </div>`
}




function validateForm(params) {
    const questionError = document.getElementById("question-error")
    const correctAnswerError = document.getElementById("correctAnswer-error")
    const wrongAnswerError = document.getElementById("wrongAnswer-error")
    let isValid = true

    if (params.question.trim() === "") {
        questionError.hidden = false
        isValid = false
    } else {
        questionError.hidden = true
    }

    if (params.correctAnswer.trim() === "") {
        correctAnswerError.hidden = false
        isValid = false
    } else {
        correctAnswerError.hidden = true
    }

    if (params.wrongAnswer.trim() === "") {
        wrongAnswerError.hidden = false
        isValid = false
    } else {
        wrongAnswerError.hidden = true
    }

    return isValid
}