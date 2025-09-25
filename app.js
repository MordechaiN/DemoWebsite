// Blog Management System for Smart Travel Website
// This script handles dynamic blog post loading and rendering

document.addEventListener('DOMContentLoaded', function() {
    initializeBlog();
});

function initializeBlog() {
    loadBlogPosts();
    setupBlogNavigation();
    initializeBlogSearch();
}

// Blog posts data (normally would be loaded from blog.json)
const blogPosts = [
    {
        id: 'smart-vacation-tips',
        title: '5 טיפים לחופשה חכמה וחסכונית',
        excerpt: 'איך לתכנן חופשה מושלמת בלי לפוצץ את התקציב? כאן תמצאו את כל הטיפים החשובים לחופשה חסכונית ומהנה.',
        content: `
            <article class="blog-article">
                <h1>5 טיפים לחופשה חכמה וחסכונית</h1>
                
                <div class="article-meta">
                    <span class="author">מאת: צוות Smart Travel</span>
                    <span class="date">תאריך: 15 בינואר 2025</span>
                </div>

                <div class="article-content">
                    <p>תכנון חופשה לא חייב לפוצץ את התקציב שלכם. עם הטיפים הנכונים, תוכלו ליהנות מחופשה מדהימה במחירים שפויים.</p>

                    <h2>1. תכננו מראש ובצעו השוואת מחירים</h2>
                    <p>ככל שתזמינו מוקדם יותר, כך תחסכו יותר כסף. השוואת מחירים בין אתרים שונים חיונית - לעיתים ההפרש יכול להגיע למאות שקלים.</p>

                    <h2>2. היו גמישים עם התאריכים</h2>
                    <p>נסיעה באמצע השבוע או מחוץ לעונה תמיד זולה יותר. השתמשו בכלים של חיפוש טיסות גמישות כדי למצוא את המחירים הטובים ביותר.</p>

                    <h2>3. שקלו יעדים חלופיים</h2>
                    <p>במקום פריז, נסו ליון. במקום רומא, שקלו נאפולי. יעדים פחות פופולאריים מציעים חוויה אותנטית במחירים נמוכים יותר.</p>

                    <h2>4. חפשו חבילות משולבות</h2>
                    <p>לרוב, הזמנת טיסה ומלון יחד חוסכת כסף משמעותי. בדקו את האפשרויות השונות ובחרו את החבילה המתאימה לכם.</p>

                    <h2>5. היעזרו במומחים</h2>
                    <p>סוכן נסיעות מקצועי יודע איפה למצוא את המבצעים הטובים ביותר ויכול לחסוך לכם זמן וכסף רב.</p>

                    <div class="article-cta">
                        <h3>מעוניינים בעזרה בתכנון החופשה?</h3>
                        <p>צוות המומחים שלנו ב-Smart Travel יעזור לכם למצוא את החופשה המושלמת במחיר שמתאים לכם.</p>
                        <button class="btn btn--primary" onclick="scrollToSection('contact')">צור קשר עכשיו</button>
                    </div>
                </div>
            </article>
        `,
        image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=200&fit=crop',
        url: 'article.html?slug=smart-vacation-tips',
        date: '2025-01-15',
        author: 'צוות Smart Travel',
        tags: ['טיפים', 'חיסכון', 'תכנון']
    },
    {
        id: 'flight-booking-secrets',
        title: 'סודות הזמנת טיסות: מתי ואיך לקנות',
        excerpt: 'מתי הזמן הטוב ביותר להזמין טיסות? איך למצוא את המחירים הטובים ביותר? כל הסודות כאן.',
        content: `
            <article class="blog-article">
                <h1>סודות הזמנת טיסות: מתי ואיך לקנות</h1>
                
                <div class="article-meta">
                    <span class="author">מאת: דנה כהן</span>
                    <span class="date">תאריך: 12 בינואר 2025</span>
                </div>

                <div class="article-content">
                    <p>עולם הזמנת הטיסות מלא בסודות וטריקים שיכולים לחסוך לכם מאות או אפילו אלפי שקלים. הנה המדריך המלא שלנו.</p>

                    <h2>מתי להזמין?</h2>
                    <p><strong>לטיסות פנימיות:</strong> 1-2 חודשים מראש<br>
                    <strong>לטיסות לאירופה:</strong> 2-3 חודשים מראש<br>
                    <strong>לטיסות למזרח הרחוק:</strong> 3-4 חודשים מראש</p>

                    <h2>באיזה יום בשבוע כדאי לטוס?</h2>
                    <p>יום שלישי ורביעי הם הימים הזולים ביותר לטיסות. הימנעו מטיסות בסוף השבוע - הן יקרות משמעותיות יותר.</p>

                    <h2>השעות הטובות ביותר</h2>
                    <p>טיסות מוקדמות בבוקר או מאוחרות בערב זולות יותר. הימנעו מטיסות בשעות הפופולאריות (10:00-14:00).</p>

                    <h2>טריקים לחיפוש</h2>
                    <ul>
                        <li>השתמשו במצב גלישה פרטית בדפדפן</li>
                        <li>נקו את המטמון והעוגיות</li>
                        <li>חפשו גם ביעדים סמוכים</li>
                        <li>בדקו טיסות עם הקפות</li>
                        <li>השוו מחירים במטבעות שונים</li>
                    </ul>

                    <h2>התזמון המושלם</h2>
                    <p>הזמינו טיסות ביום שלישי בין השעות 15:00-18:00. זהו התזמון הסטטיסטי הטוב ביותר לקבלת מחירים נמוכים.</p>

                    <div class="article-tips">
                        <h3>💡 טיפ מקצועי</h3>
                        <p>אל תחכו לרגע האחרון! מחירי הטיסות עולים בחדות בשבועיים האחרונים לפני המועד המבוקש.</p>
                    </div>

                    <div class="article-cta">
                        <h3>צריכים עזרה בחיפוש הטיסה המושלמת?</h3>
                        <p>המומחים שלנו יבדקו עבורכם את כל האפשרויות וימצאו את המחיר הטוב ביותר.</p>
                        <button class="btn btn--primary" onclick="scrollToSection('contact')">בקש הצעת מחיר</button>
                    </div>
                </div>
            </article>
        `,
        image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=200&fit=crop',
        url: 'article.html?slug=flight-booking-secrets',
        date: '2025-01-12',
        author: 'דנה כהן',
        tags: ['טיסות', 'חיסכון', 'הזמנות']
    },
    {
        id: 'travel-insurance-guide',
        title: 'מדריך ביטוח נסיעות: הכל שצריך לדעת',
        excerpt: 'ביטוח נסיעות - האם באמת צריך? איזה סוגי ביטוח קיימים ואיך לבחור את הביטוח הנכון עבורכם.',
        content: `
            <article class="blog-article">
                <h1>מדריך ביטוח נסיעות: הכל שצריך לדעת</h1>
                
                <div class="article-meta">
                    <span class="author">מאת: צוות Smart Travel</span>
                    <span class="date">תאריך: 8 בינואר 2025</span>
                </div>

                <div class="article-content">
                    <p>ביטוח נסיעות הוא אחד הדברים החשובים ביותר שאסור לוותר עליהם בנסיעה לחו"ל. הנה המדריך המלא.</p>

                    <h2>למה צריך ביטוח נסיעות?</h2>
                    <p>ביטוח נסיעות מכסה אתכם במגוון מצבים:</p>
                    <ul>
                        <li>טיפול רפואי חירום</li>
                        <li>ביטול או קיצור הטיול</li>
                        <li>אובדן או גניבת מזווודות</li>
                        <li>פיצוי על איחור טיסות</li>
                        <li>אחריות אזרחית כלפי צד שלישי</li>
                    </ul>

                    <h2>סוגי ביטוח נסיעות</h2>
                    
                    <h3>ביטוח בסיסי</h3>
                    <p>מכסה טיפול רפואי חירום ופינוי רפואי. זהו המינימום הנדרש לכל נסיעה.</p>

                    <h3>ביטוח מקיף</h3>
                    <p>מכסה גם ביטול נסיעה, מזוודות ואחריות אזרחית. מומלץ לרוב המטיילים.</p>

                    <h3>ביטוח למטיילים תכופים</h3>
                    <p>ביטוח שנתי המכסה מספר נסיעות. חסכוני למי שנוסע הרבה.</p>

                    <h2>כמה עולה?</h2>
                    <p>ביטוח נסיעות עולה בין 2%-5% ממחיר הטיול. השקעה קטנה שיכולה לחסוך אלפי שקלים.</p>

                    <h2>על מה לשים לב בפוליסה?</h2>
                    <ul>
                        <li><strong>גובה הכיסוי:</strong> לפחות 50,000$ לטיפול רפואי</li>
                        <li><strong>מחלות קיימות:</strong> האם מכוסות?</li>
                        <li><strong>פעילויות ספורט:</strong> האם נכללות?</li>
                        <li><strong>תקופת ההמתנה:</strong> מתי הביטוח נכנס לתוקף?</li>
                    </ul>

                    <div class="article-warning">
                        <h3>⚠️ חשוב לזכור</h3>
                        <p>אל תוותרו על ביטוח נסיעות! גם אם אתם בריאים וצעירים - תאונות קורות והטיפול הרפואי בחו"ל יקר מאוד.</p>
                    </div>

                    <div class="article-cta">
                        <h3>רוצים ייעוץ בבחירת ביטוח נסיעות?</h3>
                        <p>המומחים שלנו יעזרו לכם לבחור את הביטוח המתאים ביותר לסוג הנסיעה שלכם.</p>
                        <button class="btn btn--primary" onclick="scrollToSection('contact')">קבל ייעוץ חינם</button>
                    </div>
                </div>
            </article>
        `,
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=200&fit=crop',
        url: 'article.html?slug=travel-insurance-guide',
        date: '2025-01-08',
        author: 'צוות Smart Travel',
        tags: ['ביטוח', 'טיפים', 'בטיחות']
    }
];

