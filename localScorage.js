let currScore = 0;
let matches = 0;
let bestScore = 10000;


const resolve = function () {
  if (cardFlip2) {
    setTimeout(function () {
      if (card1.classList.value !== card2.classList.value) {
        card1.classList.add("facedown");
        card2.classList.add("facedown");
        currScore += 10;
        scoreBarH2.innerText = `Score: ${currScore}`;
      } else {
        currScore += 5;
        scoreBarH2.innerText = `Score: ${currScore}`;
        matches++;
      }
      card1.removeAttribute("id");
      card2.removeAttribute("id");
      cardFlip1 = false;
      cardFlip2 = false;
      checkGameState();
      if (gameOver) {
        endGame();
      }
    }, 1200);
  }
};

const checkGameState = function () {
  const totalCards = IMGS.length;
  if (matches === totalCards / 2) {
    gameOver = true;
  }
};

const endGame = function () {
  if (currScore < bestScore) {
    bestScore = currScore;
  }
  scoreBarH3.innerText = `Best Score: ${bestScore}`;
  localStorage.setItem("bestScore", bestScore);
  const newGame = document.createElement("div");
  const NGBanner = document.createElement("h2");
  NGBanner.innerText = `You Scored: ${currScore} points!`;
  newGame.classList.add("new-game");
  const NGBttn = document.createElement("button");
  NGBttn.classList.add("ng-bttn");
  NGBttn.innerText = "New Game!";
  menu.appendChild(newGame);
  newGame.appendChild(NGBanner);
  newGame.appendChild(NGBttn);
  NGBttn.addEventListener("click", function () {
    newGame.remove();
    location.reload();
  });
};
