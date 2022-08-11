const gameContainer = document.getElementById("game");
const menu = document.querySelector(".menu");
const startBttn = document.querySelector(".start");
let scoreBarH2 = document.createElement("h2");
let scoreBarH3 = document.createElement("h3");
let gameOver = false;

const IMGS = [
  "Finn",
  "IceKing",
  "Jake",
  "LSP",
  "PBM",
  "BMO",
  "Finn",
  "IceKing",
  "Jake",
  "LSP",
  "PBM",
  "BMO",
];

function shuffle(array) {
  let counter = array.length;

  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}

let shuffledImgs = shuffle(IMGS);

const createDivsForImgs = function (ImgArray) {
  for (let img of ImgArray) {
    const card = document.createElement("div");
    card.classList.add(img, "facedown");
    card.addEventListener("click", handleCardClick);
    gameContainer.append(card);
  }
};

const gameStart = function () {
  let storedBest = localStorage.getItem("bestScore", JSON.parse(bestScore));
  console.log(storedBest)
  if (storedBest > 0){
    bestScore = storedBest
  }
  else {
    bestScore = 10000
  }
  const HUD = document.createElement("div");
  HUD.classList.add("HUD");
  scoreBarH2.innerText = `Score: ${currScore}`;
  scoreBarH3.innerText = `Best Score: ${bestScore}`;
  menu.append(HUD);
  HUD.appendChild(scoreBarH2);
  HUD.appendChild(scoreBarH3);
};

startBttn.addEventListener("click", function () {
  gameStart();
  startBttn.remove();
  createDivsForImgs(shuffledImgs);
});

let cardFlip1 = false;
let cardFlip2 = false;

function handleCardClick(e) {
  if (!cardFlip1 && e.target.classList.contains("facedown")) {
    let card1 = e.target;
    e.target.classList.remove("facedown");
    card1.setAttribute("id", "card1");
    cardFlip1 = true;
  }
  if (cardFlip1 && !cardFlip2 && e.target.classList.contains("facedown")) {
    let card2 = e.target;
    e.target.classList.remove("facedown");
    card2.setAttribute("id", "card2");
    cardFlip2 = true;
  }
  resolve();
}
