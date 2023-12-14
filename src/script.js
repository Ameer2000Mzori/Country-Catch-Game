// selecting elements
var startBtn = document.getElementsByClassName("start-Btn")[0];
var startWrap = document.getElementsByClassName("start-Wrap")[0];
var choiceWrap = document.getElementsByClassName("choice-Wrap")[0];
var CardEl = document.querySelectorAll(".Card");
var choiceImg = document.querySelectorAll("#choice-Img");
var playWrap = document.getElementsByClassName("play-Wrap")[0];
var playTime = document.getElementsByClassName("play-Time")[0];
var playScore = document.getElementsByClassName("play-Score")[0];
var playField = document.getElementsByClassName("play-Field")[0];
// gelobal varibales
var scoreCount = 0;
// functions
var startGame = function () {
    startWrap.style.transform = "translateY(-100%)";
    choiceWrap.style.transform = "translateY(-100%)";
    playWrap.style.transform = "translateY(-100%)";
};
// after user choices a fly functions
var choicedFly = function (cardImg) {
    choiceWrap.style.transform = "translateY(-200%)";
    playWrap.style.transform = "translateY(-200%)";
    startPlaying(cardImg);
};
// start playing function
var startPlaying = function (cardImg) {
    var enemyImg = document.createElement("img");
    enemyImg.classList.add("play-Img");
    enemyImg.src = "".concat(cardImg);
    console.log(enemyImg);
    playField.appendChild(enemyImg);
};
// event lisnters
startBtn.addEventListener("click", startGame);
CardEl.forEach(function (card) {
    card.addEventListener("click", function () {
        var cardImg = card.lastChild.previousElementSibling.src;
        console.log(cardImg);
        choicedFly(cardImg);
    });
});
