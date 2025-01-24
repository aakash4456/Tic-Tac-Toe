// elements from startDivPopUp
let startDivPopUp = document.getElementById("startDivPopUp");
let select_slot = document.getElementById("select_slot");
let TossBtn = document.getElementById("TossBtn");
let tosResult = document.getElementById("tosResult");
let firstPlayer = document.getElementById("firstPlayer");
let StartBtn = document.getElementById("StartBtn");

// elements from left div
let curPlayer = document.getElementById("curPlayer");
let TotalChance = document.getElementById("TotalChance");
let RemainingChance = document.getElementById("RemainingChance");
let score_X = document.getElementById("score_X");
let score_O = document.getElementById("score_O");

// elements from right div
let childA = document.querySelectorAll(".childs");

let quitButton = document.getElementById("quitButton");

// elements from popUpNextRnd
let popUpNextRnd = document.getElementById("popUpNextRnd");
let NextBtn = document.getElementById("NextBtn");

// elements from popUpNewGame
let finalResultHead = document.getElementById("finalResultHead");
let popUpNewGame = document.getElementById("popUpNewGame");

let grid = document.querySelector(".grid");


//variables
let playgame = true;

let currentPlayer = null;

let blocks = [];

// start The Game.
if (playgame) {
  startGame();
}

function startGame() {
  startDivPopUp.classList.add("open-startDivPopUp");
  TossBtn.style.pointerEvents = "";
  childA.forEach((element) => {
    blocks.push(element);
  });
  selectSlots();
  // let grid = document.querySelector(".grid");
  grid.addEventListener("click", checkWinstate);
}

function selectSlots() {
  StartBtn.addEventListener("click", function (e) {
    if (select_slot.value === " ") {
      alert("Please select No. of Slots");
    } else if (tosResult.value === " ") {
      alert("Please first make the Toss");
    } else {
      currentPlayer = firstPlayer.value;
      curPlayer.value = currentPlayer;
      TotalChance.value = select_slot.value;
      RemainingChance.value = select_slot.value;
      startDivPopUp.classList.remove("open-startDivPopUp");
    }
  });
}

// function to decide who will be the firstplayer in new game
TossBtn.addEventListener("click", function (e) {
  e.preventDefault();
  tossFunc();
});
function tossFunc() {
  let randomNum = parseInt(Math.random() * 100 + 1);
  tosResult.value = randomNum;
  if (randomNum % 2 === 0) {
    firstPlayer.value = "❌";
  } else {
    firstPlayer.value = "⭕";
  }
  TossBtn.style.pointerEvents = "none";
}

// function to reset grid divs values after completion of a round
NextBtn.addEventListener("click", function (e) {
  childA.forEach((child) => {
    child.style.pointerEvents = "";
    child.innerHTML = " ";
    child.classList.remove('childs_afterWin');
  });
  grid.addEventListener("click", checkWinstate);
  if (RemainingChance.value === "0") {
    endgame();
  }
  popUpNextRnd.classList.remove("open-popUpNextRnd");
});

// function to set current Player after click on Grid box
function setCurrentPlayer(div) {
  if (currentPlayer === "❌") {
    div.innerHTML = currentPlayer;
    currentPlayer = "⭕";
    curPlayer.value = currentPlayer;
    div.style.pointerEvents = "none";
  } else if (currentPlayer === "⭕") {
    div.innerHTML = currentPlayer;
    currentPlayer = "❌";
    curPlayer.value = currentPlayer;
    div.style.pointerEvents = "none";
  }
}

