/**
 * Main JavaScript for Dr. Sharma's Academy Website
 * Author: AI Assistant
 * Version: 1.0
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavbar();
    initTypingEffect();
    initScrollAnimations();
    initCounterAnimations();
    initTestimonialsCarousel();
    initRoadmapTabs();
    initPhaseToggle();
    initWhatsAppFloat();
    initFormValidation();
});

/**
 * Initialize Navbar functionality
 * - Sticky navbar on scroll
 * - Active link highlighting
 * - Mobile menu toggle
 */
function initNavbar() {
    const header = document.getElementById('header');
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');
    
    // Sticky navbar on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Active link highlighting based on scroll position
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').substring(1) === current) {
                item.classList.add('active');
            }
        });
    });
    
    // Mobile menu toggle
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            navLinks.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navToggle.contains(event.target) && !navLinks.contains(event.target)) {
                navLinks.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }
    
    // Close mobile menu when clicking on a link
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (navLinks) {
                navLinks.classList.remove('active');
            }
            if (navToggle) {
                navToggle.classList.remove('active');
            }
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Initialize Typing Effect for hero section
 */
function initTypingEffect() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;
    
    const phrases = [
        'AIR 1 Maker',
        '99.9 Percentile Guarantee',
        'NEET/JEE Expert',
        'Top Results Provider'
    ];
    
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentPhrase = phrases[currentPhraseIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentPhrase.substring(0, currentCharIndex - 1);
            currentCharIndex--;
            typingSpeed = 50;
        } else {
            typingElement.textContent = currentPhrase.substring(0, currentCharIndex + 1);
            currentCharIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && currentCharIndex === currentPhrase.length) {
            isDeleting = true;
            typingSpeed = 1500; // Pause at the end of typing
        } else if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            typingSpeed = 500; // Pause before typing the next phrase
        }
        
        setTimeout(type, typingSpeed);
    }
    
    // Start the typing effect
    setTimeout(type, 1000);
}

/**
 * Initialize Scroll Animations
 */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.8;
        
        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                element.classList.add('animated');
            }
        });
    }
    
    // Check elements on initial load
    checkScroll();
    
    // Check elements on scroll
    window.addEventListener('scroll', checkScroll);
}

/**
 * Initialize Counter Animations
 */
function initCounterAnimations() {
    const counters = document.querySelectorAll('.stat-number, .dashboard-number');
    if (counters.length === 0) return;

    const startCounting = (counter) => {
        const target = +counter.getAttribute('data-target');
        const duration = 2000; // 2 seconds
        const isPercentage = counter.getAttribute('data-unit') === '%';
        const increment = target / (duration / 16); // Animation frame at ~60fps

        let current = 0;
        const counterInterval = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = target.toLocaleString() + (isPercentage ? '%' : '');
                clearInterval(counterInterval);
            } else {
                counter.textContent = Math.floor(current).toLocaleString() + (isPercentage ? '%' : '');
            }
        }, 16);
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounting(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        observer.observe(counter);
    });
}

/**
 * Initialize Testimonials Carousel
 */
function initTestimonialsCarousel() {
    const carousel = document.querySelector('.testimonials-carousel');
    if (!carousel) return;
    
    const testimonials = carousel.querySelectorAll('.testimonial-item');
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    const indicators = document.querySelectorAll('.indicator');
    
    let currentIndex = 0;
    
    // Hide all testimonials except the first one
    testimonials.forEach((testimonial, index) => {
        if (index !== 0) {
            testimonial.style.display = 'none';
        }
    });
    
    // Set the first indicator as active
    if (indicators.length > 0) {
        indicators[0].classList.add('active');
    }
    
    // Function to show a specific testimonial
    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = i === index ? 'block' : 'none';
        });
        
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
        
        currentIndex = index;
    }
    
    // Event listeners for prev/next buttons
    if (prevButton) {
        prevButton.addEventListener('click', () => {
            let newIndex = currentIndex - 1;
            if (newIndex < 0) newIndex = testimonials.length - 1;
            showTestimonial(newIndex);
        });
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            let newIndex = currentIndex + 1;
            if (newIndex >= testimonials.length) newIndex = 0;
            showTestimonial(newIndex);
        });
    }
    
    // Event listeners for indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showTestimonial(index);
        });
    });
    
    // Auto-rotate testimonials every 5 seconds
    setInterval(() => {
        let newIndex = currentIndex + 1;
        if (newIndex >= testimonials.length) newIndex = 0;
        showTestimonial(newIndex);
    }, 5000);
}

