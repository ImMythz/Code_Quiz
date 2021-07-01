const btnStart = document.getElementById('btnStart')
const questionOutput = document.getElementById('question')
const answerButtons = document.getElementById('answerButtons')
const scoreboard = document.getElementById('scoreboard')
const timeNumber = document.getElementById('timeNumber')
const highscoreContainer = document.getElementById('highscores')
const navButtons = document.getElementById('navButtons')
const answerBtn = document.getElementById('answerBtn')

let firstQuestion = 0
let right = 0
let wrong = 0
let timeLeft = 10
let timer;
let score;
let highscores;


// Array to hold quiz questions and answers
const questionList = [
    {
        question: 'How do you declare a variable in Javascript?',
        answers: [
            { text: 'var', correct: true },
            { text: 'define', correct: false },
            { text: 'global v1 v2', correct: false },
            { text: 'NEW', correct: false }
        ]
    },
    {
        question: 'Which of the following is a Javascript data type? ',
        answers: [
            { text: 'line', correct: false },
            { text: 'string', correct: true },
            { text: 'vessel', correct: false },
            { text: 'container', correct: false }
        ]
    },
    {
        question: 'What is a boolean?',
        answers: [
            { text: 'True or False value', correct: true },
            { text: 'Number stored in a variable', correct: false },
            { text: 'A method used to combine two strings', correct: false },
            { text: 'A pool flotation device', correct: false }
        ]
    },
    {
        question: 'How many keys and values can you store in an object?',
        answers: [
            { text: '1', correct: false },
            { text: '10', correct: false },
            { text: '100', correct: false },
            { text: 'infinite', correct: true }
        ]
    },
    {
        question: 'What is the syntax for comments in Javascript?',
        answers: [
            { text: '--', correct: false },
            { text: '#', correct: false },
            { text: '//', correct: true },
            { text: 'comment [ ]', correct: false }
        ]
    }
]

// Waits for Start button to be clicked to run game function
btnStart.addEventListener('click', startGame)

// Function that runs when the start button is clicked 
function startGame() {
    timeLeft = 10
    firstQuestion =0

    setQuestion();
    countdown();
}

// Sets the next question from questionList
function setQuestion() {
    nextQuestion(questionList[firstQuestion])

}

// Timer function
function countdown() {
    timer =  setInterval(() => {
        timeLeft--;
        timeNumber.innerText = timeLeft
        if (timeLeft <= 0) {
            clearInterval(timer)
            showResults()
        }
    }, 1000);
}

// Showing the questions
function nextQuestion(question) {
    questionOutput.innerText = question.question
    question.answers.forEach(answer => {
        const btnAnswerChoice = document.createElement('button')
        btnAnswerChoice.innerText = answer.text
        btnAnswerChoice.classList.add('btnStyle')
        btnAnswerChoice.classList.add('answerBtn')
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

// Displays score and captures user initials for localstorage
function showResults() {
    // Stops timer
    clearInterval(timer)

    // collects and stores user initials in localstorage
    const username = prompt('Enter your initials to save your score!!!')
    if (!username) {
        showResults()
        return
    }
    score = username + ' ' + right
    localStorage.setItem('score', JSON.stringify(score));
    highscores = localStorage.getItem('score')
    highscoreContainer.innerText = highscores

    // Displays score
    const showAnswers = document.createElement('p')
    showAnswers.innerText = "Correct: " + right + " Wrong: " + wrong
    scoreboard.appendChild(showAnswers)
    btnStart.remove()
    resetQuestion()
    restartQuiz()
}

// Resets after each question
function resetQuestion() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

// Function that creates a reset button and restarts quiz
function restartQuiz() {
    const restart = document.createElement('button')
    restart.innerText = 'Restart'
    restart.classList.add('btnStyle')
    navButtons.appendChild(restart)
    restart.addEventListener('click', startGame)
}