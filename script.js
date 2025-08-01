// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// App Permission Checker Tool
function checkPermissions() {
    const appName = document.getElementById('appName').value.toLowerCase();
    const resultDiv = document.getElementById('permissionResult');
    
    if (!appName) {
        resultDiv.innerHTML = '<div class="permission-result warning">Please enter an app name</div>';
        return;
    }

    // Simulated app database with permission data
    const appDatabase = {
        'facebook': {
            risk: 'high',
            permissions: ['Location', 'Camera', 'Microphone', 'Contacts', 'Storage'],
            description: 'High risk - collects extensive personal data'
        },
        'instagram': {
            risk: 'medium',
            permissions: ['Location', 'Camera', 'Microphone', 'Storage'],
            description: 'Medium risk - collects location and media data'
        },
        'whatsapp': {
            risk: 'medium',
            permissions: ['Camera', 'Microphone', 'Contacts', 'Storage'],
            description: 'Medium risk - collects communication data'
        },
        'google maps': {
            risk: 'low',
            permissions: ['Location', 'Storage'],
            description: 'Low risk - location data is expected for functionality'
        },
        'spotify': {
            risk: 'low',
            permissions: ['Storage', 'Microphone'],
            description: 'Low risk - minimal data collection'
        },
        'tiktok': {
            risk: 'high',
            permissions: ['Location', 'Camera', 'Microphone', 'Contacts', 'Storage'],
            description: 'High risk - extensive data collection and tracking'
        },
        'uber': {
            risk: 'medium',
            permissions: ['Location', 'Camera', 'Storage'],
            description: 'Medium risk - location tracking for service'
        }
    };

    const app = appDatabase[appName];
    
    if (app) {
        let riskClass = '';
        let riskIcon = '';
        
        switch(app.risk) {
            case 'high':
                riskClass = 'danger';
                riskIcon = '⚠️';
                break;
            case 'medium':
                riskClass = 'warning';
                riskIcon = '⚡';
                break;
            case 'low':
                riskClass = 'safe';
                riskIcon = '✅';
                break;
        }

        resultDiv.innerHTML = `
            <div class="permission-result ${riskClass}">
                <h4>${riskIcon} ${appName.charAt(0).toUpperCase() + appName.slice(1)}</h4>
                <p><strong>Risk Level:</strong> ${app.risk.toUpperCase()}</p>
                <p><strong>Permissions:</strong> ${app.permissions.join(', ')}</p>
                <p><strong>Analysis:</strong> ${app.description}</p>
            </div>
        `;
    } else {
        resultDiv.innerHTML = `
            <div class="permission-result warning">
                <h4>🔍 App Not Found</h4>
                <p>This app is not in our database. Always review permissions before installing any app.</p>
                <p><strong>General Tips:</strong></p>
                <ul>
                    <li>Check app reviews and ratings</li>
                    <li>Review requested permissions carefully</li>
                    <li>Download only from official app stores</li>
                    <li>Be cautious of apps requesting unnecessary permissions</li>
                </ul>
            </div>
        `;
    }
}

// Security Score Calculator
function calculateScore() {
    const q1 = parseInt(document.getElementById('q1').value);
    const q2 = parseInt(document.getElementById('q2').value);
    const q3 = parseInt(document.getElementById('q3').value);
    
    const totalScore = (q1 + q2 + q3) * 33.33;
    const resultDiv = document.getElementById('scoreResult');
    
    let scoreClass = '';
    let scoreMessage = '';
    let recommendations = '';
    
    if (totalScore >= 80) {
        scoreClass = 'excellent';
        scoreMessage = 'Excellent! You have strong security practices.';
        recommendations = 'Keep up the good work and stay updated with the latest security trends.';
    } else if (totalScore >= 60) {
        scoreClass = 'good';
        scoreMessage = 'Good! You have decent security practices.';
        recommendations = 'Consider enabling 2FA on all accounts and using a VPN for additional protection.';
    } else if (totalScore >= 40) {
        scoreClass = 'fair';
        scoreMessage = 'Fair. There\'s room for improvement in your security practices.';
        recommendations = 'Enable 2FA, update apps regularly, and consider using a VPN. Review your app permissions.';
    } else {
        scoreClass = 'poor';
        scoreMessage = 'Poor. Your security practices need immediate attention.';
        recommendations = 'Enable 2FA immediately, update all apps, use a VPN, and review all app permissions. Consider a security audit.';
    }
    
    resultDiv.innerHTML = `
        <div class="score-result ${scoreClass}">
            <h3>Your Security Score: ${Math.round(totalScore)}%</h3>
            <p><strong>${scoreMessage}</strong></p>
            <p><strong>Recommendations:</strong> ${recommendations}</p>
        </div>
    `;
}

// Community Functions
function joinCommunity() {
    showNotification('Thank you for joining our community! Check your email for next steps.', 'success');
}

function tryGuardian() {
    showNotification('Privacy Guardian demo coming soon! Stay tuned for updates.', 'info');
}

function startLearning() {
    showNotification('Redirecting to Security Academy...', 'info');
    setTimeout(() => {
        alert('Security Academy features:\n\n• Interactive tutorials\n• Security quizzes\n• Community workshops\n• Expert Q&A sessions\n• Real-time threat alerts');
    }, 1000);
}

function findNetwork() {
    showNotification('Finding local security networks in your area...', 'info');
    setTimeout(() => {
        alert('Neighborhood Network Features:\n\n• Local security meetups\n• Community alerts\n• Elder assistance programs\n• Youth education initiatives\n• Emergency response coordination');
    }, 1000);
}

function joinNewsletter(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    
    if (email) {
        showNotification('Thank you for subscribing! You\'ll receive security updates and community news.', 'success');
        event.target.reset();
    } else {
        showNotification('Please enter a valid email address.', 'error');
    }
}

// Notification System
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        max-width: 400px;
        animation: slideIn 0.3s ease-out;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Add notification styles
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 20px;
        cursor: pointer;
        margin-left: 10px;
    }
    
    .score-result.excellent {
        background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
    }
    
    .score-result.good {
        background: linear-gradient(135deg, #2196F3 0%, #1976D2 100%);
    }
    
    .score-result.fair {
        background: linear-gradient(135deg, #FF9800 0%, #F57C00 100%);
    }
    
    .score-result.poor {
        background: linear-gradient(135deg, #f44336 0%, #d32f2f 100%);
    }
`;
document.head.appendChild(notificationStyles);

// Intersection Observer for animations
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

// Observe all animated elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.risk-card, .solution-card, .tool-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add some interactive features
document.addEventListener('DOMContentLoaded', () => {
    // Add click effects to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
});

// Add ripple animation
const rippleStyles = document.createElement('style');
rippleStyles.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyles);

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title .gradient-text');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 80);
    }
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const phoneMockup = document.querySelector('.phone-mockup');
    
    if (hero && phoneMockup) {
        const rate = scrolled * -0.5;
        phoneMockup.style.transform = `translateY(${rate}px)`;
    }
});

// Add counter animation for community stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/\D/g, ''));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + (counter.textContent.includes('+') ? '+' : '') + 
                                    (counter.textContent.includes('%') ? '%' : '');
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = counter.textContent.replace(/\d+/, target);
            }
        };
        
        updateCounter();
    });
}

// Trigger counter animation when community section is visible
const communityObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            communityObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const communitySection = document.querySelector('.community');
    if (communitySection) {
        communityObserver.observe(communitySection);
    }
});
