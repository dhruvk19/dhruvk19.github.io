// Page navigation system with URL routing - No fetch required
class PortfolioApp {
    constructor() {
        this.currentPage = 'home';
        this.pageOrder = ['home', 'projects', 'experience', 'about', 'resume'];
        this.pageContainer = document.getElementById('page-container');
        this.header = document.querySelector('.header');
        
        this.init();
    }

    init() {
        // Set up event listeners
        this.setupEventListeners();
        
        // Set up browser history
        this.setupHistory();
        
        // Load page from URL on initial load
        this.loadPageFromURL();
    }

    loadPageFromURL() {
        const path = window.location.pathname;
        const page = path === '/' ? 'home' : path.substring(1);
        
        if (this.pageOrder.includes(page) && page !== 'home') {
            this.showPage(page, false); // false = don't update URL
        }
    }

    setupEventListeners() {
        // Add click handlers to all navigation links
        document.addEventListener('click', (e) => {
            const target = e.target.closest('[data-page]');
            if (target) {
                e.preventDefault();
                const pageName = target.getAttribute('data-page');
                this.showPage(pageName);
            }
        });

        // Handle browser back/forward buttons
        window.addEventListener('popstate', (e) => {
            if (e.state && e.state.page) {
                this.showPage(e.state.page, false);
            }
        });

        // Contact form handling
        document.addEventListener('submit', (e) => {
            if (e.target.classList.contains('contact-form')) {
                e.preventDefault();
                this.handleContactForm(e.target);
            }
        });

        // Add interactive effects to project cards
        document.addEventListener('mouseenter', (e) => {
            if (e.target.classList.contains('project-card')) {
                e.target.style.transform = 'translateY(-10px) scale(1.02)';
            }
        });

        document.addEventListener('mouseleave', (e) => {
            if (e.target.classList.contains('project-card')) {
                e.target.style.transform = 'translateY(0) scale(1)';
            }
        });
    }

    setupHistory() {
        // Initialize browser history
        if (!window.history.state) {
            window.history.replaceState({ page: 'home' }, '', '/');
        }
    }

    getPageDirection(fromPage, toPage) {
        const fromIndex = this.pageOrder.indexOf(fromPage);
        const toIndex = this.pageOrder.indexOf(toPage);
        
        if (fromIndex < toIndex) {
            return 'right'; // Moving forward (swipe right)
        } else if (fromIndex > toIndex) {
            return 'left'; // Moving backward (swipe left)
        }
        return 'none'; // Same page or home
    }

    showPage(pageName, updateURL = true) {
        if (this.currentPage === pageName) return;
        
        const direction = this.getPageDirection(this.currentPage, pageName);
        
        // Update header visibility and style for subpages
        if (pageName === 'home') {
            this.header.classList.remove('subpage', 'show');
        } else {
            this.header.classList.add('subpage', 'show');
        }
        
        // Get current and new page elements (they already exist in the DOM)
        const current = document.getElementById(this.currentPage);
        const newPage = document.getElementById(pageName);
        
        if (!current || !newPage) {
            console.error(`Page not found: ${pageName}`);
            return;
        }
        
        // Set up the new page for animation
        if (direction === 'right') {
            newPage.style.transform = 'translateX(120px)';
        } else if (direction === 'left') {
            newPage.style.transform = 'translateX(-120px)';
        } else {
            newPage.style.transform = 'translateX(0)';
        }
        
        newPage.style.display = 'flex';
        newPage.style.opacity = '0';
        
        // Force a reflow
        newPage.offsetHeight;
        
        // Animate out current page
        if (direction === 'right') {
            current.style.transform = 'translateX(-120px)';
        } else if (direction === 'left') {
            current.style.transform = 'translateX(120px)';
        }
        current.style.opacity = '0';
        
        // Animate in new page
        setTimeout(() => {
            newPage.style.opacity = '1';
            newPage.style.transform = 'translateX(0)';
            newPage.classList.add('active');
        }, 50);
        
        // Clean up old page
        setTimeout(() => {
            current.classList.remove('active');
            current.style.display = 'none';
            current.style.transform = 'translateX(0)';
            current.style.opacity = '0';
        }, 800);

        this.currentPage = pageName;
        
        // Update URL if requested
        if (updateURL) {
            const url = pageName === 'home' ? '/' : `/${pageName}`;
            window.history.pushState({ page: pageName }, '', url);
        }
    }

    handleContactForm(form) {
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Simple validation
        if (!data.name || !data.email || !data.message) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Simulate form submission
        const button = form.querySelector('button');
        const originalText = button.textContent;
        button.textContent = 'Sending...';
        button.disabled = true;
        
        setTimeout(() => {
            alert('Thank you for your message! I\'ll get back to you soon.');
            form.reset();
            button.textContent = originalText;
            button.disabled = false;
        }, 1500);
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
});