// selecting elements
const startBtn = document.getElementsByClassName("start-Btn")[0];
const startWrap: any = document.getElementsByClassName("start-Wrap")[0];
const choiceWrap: any = document.getElementsByClassName("choice-Wrap")[0];
const CardEl = document.querySelectorAll(".Card");
const choiceImg = document.querySelectorAll("#choice-Img");
const playWrap: any = document.getElementsByClassName("play-Wrap")[0];
const playTime = document.getElementsByClassName("play-Time")[0];
const playScore = document.getElementsByClassName("play-Score")[0];
const playField = document.getElementsByClassName("play-Field")[0];

// gelobal varibales

// functions
const startGame = () => {
  // transform: translateY(-200%);
  startWrap.style.transform = `translateY(-100%)`;
  choiceWrap.style.transform = `translateY(-100%)`;
};

// after user choices a fly functions
const choicedFly = (cardImg) => {};

// event lisnters
startBtn.addEventListener("click", startGame);

CardEl.forEach((card) => {
  card.addEventListener("click", () => {
    let cardImg = card.lastChild;
    choicedFly(cardImg);
  });
});
