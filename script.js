// selectors for all the text content manipulations
let secretNumber = document.querySelector(".secret-number");
let statusMessage = document.querySelector(".status-message");
let userScore = document.querySelector(".total-score");
let userHigscore = document.querySelector(".user-highscore");

// selectors for all the buttons
let btnCheck = document.querySelector(".check");
let btnAgain = document.querySelector(".again");

let secretNumberGenerated = Math.trunc(Math.random() * 20) + 1; //random number to be guessed
console.log(secretNumberGenerated);
let score = 20; //total-score
let highscore = 0; //user-highscore

// function to display game status message
const displayMessage = function (message) {
  statusMessage.textContent = message;
};

// function for check button functionality
btnCheck.addEventListener("click", function () {
  const userGuess = Number(document.querySelector(".user-guess").value);

  if (!userGuess || userGuess > 20 || userGuess < 1) {
    displayMessage("⛔️ Enter a Valid Number");
  } else if (userGuess === secretNumberGenerated) {
    displayMessage("🎊 You Won");
    document.querySelector("body").style.backgroundColor = "Green";
    secretNumber.textContent = secretNumberGenerated;
    btnCheck.style.display = "none";
    btnAgain.style.display = "block";

    if (score > highscore) {
      highscore = score;
      userHigscore.textContent = highscore;
    }
  } else if (userGuess !== secretNumberGenerated) {
    if (score > 1) {
      score--;
      userScore.textContent = score;
      userGuess > secretNumberGenerated
        ? displayMessage("📈 Too High")
        : displayMessage("📉 Too Low");
    } else {
      displayMessage("😔 You Lost");
      userScore.textContent = 0;
      btnCheck.style.display = "none";
      btnAgain.style.display = "block";
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});

// function for again button functionality
btnAgain.addEventListener("click", function () {
  score = 20;
  secretNumberGenerated = Math.trunc(Math.random() * 20) + 1;
  console.log("new" + secretNumberGenerated);

  displayMessage("Start guessing...");
  userScore.textContent = score;
  secretNumber.textContent = "?";
  document.querySelector(".user-guess").value = "";
  btnCheck.style.display = "block";
  btnAgain.style.display = "none";
  document.querySelector("body").style.backgroundColor = "black";
});
