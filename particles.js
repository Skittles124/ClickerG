document.addEventListener('DOMContentLoaded', () => {
    const particlesContainer = document.getElementById('particles');
    
    if (!particlesContainer) {
        console.warn("⚠️ #particles не найден");
        return;
    }

    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        const size = Math.random() * 10 + 7;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}vw`;

        const duration = Math.random() * 12 + 8;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `-${Math.random() * 10}s`;

        const drift = (Math.random() - 0.5) * 200;
        particle.style.setProperty('--drift', `${drift}px`);

        if (Math.random() > 0.65) {
            particle.style.background = `rgba(255, 140, 0, 0.9)`;
            particle.style.boxShadow = '0 0 15px #ff8c00';
        }

        particlesContainer.appendChild(particle);

        setTimeout(() => particle.remove(), duration * 1000 + 1500);
    }

    setInterval(() => {
        for (let i = 0; i < 2; i++) {
            createParticle();
        }
    }, 80);
});