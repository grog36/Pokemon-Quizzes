//Gregory Ecklund
//October 2025
//Pokemon Quiz


/**
 * Import the pokemon.json file
 */
let POKEMON = {};
setupPokemon();

//Variables to be filled out by setupQuestions
let questionList = [];
let answerList = [];

//Good to go variables
let total = questionList.length;
let answerLocationNumber;
let temporaryQuestionList = [];
let temporaryAnswerList = [];
let score = 0;
const DOCELEMENTS = {
    "answerButton1": document.getElementById("answerButton1"),
    "answerButton2": document.getElementById("answerButton2"),
    "answerButton3": document.getElementById("answerButton3"),
    "answerButton4": document.getElementById("answerButton4"),
    "seconds": document.getElementById("seconds"),
    "minutes": document.getElementById("minutes"),
    "secondsLabel": document.getElementById("secondsLabel"),
    "minutesLabel": document.getElementById("minutesLabel"),
    "startButton": document.getElementById("startButton"),
    "retryButton": document.getElementById("retryButton"),
    "questions": document.getElementById("questions"),
    "giveUpButton": document.getElementById("giveUpButton")
}

function setupQuestions() {
    answerList = Object.keys(POKEMON);
    for (let mon in POKEMON) {
        questionList.push(POKEMON[mon]["picture"]);
    }

    //Sets up the temporary lists for use as well
    temporaryAnswerList = [...answerList];
    temporaryQuestionList = [...questionList];
}


//Start Function
function start() {
    DOCELEMENTS["answerButton1"].style.visibility = "visible";
    DOCELEMENTS["answerButton2"].style.visibility = "visible";
    DOCELEMENTS["answerButton3"].style.visibility = "visible";
    DOCELEMENTS["answerButton4"].style.visibility = "visible";
    DOCELEMENTS["seconds"].style.visibility = "visible";
    DOCELEMENTS["minutes"].style.visibility = "visible";
    DOCELEMENTS["secondsLabel"].style.visibility = "visible";
    DOCELEMENTS["minutesLabel"].style.visibility = "visible";
    DOCELEMENTS["startButton"].style.visibility = "hidden";
    DOCELEMENTS["questions"].style.visibility = "visible";
    DOCELEMENTS["giveUpButton"].style.visibility = "visible";
    setupQuestions();
    nextQuestion();
    continueTimer();
}

//Displays the "You Win" Screen
function youWin() {
    DOCELEMENTS["retryButton"].style.visibility = "visible";
    DOCELEMENTS["retryButton"].innerHTML = "New Game?"
    DOCELEMENTS["answerButton1"].style.visibility = "hidden";
    DOCELEMENTS["answerButton2"].style.visibility = "hidden";
    DOCELEMENTS["answerButton3"].style.visibility = "hidden";
    DOCELEMENTS["answerButton4"].style.visibility = "hidden";
    DOCELEMENTS["giveUpButton"].style.visibility = "hidden";
    DOCELEMENTS["questions"].src = "./Pictures/win.png";
    document.body.style.background = "green";
    stopTimer();
}

//Refreshes Page When "retryButton" is Pressed
function retry() {
    location.reload();
}

//Updates Screen with Next Question or Win/Lose Screen
function nextQuestion() {
    let answerChoice1;
    let answerChoice2;
    let answerChoice3;
    let answerChoice4;

    if (temporaryQuestionList.length === 0) {
        youWin();
    }
    else {
        let index = randomNumber(0, (temporaryQuestionList.length - 1));
        let question = temporaryQuestionList[index];
        let answer = temporaryAnswerList[index];
        answerLocationNumber = randomNumber(1, 4);
        temporaryAnswerList.splice(index, 1);
        temporaryQuestionList.splice(index, 1);

        //Update question
        DOCELEMENTS["questions"].src = question;

        if (answerLocationNumber == 1) {
            answerChoice1 = answer
        }
        else {
            answerChoice1 = answerList[randomNumber(0, (answerList.length - 1))];
            while (answerChoice1 == answer) {
                answerChoice1 = answerList[randomNumber(0, (answerList.length - 1))];
            }
        }
        if (answerLocationNumber == 2) {
            answerChoice2 = answer
        }
        else {
            answerChoice2 = answerList[randomNumber(0, (answerList.length - 1))];
            while (answerChoice2 == answer || answerChoice2 == answerChoice1) {
                answerChoice2 = answerList[randomNumber(0, (answerList.length - 1))];
            }
        }
        if (answerLocationNumber == 3) {
            answerChoice3 = answer
        }
        else {
            answerChoice3 = answerList[randomNumber(0, (answerList.length - 1))];
            while (answerChoice3 == answer || answerChoice3 == answerChoice2 || answerChoice3 == answerChoice1) {
                answerChoice3 = answerList[randomNumber(0, (answerList.length - 1))];
            }
        }
        if (answerLocationNumber == 4) {
            answerChoice4 = answer
        }
        else {
            answerChoice4 = answerList[randomNumber(0, (answerList.length - 1))];
            while (answerChoice4 == answer || answerChoice4 == answerChoice1 || answerChoice4 == answerChoice2 || answerChoice4 == answerChoice3) {
                answerChoice4 = answerList[randomNumber(0, (answerList.length - 1))];
            }
        }

        DOCELEMENTS["answerButton1"].innerHTML = answerChoice1
        DOCELEMENTS["answerButton2"].innerHTML = answerChoice2
        DOCELEMENTS["answerButton3"].innerHTML = answerChoice3
        DOCELEMENTS["answerButton4"].innerHTML = answerChoice4
    }
}

//Displays the "You Lose" Screen
function youLose() {
    DOCELEMENTS["retryButton"].style.visibility = "visible";
    DOCELEMENTS["answerButton1"].style.visibility = "hidden";
    DOCELEMENTS["answerButton2"].style.visibility = "hidden";
    DOCELEMENTS["answerButton3"].style.visibility = "hidden";
    DOCELEMENTS["answerButton4"].style.visibility = "hidden";
    DOCELEMENTS["giveUpButton"].style.visibility = "hidden";
    DOCELEMENTS["questions"].src = "./Pictures/lose.png";
    document.body.style.background = "red";
    stopTimer();
}

/**
 * Checks whether the user's answer choice is incorrect or correct.
 * @param {Number} answerChoice The position of the answer choice the user guesses.
 */
function checkAnswer(answerChoice) {
    if (answerChoice === answerLocationNumber) {
        score++;
        nextQuestion();
    }
    else {
        youLose();
    }
}

/**
 * Creates and returns a random number within the range of (min, max) (inclusive).
 * @param {Number} min The minimum value for the range (inclusive).
 * @param {Number} max The maximum value for the range (inclusive).
 * @returns A random number between min and max (inclusive).
 */
function randomNumber(min, max) {
    return (Math.floor(Math.random() * (max - min + 1)) + min);
}

//Timer Stuff
let timeout;
let seconds = 0;
let minutes = 0;
function timer() {
    seconds++;
    if (seconds >= 60) {
        minutes++;
        seconds -= 60;
    }
    DOCELEMENTS["minutes"].innerHTML = minutes;
    DOCELEMENTS["seconds"].innerHTML = seconds;
    continueTimer();
}
function continueTimer() {
    timeout = setTimeout(timer, 1000);
}
function stopTimer() {
    clearTimeout(timeout);
}



function setupPokemon() {
    fetch("./pokemon.json")
        .then(response => response.json())
        .then(data => {
            POKEMON = data;
        });
}