// Floating Elements Animation
class FloatingElements {
    constructor(container) {
        this.container = container;
        this.elements = [];
        this.init();
    }

    init() {
        // Create floating elements
        for (let i = 0; i < 5; i++) {
            this.createFloatingElement();
        }
    }

    createFloatingElement() {
        const element = document.createElement('div');
        element.className = 'floating-element';
        
        // Random size
        const size = Math.random() * 200 + 100;
        
        // Random position
        const x = Math.random() * this.container.offsetWidth;
        const y = Math.random() * this.container.offsetHeight;
        
        // Apply styles
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
        element.style.left = `${x}px`;
        element.style.top = `${y}px`;
        
        // Add to container and array
        this.container.appendChild(element);
        this.elements.push({
            element,
            x,
            y,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5
        });
    }

    animate() {
        this.elements.forEach(element => {
            // Update position
            element.x += element.speedX;
            element.y += element.speedY;
            
            // Bounce off edges
            if (element.x < -100 || element.x > this.container.offsetWidth) {
                element.speedX *= -1;
            }
            if (element.y < -100 || element.y > this.container.offsetHeight) {
                element.speedY *= -1;
            }
            
            // Apply new position
            element.element.style.left = `${element.x}px`;
            element.element.style.top = `${element.y}px`;
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Text Glitch Effect
class GlitchEffect {
    constructor(element) {
        this.element = element;
        this.originalText = element.textContent;
        this.init();
    }

    init() {
        this.element.setAttribute('data-text', this.originalText);
        this.element.classList.add('glitch');
        
        // Random glitch intervals
        setInterval(() => this.triggerGlitch(), Math.random() * 5000 + 2000);
    }

    triggerGlitch() {
        this.element.classList.add('glitching');
        setTimeout(() => {
            this.element.classList.remove('glitching');
        }, 200);
    }
}

// Holographic Effect
class HolographicEffect {
    constructor(element) {
        this.element = element;
        this.init();
    }

    init() {
        this.element.classList.add('holographic');
        
        // Add mouse move effect
        this.element.addEventListener('mousemove', (e) => {
            const rect = this.element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const angleX = (y - centerY) / 20;
            const angleY = (centerX - x) / 20;
            
            this.element.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
        });
        
        // Reset on mouse leave
        this.element.addEventListener('mouseleave', () => {
            this.element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    }
}

// Parallax Effect
class ParallaxEffect {
    constructor(element) {
        this.element = element;
        this.init();
    }

    init() {
        window.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth - e.pageX * 2) / 100;
            const y = (window.innerHeight - e.pageX * 2) / 100;
            
            this.element.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
    }
}

// Smooth Scroll
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize floating elements
    const floatingContainer = document.querySelector('.floating-elements');
    if (floatingContainer) {
        const floatingElements = new FloatingElements(floatingContainer);
        floatingElements.animate();
    }
    
    // Initialize glitch effect on titles
    document.querySelectorAll('.section-title').forEach(title => {
        new GlitchEffect(title);
    });
    
    // Initialize holographic effect on product cards
    document.querySelectorAll('.product-card').forEach(card => {
        new HolographicEffect(card);
    });
    
    // Initialize parallax effect on hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        new ParallaxEffect(hero);
    }
    
    // Initialize smooth scroll
    new SmoothScroll();
}); 