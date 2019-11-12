var time = 45;
var move = 5;
var clicks = 0;
var button = document.getElementById("button");
var score = document.getElementById("score");
var timer = document.getElementById("timer");
var movetimer = document.getElementById("movetimer");
var grid = document.getElementsByClassName("grid");
var topbox = document.getElementsByClassName("top-box");
var bottombox = document.getElementsByClassName("bottom-box");
var clock;
var movement;
button.addEventListener("click", countClick);
button.addEventListener("click", clickToStart);
window.onload = function(){
  timer.innerHTML = "Time Remaining: " + time + " Seconds";
  score.innerHTML = "Score: "+ clicks;
  movetimer.innerHTML = "Time Until Move: " + move + " Seconds";
}
function reset() {
  window.location.reload();
}
function clickToStart() {
  console.log("removed start function");
  button.removeEventListener("click", clickToStart);
  console.log("started timer");
  game();
  btnmove();
  button.innerHTML = "Click Me!";
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
    button.innerHTML = "Click To Reset!";
    button.removeEventListener("click", countClick);
    console.log("countClick removed");
    button.addEventListener("click", reset);
    console.log("reset");
    clearInterval(clock);
    gameOver();
	}
}
function btnmove(){
  if (move > 1 && time > 0) {
    clearInterval(movement);
    move -= 1;
    movetimer.innerHTML = "Time Until Move: " + move + " Seconds";
    movement = setInterval(btnmove, 1000);
    console.log("Time Until Move: " + move + " Seconds");
  } else {
	  movetimer.innerHTML = "Moving!";
    resetMove();
  }
}
function resetMove() {
  move = 5;
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
	button.style.backgroundColor = "#F0CC8D";
  }