// function to check WIN or DRAW state of the game
function checkWinstate() {
  if (
    (blocks[0].innerHTML === "❌" &&
      blocks[1].innerHTML === "❌" &&
      blocks[2].innerHTML === "❌") ||
    (blocks[0].innerHTML === "⭕" &&
      blocks[1].innerHTML === "⭕" &&
      blocks[2].innerHTML === "⭕")
  ) {
    blocks[0].classList.add('childs_afterWin');
    blocks[1].classList.add('childs_afterWin')
    blocks[2].classList.add('childs_afterWin')

    childA.forEach((child) => {
      child.style.pointerEvents = "none";
    });
    grid.removeEventListener("click", checkWinstate);

    displayMessage(`${blocks[0].innerHTML}, You won this round.`);
    if (blocks[0].innerHTML === "❌") {
      score_X.value++;
    } else {
      score_O.value++;
    }
    RemainingChance.value--;
    if (RemainingChance.value >= "0") {
      if (RemainingChance.value === "0") {
        NextBtn.value = "Check Result";
      }
      popUpNextRnd.classList.add("open-popUpNextRnd");
    }
  } else if (
    (blocks[3].innerHTML === "❌" &&
      blocks[4].innerHTML === "❌" &&
      blocks[5].innerHTML === "❌") ||
    (blocks[3].innerHTML === "⭕" &&
      blocks[4].innerHTML === "⭕" &&
      blocks[5].innerHTML === "⭕")
  ) {
    blocks[3].classList.add('childs_afterWin');
    blocks[4].classList.add('childs_afterWin')
    blocks[5].classList.add('childs_afterWin')
    
    childA.forEach((child) => {
      child.style.pointerEvents = "none";
    });
    grid.removeEventListener("click", checkWinstate);

    displayMessage(`${blocks[3].innerHTML}, You won this round.`);
    if (blocks[3].innerHTML === "❌") {
      score_X.value++;
    } else {
      score_O.value++;
    }
    RemainingChance.value--;
    if (RemainingChance.value >= "0") {
      if (RemainingChance.value === "0") {
        NextBtn.value = "Check Result";
      }
      popUpNextRnd.classList.add("open-popUpNextRnd");
    }
  } else if (
    (blocks[6].innerHTML === "❌" &&
      blocks[7].innerHTML === "❌" &&
      blocks[8].innerHTML === "❌") ||
    (blocks[6].innerHTML === "⭕" &&
      blocks[7].innerHTML === "⭕" &&
      blocks[8].innerHTML === "⭕")
  ) {
    blocks[6].classList.add('childs_afterWin');
    blocks[7].classList.add('childs_afterWin')
    blocks[8].classList.add('childs_afterWin')

    childA.forEach((child) => {
      child.style.pointerEvents = "none";
    });
    grid.removeEventListener("click", checkWinstate);

    displayMessage(`${blocks[6].innerHTML}, You won this round.`);
    if (blocks[6].innerHTML === "❌") {
      score_X.value++;
    } else {
      score_O.value++;
    }
    RemainingChance.value--;
    if (RemainingChance.value >= "0") {
      if (RemainingChance.value === "0") {
        NextBtn.value = "Check Result";
      }
      popUpNextRnd.classList.add("open-popUpNextRnd");
    }
  } else if (
    (blocks[0].innerHTML === "❌" &&
      blocks[3].innerHTML === "❌" &&
      blocks[6].innerHTML === "❌") ||
    (blocks[0].innerHTML === "⭕" &&
      blocks[3].innerHTML === "⭕" &&
      blocks[6].innerHTML === "⭕")
  ) {
    blocks[0].classList.add('childs_afterWin');
    blocks[3].classList.add('childs_afterWin')
    blocks[6].classList.add('childs_afterWin')

    childA.forEach((child) => {
      child.style.pointerEvents = "none";
    });
    grid.removeEventListener("click", checkWinstate);

    displayMessage(`${blocks[0].innerHTML}, You won this round.`);
    if (blocks[0].innerHTML === "❌") {
      score_X.value++;
    } else {
      score_O.value++;
    }
    RemainingChance.value--;
    if (RemainingChance.value >= "0") {
      if (RemainingChance.value === "0") {
        NextBtn.value = "Check Result";
      }
      popUpNextRnd.classList.add("open-popUpNextRnd");
    }
  } else if (
    (blocks[1].innerHTML === "❌" &&
      blocks[4].innerHTML === "❌" &&
      blocks[7].innerHTML === "❌") ||
    (blocks[1].innerHTML === "⭕" &&
      blocks[4].innerHTML === "⭕" &&
      blocks[7].innerHTML === "⭕")
  ) {
    blocks[1].classList.add('childs_afterWin')
    blocks[4].classList.add('childs_afterWin');
    blocks[7].classList.add('childs_afterWin')

    childA.forEach((child) => {
      child.style.pointerEvents = "none";
    });
    grid.removeEventListener("click", checkWinstate);

    displayMessage(`${blocks[1].innerHTML}, You won this round.`);
    if (blocks[1].innerHTML === "❌") {
      score_X.value++;
    } else {
      score_O.value++;
    }
    RemainingChance.value--;
    if (RemainingChance.value >= "0") {
      if (RemainingChance.value === "0") {
        NextBtn.value = "Check Result";
      }
      popUpNextRnd.classList.add("open-popUpNextRnd");
    }
  } else if (
    (blocks[2].innerHTML === "❌" &&
      blocks[5].innerHTML === "❌" &&
      blocks[8].innerHTML === "❌") ||
    (blocks[2].innerHTML === "⭕" &&
      blocks[5].innerHTML === "⭕" &&
      blocks[8].innerHTML === "⭕")
  ) {
    blocks[2].classList.add('childs_afterWin');
    blocks[5].classList.add('childs_afterWin')
    blocks[8].classList.add('childs_afterWin')

    childA.forEach((child) => {
      child.style.pointerEvents = "none";
    });
    grid.removeEventListener("click", checkWinstate);

    displayMessage(`${blocks[2].innerHTML}, You won this round.`);
    if (blocks[2].innerHTML === "❌") {
      score_X.value++;
    } else {
      score_O.value++;
    }
    RemainingChance.value--;
    if (RemainingChance.value >= "0") {
      if (RemainingChance.value === "0") {
        NextBtn.value = "Check Result";
      }
      popUpNextRnd.classList.add("open-popUpNextRnd");
    }
  } else if (
    (blocks[0].innerHTML === "❌" &&
      blocks[4].innerHTML === "❌" &&
      blocks[8].innerHTML === "❌") ||
    (blocks[0].innerHTML === "⭕" &&
      blocks[4].innerHTML === "⭕" &&
      blocks[8].innerHTML === "⭕")
  ) {
    blocks[0].classList.add('childs_afterWin');
    blocks[4].classList.add('childs_afterWin')
    blocks[8].classList.add('childs_afterWin')

    childA.forEach((child) => {
      child.style.pointerEvents = "none";
    });
    grid.removeEventListener("click", checkWinstate);

    displayMessage(`${blocks[0].innerHTML}, You won this round.`);
    if (blocks[0].innerHTML === "❌") {
      score_X.value++;
    } else {
      score_O.value++;
    }
    RemainingChance.value--;
    if (RemainingChance.value >= "0") {
      if (RemainingChance.value === "0") {
        NextBtn.value = "Check Result";
      }
      popUpNextRnd.classList.add("open-popUpNextRnd");
    }
  } else if (
    (blocks[2].innerHTML === "❌" &&
      blocks[4].innerHTML === "❌" &&
      blocks[6].innerHTML === "❌") ||
    (blocks[2].innerHTML === "⭕" &&
      blocks[4].innerHTML === "⭕" &&
      blocks[6].innerHTML === "⭕")
  ) {
    blocks[2].classList.add('childs_afterWin');
    blocks[4].classList.add('childs_afterWin')
    blocks[6].classList.add('childs_afterWin')

    childA.forEach((child) => {
      child.style.pointerEvents = "none";
    });
    grid.removeEventListener("click", checkWinstate);

    displayMessage(`${blocks[2].innerHTML}, You won this round.`);
    if (blocks[2].innerHTML === "❌") {
      score_X.value++;
    } else {
      score_O.value++;
    }
    RemainingChance.value--;
    if (RemainingChance.value >= "0") {
      if (RemainingChance.value === "0") {
        NextBtn.value = "Check Result";
      }
      popUpNextRnd.classList.add("open-popUpNextRnd");
    }
  } else if (
    blocks[0].innerHTML != " " &&
    blocks[1].innerHTML != " " &&
    blocks[2].innerHTML != " " &&
    blocks[3].innerHTML != " " &&
    blocks[4].innerHTML != " " &&
    blocks[5].innerHTML != " " &&
    blocks[6].innerHTML != " " &&
    blocks[7].innerHTML != " " &&
    blocks[8].innerHTML != " "
  ) {
    displayMessage(`Round Over.`);
    RemainingChance.value--;
    if (RemainingChance.value >= "0") {
      if (RemainingChance.value === "0") {
        NextBtn.value = "Check Result";
      }
      popUpNextRnd.classList.add("open-popUpNextRnd");
    }
  }
}

