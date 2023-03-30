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
    console.log("question was clicked");
    if(this.value !== questions[currentQuestion].answer){
        time -= 10;

        if(time<0){
            time = 0;
        }
    
        timerElement.textContent = time;

        feedBackElement.textContent = "Wrong answer";
    } else {
        sfxRight.play();
        feedBackElement.textContent = "You answered correctly!";
        }

        feedBackElement.setAttribute("class", "feedback");

        setTimeout(function(){
            feedBackElement.setAttribute("class", "feedback hide")
        }  , 1500);

        currentQuestion++;

        if(currentQuestion === questions.length) {
            quizEnd()
        } else{
            getQuestion();
        }
        }

    


function getQuestion(){

    let currentQuestion = questions[currentQuestion];

    let titleElement = document.getElementById("question-title");

    titleElement.textContent = currentQuestion.title;

    choicesElement.innerHTML = "";

    currentQuestion.choices.forEach(function(choice, index){

        var choice = choiceButton = document.createElement("button");

        choiceButton.setAttribute("class", "choice");
        choiceButton.setAttribute("value", choice);

        choiceButton.textContent = `${index +1}. ${choice}`

        choiceButton.addEventListener("click", questionOnClick);

        choicesElement.append(choiceButton);

    })

}


function clockTick(){
    time--;
    timerElement.textContent = time;

    if(time <= 0){
        quizEnd();
    }
}

function startQuiz(){
    let startScreenElement = document.getElementById("start-screen");
    startScreenElement.setAttribute("class", "hide");

    questionsElement.removeAttribute("class");

    timerID = setInterval(clockTick, 1500);

    timerElement.textContent = time;

    getQuestion();
}

function quizEnd(){
    clearInterval(timerID);

    let endScreenElement = document.getElementById("end-screen");
    endScreenElement.removeAttribute("class");

    let finalScoreElement = document.getElementById("final-score");
    finalScoreElement.textContent = time;

    questionsElement.setAttribute("class" , "hide");

}


function saveHighScore(){
    let initals = initalElement.value.trim();

    if(initals !== ""){
        let highScores = JSON.parse(localStorage.getItem("highscores")) || [];

        let newScore = {
            score: time,
            initals: initals
        }

        highScores.push(newScore);
        localStorage.setItem("highscores", JSON.stringify(highScores));

        window.location.href = "highscores.html";

    }

}

function checkForEnter(event){

    if (event.key === "Enter"){
        saveHighScore();
    }

}

startButton.addEventListener("click", startQuiz);

submitButton.addEventListener("click", saveHighScore);

initialElement.addEventListener("keyup", checkForEnter);


