const timer = 60
const correct = 0
const wrong = 0
const btnStart = document.getElementById('btnStart')
const questionOutput = document.getElementById('question')
const firstQuestion = 0

// Array to hold quiz questions and answers
const questionList = [
    {
        question: "Loren Ipsem",
        answers: [
            { text: '2', correct: true },
            { text: '4', correct: false }
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

function nextQuestion(question) {
    questionOutput.innerText = question.question
    console.log(question.question)
    
}