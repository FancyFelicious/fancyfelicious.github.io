// Countdown duration
const HOURS = 2;
const MINUTES = 0;
const SECONDS = 0;

// Convert duration to total seconds
let remainingSeconds = HOURS * 3600 + MINUTES * 60 + SECONDS;

function updateCountdown() {
  const countdownElement = document.getElementById("countdown");

  const hours = Math.floor(remainingSeconds / 3600);
  const minutes = Math.floor((remainingSeconds % 3600) / 60);
  const seconds = remainingSeconds % 60;

  countdownElement.textContent =
    `${String(hours).padStart(2, "0")}:` +
    `${String(minutes).padStart(2, "0")}:` +
    `${String(seconds).padStart(2, "0")}`;

  if (remainingSeconds > 0) {
    remainingSeconds--;
  }
}

updateCountdown();
setInterval(updateCountdown, 1000);