function loadBlogPosts() {
    const blogGrid = document.getElementById('blog-grid');
    
    if (!blogGrid) {
        console.log('Blog grid not found');
        return;
    }

    // Clear existing content
    blogGrid.innerHTML = '';

    // Load blog posts
    try {
        if (blogPosts && blogPosts.length > 0) {
            renderBlogPosts(blogPosts.slice(0, 3)); // Show only first 3 posts
        } else {
            showNoBlogPosts();
        }
    } catch (error) {
        console.error('Error loading blog posts:', error);
        showBlogError();
    }
}

function renderBlogPosts(posts) {
    const blogGrid = document.getElementById('blog-grid');
    
    posts.forEach((post, index) => {
        const blogCard = createBlogCard(post, index);
        blogGrid.appendChild(blogCard);
    });

    // Initialize animations for the new blog cards
    if ('IntersectionObserver' in window) {
        const blogCards = blogGrid.querySelectorAll('.blog-card');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        });

        blogCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = `opacity 0.6s ease-out ${index * 0.2}s, transform 0.6s ease-out ${index * 0.2}s`;
            observer.observe(card);
        });
    }
}

function createBlogCard(post, index) {
    const article = document.createElement('article');
    article.className = 'blog-card';
    article.setAttribute('data-post-id', post.id);
    
    // Create image element with error handling
    const imageHtml = post.image ? 
        `<img src="${post.image}" alt="${post.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x200/e2e8f0/64748b?text=מאמר'">`
        : `<div class="placeholder-image" style="display: flex; align-items: center; justify-content: center; background: var(--color-light-bg); color: var(--color-text-secondary);">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 19l3.5-4.5 2.5 3.01L14.5 12l4.5 7H5z" fill="currentColor"/>
            </svg>
           </div>`;

    article.innerHTML = `
        <div class="blog-image">
            ${imageHtml}
        </div>
        <div class="blog-content">
            <h3 class="blog-title">${post.title}</h3>
            <p class="blog-excerpt">${post.excerpt}</p>
            <div class="blog-meta">
                <span class="blog-date">${formatDate(post.date)}</span>
                <span class="blog-author">מאת: ${post.author}</span>
            </div>
            <a href="#" class="blog-read-more" onclick="openBlogPost('${post.id}'); return false;" role="button">
                קרא עוד
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>
        </div>
    `;

    // Add hover effects
    article.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });

    article.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });

    return article;
}

