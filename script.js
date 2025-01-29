// Target date
const targetDate = new Date('2025-03-08T00:00:00');

// Function to calculate and update countdown
function updateCountdown() {
    const now = new Date();
    const timeDifference = targetDate - now;

    // Calculate time units
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Update DOM
    document.querySelector('.countdown-item-days .countdown-digit:first-child').textContent = String(days).padStart(2, '0')[0];
    document.querySelector('.countdown-item-days .countdown-digit:last-child').textContent = String(days).padStart(2, '0')[1];
    document.querySelector('.countdown-item-hours .countdown-digit:first-child').textContent = String(hours).padStart(2, '0')[0];
    document.querySelector('.countdown-item-hours .countdown-digit:last-child').textContent = String(hours).padStart(2, '0')[1];
    document.querySelector('.countdown-item-minutes .countdown-digit:first-child').textContent = String(minutes).padStart(2, '0')[0];
    document.querySelector('.countdown-item-minutes .countdown-digit:last-child').textContent = String(minutes).padStart(2, '0')[1];
    document.querySelector('.countdown-item-seconds .countdown-digit:first-child').textContent = String(seconds).padStart(2, '0')[0];
    document.querySelector('.countdown-item-seconds .countdown-digit:last-child').textContent = String(seconds).padStart(2, '0')[1];

    // Stop the countdown at 0
    if (timeDifference <= 0) {
        clearInterval(interval);
        document.querySelector('.countdown').innerHTML = '<h2>¡El día ha llegado!</h2>';
    }
}

// Update countdown every second
const interval = setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call to avoid 1-second delay


var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
  });