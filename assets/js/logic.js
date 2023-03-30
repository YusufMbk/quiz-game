//variables for current quiz states

let currentQuestion = 0;

let time = questions.length * 15;

let timerID;

// HTML elements

let questionsElement = document.getElementById("questions");

let timerElement = document.getElementById("time");

let choicesElement = document.getElementById("choices");

let submitButton = document.getElementById("submit");

let startButton = document.getElementById("start");

let initialElement = document.getElementById("initals");

let feedBackElement = document.getElementById("feedback");

let sfx = new Audio("assets/sfx/correct.wav")

function questionOnClick(){

}

function getQuestion(){

}

function clockTick(){

}

function startQuiz(){

}

function quizEnd(){

}

function saveHs(){

}

function checkForEnter(event){

}

startButton.addEventListener("click", startQuiz);

submitButton.addEventListener("click", saveHighScore);

initialElement.addEventListener("keyup", checkForEnter);

