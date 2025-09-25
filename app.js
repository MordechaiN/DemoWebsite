// Smart Travel Website - Clean & Simple JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

function initializeWebsite() {
    initMobileNavigation();
    initScrollEffects();
    initAdvancedFormHandling();
    initFAQAccordion();
    initSmoothScrolling();
    initAccessibility();
    initImageLazyLoading();
}

// Mobile Navigation
function initMobileNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

// Smooth Scrolling
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll to section function (used by buttons)
function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Scroll Effects
function initScrollEffects() {
    const backToTopBtn = document.getElementById('backToTop');
    
    const optimizedScrollHandler = debounce(function() {
        // Show/hide back to top button
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    }, 100);

    window.addEventListener('scroll', optimizedScrollHandler);
}

// Back to Top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Enhanced FAQ Accordion with smooth animations
function initFAQAccordion() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function(e) {
            e.preventDefault();
            const faqItem = this.closest('.faq-item');
            const faqAnswer = faqItem.querySelector('.faq-answer');
            const isActive = faqItem.classList.contains('active');
            
            // Close all FAQ items with smooth animation
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('active');
                    const answer = item.querySelector('.faq-answer');
                    const btn = item.querySelector('.faq-question');
                    if (answer && btn) {
                        answer.style.maxHeight = '0px';
                        btn.setAttribute('aria-expanded', 'false');
                    }
                }
            });
            
            // Toggle clicked item with smooth animation
            if (!isActive && faqAnswer) {
                faqItem.classList.add('active');
                faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
                this.setAttribute('aria-expanded', 'true');
            } else {
                faqItem.classList.remove('active');
                faqAnswer.style.maxHeight = '0px';
                this.setAttribute('aria-expanded', 'false');
            }
        });
        
        // Set initial aria-expanded state
        question.setAttribute('aria-expanded', 'false');
    });
}

// Global FAQ toggle function for onclick handlers
function toggleFAQ(button) {
    const faqItem = button.closest('.faq-item');
    const faqAnswer = faqItem.querySelector('.faq-answer');
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
            item.classList.remove('active');
            const answer = item.querySelector('.faq-answer');
            const btn = item.querySelector('.faq-question');
            if (answer && btn) {
                answer.style.maxHeight = '0px';
                btn.setAttribute('aria-expanded', 'false');
            }
        }
    });
    
    // Toggle clicked item
    if (!isActive && faqAnswer) {
        faqItem.classList.add('active');
        faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
        button.setAttribute('aria-expanded', 'true');
    } else {
        faqItem.classList.remove('active');
        faqAnswer.style.maxHeight = '0px';
        button.setAttribute('aria-expanded', 'false');
    }
}

// Advanced Form Handling with Real-time Validation
function initAdvancedFormHandling() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        // Add real-time validation to each field
        const nameField = document.getElementById('name');
        const phoneField = document.getElementById('phone');
        const emailField = document.getElementById('email');
        const messageField = document.getElementById('message');

        if (nameField) {
            nameField.addEventListener('input', validateName);
            nameField.addEventListener('blur', validateName);
        }

        if (phoneField) {
            phoneField.addEventListener('input', validatePhone);
            phoneField.addEventListener('blur', validatePhone);
        }

        if (emailField) {
            emailField.addEventListener('input', validateEmail);
            emailField.addEventListener('blur', validateEmail);
        }

        if (messageField) {
            messageField.addEventListener('input', validateMessage);
            messageField.addEventListener('blur', validateMessage);
        }

        // Handle form submission
        contactForm.addEventListener('submit', handleContactFormSubmission);
    }
}

// Individual field validation functions
function validateName() {
    const nameField = document.getElementById('name');
    const errorElement = document.getElementById('name-error');
    const name = nameField.value.trim();
    
    if (name.length < 2) {
        showFieldError(nameField, errorElement, 'אנא הזן שם מלא (לפחות 2 תווים)');
        return false;
    } else if (name.length > 50) {
        showFieldError(nameField, errorElement, 'השם ארוך מדי (מקסימום 50 תווים)');
        return false;
    } else {
        showFieldSuccess(nameField, errorElement);
        return true;
    }
}

