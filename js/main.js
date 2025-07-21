document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            const icon = this.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
    }

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.main-nav a');
    
    // Highlight active nav link based on current page
    function setActiveLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href').split('/').pop();
            
            // Remove all active classes first
            link.classList.remove('active');
            
            // Check if link matches current page
            if (currentPage === linkPage || 
                (currentPage === '' && linkPage === 'index.html') ||
                (currentPage.includes(linkPage) && linkPage !== '')) {
                link.classList.add('active');
                
                // Add animation properties
                link.style.transition = 'all 0.3s ease';
            }
        });
    }
    
    // Set active link on page load
    setActiveLink();
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Close mobile menu if open
            if (mainNav && mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                if (icon) {
                    icon.classList.toggle('fa-bars');
                    icon.classList.toggle('fa-times');
                }
            }
            
            // Update active link after a short delay to allow page navigation
            setTimeout(setActiveLink, 100);
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    
    // Testimonial slider
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    
    if (testimonials.length > 0) {
        let currentTestimonial = 0;
        
        function showTestimonial(index) {
            testimonials.forEach(testimonial => testimonial.classList.remove('active'));
            testimonials[index].classList.add('active');
            currentTestimonial = index;
        }
        
        showTestimonial(0);
        
        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                let nextIndex = currentTestimonial + 1;
                if (nextIndex >= testimonials.length) nextIndex = 0;
                showTestimonial(nextIndex);
            });
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                let prevIndex = currentTestimonial - 1;
                if (prevIndex < 0) prevIndex = testimonials.length - 1;
                showTestimonial(prevIndex);
            });
        }
        
        // Auto-rotate testimonials
        setInterval(function() {
            let nextIndex = currentTestimonial + 1;
            if (nextIndex >= testimonials.length) nextIndex = 0;
            showTestimonial(nextIndex);
        }, 5000);
    }
    
    // Content tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const contentSections = document.querySelectorAll('.content-section');
    
    if (tabBtns.length > 0 && contentSections.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                
                // Update active tab button
                tabBtns.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Show corresponding content section
                contentSections.forEach(section => {
                    section.classList.remove('active');
                    if (section.id === tabId) {
                        section.classList.add('active');
                    }
                });
            });
        });
    }
    
    // Scroll animations
    const scrollElements = document.querySelectorAll('.scroll-animate');
    
    function checkScroll() {
        scrollElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    }
    
    if (scrollElements.length > 0) {
        window.addEventListener('scroll', checkScroll);
        window.addEventListener('load', checkScroll);
        checkScroll();
    }
    
    // Listen for hash changes (for single page applications)
    window.addEventListener('hashchange', setActiveLink);
});