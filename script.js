const input = document.getElementById("choice");
const form = document.getElementById("form");
const btn = document.getElementById("start");
const counter = document.getElementById("countdownDisplay");
let totalSeconds = 0;
let interval;

// logique de compte a rebours
function countdown() {
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  counter.textContent = minutes + ":" + seconds;
  if (totalSeconds > 0) {
    totalSeconds--;
  } else {
    counter.textContent = "FIN";
    clearInterval(interval);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  clearInterval(interval);
  if (isNaN(totalSeconds)) {
    alert("N'entrez que des chifrres");
  } else {
    totalSeconds = input.value * 60;
    input.value = "";
    interval = setInterval(countdown, 100);
  }
});
console.log(totalSeconds);