function openBlogPost(postId) {
    const post = blogPosts.find(p => p.id === postId);
    if (!post) {
        console.error('Post not found:', postId);
        return;
    }

    // Create modal overlay
    const modal = document.createElement('div');
    modal.className = 'blog-modal';
    modal.innerHTML = `
        <div class="blog-modal-overlay" onclick="closeBlogModal()"></div>
        <div class="blog-modal-content">
            <button class="blog-modal-close" onclick="closeBlogModal()" aria-label="סגור מאמר">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="blog-modal-body">
                ${post.content}
            </div>
        </div>
    `;

    // Add modal styles
    const modalStyles = `
        <style>
        .blog-modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 3000;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: fadeIn 0.3s ease-out;
        }
        
        .blog-modal-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(4px);
        }
        
        .blog-modal-content {
            position: relative;
            background: var(--color-white);
            border-radius: 1rem;
            max-width: 800px;
            max-height: 90vh;
            overflow-y: auto;
            margin: 2rem;
            box-shadow: var(--shadow-xl);
            animation: slideUp 0.3s ease-out;
        }
        
        .blog-modal-close {
            position: absolute;
            top: 1rem;
            left: 1rem;
            background: var(--color-white);
            border: none;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: var(--shadow-medium);
            z-index: 1;
            transition: var(--transition-fast);
        }
        
        .blog-modal-close:hover {
            background: var(--color-light-bg);
            transform: scale(1.1);
        }
        
        .blog-modal-body {
            padding: 2rem;
        }
        
        .blog-article h1 {
            font-size: 2rem;
            margin-bottom: 1rem;
            color: var(--color-text-dark);
        }
        
        .article-meta {
            display: flex;
            gap: 1rem;
            margin-bottom: 2rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid var(--color-border-light);
            font-size: 0.9rem;
            color: var(--color-text-secondary);
        }
        
        .article-content h2 {
            font-size: 1.5rem;
            margin: 2rem 0 1rem 0;
            color: var(--color-text-dark);
        }
        
        .article-content h3 {
            font-size: 1.25rem;
            margin: 1.5rem 0 1rem 0;
            color: var(--color-text-dark);
        }
        
        .article-content p {
            margin-bottom: 1rem;
            line-height: 1.7;
        }
        
        .article-content ul, .article-content ol {
            margin: 1rem 0 1rem 2rem;
            line-height: 1.6;
        }
        
        .article-content li {
            margin-bottom: 0.5rem;
        }
        
        .article-tips, .article-warning {
            background: var(--color-light-bg);
            padding: 1.5rem;
            border-radius: 0.5rem;
            margin: 2rem 0;
            border-right: 4px solid var(--color-primary-green);
        }
        
        .article-warning {
            border-right-color: #f59e0b;
            background: #fef3c7;
        }
        
        .article-cta {
            background: linear-gradient(135deg, var(--color-primary-green), var(--color-primary-blue));
            color: var(--color-white);
            padding: 2rem;
            border-radius: 1rem;
            text-align: center;
            margin: 2rem 0;
        }
        
        .article-cta h3 {
            color: var(--color-white);
            margin-bottom: 1rem;
        }
        
        .article-cta p {
            opacity: 0.9;
            margin-bottom: 1.5rem;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes slideUp {
            from { 
                opacity: 0;
                transform: translateY(30px);
            }
            to { 
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @media (max-width: 768px) {
            .blog-modal-content {
                margin: 1rem;
                max-height: 95vh;
            }
            
            .blog-modal-body {
                padding: 1.5rem;
            }
            
            .blog-article h1 {
                font-size: 1.5rem;
            }
        }
        </style>
    `;

    // Add styles to head if not exists
    if (!document.querySelector('#blog-modal-styles')) {
        const styleElement = document.createElement('div');
        styleElement.id = 'blog-modal-styles';
        styleElement.innerHTML = modalStyles;
        document.head.appendChild(styleElement);
    }

    // Add modal to body
    document.body.appendChild(modal);
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    
    // Focus management for accessibility
    const closeButton = modal.querySelector('.blog-modal-close');
    if (closeButton) {
        closeButton.focus();
    }

    // Track blog post view
    if (window.SmartTravelApp && window.SmartTravelApp.trackEvent) {
        window.SmartTravelApp.trackEvent('blog', 'post_view', postId);
    }
}

