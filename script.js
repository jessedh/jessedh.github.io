// T3Token Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    document.querySelector('.navbar-toggler').click();
                }
            }
        });
    });
    
    // Active navigation link highlighting
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
    
    // Form submission handling (prevent default for demo)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('This is a demo form. In a real implementation, this would submit your message.');
            this.reset();
        });
    }
    
    // Newsletter signup handling (prevent default for demo)
    const newsletterForm = document.querySelector('.newsletter-signup .input-group');
    if (newsletterForm) {
        const subscribeButton = newsletterForm.querySelector('button');
        subscribeButton.addEventListener('click', function() {
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            if (emailInput.value.trim() !== '') {
                alert('This is a demo signup. In a real implementation, you would be subscribed to the newsletter.');
                emailInput.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
    
    // Syntax highlighting simulation for code blocks
    document.querySelectorAll('.code-block code').forEach(block => {
        const text = block.innerHTML;
        
        // Simple syntax highlighting
        const highlighted = text
            .replace(/\/\/(.*)/g, '<span style="color: #6a9955;">$&</span>') // Comments
            .replace(/\b(function|return|if|else|require|const|let|var|new|async|await|for|while)\b/g, '<span style="color: #c586c0;">$&</span>') // Keywords
            .replace(/\b(uint256|address|bytes32|bool|string|struct|mapping)\b/g, '<span style="color: #4ec9b0;">$&</span>') // Types
            .replace(/\b(public|private|external|internal|override|memory|storage)\b/g, '<span style="color: #569cd6;">$&</span>') // Modifiers
            .replace(/(".*?")/g, '<span style="color: #ce9178;">$&</span>') // Strings
            .replace(/\b(true|false|null|undefined)\b/g, '<span style="color: #569cd6;">$&</span>'); // Constants
        
        block.innerHTML = highlighted;
    });
    
    // Animation for feature cards
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.feature-card').forEach(card => {
        observer.observe(card);
    });
});