/**
 * Initialize Roadmap Tabs
 */
function initRoadmapTabs() {
    const tabs = document.querySelectorAll('.roadmap-tab');
    const timelines = document.querySelectorAll('.roadmap-timeline');
    
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and timelines
            tabs.forEach(t => t.classList.remove('active'));
            timelines.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding timeline
            tab.classList.add('active');
            timelines[index].classList.add('active');
        });
    });
}

/**
 * Initialize Phase Toggle for Roadmap
 */
function initPhaseToggle() {
    const phases = document.querySelectorAll('.timeline-phase');
    
    phases.forEach(phase => {
        const header = phase.querySelector('.phase-header');
        const content = phase.querySelector('.phase-content');
        
        // Set initial state (first phase open, others closed)
        if (phase !== phases[0]) {
            content.style.display = 'none';
        } else {
            phase.classList.add('active');
        }
        
        header.addEventListener('click', () => {
            phase.classList.toggle('active');
            
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'grid';
            } else {
                content.style.display = 'none';
            }
        });
    });
}

/**
 * Initialize WhatsApp Float Button
 */
function initWhatsAppFloat() {
    const whatsappFloat = document.querySelector('.whatsapp-float');
    if (!whatsappFloat) return;
    
    whatsappFloat.addEventListener('click', function(e) {
        e.preventDefault();
        
        const phoneNumber = whatsappFloat.getAttribute('data-phone');
        const message = encodeURIComponent('Hello! I am interested in your coaching services.');
        
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    });
}

/**
 * Initialize Form Validation
 */
function initFormValidation() {
    const contactForm = document.getElementById('contact-form');
    const newsletterForm = document.getElementById('newsletter-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const name = contactForm.querySelector('[name="name"]').value.trim();
            const email = contactForm.querySelector('[name="email"]').value.trim();
            const phone = contactForm.querySelector('[name="phone"]').value.trim();
            const message = contactForm.querySelector('[name="message"]').value.trim();
            const consent = contactForm.querySelector('[name="consent"]').checked;
            
            let isValid = true;
            let errorMessage = '';
            
            if (name === '') {
                isValid = false;
                errorMessage += 'Please enter your name.\n';
            }
            
            if (email === '') {
                isValid = false;
                errorMessage += 'Please enter your email.\n';
            } else if (!isValidEmail(email)) {
                isValid = false;
                errorMessage += 'Please enter a valid email address.\n';
            }
            
            if (phone === '') {
                isValid = false;
                errorMessage += 'Please enter your phone number.\n';
            } else if (!isValidPhone(phone)) {
                isValid = false;
                errorMessage += 'Please enter a valid phone number.\n';
            }
            
            if (message === '') {
                isValid = false;
                errorMessage += 'Please enter your message.\n';
            }
            
            if (!consent) {
                isValid = false;
                errorMessage += 'Please agree to the terms and conditions.\n';
            }
            
            if (!isValid) {
                alert(errorMessage);
                return;
            }
            
            // If validation passes, show success message
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = newsletterForm.querySelector('[name="email"]').value.trim();
            
            if (email === '' || !isValidEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // If validation passes, show success message
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.reset();
        });
    }
    
    // Helper function to validate email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Helper function to validate phone number
    function isValidPhone(phone) {
        // Basic validation for Indian phone numbers
        const phoneRegex = /^[6-9]\d{9}$/;
        return phoneRegex.test(phone.replace(/[\s-]/g, ''));
    }
}