function validatePhone() {
    const phoneField = document.getElementById('phone');
    const errorElement = document.getElementById('phone-error');
    const phone = phoneField.value.trim();
    
    // Remove all non-digit characters for validation
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
    
    // Israeli phone number patterns (more flexible)
    const patterns = [
        /^05[0-9]\d{7}$/, // Mobile: 050xxxxxxx, 052xxxxxxx, etc.
        /^07[2-9]\d{7}$/, // VoIP: 072xxxxxxx, 073xxxxxxx, etc.
        /^0[234589]\d{7}$/, // Landline: 02xxxxxxx, 03xxxxxxx, etc.
        /^97205[0-9]\d{7}$/, // International mobile: 97250xxxxxxx
        /^97207[2-9]\d{7}$/, // International VoIP
        /^9720[234589]\d{7}$/ // International landline
    ];
    
    if (!phone) {
        showFieldError(phoneField, errorElement, 'אנא הזן מספר טלפון');
        return false;
    } else if (cleanPhone.length < 9 || cleanPhone.length > 13) {
        showFieldError(phoneField, errorElement, 'מספר טלפון לא תקין');
        return false;
    } else if (!patterns.some(pattern => pattern.test(cleanPhone))) {
        showFieldError(phoneField, errorElement, 'אנא הזן מספר טלפון ישראלי תקין (דוגמה: 050-1234567)');
        return false;
    } else {
        showFieldSuccess(phoneField, errorElement);
        return true;
    }
}

function validateEmail() {
    const emailField = document.getElementById('email');
    const errorElement = document.getElementById('email-error');
    const email = emailField.value.trim();
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email) {
        showFieldError(emailField, errorElement, 'אנא הזן כתובת דוא״ל');
        return false;
    } else if (!emailRegex.test(email)) {
        showFieldError(emailField, errorElement, 'אנא הזן כתובת דוא״ל תקינה');
        return false;
    } else {
        showFieldSuccess(emailField, errorElement);
        return true;
    }
}

function validateMessage() {
    const messageField = document.getElementById('message');
    const errorElement = document.getElementById('message-error');
    const message = messageField.value.trim();
    
    if (message.length < 10) {
        showFieldError(messageField, errorElement, 'ההודעה קצרה מדי (לפחות 10 תווים)');
        return false;
    } else if (message.length > 1000) {
        showFieldError(messageField, errorElement, 'ההודעה ארוכה מדי (מקסימום 1000 תווים)');
        return false;
    } else {
        showFieldSuccess(messageField, errorElement);
        return true;
    }
}

function showFieldError(field, errorElement, message) {
    field.classList.remove('success');
    field.classList.add('error');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
}

function showFieldSuccess(field, errorElement) {
    field.classList.remove('error');
    field.classList.add('success');
    if (errorElement) {
        errorElement.classList.remove('show');
    }
}

function handleContactFormSubmission(e) {
    e.preventDefault();
    
    // Validate all fields
    const isNameValid = validateName();
    const isPhoneValid = validatePhone();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();
    
    if (isNameValid && isPhoneValid && isEmailValid && isMessageValid) {
        // Simulate form submission
        const submitButton = e.target.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        
        // Show loading state
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> שולח...';
        submitButton.disabled = true;
        
        // Simulate API call delay
        setTimeout(() => {
            // Show success message
            showSuccessMessage();
            
            // Reset form
            e.target.reset();
            
            // Reset all field states
            const fields = e.target.querySelectorAll('.form-control');
            fields.forEach(field => {
                field.classList.remove('error', 'success');
            });
            
            // Reset button
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
            
        }, 1500); // Simulate network delay
        
    } else {
        // Show error message
        showErrorMessage('אנא תקן את השגיאות בטופס');
    }
}

