// Initialize AOS
AOS.init({
    duration: 1000,
    easing: 'ease-out-cubic',
    once: true,
    offset: 100,
    delay: 100
});

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const mobileThemeToggle = document.getElementById('mobileThemeToggle');
const html = document.documentElement;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    html.classList.toggle('dark', savedTheme === 'dark');
}

// Theme toggle function
function toggleTheme() {
    html.classList.toggle('dark');
    const isDark = html.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Add click event listeners
themeToggle.addEventListener('click', toggleTheme);
mobileThemeToggle.addEventListener('click', toggleTheme);

// Mobile Menu
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
// const closeMenuBtn = document.getElementById('closeMenuBtn'); // This is no longer a separate button
const mobileMenu = document.getElementById('mobileMenu');

const toggleMobileMenu = () => {
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    document.body.classList.toggle('mobile-menu-open', mobileMenu.classList.contains('active'));

    const isMenuOpen = mobileMenu.classList.contains('active');
    const barsIcon = mobileMenuBtn.querySelector('.fa-bars');
    const timesIcon = mobileMenuBtn.querySelector('.fa-times');

    if (barsIcon && timesIcon) {
        barsIcon.style.display = isMenuOpen ? 'none' : 'block';
        timesIcon.style.display = isMenuOpen ? 'block' : 'none';
    }
};

mobileMenuBtn.addEventListener('click', toggleMobileMenu);
// closeMenuBtn.addEventListener('click', toggleMobileMenu); // This listener is no longer needed

// Close mobile menu when clicking a link
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        toggleMobileMenu();
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (mobileMenu.classList.contains('active') && 
        !mobileMenu.contains(e.target) && 
        !mobileMenuBtn.contains(e.target)) {
        toggleMobileMenu();
    }
});

// Gallery Images


// Load Gallery
const galleryContainer = document.querySelector('#gallery .grid');
galleryImages.forEach((image, index) => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.setAttribute('data-aos', 'fade-up');
    item.setAttribute('data-aos-delay', index * 100);
    item.innerHTML = `
        <img src="${image.src}" alt="${image.title}" class="w-full h-full object-cover">
        <div class="overlay">
            <h3 class="text-xl font-bold mb-2">${image.title}</h3>
            <p>${image.description}</p>
        </div>
    `;
    galleryContainer.appendChild(item);
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Loading Animation
window.addEventListener('load', () => {
    const loader = document.querySelector('.loading');
    if (loader) {
        loader.classList.add('hidden');
    }
});

// Form Submission
const contactForm = document.querySelector('#contact form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Navbar Scroll Effect
const navbar = document.querySelector('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
        // Scroll Down
        navbar.classList.remove('scroll-up');
        navbar.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
        // Scroll Up
        navbar.classList.remove('scroll-down');
        navbar.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Parallax Effect
window.addEventListener('scroll', () => {
    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(window.pageYOffset * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// Text Animation
const animateText = (element) => {
    const text = element.textContent;
    element.textContent = '';
    
    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i];
        span.style.animationDelay = `${i * 0.1}s`;
        element.appendChild(span);
    }
};

// Initialize text animations
document.querySelectorAll('.animate-text').forEach(animateText);

// Gallery Image Click Handler
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const overlay = item.querySelector('.overlay');
        
        // Toggle overlay visibility
        overlay.style.opacity = overlay.style.opacity === '1' ? '0' : '1';
        overlay.style.transform = overlay.style.opacity === '1' ? 'translateY(0)' : 'translateY(20px)';
    });
}); 