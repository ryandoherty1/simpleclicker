var time = 45;
var move = 2;
var clicks = 0;
var check = 0;
var buttonClicked = false;
var b1 = document.getElementById("button1");
var b2 = document.getElementById("button2");
var b3 = document.getElementById("button3");
var b4 = document.getElementById("button4");
var b5 = document.getElementById("button5");
var b6 = document.getElementById("button6");
var b7 = document.getElementById("button7");
var b8 = document.getElementById("button8");
var b9 = document.getElementById("button9");
var b10 = document.getElementById("button10");
var b11 = document.getElementById("button11");
var b12 = document.getElementById("button12");
var b13 = document.getElementById("button13");
var b14 = document.getElementById("button14");
var b15 = document.getElementById("button15");
var b16 = document.getElementById("button16");
var b17 = document.getElementById("button17");
var b18 = document.getElementById("button18");
var b19 = document.getElementById("button19");
var b20 = document.getElementById("button20");
var b21 = document.getElementById("button21");
var b22 = document.getElementById("button22");
var b23 = document.getElementById("button23");
var b24 = document.getElementById("button24");
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
var viewportWidth = window.innerWidth;
var viewportHeight = window.innerHeight;
var random;
var clock;
var movement;
window.onload = function(){
  for (i = 0; i < button.length; i++) {
    button[i].addEventListener("click", countClick);
  }
  b1.addEventListener("click", clickToStart);
  timer.innerHTML = "Time Remaining: " + time + " Seconds";
  score.innerHTML = "Score: "+ clicks;
  //movetimer.innerHTML = "Time Until Move: " + move + " Seconds";
  movetimer.innerHTML = "Time Until Move: N/A";
  for (i = 1; i < button.length; i++) {
      button[i].style.display = "none";
	}
}
function clickToStart() {
  kahoot.load();
  kahoot.play();
  console.log("removed start function");
  b1.removeEventListener("click", clickToStart);
  console.log("started timer");
  game();
  //btnmove();
  for (i = 0; i < button.length; i++) {
    button[i].innerHTML = "Click Me!";
  }
  for (i = 0; i < grid.length; i++) {
   // grid[i].addEventListener("click", removePoint);
  }
}
function game() {
  if (time > 0) {
    clearInterval(clock);
    time -= 1;
    timer.innerHTML = "Time Remaining: " + time + " Seconds";
    clock = setInterval(game, 1000);
    console.log("Time Remaining: " + time);
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
/*function resetMove() {
  move = 2;
}*/
function countClick() {
  clicksound.load();
  clicksound.play();
  clicks += 1;
  score.innerHTML = "Score: "+clicks;
  console.log("Score: "+clicks);
  onClickMove();
  console.log("Button Move");
}
function gameOver() {
  window.alert("Game Over!");
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
	button[i].innerHTML = "Click To Reset!";
    }
  b1.style.backgroundColor = "#F0CC8D";
  }
function generateRandom() {
  random = button[Math.floor(Math.random() *button.length)];
  console.log(random);
}
function generateRandom2() {
    random = button[Math.floor(Math.random() * 16)];
    console.log(random);
}
function randomMove() {
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
      if (check == 23) {
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
function reset() {
  window.location.reload();
}
function onClickMove() {
  if (viewportWidth < 776) {
    generateRandom2();
    randomMove();
  } else if (viewportHeight < 801) {
    generateRandom2();
	randomMove();
  } else {
    generateRandom();
    randomMove();
  }
}
function removePoint() {
  clicks -= 1;	
  score.innerHTML = "Score: "+ clicks;
}