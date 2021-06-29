const timer = 60
const correct = 0
const wrong = 0
const btnStart = document.getElementById('btnStart')
const questionOutput = document.getElementById('question')
const btnAnswerChoice = document.getElementById('btnAnswerChoice')
const firstQuestion = 0

// Array to hold quiz questions and answers
const questionList = [
    {
        question: "Test question 1",
        answers: [
            { text: '2', correct: true },
            { text: '4', correct: false },
            { text: '6', correct: false },
            { text: '100', correct: false }
        ]
    },
    {
        question: "Test question 2",
        answers: [
            { text: '10', correct: true },
            { text: '12', correct: false },
            { text: '14', correct: false },
            { text: '16', correct: false }
        ]
    },
    {
        question: "Test question 3",
        answers: [
            { text: '18', correct: true },
            { text: '20', correct: false },
            { text: '22', correct: false },
            { text: '24', correct: false }
        ]
    },
    {
        question: "Test question 4",
        answers: [
            { text: '26', correct: true },
            { text: '28', correct: false },
            { text: '30', correct: false },
            { text: '32', correct: false }
        ]
    },
    {
        question: "Test question 5",
        answers: [
            { text: '34', correct: true },
            { text: '36', correct: false },
            { text: '38', correct: false },
            { text: '40', correct: false }
        ]
    }
]

// Waits for Start button to be clicked to run game function
btnStart.addEventListener('click', startGame)






// Function that runs when the start button is clicked 
function startGame() {
    console.log('started')
    setQuestion();
}

function setQuestion() {
    nextQuestion(questionList[firstQuestion])

}

// Timer function
function countdown() {

}

// Showing the questions
function nextQuestion(question) {
    questionOutput.innerText = question.question
    console.log(question.question)
    console.log(question.answers)
    question.answers.forEach(answer => {
        btnAnswerChoice.innerText = answer.text
    })
    if (answer.correct) {
        btnAnswerChoice.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectedAnswer)
}

// Function for when the user selects an answer
function selectedAnswer() {
    
}