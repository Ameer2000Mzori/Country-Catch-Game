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
// functions
var startGame = function () {
    // transform: translateY(-200%);
    startWrap.style.transform = "translateY(-100%)";
    choiceWrap.style.transform = "translateY(-100%)";
};
// after user choices a fly functions
var choicedFly = function (cardImg) { };
// event lisnters
startBtn.addEventListener("click", startGame);
CardEl.forEach(function (card) {
    card.addEventListener("click", function () {
        var cardImg = card.lastChild;
        choicedFly(cardImg);
    });
});
