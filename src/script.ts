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
let scoreCount = 0;
let enemysCount = 0;

// functions
const startGame = () => {
  startWrap.style.transform = `translateY(-100%)`;
  choiceWrap.style.transform = `translateY(-100%)`;
  playWrap.style.transform = `translateY(-100%)`;
};

// after user choices a fly functions
const choicedFly = (cardImg) => {
  choiceWrap.style.transform = `translateY(-200%)`;
  playWrap.style.transform = `translateY(-200%)`;
  startPlaying(cardImg);
};

// start playing function
const startPlaying = (cardImg) => {
  // checking if there is more then 20 enemys
  if (enemysCount <= 10) {
    setTimeout(() => {
      // creating random num for posation
      let randNum1 = Math.floor(Math.random() * 90) + 5;
      console.log(randNum1);
      let randNum2 = Math.floor(Math.random() * 90) + 5;
      console.log(randNum2);

      // creating and giving the random nums to the posations
      const enemyImg = document.createElement("img");
      enemyImg.classList.add("play-Img");
      enemyImg.src = `${cardImg}`;
      enemyImg.style.top = `${randNum1}%`;
      enemyImg.style.left = `${randNum2}%`;
      console.log(enemyImg);
      playField.appendChild(enemyImg);
      console.log("hi");
      // increasing the enemys numbers
      enemysCount++;
      setTimeout(() => {
        // creating random num for posation
        let randNum1 = Math.floor(Math.random() * 90) + 5;
        console.log(randNum1);
        let randNum2 = Math.floor(Math.random() * 90) + 5;
        console.log(randNum2);

        // creating and giving the random nums to the posations
        const enemyImg = document.createElement("img");
        enemyImg.classList.add("play-Img");
        enemyImg.src = `${cardImg}`;
        enemyImg.style.top = `${randNum1}%`;
        enemyImg.style.left = `${randNum2}%`;
        console.log(enemyImg);
        playField.appendChild(enemyImg);
        console.log("hi");
        // increasing the enemys numbers
        enemysCount++;

        // calling the function again
        startPlaying(cardImg);
      }, 1000);
    }, 1000);
  } else {
    console.log("waiting until he kills a bug");
  }
};

// event lisnters
startBtn.addEventListener("click", startGame);

CardEl.forEach((card) => {
  card.addEventListener("click", () => {
    let cardImg = card.lastChild.previousElementSibling.src;
    console.log(cardImg);
    choicedFly(cardImg);
  });
});
