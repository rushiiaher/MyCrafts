/**
 * Animations JavaScript for Dr. Sharma's Academy Website
 * Author: AI Assistant
 * Version: 1.0
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initParallaxEffect();
    initRevealOnScroll();
});

/**
 * Initialize Parallax Effect for hero section
 */
function initParallaxEffect() {
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        heroSection.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    });
}

/**
 * Initialize Reveal on Scroll animations
 */
function initRevealOnScroll() {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    if (!revealElements.length) return;
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: '0px'
    };
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, revealOptions);
    
    revealElements.forEach(element => {
        // Add initial hidden state
        element.classList.add('reveal-hidden');
        revealObserver.observe(element);
    });
}

/**
 * Initialize Image Zoom Effect on hover
 */
function initImageZoomEffect() {
    const zoomImages = document.querySelectorAll('.zoom-on-hover');
    
    zoomImages.forEach(image => {
        image.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        image.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

/**
 * Initialize Scroll Progress Bar
 */
function initScrollProgressBar() {
    const progressBar = document.querySelector('.scroll-progress');
    if (!progressBar) return;
    
    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;
        
        progressBar.style.width = scrollPercentage + '%';
    });
}

/**
 * Initialize Lazy Loading for images
 */
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    if (!lazyImages.length) return;
    
    const lazyLoadOptions = {
        rootMargin: '100px 0px',
        threshold: 0.1
    };
    
    const lazyLoadObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                lazyLoadObserver.unobserve(img);
                
                // Add fade-in effect
                img.classList.add('fade-in');
            }
        });
    }, lazyLoadOptions);
    
    lazyImages.forEach(image => {
        lazyLoadObserver.observe(image);
    });
}

/**
 * Initialize Hover Effects
 */
function initHoverEffects() {
    // Card hover effect
    const cards = document.querySelectorAll('.hover-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('hover-active');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('hover-active');
        });
    });
    
    // Button hover effect
    const buttons = document.querySelectorAll('.hover-button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.classList.add('hover-active');
        });
        
        button.addEventListener('mouseleave', function() {
            this.classList.remove('hover-active');
        });
    });
    
    // Ripple effect for buttons
    const rippleButtons = document.querySelectorAll('.ripple-effect');
    rippleButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const x = e.clientX - this.getBoundingClientRect().left;
            const y = e.clientY - this.getBoundingClientRect().top;
            
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

/**
 * Initialize Tilt Effect for cards
 */
function initTiltEffect() {
    const tiltCards = document.querySelectorAll('.tilt-effect');
    
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const cardRect = this.getBoundingClientRect();
            const x = e.clientX - cardRect.left;
            const y = e.clientY - cardRect.top;
            
            const centerX = cardRect.width / 2;
            const centerY = cardRect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });
}

/**
 * Initialize Staggered Animation for list items
 */
function initStaggeredAnimation() {
    const staggerContainers = document.querySelectorAll('.stagger-container');
    if (!staggerContainers.length) return;
    
    const staggerOptions = {
        threshold: 0.3,
        rootMargin: '0px'
    };
    
    const staggerObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const items = entry.target.querySelectorAll('.stagger-item');
                items.forEach((item, index) => {
                    item.style.transitionDelay = `${index * 100}ms`;
                    item.classList.add('stagger-revealed');
                });
                observer.unobserve(entry.target);
            }
        });
    }, staggerOptions);
    
    staggerContainers.forEach(container => {
        staggerObserver.observe(container);
    });
}

/**
 * Initialize complex scroll-triggered animations using a timeline
 */
function initScrollTriggeredAnimations() {
    const triggers = document.querySelectorAll('.scroll-trigger');
    if (!triggers.length) return;
    
    const options = {
        threshold: 0.1,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetId = entry.target.getAttribute('data-animation-target');
                const animationType = entry.target.getAttribute('data-animation-type');
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.classList.add(`${animationType}-animation`);
                }
                observer.unobserve(entry.target);
            }
        });
    }, options);
    
    triggers.forEach(trigger => {
        observer.observe(trigger);
    });
}

/**
 * Initialize a simple typing animation
 */
function initTypingAnimation() {
    const typingElements = document.querySelectorAll('.typing-animation');
    typingElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        let index = 0;
        
        function typeChar() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(typeChar, 100);
            }
        }
        
        typeChar();
    });
}

/**
 * Initialize Scroll Indicator
 */
function initScrollIndicator() {
    const container = document.querySelector('.scroll-indicator-container');
    if (!container) return;
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 100) {
            container.style.opacity = '0';
        } else {
            container.style.opacity = '1';
        }
    });
}

/**
 * Initialize animated gradient background
 */
function initAnimatedGradient() {
    const element = document.querySelector('.animated-gradient');
    if (!element) return;
    
    let angle = 0;
    
    function updateGradient() {
        angle = (angle + 0.5) % 360;
        element.style.background = `linear-gradient(${angle}deg, #1e40af, #f59e0b, #1e40af)`;
        requestAnimationFrame(updateGradient);
    }
    
    requestAnimationFrame(updateGradient);
}