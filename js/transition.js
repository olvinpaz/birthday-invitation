const TransitionManager = (() => {
    function play() {
        const introContainer = document.getElementById('intro-container');
        const mainCardContainer = document.getElementById('main-card-container');
        
        // Revelar el contenedor principal detrás de la intro
        mainCardContainer.classList.remove('hidden');

        // Secuencia GSAP de transición
        const tl = gsap.timeline({
            onComplete: () => {
                introContainer.classList.add('hidden');
                // Inicializar animaciones de la tarjeta principal
                gsap.to('.card-content', { 
                    duration: 1.5, 
                    scale: 1, 
                    opacity: 1, 
                    ease: "expo.out" 
                });
                
                // Disparar confetti
                Confetti.shoot();
            }
        });

        // Aplicar Blur, Fade y Zoom In a la introducción
        tl.to(introContainer, {
            duration: 1.5,
            opacity: 0,
            scale: 1.5,
            filter: "blur(10px)",
            ease: "power2.inOut"
        });
    }

    return { play };
})();
