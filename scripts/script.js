// function play() {
//   const homeSection = document.getElementById("home_screen");
//   homeSection.classList.add("hidden");

//   const playgroundSection = document.getElementById("playground_section");
//   playgroundSection.classList.remove("hidden");
// }

function handleKeyBoardButtonPress(e) {
  const playerPressed = e.key;
  // console.log(playerPressed);

  // Escape game
  if (playerPressed === "Escape") {
    gameOver();
  }

  // get the expected to press
  const expectedAlphabet = document
    .getElementById("currentAlphabet")
    .innerText.toLowerCase();
  // console.log(expectedAlphabet);

  // check matched or not
  if (playerPressed === expectedAlphabet) {
    // console.log("U got a point");

    // update score
    const currentScoreElement = document.getElementById("currentScore");
    const currentScore = parseInt(currentScoreElement.innerText);
    const updateScore = currentScore + 1;
    currentScoreElement.innerText = updateScore;

    // start a new round
    removeBackgroundColor(expectedAlphabet);
    continueGame();
  } else {
    // console.log("U lost a life");
    const lifeElement = document.getElementById("life");
    const lifeScore = parseInt(lifeElement.innerText);

    const updatedLife = lifeScore - 1;
    lifeElement.innerText = updatedLife;

    if (updatedLife === 0) {
      gameOver();
    }
  }
}

// capture keyboard key press
document.addEventListener("keyup", handleKeyBoardButtonPress);

function continueGame() {
  // generate a random alphabet
  const alphabet = alphabets();

  // set randomly generated alphabet to the screen
  const currentAlphabet = document.getElementById("currentAlphabet");
  currentAlphabet.innerText = alphabet;

  // set button background color
  setBackgroundColor(alphabet);
  // console.log(alphabet);
}

function play() {
  // hide everything show only the playground
  removeElementById("home_screen");
  removeElementById("score");
  showElementById("playground_section");

  // reset score and life
  setTextElementById("currentScore", 0);
  setTextElementById("life", 5);
  continueGame();
}

function gameOver() {
  removeElementById("playground_section");
  showElementById("score");

  // update final score
  const lastScore = document.getElementById("currentScore");
  const gameScore = document.getElementById("gameScore");
  gameScore.innerText = parseInt(lastScore.innerText);

  // clear the last selected alphabet highlight
  const currentAlphabet = getElementTextById("currentAlphabet");
  removeBackgroundColor(currentAlphabet);
}