function showSuccessMessage() {
    const successMessage = document.getElementById('successMessage');
    if (successMessage) {
        successMessage.classList.remove('hidden');
        
        // Auto hide after 4 seconds
        setTimeout(() => {
            successMessage.classList.add('hidden');
        }, 4000);
        
        // Allow manual close by clicking outside
        successMessage.addEventListener('click', function(e) {
            if (e.target === successMessage) {
                successMessage.classList.add('hidden');
            }
        });
    }
}

function showErrorMessage(message) {
    // Remove existing error messages
    const existingErrors = document.querySelectorAll('.error-toast');
    existingErrors.forEach(error => error.remove());
    
    // Create error message element
    const errorEl = document.createElement('div');
    errorEl.className = 'error-toast';
    errorEl.innerHTML = `
        <div class="error-content">
            <i class="fas fa-exclamation-triangle"></i>
            <span>${message}</span>
        </div>
        <button class="error-close" onclick="this.parentElement.remove()">×</button>
    `;
    
    // Add styles
    errorEl.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #ef4444;
        color: white;
        padding: 16px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 3000;
        max-width: 400px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        animation: slideInRight 0.3s ease-out;
    `;
    
    // Add animation styles if not exists
    if (!document.querySelector('#errorToastStyles')) {
        const style = document.createElement('style');
        style.id = 'errorToastStyles';
        style.textContent = `
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOutRight {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
            .error-content {
                display: flex;
                align-items: center;
                gap: 8px;
            }
            .error-close {
                background: none;
                border: none;
                color: white;
                font-size: 18px;
                cursor: pointer;
                padding: 4px;
                opacity: 0.8;
            }
            .error-close:hover {
                opacity: 1;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Add to page
    document.body.appendChild(errorEl);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (errorEl.parentElement) {
            errorEl.style.animation = 'slideOutRight 0.3s ease-out forwards';
            setTimeout(() => errorEl.remove(), 300);
        }
    }, 5000);
}

// Lazy Loading for Images (future-proof)
function initImageLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        images.forEach(img => {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
        });
    }
}

// Accessibility Improvements
function initAccessibility() {
    // Add skip link functionality
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.textContent = 'דלג לתוכן הראשי';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        right: 6px;
        background: #000;
        color: white;
        padding: 8px 16px;
        text-decoration: none;
        z-index: 10000;
        border-radius: 4px;
        font-weight: bold;
        transition: top 0.2s;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Ensure proper focus management
    const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    // Improve keyboard navigation
    document.addEventListener('keydown', function(e) {
        // Close success message on Escape
        if (e.key === 'Escape') {
            const successMessage = document.getElementById('successMessage');
            if (successMessage && !successMessage.classList.contains('hidden')) {
                successMessage.classList.add('hidden');
            }
        }
    });
}

// Utility function to debounce events
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

// Smooth scroll animations on scroll
function initScrollAnimations() {
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
    
    // Observe elements that should animate
    const animatedElements = document.querySelectorAll('.feature-card, .testimonial-card, .contact-form, .contact-info');
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
        observer.observe(el);
    });
}

// Initialize scroll animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initScrollAnimations, 200);
});

// Error handling for images
function initImageErrorHandling() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            console.warn('Failed to load image:', this.src);
            // Could add a placeholder image here
            this.style.opacity = '0.5';
        });
    });
}

document.addEventListener('DOMContentLoaded', initImageErrorHandling);

// Performance monitoring (optional)
function logPerformanceMetrics() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
            }, 0);
        });
    }
}

// Initialize performance monitoring
document.addEventListener('DOMContentLoaded', logPerformanceMetrics);

// Export functions for potential external use
window.SmartTravelApp = {
    scrollToSection,
    toggleFAQ,
    validateEmail: function(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },
    validateIsraeliPhone: function(phone) {
        const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
        const patterns = [
            /^05[0-9]\d{7}$/, // Mobile
            /^07[2-9]\d{7}$/, // VoIP
            /^0[234589]\d{7}$/, // Landline
            /^97205[0-9]\d{7}$/, // International mobile
            /^97207[2-9]\d{7}$/, // International VoIP
            /^9720[234589]\d{7}$/ // International landline
        ];
        return patterns.some(pattern => pattern.test(cleanPhone));
    }
};