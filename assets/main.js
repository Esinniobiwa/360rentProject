// Function to update the countdown for a given element
function updateCountdown(elementId, decrementBy) {
  const countdownElement = document.getElementById(elementId);
  let countdownValue = parseInt(countdownElement.textContent);

  if (countdownValue > 0) {
    countdownValue -= decrementBy;
    if (countdownValue < 0) {
      countdownValue = 0;
    }
    countdownElement.textContent = countdownValue;
  }
}

// Initial values for the countdowns (You can set your desired initial values here)
let monthsCountdown = 3;
let weeksCountdown = 4;
let daysCountdown = 7;

// Function to update the countdown values
function updateCountdownValues() {
  updateCountdown("countdown3", 1); // Decrease by 1 every 24 hours (for months)
  updateCountdown("countdown4", 1); // Decrease by 1 every 24 hours (for weeks)
  updateCountdown("countdown7", 1); // Decrease by 1 every 24 hours (for days)
}

// Initial call to set the initial countdown values
updateCountdownValues();

// Update the countdowns at different intervals
setInterval(() => {
  updateCountdownValues();
}, 24 * 60 * 60 * 1000); // Update every 24 hours
