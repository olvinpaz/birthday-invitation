const IntroAnimation = (() => {
    let timeline;

    function play() {
        // Asegurarse de que GSAP esté disponible
        if (typeof gsap === 'undefined') {
            setTimeout(play, 100);
            return;
        }

        timeline = gsap.timeline({
            onComplete: () => {
                // Iniciar transición a la tarjeta principal
                TransitionManager.play();
            }
        });

        // 1. Nubes entrando lentamente
        timeline.to('.cloud-1', { duration: 3, x: 50, opacity: 0.8, ease: "power1.out" }, 0);
        timeline.to('.cloud-2', { duration: 3.5, x: -50, opacity: 0.8, ease: "power1.out" }, 0.5);

        // 2. Sol apareciendo desde abajo con rebote
        timeline.to('.sun', { duration: 2, y: -200, opacity: 1, ease: "back.out(1.7)" }, 1);

        // 3. Arcoíris creciendo
        timeline.to('.arc', {
            duration: 1.5,
            height: (i, target) => target.className.includes('arc-1') ? 150 :
                target.className.includes('arc-2') ? 135 :
                    target.className.includes('arc-3') ? 120 : 105,
            opacity: 1,
            ease: "power2.out",
            stagger: 0.2
        }, 1.5);

        // 4. Estrellas cayendo y girando
        timeline.to('.star', {
            duration: 3,
            y: 400,
            opacity: 1,
            rotation: 360,
            ease: "power1.inOut",
            stagger: { amount: 2, from: "random" }
        }, 2);

        // 5. Corazones flotando
        timeline.to('.heart', {
            duration: 4,
            y: -500,
            x: "random(-50, 50)",
            opacity: 1,
            ease: "power1.out",
            stagger: { amount: 2, from: "random" }
        }, 2.5);

        // 6. Texto máquina de escribir
        const text1 = "Nuestra princesa cumple su primer añito";
        const text2 = "Queremos que nos acompañes a celebrar este día tan especial.";

        timeline.call(() => typeWriterEffect('text-line-1', text1, 50), null, 4);
        timeline.call(() => typeWriterEffect('text-line-2', text2, 40), null, 7);

        // Mantener la escena unos segundos antes de la transición
        timeline.to({}, { duration: 11 }, 0); // Duración total aprox 11-12s, más los typewriters = ~15s
    }

    function typeWriterEffect(elementId, text, speed) {
        const el = document.getElementById(elementId);
        let i = 0;
        el.innerHTML = '';

        function type() {
            if (i < text.length) {
                el.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    return { play };
})();
