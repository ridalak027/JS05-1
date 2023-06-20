var seconds = "00";
var minutes = "00";
var hours = "00";
var milliseconds = 00;

var v_seconds = document.getElementById("seconds");
var v_minutes = document.getElementById("minutes");
var v_hours = document.getElementById("hours");

var buttonStart = document.getElementById("button-start");
var buttonStop = document.getElementById("button-stop");
var buttonReset = document.getElementById("button-reset");
var interval;

// this function will run when click on start

function startTimer() {
  milliseconds += 10;
  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;
    v_seconds.innerHTML = seconds <= 9 ? "0" + seconds : seconds;

    if (seconds > 60) {
      minutes++;
      v_minutes.innerHTML = minutes <= 9 ? "0" + minutes : minutes;

      seconds = 0;
      v_seconds.innerHTML = "0" + 0;

      if (minutes == 60) {
        minutes = 0;
        v_minutes.innerHTML = "0" + 0;

        hours++;
        v_hours.innerHTML = hours < 9 ? "0" + hours : hours;
      }
    }
  }
}

buttonStart.onclick = function () {
  document.getElementById("body").style.background = "#73c8a9";
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(startTimer);
};

buttonStop.onclick = function () {
  document.getElementById("body").style.background = "#373b44";
  clearInterval(interval);
};

buttonReset.onclick = function () {
  document.getElementById("body").style.background = "#4c6d68";
  clearInterval(interval);
  seconds = "00";
  minutes = "00";
  hours = "00";

  v_seconds.innerHTML = seconds;
  v_minutes.innerHTML = minutes;
  v_hours.innerHTML = hours;
};
