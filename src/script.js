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
var enemysCount = 0;
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
    // checking if there is more then 20 enemys
    if (enemysCount <= 10) {
        setTimeout(function () {
            // creating random num for posation
            var randNum1 = Math.floor(Math.random() * 90) + 5;
            console.log(randNum1);
            var randNum2 = Math.floor(Math.random() * 90) + 5;
            console.log(randNum2);
            // creating and giving the random nums to the posations
            var enemyImg = document.createElement("img");
            enemyImg.classList.add("play-Img");
            enemyImg.src = "".concat(cardImg);
            enemyImg.style.top = "".concat(randNum1, "%");
            enemyImg.style.left = "".concat(randNum2, "%");
            playField.appendChild(enemyImg);
            console.log("hi");
            // increasing the enemys numbers
            enemysCount++;
            enemyImg.addEventListener("click", function () {
                if (enemyImg) {
                    enemyImg.remove();
                    enemysCount--;
                    scoreCount++;
                    startPlaying(cardImg);
                }
                console.log("this is enemys", enemysCount);
                console.log("this is score", scoreCount);
            });
        }, 1000);
        setTimeout(function () {
            // creating random num for posation
            var randNum1 = Math.floor(Math.random() * 90) + 5;
            console.log(randNum1);
            var randNum2 = Math.floor(Math.random() * 90) + 5;
            console.log(randNum2);
            // creating and giving the random nums to the posations
            var enemyImg = document.createElement("img");
            enemyImg.classList.add("play-Img");
            enemyImg.src = "".concat(cardImg);
            enemyImg.style.top = "".concat(randNum1, "%");
            enemyImg.style.left = "".concat(randNum2, "%");
            playField.appendChild(enemyImg);
            console.log("hi");
            // increasing the enemys numbers
            enemysCount++;
            enemyImg.addEventListener("click", function () {
                if (enemyImg) {
                    enemyImg.remove();
                    enemysCount--;
                    startPlaying(cardImg);
                    scoreCount++;
                }
            });
            // calling the function again
            console.log("this is enemys", enemysCount);
            console.log("this is score", scoreCount);
        }, 1200);
    }
    else {
        console.log("waiting until he kills a bug");
    }
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
