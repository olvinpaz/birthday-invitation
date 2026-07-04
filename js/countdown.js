const Countdown = (() => {
    // 9 de agosto de 2026 a las 2:30 PM (14:30)
    const targetDate = new Date('August 9, 2026 14:30:00').getTime();

    function init() {
        updateTimer();
        setInterval(updateTimer, 1000);
    }

    function updateTimer() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            document.getElementById('cd-days').innerText = "00";
            document.getElementById('cd-hours').innerText = "00";
            document.getElementById('cd-mins').innerText = "00";
            document.getElementById('cd-secs').innerText = "00";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('cd-days').innerText = String(days).padStart(2, '0');
        document.getElementById('cd-hours').innerText = String(hours).padStart(2, '0');
        document.getElementById('cd-mins').innerText = String(minutes).padStart(2, '0');
        document.getElementById('cd-secs').innerText = String(seconds).padStart(2, '0');
    }

    return { init };
})();