// Global function to close blog modal
window.closeBlogModal = function() {
    const modal = document.querySelector('.blog-modal');
    if (modal) {
        modal.style.animation = 'fadeOut 0.3s ease-out forwards';
        setTimeout(() => {
            modal.remove();
            document.body.style.overflow = '';
        }, 300);
    }
};

function showNoBlogPosts() {
    const blogGrid = document.getElementById('blog-grid');
    blogGrid.innerHTML = `
        <div class="no-blog-posts" style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: var(--color-light-bg); border-radius: 1rem;">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" style="margin: 0 auto 1rem auto; color: var(--color-text-secondary);">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <polyline points="14,2 14,8 20,8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <polyline points="10,9 9,9 8,9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <h3>בקרוב יתווספו מאמרים חדשים</h3>
            <p>אנחנו עובדים על תוכן מעניין ושימושי עבורכם</p>
        </div>
    `;
}

function showBlogError() {
    const blogGrid = document.getElementById('blog-grid');
    blogGrid.innerHTML = `
        <div class="blog-error" style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: #fef2f2; border-radius: 1rem; border: 1px solid #fecaca;">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" style="margin: 0 auto 1rem auto; color: #ef4444;">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                <line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" stroke-width="2"/>
                <line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" stroke-width="2"/>
            </svg>
            <h3>שגיאה בטעינת המאמרים</h3>
            <p>אנא נסו לרענן את הדף או חזרו מאוחר יותר</p>
            <button class="btn btn--primary" onclick="loadBlogPosts()" style="margin-top: 1rem;">נסה שוב</button>
        </div>
    `;
}

