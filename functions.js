var time = 45;
var move = 2;
var clicks = 0;
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
var movetimer = document.getElementById("movetimer");
var grid = document.getElementsByClassName("grid");
var button = document.getElementsByClassName("button");
var topbox = document.getElementsByClassName("top-box");
var bottombox = document.getElementsByClassName("bottom-box");
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
  movetimer.innerHTML = "Time Until Move: " + move + " Seconds";
  for (i = 1; i < button.length; i++) {
      button[i].style.display = "none";
	}
}
function clickToStart() {
  console.log("removed start function");
  b1.removeEventListener("click", clickToStart);
  console.log("started timer");
  game();
  btnmove();
    for (i = 0; i < button.length; i++) {
      button[i].innerHTML = "Click Me!";
	}
}
function game() {
  if (time > 0) {
    clearInterval(clock);
    time -= 1;
    timer.innerHTML = "Time Remaining: " + time + " Seconds";
    clock = setInterval(game, 1000);
    console.log("Time Remaining: " + time);
  } else {
    clearInterval(clock);
    gameOver();
	}
}
function btnmove(){
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
}
function resetMove() {
  move = 2;
}
function countClick() {
  clicks += 1;
  score.innerHTML = "Score: "+clicks;
  console.log("Score: "+clicks);
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
function randomMove() {
  if (random == button[0]) {
    for (i = 0; i < button.length; i++) {
      button[i].style.display = "none";
	  button[0].style.display = "block";
	}
  } else if (random == button[1]) {
    for (i = 0; i < button.length; i++) {
      button[i].style.display = "none";
      button[1].style.display = "block";
	  }
	} else if (random == button[2]) {
    for (i = 0; i < button.length; i++) {
      button[i].style.display = "none";
      button[2].style.display = "block";
	  }
	} else if (random == button[3]) {
    for (i = 0; i < button.length; i++) {
      button[i].style.display = "none";
      button[3].style.display = "block";
	  }
	} else if (random == button[4]) {
    for (i = 0; i < button.length; i++) {
      button[i].style.display = "none";
      button[4].style.display = "block";
	  }
	} else if (random == button[5]) {
    for (i = 0; i < button.length; i++) {
      button[i].style.display = "none";
      button[5].style.display = "block";
	  }
	} else if (random == button[6]) {
    for (i = 0; i < button.length; i++) {
      button[i].style.display = "none";
      button[6].style.display = "block";
	  }
	} else if (random == button[7]) {
    for (i = 0; i < button.length; i++) {
      button[i].style.display = "none";
      button[7].style.display = "block";
	  }
	} else if (random == button[8]) {
    for (i = 0; i < button.length; i++) {
      button[i].style.display = "none";
      button[8].style.display = "block";
	  }
	} else if (random == button[9]) {
    for (i = 0; i < button.length; i++) {
      button[i].style.display = "none";
      button[9].style.display = "block";
	  }
	} else if (random == button[10]) {
    for (i = 0; i < button.length; i++) {
      button[i].style.display = "none";
      button[10].style.display = "block";
	  }
	} else if (random == button[11]) {
    for (i = 0; i < button.length; i++) {
      button[i].style.display = "none";
      button[11].style.display = "block";
	  }
	} else if (random == button[12]) {
    for (i = 0; i < button.length; i++) {
      button[i].style.display = "none";
      button[12].style.display = "block";
	  }
	} else if (random == button[13]) {
    for (i = 0; i < button.length; i++) {
      button[i].style.display = "none";
      button[13].style.display = "block";
	  }
	} else if (random == button[14]) {
    for (i = 0; i < button.length; i++) {
      button[i].style.display = "none";
      button[14].style.display = "block";
	  }
	} else if (random == button[15]) {
    for (i = 0; i < button.length; i++) {
      button[i].style.display = "none";
      button[15].style.display = "block";
	  }
	} else if (random == button[16]) {
    for (i = 0; i < button.length; i++) {
      button[i].style.display = "none";
      button[16].style.display = "block";
	  }
	} else if (random == button[17]) {
    for (i = 0; i < button.length; i++) {
      button[i].style.display = "none";
      button[17].style.display = "block";
	  }
	} else if (random == button[18]) {
    for (i = 0; i < button.length; i++) {
      button[i].style.display = "none";
      button[18].style.display = "block";
	  }
	} else if (random == button[19]) {
    for (i = 0; i < button.length; i++) {
      button[i].style.display = "none";
      button[19].style.display = "block";
	  }
	} else if (random == button[20]) {
    for (i = 0; i < button.length; i++) {
      button[i].style.display = "none";
      button[20].style.display = "block";
	  }
	} else if (random == button[21]) {
    for (i = 0; i < button.length; i++) {
      button[i].style.display = "none";
      button[21].style.display = "block";
	  }
	} else if (random == button[22]) {
    for (i = 0; i < button.length; i++) {
      button[i].style.display = "none";
      button[22].style.display = "block";
	  }
	} else if (random == button[23]) {
    for (i = 0; i < button.length; i++) {
      button[i].style.display = "none";
      button[23].style.display = "block";
	  }
	} else if (random == button[24]) {
    for (i = 0; i < button.length; i++) {
      button[i].style.display = "none";
      button[24].style.display = "block";
	  }
	}
}
function reset() {
  window.location.reload();
}