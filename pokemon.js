/**
 * Script file for the Pokemon Quizzes webpage
 * @author Gregory Ecklund
 * @version November 5, 2025
 */


//Import the pokedex
let POKEMON = {};
setupPokemon();

//Variables to be filled out by setupQuestions
let questionList = [];
let answerList = [];

//Good to go variables
const GENERATION_COUNT = 4; //Number of generations in pokemon object
let total = questionList.length;
let answerLocationNumber;
let temporaryQuestionList = [];
let temporaryAnswerList = [];
let score = 0;

//All of the necessary elements from the webpage
const DOCELEMENTS = {
    //Divs
    "divAnswerButtons": document.getElementById("divAnswerButtons"),
    "divGame": document.getElementById("divGame"),
    "divTimer": document.getElementById("divTimer"),
    "divGiveUp": document.getElementById("divGiveUp"),
    "divRetryButton": document.getElementById("divRetryButton"),
    "divQuestions": document.getElementById("divQuestions"),

    //Start components
    "startButton": document.getElementById("startButton"),

    //Question and Answer components
    "questions": document.getElementById("questions"),
    "answerButton1": document.getElementById("answerButton1"),
    "answerButton2": document.getElementById("answerButton2"),
    "answerButton3": document.getElementById("answerButton3"),
    "answerButton4": document.getElementById("answerButton4"),

    //Timer components
    "minutesLabel": document.getElementById("minutesLabel"),
    "minutes": document.getElementById("minutes"),
    "secondsLabel": document.getElementById("secondsLabel"),
    "seconds": document.getElementById("seconds"),

    //Right-sidebar components
    "giveUpButton": document.getElementById("giveUpButton"),
    "retryButton": document.getElementById("retryButton"),

    //Music components
    "music": document.getElementById("music"),
    "musicSource": document.getElementById("musicSource"),
    "musicToggleLabel": document.getElementById("musicToggleLabel"),
    "musicSwitch": document.getElementById("musicSwitch")
}

//Applies current music settings
DOCELEMENTS["music"].volume = 0.1;
toggleMusic();

//Start Function
function start() {
    for (let i = 1; i < GENERATION_COUNT + 1; i++) {
        if (document.getElementById(`gen${i}Switch`).checked === true) {
            DOCELEMENTS["musicSource"].src = `./Music/0${i}.mp3`;
            chooseGen(i);
        }
    }

    //Perform on-screen actions
    DOCELEMENTS["divGame"].hidden = false;
    DOCELEMENTS["divQuestions"].hidden = false;
    DOCELEMENTS["divAnswerButtons"].hidden = false;
    DOCELEMENTS["divTimer"].hidden = false;
    DOCELEMENTS["divGiveUp"].hidden = false;
    DOCELEMENTS["music"].load();
    DOCELEMENTS["music"].play();
    document.getElementById("divStartButton").remove();

    //Starts the actual game
    nextQuestion();
    continueTimer();
}

//Displays the "You Win" Screen
function youWin() {
    DOCELEMENTS["divAnswerButtons"].hidden = true;
    DOCELEMENTS["divRetryButton"].hidden = false;
    DOCELEMENTS["retryButton"].innerHTML = "New Game?"
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
    DOCELEMENTS["divAnswerButtons"].hidden = true;
    DOCELEMENTS["divRetryButton"].hidden = false;
    DOCELEMENTS["divGiveUp"].hidden = true;
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
        DOCELEMENTS["minutes"].style.visibility = "visible";
        DOCELEMENTS["minutesLabel"].style.visibility = "visible";
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

/**
 * Adds a given generation to the current questions list
 * @param {Number} genNum - The generation number to be added
 */
function chooseGen(genNum) {
    for (let mon in POKEMON) {
        if (POKEMON[mon]["generation"] === genNum) {
            questionList.push(POKEMON[mon]["picture"]);
            answerList.push(mon);
        }
    }

    //Sets up the temporary lists for use as well
    temporaryAnswerList = [...answerList];
    temporaryQuestionList = [...questionList];
}

//Checks for key presses and performs actions accordingly
document.addEventListener("keydown", pressKey);
function pressKey(e) {
    switch (e.keyCode) {
        //Numpad 4
        case 100:
            checkAnswer(1);
            break;
        //Numpad 5
        case 101:
            checkAnswer(2);
            break;
        //Numpad 1
        case 97:
            checkAnswer(3);
            break;
        //Numpad 2
        case 98:
            checkAnswer(4);
            break;
        //R
        case 82:
            retry();
            break;
        //Enter
        case 13:
            //Makes sure the game hasn't started yet
            if (questionList.length === 0) {
                start();
            }
            break;
        //1
        case 49:
            //Makes sure the game hasn't started yet
            if (questionList.length === 0) {
                if (document.getElementById("gen1Switch").checked === true) {
                    document.getElementById("gen1Switch").checked = false;
                }
                else {
                    document.getElementById("gen1Switch").checked = true;
                }
            }
            break;
        //2
        case 50:
            //Makes sure the game hasn't started yet
            if (questionList.length === 0) {
                if (document.getElementById("gen2Switch").checked === true) {
                    document.getElementById("gen2Switch").checked = false;
                }
                else {
                    document.getElementById("gen2Switch").checked = true;
                }
            }
            break;
        //3
        case 51:
            //Makes sure the game hasn't started yet
            if (questionList.length === 0) {
                if (document.getElementById("gen3Switch").checked === true) {
                    document.getElementById("gen3Switch").checked = false;
                }
                else {
                    document.getElementById("gen3Switch").checked = true;
                }
            }
            break;
        //4
        case 52:
            //Makes sure the game hasn't started yet
            if (questionList.length === 0) {
                if (document.getElementById("gen4Switch").checked === true) {
                    document.getElementById("gen4Switch").checked = false;
                }
                else {
                    document.getElementById("gen4Switch").checked = true;
                }
            }
            break;
    }
}

//Retrieves the necessary data from pokemon.json
function setupPokemon() {
    fetch("./pokemon.json")
        .then(response => response.json())
        .then(data => {
            POKEMON = data;
        });
}

//Toggles the music on the webpage
function toggleMusic() {
    if (DOCELEMENTS["musicSwitch"].checked === true) {
        DOCELEMENTS["music"].muted = false;
    }
    else {
        DOCELEMENTS["music"].muted = true;
    }
}