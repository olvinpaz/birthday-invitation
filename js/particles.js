const Confetti = (() => {
    let canvas;
    let ctx;
    let particles = [];
    const colors = ['#FFD1DC', '#AEC6CF', '#FDFD96', '#C3B1E1', '#FFFFFF'];
    let animationId;

    function shoot() {
        canvas = document.getElementById('confetti-canvas');
        if (!canvas) return;
        
        ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        for (let i = 0; i < 150; i++) {
            particles.push(new Particle());
        }

        render();

        // Detener después de 3 segundos
        setTimeout(() => {
            cancelAnimationFrame(animationId);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles = [];
        }, 3000);
    }

    class Particle {
        constructor() {
            this.x = canvas.width / 2;
            this.y = canvas.height / 2;
            this.vx = (Math.random() - 0.5) * 20;
            this.vy = (Math.random() - 1) * 20;
            this.size = Math.random() * 8 + 5;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.rotation = Math.random() * 360;
            this.rotationSpeed = (Math.random() - 0.5) * 10;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.vy += 0.5; // Gravedad
            this.rotation += this.rotationSpeed;
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation * Math.PI / 180);
            ctx.fillStyle = this.color;
            ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
            ctx.restore();
        }
    }

    function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
        }
        animationId = requestAnimationFrame(render);
    }

    // Actualizar canvas en resize
    window.addEventListener('resize', () => {
        if (canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
    });

    return { shoot };
})();
