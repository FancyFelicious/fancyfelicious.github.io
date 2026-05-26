// YYYY-MM-DDTHH:MM:SS
// Countdown duration
const HOURS = 2;
const MINUTES = 0;
const SECONDS = 0;

const targetDate = new Date(
  Date.now() + (HOURS * 3600 + MINUTES * 60 + SECONDS) * 1000,
);

function updateCountdown() {
  const now = new Date();
  const difference = targetDate - now;

  if (difference <= 0) {
    document.getElementById("countdown").textContent = "00:00:00";
    return;
  }

  const totalSeconds = Math.floor(difference / 1000);

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  document.getElementById("countdown").textContent =
    `${String(hours).padStart(2, "0")}:` +
    `${String(minutes).padStart(2, "0")}:` +
    `${String(seconds).padStart(2, "0")}`;
}

updateCountdown();
setInterval(updateCountdown, 1000);
