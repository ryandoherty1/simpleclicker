var time = 45;
var clicks = 0;
var button = document.getElementById("button");
var score = document.getElementById("score");
var timer = document.getElementById("timer");
var clock;
button.addEventListener("click", countClick);
button.addEventListener("click", clickToStart);

window.onload = function(){
  timer.innerHTML = "Time Remaining: " + time + " Seconds";
  score.innerHTML = "Score: "+ clicks;
}

function reset() {
  window.location.reload();
}

function clickToStart() {
  console.log("removed start function");
  button.removeEventListener("click", clickToStart);
  console.log("started timer");
  game();
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
	}
}

function countClick() {
  clicks += 1;
  score.innerHTML = "Score: "+clicks;
  console.log("Score: "+clicks);
}