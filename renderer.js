function updateCountdown() {
  const targetDate = new Date("January 1, 2026 00:00:00").getTime();
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  if (timeLeft < 0) {
    document.getElementById("timer").innerText = "Happy New Year 2026!";
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

  document.getElementById("timer").innerText = `${days}`;
}

setInterval(updateCountdown, 1000);
updateCountdown();


