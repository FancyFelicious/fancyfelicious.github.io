function getNextVienna1800() {
  const now = new Date();

  // Get current date/time in Vienna
  const viennaNow = new Date(
    now.toLocaleString("en-US", { timeZone: "Europe/Vienna" }),
  );

  // Create target = today 18:00 Vienna
  const target = new Date(viennaNow);
  target.setHours(16, 0, 0, 0);

  // If it's already past 18:00 Vienna, use tomorrow
  if (viennaNow >= target) {
    target.setDate(target.getDate() + 1);
  }

  // Convert back to a real timestamp
  const offset = now.getTime() - viennaNow.getTime();

  return new Date(target.getTime() + offset);
}

const targetDate = getNextVienna1800();

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
