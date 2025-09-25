// Smart Travel Website - Main JavaScript Functionality
// This file contains all the essential JavaScript functions for the website

document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

function initializeWebsite() {
    setupNavigation();
    setupScrollEffects();
    setupContactForm();
    setupFAQ();
    setupWhatsAppBubble();
    setupBackToTop();
    setupAnimations();
}

// Navigation functionality
function setupNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            
            // Update aria-expanded for accessibility
            const isExpanded = navMenu.classList.contains('active');
            navToggle.setAttribute('aria-expanded', isExpanded);
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
}

// Smooth scrolling to sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const sectionTop = section.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }
}

// Scroll effects
function setupScrollEffects() {
    const header = document.querySelector('.header');
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        
        // Header background on scroll
        if (scrollY > 100) {
            header.style.background = 'rgba(37, 99, 235, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'var(--color-primary-blue)';
            header.style.backdropFilter = 'none';
        }
        
        // Back to top button
        if (backToTopBtn) {
            if (scrollY > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }
    });
}

// Contact form functionality
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm()) {
                submitForm();
            }
        });
        
        // Real-time validation
        const inputs = contactForm.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                clearFieldError(this);
            });
        });
    }
}

function validateForm() {
    const form = document.getElementById('contactForm');
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });
    
    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    let isValid = true;
    let errorMessage = '';
    
    // Clear previous error
    clearFieldError(field);
    
    // Required field validation
    if (field.hasAttribute('required') && !value) {
        errorMessage = 'שדה זה נדרש';
        isValid = false;
    }
    
    // Email validation
    if (fieldName === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            errorMessage = 'כתובת אימייל לא תקינה';
            isValid = false;
        }
    }
    
    // Phone validation
    if (fieldName === 'phone' && value) {
        const phoneRegex = /^[\d\-\+\(\)\s]+$/;
        if (!phoneRegex.test(value) || value.length < 10) {
            errorMessage = 'מספר טלפון לא תקין';
            isValid = false;
        }
    }
    
    // Name validation
    if (fieldName === 'name' && value && value.length < 2) {
        errorMessage = 'השם חייב להכיל לפחות 2 תווים';
        isValid = false;
    }
    
    // Message validation
    if (fieldName === 'message' && value && value.length < 10) {
        errorMessage = 'ההודעה חייבת להכיל לפחות 10 תווים';
        isValid = false;
    }
    
    if (!isValid) {
        showFieldError(field, errorMessage);
    }
    
    return isValid;
}

function showFieldError(field, message) {
    field.classList.add('error');
    field.classList.remove('success');
    
    const errorElement = document.getElementById(field.name + '-error');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
}

function clearFieldError(field) {
    field.classList.remove('error');
    field.classList.add('success');
    
    const errorElement = document.getElementById(field.name + '-error');
    if (errorElement) {
        errorElement.textContent = '';
        errorElement.classList.remove('show');
    }
}

function submitForm() {
    const form = document.getElementById('contactForm');
    const formData = new FormData(form);
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'שולח...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        showSuccessMessage();
        form.reset();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Clear all field states
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.classList.remove('error', 'success');
            const errorElement = document.getElementById(input.name + '-error');
            if (errorElement) {
                errorElement.classList.remove('show');
            }
        });
    }, 2000);
}

function showSuccessMessage() {
    const successMessage = document.getElementById('successMessage');
    if (successMessage) {
        successMessage.classList.remove('hidden');
        
        setTimeout(() => {
            successMessage.classList.add('hidden');
        }, 5000);
    }
}

// FAQ functionality
function setupFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', function() {
                const isActive = item.classList.contains('active');
                
                // Close all other FAQ items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        const otherQuestion = otherItem.querySelector('.faq-question');
                        if (otherQuestion) {
                            otherQuestion.setAttribute('aria-expanded', 'false');
                        }
                    }
                });
                
                // Toggle current item
                if (isActive) {
                    item.classList.remove('active');
                    question.setAttribute('aria-expanded', 'false');
                } else {
                    item.classList.add('active');
                    question.setAttribute('aria-expanded', 'true');
                }
            });
        }
    });
}

// Global function for FAQ toggle (called from HTML)
function toggleFAQ(button) {
    const faqItem = button.closest('.faq-item');
    if (faqItem) {
        const isActive = faqItem.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
            const question = item.querySelector('.faq-question');
            if (question) {
                question.setAttribute('aria-expanded', 'false');
            }
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            faqItem.classList.add('active');
            button.setAttribute('aria-expanded', 'true');
        }
    }
}

// WhatsApp bubble functionality
function setupWhatsAppBubble() {
    const whatsappBubble = document.querySelector('.whatsapp-bubble');
    
    if (whatsappBubble) {
        // Show bubble after 3 seconds
        setTimeout(() => {
            whatsappBubble.style.display = 'flex';
        }, 3000);
        
        // Hide bubble after 10 seconds if not interacted with
        setTimeout(() => {
            if (whatsappBubble.style.display !== 'none') {
                whatsappBubble.style.display = 'none';
            }
        }, 13000);
    }
}

// Back to top functionality
function setupBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', scrollToTop);
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Animation setup
function setupAnimations() {
    // Intersection Observer for fade-in animations
    if ('IntersectionObserver' in window) {
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
        
        // Observe elements for animation
        const animatedElements = document.querySelectorAll('.feature-card, .testimonial-card, .blog-card, .about-highlights, .team-section');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            observer.observe(el);
        });
    }
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization
const debouncedScrollHandler = debounce(() => {
    // Scroll-based functionality here
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Export functions for global access
window.scrollToSection = scrollToSection;
window.scrollToTop = scrollToTop;
window.toggleFAQ = toggleFAQ;