function setupBlogNavigation() {
    // Add blog navigation functionality if needed
    const blogSection = document.getElementById('blog');
    if (blogSection) {
        // Add scroll-to-top functionality for blog section
        const backToTopBtn = document.getElementById('backToTop');
        if (backToTopBtn) {
            backToTopBtn.addEventListener('click', function() {
                blogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        }
    }
}

function initializeBlogSearch() {
    // Future feature: blog search functionality
    // This can be expanded to include search and filter capabilities
    console.log('Blog search initialized (placeholder for future feature)');
}

// Utility Functions
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    
    return date.toLocaleDateString('he-IL', options);
}

function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength).replace(/\s+\S*$/, '') + '...';
}

// Export functions for external use
window.BlogManager = {
    loadBlogPosts,
    renderBlogPosts,
    createBlogCard: function(post) {
        return createBlogCard(post, 0);
    },
    openBlogPost,
    closeBlogModal: window.closeBlogModal,
    blogPosts: blogPosts
};

// Handle browser back/forward buttons for modal
window.addEventListener('popstate', function(e) {
    const modal = document.querySelector('.blog-modal');
    if (modal) {
        window.closeBlogModal();
    }
});

// Close modal on escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const modal = document.querySelector('.blog-modal');
        if (modal) {
            window.closeBlogModal();
        }
    }
});

// Add CSS animation for fade out
const fadeOutStyle = document.createElement('style');
fadeOutStyle.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(fadeOutStyle);