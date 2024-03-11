/* dom */
let startSection = document.querySelector(".start-wrapper");
let quizSelection = document.querySelector(".quiz-wrapper");
let startButton = document.querySelector(".start-button");
let quizHeading = document.querySelector(".question-heading");
let buttons = document.querySelectorAll(".answer-row > button");
let resultHeading = document.querySelector(".result-heading");


let signs = ["-", "+"];
let AnswerCounter = 0;
let rightCounter = 0;
let wrongCounter = 0;

let currentRight;

function startGame() {
    startSection.classList.add("hide");
    quizSelection.classList.remove("hide");
    setTimeout(endGame, 10000);
    randomQuest();
    AnswerCounter = 0;
    rightCounter = 0;
    wrongCounter = 0;
}

startButton.addEventListener("click", startGame);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}



function randomQuest() {
    let nmbr2 = getRandomInt(123);
    let nmbr1 = getRandomInt(152);
    let sign = signs[getRandomInt(signs.length)];
    quizHeading.innerHTML = `${nmbr1} ${sign} ${nmbr2}`;
    createAnswer(nmbr1, nmbr2, sign)
}

function createAnswer(number1, number2, sign) {
    let correctNumber = getRandomInt(buttons.length)
    for (let i = 0; i < buttons.length; i += 1) {
        if (i === correctNumber) {
            buttons[i].className = "button-right"

            if (sign === "-") {
                buttons[i].innerHTML = number1 - number2
                currentRight = number1 - number2
            } else {
                buttons[i].innerHTML = number1 + number2
                currentRight = number1 + number2
            }

        } else {
            buttons[i].innerHTML = getRandomInt(100);
            buttons[i].className = "button-wrong";
        }
    }
}


randomQuest();


for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener("click", randomQuest);
    buttons[i].addEventListener("click", checkAnswer(i))
}

function endGame() {
    startSection.classList.remove("hide");
    quizSelection.classList.add("hide");
    resultHeading.classList.remove("hide")
    resultHeading.innerHTML = `total: ${AnswerCounter}, right: ${rightCounter}, wrong: ${wrongCounter}`;
}


function checkAnswer(i) {
    return function () {
        AnswerCounter += 1;

        if (buttons[i].innerHTML === currentRight) {
            rightCounter += 1;
        } else {
            wrongCounter += 1;
        }
    }
}