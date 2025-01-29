const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPause');
const progressBar = document.getElementById('progress-bar');
const currentTimeSpan = document.getElementById('current-time');
const durationSpan = document.getElementById('duration');

function formatTime(seconds) {
    let mins = Math.floor(seconds / 60);
    let secs = Math.floor(seconds % 60);
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function updateDuration() {
    if (!isNaN(audio.duration) && audio.duration > 0) {
        durationSpan.textContent = formatTime(audio.duration);
        progressBar.value = 0;
    }
}

window.onload = () => {
    audio.load();
    progressBar.value = 0;
};


audio.addEventListener('loadedmetadata', updateDuration);
audio.addEventListener('canplay', updateDuration);
audio.addEventListener('play', updateDuration);

setTimeout(updateDuration, 1000);

playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.classList.add('playing');
    } else {
        audio.pause();
        playPauseBtn.classList.remove('playing');
    }
});


audio.addEventListener('timeupdate', () => {
    if (!isNaN(audio.duration) && audio.duration > 0) {
        progressBar.value = (audio.currentTime / audio.duration) * 100;
        currentTimeSpan.textContent = formatTime(audio.currentTime);
    }
});

progressBar.addEventListener('input', () => {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
});

const targetDate = new Date('2025-03-08T00:00:00');

function updateCountdown() {
    const now = new Date();
    const timeDifference = targetDate - now;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.querySelector('.countdown-item-days .countdown-digit:first-child').textContent = String(days).padStart(2, '0')[0];
    document.querySelector('.countdown-item-days .countdown-digit:last-child').textContent = String(days).padStart(2, '0')[1];
    document.querySelector('.countdown-item-hours .countdown-digit:first-child').textContent = String(hours).padStart(2, '0')[0];
    document.querySelector('.countdown-item-hours .countdown-digit:last-child').textContent = String(hours).padStart(2, '0')[1];
    document.querySelector('.countdown-item-minutes .countdown-digit:first-child').textContent = String(minutes).padStart(2, '0')[0];
    document.querySelector('.countdown-item-minutes .countdown-digit:last-child').textContent = String(minutes).padStart(2, '0')[1];
    document.querySelector('.countdown-item-seconds .countdown-digit:first-child').textContent = String(seconds).padStart(2, '0')[0];
    document.querySelector('.countdown-item-seconds .countdown-digit:last-child').textContent = String(seconds).padStart(2, '0')[1];

    if (timeDifference <= 0) {
        clearInterval(interval);
        document.querySelector('.countdown').innerHTML = '<h2>¡El día ha llegado!</h2>';
    }
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown();


var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
  });