var time = 45;
var move = 2;
var clicks = 0;
var check = 0;
var b1 = document.getElementById("button1");
var score = document.getElementById("score");
var timer = document.getElementById("timer");
var body = document.getElementById("body");
var movetimer = document.getElementById("movetimer");
var grid = document.getElementsByClassName("grid");
var button = document.getElementsByClassName("button");
var topbox = document.getElementsByClassName("top-box");
var bottombox = document.getElementsByClassName("bottom-box");
var clicksound = new Audio('audio/click.mp3');
var kahoot = new Audio('audio/kahoot.mp3');
var viewportWidth = document.documentElement.clientWidth;
var viewportHeight = document.documentElement.clientHeight;
var random;
var clock;
var movement;
// this function adds functions to the buttons when the website loads
window.onload = function(){
  for (i = 0; i < button.length; i++) {
    button[i].addEventListener("click", countClick);
  }
  b1.addEventListener("click", clickToStart);
  timer.innerHTML = "time remaining: " + time + " seconds";
  score.innerHTML = "score: "+ clicks;
  //movetimer.innerHTML = "Time Until Move: " + move + " Seconds";
  movetimer.innerHTML = "time until over: n/a";
  for (i = 1; i < button.length; i++) {
      button[i].style.display = "none";
	}
}
// starts the game
function clickToStart() {
  kahoot.load();
  kahoot.play();
  console.log("removed start function");
  b1.removeEventListener("click", clickToStart);
  console.log("started timer");
  game();
  //btnmove();
  for (i = 0; i < button.length; i++) {
    button[i].innerHTML = "click me!";
  }
  for (i = 0; i < grid.length; i++) {
   // grid[i].addEventListener("click", removePoint);
  }
}
//controls the timer and the addition and removal of different functions
function game() {
  if (time > 0) {
    clearInterval(clock);
    time -= 1;
    timer.innerHTML = "time remaining: " + time + " seconds";
    clock = setInterval(game, 1000);
    console.log("time remaining: " + time);
    if (time == 30) {
	  kahoot.playbackRate = 1.25;
	} else if (time == 20) {
       kahoot.playbackRate = 1.5;
	} else if (time == 10) {
      kahoot.playbackRate = 1.75;
    }else if (time == 5) {
      kahoot.playbackRate = 2.0;
    }
  } else {
    clearInterval(clock);
    gameOver();
	}
}
//function currently removed under development
/*function btnmove(){
  if (move > 1 && time > 0) {
    clearInterval(movement);
	generateRandom();
	randomMove();
    move -= 1;
    movetimer.innerHTML = "Time Until Move: " + move + " Seconds";
    movement = setInterval(btnmove, 400);
    console.log("Time Until Move: " + move + " Seconds");
  } else {
    movetimer.innerHTML = "Moving!";
    resetMove();
  }
}*/
//function currently removed under development
/*function resetMove() {
  move = 2;
}*/
//counts clicks when the button is clicked
function countClick() {
  clicksound.load();
  clicksound.play();
  clicks += 1;
  score.innerHTML = "score: "+clicks;
  console.log("score: "+clicks);
  onClickMove();
  console.log("button Move");
}
//changes color score, sends alert, and changes button function to refresh the page
function gameOver() {
  window.alert("game over!");
  for (i = 0; i < grid.length; i++) {
    grid[i].style.backgroundColor = "#3B77B8";
	}
  for (i = 0; i < topbox.length; i++) {
    topbox[i].style.backgroundColor = "#3B77B8";
    }
  for (i = 0; i < bottombox.length; i++) {
    bottombox[i].style.backgroundColor = "#3B77B8";
    }
  for (i = 0; i < button.length; i++) {
    button[i].removeEventListener("click", countClick);
    button[i].addEventListener("click", reset); 
	button[i].innerHTML = "click to reset!";
    }
  b1.style.backgroundColor = "#F0CC8D";
  }
