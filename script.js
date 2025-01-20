// Countdown Timer
const eventDate = new Date('January 20, 2025 14:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML = `
        <div>${days}<span>días</span></div>
        <div>${hours}<span>horas</span></div>
        <div>${minutes}<span>minutos</span></div>
        <div>${seconds}<span>segundos</span></div>
    `;

    if (timeLeft < 0) {
        clearInterval(timerInterval);
        document.getElementById('timer').innerHTML = "¡El gran día ha llegado!";
    }
}

// Run Countdown
const timerInterval = setInterval(updateCountdown, 1000);
