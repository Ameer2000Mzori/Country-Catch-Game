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
let timeSec = 0;
let timeMin = 0;

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
      let randNum1 = Math.floor(Math.random() * 80) + 5;
      console.log(randNum1);
      let randNum2 = Math.floor(Math.random() * 80) + 5;
      console.log(randNum2);

      // creating and giving the random nums to the posations
      const enemyImg = document.createElement("img");
      enemyImg.classList.add("play-Img");
      enemyImg.src = `${cardImg}`;
      enemyImg.style.top = `${randNum1}%`;
      enemyImg.style.left = `${randNum2}%`;
      playField.appendChild(enemyImg);
      console.log("hi");
      // increasing the enemys numbers
      enemysCount++;

      enemyImg.addEventListener("click", () => {
        if (enemyImg) {
          enemyImg.remove();
          enemysCount--;
          scoreCount++;
          startPlaying(cardImg);
          playScore.textContent = `SCORE: ${scoreCount}`;
        }
        console.log(`this is enemys`, enemysCount);
        console.log(`this is score`, scoreCount);
      });
    }, 1000);

    setTimeout(() => {
      // creating random num for posation
      let randNum1 = Math.floor(Math.random() * 80) + 5;
      console.log(randNum1);
      let randNum2 = Math.floor(Math.random() * 80) + 5;
      console.log(randNum2);

      // creating and giving the random nums to the posations
      const enemyImg = document.createElement("img");
      enemyImg.classList.add("play-Img");
      enemyImg.src = `${cardImg}`;
      enemyImg.style.top = `${randNum1}%`;
      enemyImg.style.left = `${randNum2}%`;
      playField.appendChild(enemyImg);
      console.log("hi");
      // increasing the enemys numbers
      enemysCount++;

      enemyImg.addEventListener("click", () => {
        if (enemyImg) {
          enemyImg.remove();
          enemysCount--;
          startPlaying(cardImg);
          scoreCount++;
          playScore.textContent = `SCORE: ${scoreCount}`;
        }
      });

      // calling the function again

      console.log(`this is enemys`, enemysCount);
      console.log(`this is score`, scoreCount);
    }, 1200);
  } else {
    console.log("waiting until he kills a bug");
  }
};

// this is timer function
const startTimer = () => {
  timeSec++;

  setTimeout(() => {
    if (timeSec >= 60) {
      timeSec = 1;
      timeMin++;
    }
    if (timeSec <= 9 && timeMin <= 9) {
      playTime.textContent = `0${timeMin}:0${timeSec}`;
    } else if (timeSec > 9 && timeMin > 9) {
      playTime.textContent = `${timeMin}:${timeSec}`;
    } else if (timeSec > 9) {
      if (timeMin > 9) {
        playTime.textContent = `${timeMin}:${timeSec}`;
      } else {
        playTime.textContent = `0${timeMin}:${timeSec}`;
      }
    } else if (timeMin > 9) {
      if (timeSec > 9) {
        playTime.textContent = `${timeMin}:${timeSec}`;
      } else {
        playTime.textContent = `${timeMin}:0${timeSec}`;
      }
    }

    startTimer();
  }, 1000);
};

// event lisnters
startBtn.addEventListener("click", startGame);

CardEl.forEach((card) => {
  card.addEventListener("click", () => {
    let cardImg = card.lastChild.previousElementSibling.src;
    console.log(cardImg);
    choicedFly(cardImg);

    startTimer();
  });
});
