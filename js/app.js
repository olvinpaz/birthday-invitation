document.addEventListener('DOMContentLoaded', () => {
    // Inicializar todo
    MusicController.init();
    Countdown.init();
    Invitation.init();
    
    // Generar elementos dinámicos
    generateStarsAndHearts();

    const startOverlay = document.getElementById('start-overlay');
    const btnStart = document.getElementById('btn-start');

    btnStart.addEventListener('click', () => {
        startOverlay.classList.add('hidden');
        MusicController.playMusic(); // Aseguramos que inicie al hacer click
        IntroAnimation.play();
    });
});

function generateStarsAndHearts() {
    const starsContainer = document.getElementById('stars-container');
    const heartsContainer = document.getElementById('hearts-container');

    const starSVG = `<svg viewBox="0 0 24 24" fill="#FDFD96" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
    const heartSVG = `<svg viewBox="0 0 24 24" fill="#FFD1DC" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;

    for (let i = 0; i < 20; i++) {
        let star = document.createElement('div');
        star.className = 'star';
        star.innerHTML = starSVG;
        star.style.width = `${Math.random() * 15 + 10}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * -100}px`; // Empieza arriba para caer
        starsContainer.appendChild(star);
    }

    for (let i = 0; i < 15; i++) {
        let heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = heartSVG;
        heart.style.width = `${Math.random() * 20 + 15}px`;
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.bottom = `${Math.random() * -100}px`; // Empieza abajo para flotar
        heartsContainer.appendChild(heart);
    }
}