function randomMove() {
  if (viewportWidth < 776 ) {
    if (random == button[0]) {
      if (check == 0) {
        generateRandom2();
        randomMove();
    } else {
      for (i = 0; i < button.length; i++) {
        button[i].style.display = "none";
	    button[0].style.display = "block";
      }
      check = 0;
	}
  } else if (random == button[1]) {
      if (check == 1) {
        generateRandom2();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
        button[i].style.display = "none";
        button[1].style.display = "block";
	    }
      check = 1;
      }
	} else if (random == button[2]) {
      if (check == 2) {
        generateRandom2();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
        button[i].style.display = "none";
        button[2].style.display = "block";
	    }
      check = 2;
      }
	} else if (random == button[3]) {
      if (check == 3) {
        generateRandom2();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[3].style.display = "block";
	    }
      check = 3;
      }
	} else if (random == button[4]) {
      if (check == 4) {
        generateRandom2();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[4].style.display = "block";
	    }
      check = 4;
      }
	} else if (random == button[5]) {
      if (check == 5) {
        generateRandom2();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[5].style.display = "block";
	    }
      check = 5;
      }
	} else if (random == button[6]) {
          if (check == 6) {
        generateRandom2();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[6].style.display = "block";
	    }
      check = 6;
      }
	} else if (random == button[7]) {
      if (check == 7) {
        generateRandom2();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[7].style.display = "block";
	    }
      check = 7;
      }
	} else if (random == button[8]) {
      if (check == 8) {
        generateRandom2();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[8].style.display = "block";
	    }
      check = 8;
      }
	} else if (random == button[9]) {
      if (check == 9) {
        generateRandom2();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[9].style.display = "block";
	    }
      check = 9;
      }
	} else if (random == button[10]) {
      if (check == 10) {
        generateRandom2();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[10].style.display = "block";
	    }
      check = 10;
      }
	} else if (random == button[11]) {
          if (check == 11) {
        generateRandom2();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[11].style.display = "block";
	    }
      check = 11;
      }
	} else if (random == button[12]) {
      if (check == 12) {
        generateRandom2();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[12].style.display = "block";
	    }
      check = 12;
      }
	} else if (random == button[13]) {
      if (check == 13) {
        generateRandom2();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[13].style.display = "block";
	    }
      check = 13;
      }
	} else if (random == button[14]) {
      if (check == 14) {
        generateRandom2();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[14].style.display = "block";
	    }
      check = 14;
      }
	} else if (random == button[15]) {
      if (check == 15) {
        generateRandom2();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[15].style.display = "block";
	    }
      check = 15;
      }
	} else if (random == button[16]) {
      if (check == 16) {
        generateRandom2();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[16].style.display = "block";
	    }
      check = 16;
      }
	} else if (random == button[17]) {
      if (check == 17) {
        generateRandom2();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[17].style.display = "block";
	    }
        check = 17;
      }
	} else if (random == button[18]) {
      if (check == 18) {
        generateRandom2();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[18].style.display = "block";
	    }
        check = 18;
      }
	} else if (random == button[19]) {
      if (check == 19) {
        generateRandom2();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[19].style.display = "block";
	    }
        check = 19;
      }
	} else if (random == button[20]) {
      if (check == 20) {
        generateRandom2();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[20].style.display = "block";
	    }
        check = 20;
      }
	} else if (random == button[21]) {
      if (check == 21) {
        generateRandom2();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[21].style.display = "block";
	    }
      check = 21;
      }
	} else if (random == button[22]) {
      if (check == 22) {
        generateRandom2();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[22].style.display = "block";
	    }
      check = 22;
      }
	} else if (random == button[23]) {
      if (check == 23) {
        generateRandom2();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[23].style.display = "block";
	    }
      check = 2;
      }
	} else if (random == button[24]) {
      if (check == 24) {
        generateRandom2();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[23].style.display = "block";
	    }
      check = 24;
      }
	}
  } else if (viewportHeight < 801) {
    if (random == button[0]) {
      if (check == 0) {
        generateRandom2();
        randomMove();
    } else {
      for (i = 0; i < button.length; i++) {
        button[i].style.display = "none";
	    button[0].style.display = "block";
      }
      check = 0;
	}
  } else if (random == button[1]) {
      if (check == 1) {
        generateRandom2();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
        button[i].style.display = "none";
        button[1].style.display = "block";
	    }
      check = 1;
      }
	} else if (random == button[2]) {
      if (check == 2) {
        generateRandom2();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
        button[i].style.display = "none";
        button[2].style.display = "block";
	    }
      check = 2;
      }
	} else if (random == button[3]) {
      if (check == 3) {
        generateRandom2();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[3].style.display = "block";
	    }
      check = 3;
      }
	} else if (random == button[4]) {
      if (check == 4) {
        generateRandom2();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[4].style.display = "block";
	    }
      check = 4;
      }
	} else if (random == button[5]) {
      if (check == 5) {
        generateRandom2();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[5].style.display = "block";
	    }
      check = 5;
      }
	} else if (random == button[6]) {
          if (check == 6) {
        generateRandom2();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[6].style.display = "block";
	    }
      check = 6;
      }
	} else if (random == button[7]) {
      if (check == 7) {
        generateRandom2();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[7].style.display = "block";
	    }
      check = 7;
      }
	} else if (random == button[8]) {
      if (check == 8) {
        generateRandom2();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[8].style.display = "block";
	    }
      check = 8;
      }
	} else if (random == button[9]) {
      if (check == 9) {
        generateRandom2();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[9].style.display = "block";
	    }
      check = 9;
      }
	} else if (random == button[10]) {
      if (check == 10) {
        generateRandom2();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[10].style.display = "block";
	    }
      check = 10;
      }
	} else if (random == button[11]) {
          if (check == 11) {
        generateRandom2();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[11].style.display = "block";
	    }
      check = 11;
      }
	} else if (random == button[12]) {
      if (check == 12) {
        generateRandom2();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[12].style.display = "block";
	    }
      check = 12;
      }
	} else if (random == button[13]) {
      if (check == 13) {
        generateRandom2();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[13].style.display = "block";
	    }
      check = 13;
      }
	} else if (random == button[14]) {
      if (check == 14) {
        generateRandom2();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[14].style.display = "block";
	    }
      check = 14;
      }
	} else if (random == button[15]) {
      if (check == 15) {
        generateRandom2();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[15].style.display = "block";
	    }
      check = 15;
      }
	} else if (random == button[16]) {
      if (check == 16) {
        generateRandom2();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[16].style.display = "block";
	    }
      check = 16;
      }
	} else if (random == button[17]) {
      if (check == 17) {
        generateRandom2();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[17].style.display = "block";
	    }
        check = 17;
      }
	} else if (random == button[18]) {
      if (check == 18) {
        generateRandom2();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[18].style.display = "block";
	    }
        check = 18;
      }
	} else if (random == button[19]) {
      if (check == 19) {
        generateRandom2();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[19].style.display = "block";
	    }
        check = 19;
      }
	} else if (random == button[20]) {
      if (check == 20) {
        generateRandom2();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[20].style.display = "block";
	    }
        check = 20;
      }
	} else if (random == button[21]) {
      if (check == 21) {
        generateRandom2();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[21].style.display = "block";
	    }
      check = 21;
      }
	} else if (random == button[22]) {
      if (check == 22) {
        generateRandom2();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[22].style.display = "block";
	    }
      check = 22;
      }
	} else if (random == button[23]) {
      if (check == 23) {
        generateRandom2();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[23].style.display = "block";
	    }
      check = 23;
      }
	} else if (random == button[24]) {
      if (check == 24) {
        generateRandom2();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[23].style.display = "block";
	    }
      check = 24;
      }
	}
    } else {
    if (random == button[0]) {
      if (check == 0) {
        generateRandom();
        randomMove();
    } else {
      for (i = 0; i < button.length; i++) {
        button[i].style.display = "none";
	    button[0].style.display = "block";
      }
      check = 0;
	}
  } else if (random == button[1]) {
      if (check == 1) {
        generateRandom();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
        button[i].style.display = "none";
        button[1].style.display = "block";
	    }
      check = 1;
      }
	} else if (random == button[2]) {
      if (check == 2) {
        generateRandom();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
        button[i].style.display = "none";
        button[2].style.display = "block";
	    }
      check = 2;
      }
	} else if (random == button[3]) {
      if (check == 3) {
        generateRandom();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[3].style.display = "block";
	    }
      check = 3;
      }
	} else if (random == button[4]) {
      if (check == 4) {
        generateRandom();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[4].style.display = "block";
	    }
      check = 4;
      }
	} else if (random == button[5]) {
      if (check == 5) {
        generateRandom();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[5].style.display = "block";
	    }
      check = 5;
      }
	} else if (random == button[6]) {
          if (check == 6) {
        generateRandom();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[6].style.display = "block";
	    }
      check = 6;
      }
	} else if (random == button[7]) {
      if (check == 7) {
        generateRandom();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[7].style.display = "block";
	    }
      check = 7;
      }
	} else if (random == button[8]) {
      if (check == 8) {
        generateRandom();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[8].style.display = "block";
	    }
      check = 8;
      }
	} else if (random == button[9]) {
      if (check == 9) {
        generateRandom();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[9].style.display = "block";
	    }
      check = 9;
      }
	} else if (random == button[10]) {
      if (check == 10) {
        generateRandom();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[10].style.display = "block";
	    }
      check = 10;
      }
	} else if (random == button[11]) {
          if (check == 11) {
        generateRandom();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[11].style.display = "block";
	    }
      check = 11;
      }
	} else if (random == button[12]) {
      if (check == 12) {
        generateRandom();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[12].style.display = "block";
	    }
      check = 12;
      }
	} else if (random == button[13]) {
      if (check == 13) {
        generateRandom();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[13].style.display = "block";
	    }
      check = 13;
      }
	} else if (random == button[14]) {
      if (check == 14) {
        generateRandom();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[14].style.display = "block";
	    }
      check = 14;
      }
	} else if (random == button[15]) {
      if (check == 15) {
        generateRandom();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[15].style.display = "block";
	    }
      check = 15;
      }
	} else if (random == button[16]) {
      if (check == 16) {
        generateRandom();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[16].style.display = "block";
	    }
      check = 16;
      }
	} else if (random == button[17]) {
      if (check == 17) {
        generateRandom();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[17].style.display = "block";
	    }
        check = 17;
      }
	} else if (random == button[18]) {
      if (check == 18) {
        generateRandom();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[18].style.display = "block";
	    }
        check = 18;
      }
	} else if (random == button[19]) {
      if (check == 19) {
        generateRandom();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[19].style.display = "block";
	    }
        check = 19;
      }
	} else if (random == button[20]) {
      if (check == 20) {
        generateRandom();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[20].style.display = "block";
	    }
        check = 20;
      }
	} else if (random == button[21]) {
      if (check == 21) {
        generateRandom();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[21].style.display = "block";
	    }
      check = 21;
      }
	} else if (random == button[22]) {
      if (check == 22) {
        generateRandom();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[22].style.display = "block";
	    }
      check = 22;
      }
	} else if (random == button[23]) {
      if (check == 23) {
        generateRandom();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[23].style.display = "block";
	    }
      check = 23;
      }
	} else if (random == button[24]) {
      if (check == 24) {
        generateRandom();
        randomMove();
      } else {
        for (i = 0; i < button.length; i++) {
          button[i].style.display = "none";
          button[23].style.display = "block";
	    }
      check = 24;
      }
	}
  }
}
function reset() {
  window.location.reload();
}
//button movement function, calls my random generation function(s)
function onClickMove() {
  if (viewportWidth < 776) {
    console.log("mobile portrait");
    generateRandom2();
    console.log("generate random 2");
    randomMove();
  } else if (viewportHeight < 801) {
    console.log("mobile landscape");
    generateRandom2();
    console.log("generate random 2");
	randomMove();
  } else {
    console.log("desktop");
    generateRandom();
    console.log("generate random 2");
    randomMove();
  }
}
/* function removePoint() {
  clicks -= 1;	
  score.innerHTML = "Score: "+ clicks;
} */
//generates random functions
function generateRandom() {
  random = button[Math.floor(Math.random() *button.length)];
  console.log(random);
}
function generateRandom2() {
    random = button[Math.floor(Math.random() * 16)];
    console.log(random);
}