// function to display messages after a round finish.
function displayMessage(message) {
  let slotResult = document.querySelector(".slotResult");
  slotResult.innerHTML = `<h2>${message}</h2>`;
}

// function to end game after a certain result.
function endgame() {
  childA.forEach((child) => {
    child.style.pointerEvents = "none";
  });
  if (RemainingChance.value === "0") {
    if (score_X.value > score_O.value) {
      finalResultHead.innerHTML = "❌ won the match";
      popUpNewGame.classList.add("open-popUpNewGame");
    } else if (score_X.value < score_O.value) {
      finalResultHead.innerHTML = "⭕ won the match";
      popUpNewGame.classList.add("open-popUpNewGame");
    } else if (score_X.value === score_O.value) {
      finalResultHead.innerHTML = "Game overrrrr";
      popUpNewGame.classList.add("open-popUpNewGame");
    }
  }
  playgame = false;
  newGame();
}

// function to restart the Game
function newGame() {
  let NewBtn = document.getElementById("NewBtn");
  NewBtn.addEventListener("click", function (e) {
    childA.forEach((child) => {
      child.style.pointerEvents = "";
      child.innerHTML = " ";
    });
    // reset values that used in game at real time
    currentPlayer = null;
    blocks = [];
    curPlayer.value = "";
    TotalChance.value = "";
    RemainingChance.value = "";
    score_X.value = "0";
    score_O.value = "0";
    //reset startDivPopUp values
    select_slot.value = " ";
    tosResult.value = " ";
    firstPlayer.value = "";
    popUpNewGame.classList.remove("open-popUpNewGame");
    popUpNextRnd.classList.remove("open-popUpNextRnd");
    playgame = true;
    startGame();
  });
}


gsap.from("#haed1", {
  opacity: 0,
  duration: 1,
  ease: "power1.inOut",
});

gsap.from(".startDivPopUp", {
  opacity: 0,
  delay: 0.5,
  duration: 1.5,
  ease: "power1.inOut",
});


// for testing
// gsap.from("#ha1", {
//     opacity: 0,             // Start with 0 opacity (hidden)
//     y: 50,                  // Start 50px below
//     duration: 1,            // Animation duration of 1 second
//     ease: "power1.inOut",   // Easing function for smooth transition
//     delay: 0.5,             // Delay animation by 0.5 seconds
//     stagger: 0.2,           // Stagger effect for multiple elements
//     rotation: 180,          // Rotate the element 180 degrees
//     scale: 0.5,             // Start with 50% scale (smaller)
//     backgroundColor: "#f39c12", // Animate background color to #f39c12
//     x: 100,                 // Start 100px from the left
//     onComplete: function() {  // Callback function when the animation is complete
//         console.log("Animation Complete!");
//     }
// });