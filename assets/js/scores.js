// this function displays the scores from the highest to the lowest and appends the list each time a new score is added.

function diplayScore(){
    let highScores = JSON.parse(localStorage.getItem("highscores")) || []
    
    highScores.sort(function(x,y){
        return y.score - x.score;
    })

    highScores.forEach(function(score){
        let list = document.createElement("li");
        list.textContent = `${score.initals} - ${score.score}`;

        let appendList = document.getElementById("highscores");
        appendList.appendChild(list);
    })
}

// this is the function to clear the scores from the page.

function clearScores(){
    localStorage.removeItem("highscores");
    window.location.reload();
}