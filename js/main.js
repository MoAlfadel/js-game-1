const choices = document.querySelectorAll(".choice");
const computerChociceDiplay = document.getElementById("computerChociceDiplay");
const userChociceDiplay = document.getElementById("userChociceDiplay");
const resultDisplay = document.getElementById("resultDisplay");
const currentResultBox = document.getElementById("currentResult");
const playCounterDisplay = document.getElementById("playCounterDisplay");
const winCounterDisplay = document.getElementById("winCounterDisplay");
const losCounterDisplay = document.getElementById("losCounterDisplay");
const clearHistoryBtn = document.getElementById("clearHistory");

let userChoice;
let computerChoice;
let winCounter = 0;
let playCounter = 0;
let losCounter = 0;

if (localStorage.play) {
  DisplayTotalResult();
}

choices.forEach(function (choice) {
  choice.addEventListener("click", (e) => {
    currentResultBox.classList.toggle("active");
    setTimeout(() => {
      playCounter++;
      window.localStorage.setItem("play", ++window.localStorage.play || 1);
      userChoice = e.target.innerHTML;
      userChociceDiplay.innerHTML = userChoice;
      getCumputerChoice();
      getResult();
    }, 500);

    setTimeout(() => {
      currentResultBox.classList.toggle("active");
      DisplayTotalResult();
    }, 600);
  });
});

function getCumputerChoice() {
  let randomNumber = getRadomInt(1, 2);
  if (randomNumber === 1) {
    computerChoice = "صورة";
  } else if (randomNumber === 2) {
    computerChoice = "كتابة";
  }
  computerChociceDiplay.innerHTML = computerChoice;
}
function getResult() {
  if (computerChoice === userChoice) {
    result = " ربحت ";
    winCounter++;
    window.localStorage.setItem("win", ++localStorage.win || 1);
  } else {
    result = "خسرت";
    losCounter++;
    window.localStorage.setItem("loss", ++localStorage.loss || 1);
  }
  resultDisplay.innerHTML = result;
}
function getRadomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function DisplayTotalResult() {
  playCounterDisplay.textContent = window.localStorage.play || 0;
  winCounterDisplay.textContent = window.localStorage.win || 0;
  losCounterDisplay.textContent = window.localStorage.loss || 0;
}

clearHistoryBtn.addEventListener("click", () => {
  localStorage.clear();
  window.location.reload();
});
