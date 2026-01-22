// ================================
// LEDGER LEADERSHIP - SCRIPTS
// ================================

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Email form handling
const emailForm = document.getElementById('emailForm');
if (emailForm) {
    emailForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formMessage = document.getElementById('formMessage');
        const formData = new FormData(emailForm);
        
        // Get form values
        const name = formData.get('name');
        const email = formData.get('email');
        const role = formData.get('role') || 'Not provided';
        
        // Basic validation
        if (!name || !email) {
            showMessage('Please fill in all required fields.', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Simulate form submission (replace with actual API call)
        // In production, you would send this to your email service provider
        // (ConvertKit, Mailchimp, etc.)
        
        setTimeout(() => {
            showMessage('Thank you for subscribing! Check your email to confirm.', 'success');
            emailForm.reset();
            
            // Log to console for now (in production, send to your backend)
            console.log('Form submitted:', { name, email, role });
        }, 1000);
    });
}

function showMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    if (formMessage) {
        formMessage.textContent = message;
        formMessage.className = 'form-message ' + type;
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            formMessage.className = 'form-message';
        }, 5000);
    }
}

// Add scroll-based animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe stat cards, principle cards, etc.
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.stat-card, .principle-card, .ledger-block, .debt-card, .approach-card');
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        el.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
});

// Mobile menu toggle (for future enhancement)
const createMobileMenu = () => {
    const nav = document.querySelector('.nav-links');
    const container = document.querySelector('.nav-container');
    
    if (window.innerWidth <= 768 && !document.querySelector('.mobile-menu-toggle')) {
        const toggle = document.createElement('button');
        toggle.className = 'mobile-menu-toggle';
        toggle.innerHTML = '☰';
        toggle.style.cssText = `
            display: block;
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: var(--color-primary);
        `;
        
        toggle.addEventListener('click', () => {
            nav.classList.toggle('mobile-open');
        });
        
        container.appendChild(toggle);
        
        nav.style.cssText = `
            @media (max-width: 768px) {
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: white;
                flex-direction: column;
                padding: 2rem;
                display: none;
                box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            }
        `;
    }
};

// Initialize mobile menu on load and resize
window.addEventListener('load', createMobileMenu);
window.addEventListener('resize', createMobileMenu);

// Add active state to navigation based on current page
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
        link.classList.add('active');
    }
});

// Console message for developers
console.log('%cLedger Leadership', 'font-size: 24px; font-weight: bold; color: #1a2332;');
console.log('%cBalancing Reality, Accountable Delivery', 'font-size: 14px; color: #b8860b;');
console.log('Interested in the framework? Visit our site or get in touch.');
