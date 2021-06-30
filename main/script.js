const btnStart = document.getElementById('btnStart')
const questionOutput = document.getElementById('question')
const answerButtons = document.getElementById('answerButtons')
const scoreboard = document.getElementById('scoreboard')
const timeNumber = document.getElementById('timeNumber')
let firstQuestion = 0
let right = 0
let wrong = 0
let timeLeft = 10
let timer;

// Array to hold quiz questions and answers
const questionList = [
    {
        question: 'Test question 1',
        answers: [
            { text: 'This is an answer 1 choice', correct: true },
            { text: 'This is an answer 2 choice', correct: false },
            { text: 'This is an answer 3 choice', correct: false },
            { text: 'This is an answer 4 choice', correct: false }
        ]
    },
    {
        question: 'Test question 2',
        answers: [
            { text: '10', correct: true },
            { text: '12', correct: false },
            { text: '14', correct: false },
            { text: '16', correct: false }
        ]
    },
    {
        question: 'Test question 3',
        answers: [
            { text: '18', correct: true },
            { text: '20', correct: false },
            { text: '22', correct: false },
            { text: '24', correct: false }
        ]
    },
    {
        question: 'Test question 4',
        answers: [
            { text: '26', correct: true },
            { text: '28', correct: false },
            { text: '30', correct: false },
            { text: '32', correct: false }
        ]
    },
    {
        question: 'Test question 5',
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
    countdown();
}

function setQuestion() {
    nextQuestion(questionList[firstQuestion])

}

// Timer function
function countdown(timer) {
    timer =  setInterval(() => {
        timeLeft--;
        timeNumber.innerText = timeLeft
        if (timeLeft <= 0) {
            clearInterval(timer)
            showResults()
        }
    }, 1000);
}

function stopCountdown(timer) {
    clearInterval(timer)
}

// Showing the questions
function nextQuestion(question) {
    questionOutput.innerText = question.question
    console.log(question.question)
    console.log(question.answers)
    question.answers.forEach(answer => {
        const btnAnswerChoice = document.createElement('button')
        btnAnswerChoice.innerText = answer.text
        btnAnswerChoice.classList.add('btnStyle')
        if (answer.correct) {
            btnAnswerChoice.dataset.correct = answer.correct
        }
        btnAnswerChoice.addEventListener('click', selectedAnswer)
        answerButtons.appendChild(btnAnswerChoice)
    })
}

// Checks to see if dataset is true "correct"
function answerChecker(correct) {
    if (correct) {
        right++
    } else {
        wrong++;
    }
    console.log(right)
    console.log(wrong)
}

// Function for when the user selects an answer
function selectedAnswer(event) {
    const userChoice = event.target
    const correct = userChoice.dataset.correct
    answerChecker(document.body, correct)
    Array.from(answerButtons).forEach(btnAnswerChoice => {
        answerChecker(btnAnswerChoice, btnAnswerChoice.dataset.correct)
    })
    if (firstQuestion <=3) {
        firstQuestion++
    resetQuestion()
    setQuestion()
    } else {
        showResults()
        return;
    }
}

// Displays score 
function showResults() {
    const showAnswers = document.createElement('p')
    showAnswers.innerText = "Correct: " + right + " Wrong: " + wrong
    scoreboard.appendChild(showAnswers)
    questionOutput.remove()
    answerButtons.remove()
    btnStart.remove()
    console.log('baba booey')
    clearInterval(timer)
    // timeNumber.remove()
}

// Resets after each question
function resetQuestion() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}