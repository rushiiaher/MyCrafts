// Particle System
class ParticleSystem {
    constructor(container) {
        this.container = container;
        this.particles = [];
        this.init();
    }

    init() {
        // Create initial particles
        for (let i = 0; i < 50; i++) {
            this.createParticle();
        }
    }

    createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position
        const x = Math.random() * this.container.offsetWidth;
        const y = Math.random() * this.container.offsetHeight;
        
        // Random size
        const size = Math.random() * 3 + 1;
        
        // Apply styles
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Add to container and array
        this.container.appendChild(particle);
        this.particles.push({
            element: particle,
            x,
            y,
            speedX: (Math.random() - 0.5) * 2,
            speedY: (Math.random() - 0.5) * 2
        });
    }

    animate() {
        this.particles.forEach(particle => {
            // Update position
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            // Bounce off edges
            if (particle.x < 0 || particle.x > this.container.offsetWidth) {
                particle.speedX *= -1;
            }
            if (particle.y < 0 || particle.y > this.container.offsetHeight) {
                particle.speedY *= -1;
            }
            
            // Apply new position
            particle.element.style.left = `${particle.x}px`;
            particle.element.style.top = `${particle.y}px`;
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Scroll Animations
class ScrollAnimations {
    constructor() {
        this.elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
        this.init();
    }

    init() {
        this.checkVisibility();
        window.addEventListener('scroll', () => this.checkVisibility());
    }

    checkVisibility() {
        this.elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight * 0.8;
            
            if (isVisible) {
                element.classList.add('visible');
            }
        });
    }
}

// Navigation
class Navigation {
    constructor() {
        this.nav = document.querySelector('.nav-container');
        this.lastScroll = 0;
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.handleScroll());

        // Hamburger Menu
        const hamburger = document.querySelector('.hamburger-menu');
        const navLinks = document.querySelector('.nav-links');

        if (hamburger && navLinks) {
            hamburger.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });
        }
    }

    handleScroll() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            this.nav.classList.remove('scroll-up');
            return;
        }
        
        if (currentScroll > this.lastScroll && !this.nav.classList.contains('scroll-down')) {
            // Scrolling down
            this.nav.classList.remove('scroll-up');
            this.nav.classList.add('scroll-down');
        } else if (currentScroll < this.lastScroll && this.nav.classList.contains('scroll-down')) {
            // Scrolling up
            this.nav.classList.remove('scroll-down');
            this.nav.classList.add('scroll-up');
        }
        
        this.lastScroll = currentScroll;
    }
}

// Product Grid
class ProductGrid {
    constructor() {
        this.grid = document.querySelector('.collection-grid');
        this.products = [];
        this.init();
    }

    init() {
        this.loadProducts();
    }

    async loadProducts() {
        // Simulated product data
        this.products = [
            {
                id: 1,
                name: 'Cosmic Elixir',
                price: 299,
                image: 'https://picsum.photos/seed/p1/400/400',
                description: 'A celestial blend of rare ingredients'
            },
            {
                id: 2,
                name: 'Quantum Essence',
                price: 349,
                image: 'https://picsum.photos/seed/p2/400/400',
                description: 'The future of fragrance'
            },
            {
                id: 3,
                name: 'Nebula Bloom',
                price: 319,
                image: 'https://picsum.photos/seed/p3/400/400',
                description: 'A floral explosion from deep space'
            },
            {
                id: 4,
                name: 'Stardust Musk',
                price: 289,
                image: 'https://picsum.photos/seed/p4/400/400',
                description: 'An earthy scent with a hint of the cosmos'
            }
        ];
        
        this.renderProducts();
    }

    renderProducts() {
        this.products.forEach(product => {
            const card = this.createProductCard(product);
            this.grid.appendChild(card);
        });
    }

    createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card glass-effect';
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-price">$${product.price}</div>
                <button class="add-to-cart-btn">Add to Cart</button>
            </div>
        `;
        
        // Add hover effect
        card.addEventListener('mouseenter', () => {
            card.classList.add('hover-glow');
        });
        
        card.addEventListener('mouseleave', () => {
            card.classList.remove('hover-glow');
        });
        
        return card;
    }
}

// Shopping Cart
class ShoppingCart {
    constructor() {
        this.cart = [];
        this.cartCount = document.querySelector('.cart-count');
        this.init();
    }

    init() {
        // Load cart from localStorage
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            this.cart = JSON.parse(savedCart);
            this.updateCartCount();
        }
        
        // Add event listeners for add to cart buttons
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('add-to-cart-btn')) {
                const productId = e.target.closest('.product-card').dataset.id;
                this.addToCart(productId);
            }
        });
    }

    addToCart(productId) {
        const product = this.findProduct(productId);
        if (product) {
            this.cart.push(product);
            this.saveCart();
            this.updateCartCount();
            this.showNotification('Product added to cart');
        }
    }

    findProduct(productId) {
        // Implement product lookup logic
        return null;
    }

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
    }

    updateCartCount() {
        this.cartCount.textContent = this.cart.length;
    }

    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 2000);
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize particle system
    const particleContainer = document.querySelector('.particle-container');
    if (particleContainer) {
        const particleSystem = new ParticleSystem(particleContainer);
        particleSystem.animate();
    }
    
    // Initialize scroll animations
    new ScrollAnimations();
    
    // Initialize navigation
    new Navigation();
    
    // Initialize product grid
    new ProductGrid();
    
    // Initialize shopping cart
    new ShoppingCart();
}); 