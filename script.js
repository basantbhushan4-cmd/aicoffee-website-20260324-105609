// Ensure the DOM is fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Toggle ---
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-list a');

    // Function to toggle the mobile menu
    const toggleMobileMenu = () => {
        document.body.classList.toggle('nav-open');
        // Toggle aria-expanded for accessibility
        const isExpanded = hamburgerMenu.getAttribute('aria-expanded') === 'true' || false;
        hamburgerMenu.setAttribute('aria-expanded', !isExpanded);
        navMenu.setAttribute('aria-hidden', isExpanded); // Hide nav from screen readers when closed
    };

    // Add event listener to hamburger icon
    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', toggleMobileMenu);
        hamburgerMenu.setAttribute('aria-controls', 'nav-menu'); // Link hamburger to nav menu
        hamburgerMenu.setAttribute('aria-expanded', 'false');
    }

    // Close mobile menu when a nav link is clicked
    if (navLinks) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (document.body.classList.contains('nav-open')) {
                    toggleMobileMenu();
                }
            });
        });
    }

    // --- Smooth Scrolling ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Form Handling (Newsletter Subscription) ---
    const newsletterForm = document.getElementById('newsletterForm');
    const formMessage = document.getElementById('formMessage');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission

            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;

            // Simple validation
            if (!email || !email.includes('@')) {
                formMessage.textContent = 'Please enter a valid email address.';
                formMessage.style.color = '#e74c3c'; // Red for error
                formMessage.classList.add('show');
                return;
            }

            // Simulate form submission (e.g., to an API)
            console.log(`Subscribing email: ${email}`);

            // In a real application, you'd send this data to a backend:
            /*
            fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email }),
            })
            .then(response => response.json())
            .then(data => {
                // Handle success/failure response
                formMessage.textContent = 'Thank you for subscribing!';
                formMessage.style.color = '#27ae60'; // Green for success
                formMessage.classList.add('show');
                emailInput.value = ''; // Clear the input field
            })
            .catch(error => {
                console.error('Subscription error:', error);
                formMessage.textContent = 'Something went wrong. Please try again later.';
                formMessage.style.color = '#e74c3c'; // Red for error
                formMessage.classList.add('show');
            });
            */

            // For this single-page landing site, we'll just show a success message
            formMessage.textContent = 'Thank you for subscribing to Brew and Haven!';
            formMessage.style.color = '#27ae60'; // Green for success
            formMessage.classList.add('show');
            emailInput.value = ''; // Clear the input field

            // Hide message after a few seconds
            setTimeout(() => {
                formMessage.classList.remove('show');
                formMessage.textContent = '';
            }, 5000);
        });
    }

    // --- Simple Scroll Animation (Optional: Fade-in sections) ---
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the section must be visible
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        // Add a class for initial hidden state if not already in CSS
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        sectionObserver.observe(section);
    });

    // Add CSS for the 'fade-in' class if not already there
    // This part should technically be in CSS but for JS-driven animation it's fine here as a reminder:
    // .fade-in {
    //     opacity: 1 !important;
    //     transform: translateY(0) !important;
    // }
    // Since we are adding inline styles in JS, we need to make sure the CSS doesn't override it easily or use a more robust approach.
    // For simplicity, let's assume the fade-in class will handle it directly in CSS.
    // So, adding a style block to the head for this:
    const style = document.createElement('style');
    style.textContent = `
        section.fade-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

});