// Auto-redirect countdown
let countdown = 10;
const countdownElement = document.getElementById('countdown');

const countdownInterval = setInterval(() => {
    countdown--;
    countdownElement.textContent = countdown;
    
    if (countdown <= 0) {
        clearInterval(countdownInterval);
        window.location.href = 'https://qsd.solutions';
    }
}, 1000);

// Add some interactive hover effects
const ctaButton = document.querySelector('.cta-button');
const arrow = document.querySelector('.arrow');

ctaButton.addEventListener('mouseenter', () => {
    arrow.style.animationDuration = '0.5s';
});

ctaButton.addEventListener('mouseleave', () => {
    arrow.style.animationDuration = '2s';
});

// Add parallax effect on mouse move
document.addEventListener('mousemove', (e) => {
    const background = document.querySelector('.background-animation');
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    
    background.style.transform = `translate(${x}px, ${y}px)`;
});

// Add entrance animation to benefits
const benefitItems = document.querySelectorAll('.benefit-item');
benefitItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.2}s`;
    item.style.animation = 'fadeInUp 0.8s ease-out forwards';
});

