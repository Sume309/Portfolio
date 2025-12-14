
// Live Date and Time in Footer
function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    
    document.getElementById('dateTime').textContent = dateTimeString;
    
    // Update current year in copyright
    document.getElementById('currentYear').textContent = now.getFullYear();
}

// Update date time every second
setInterval(updateDateTime, 1000);

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    updateDateTime();
    
    // Animate skill bars on portfolio page
    const skillBars = document.querySelectorAll('.skill-progress');
    if (skillBars.length > 0) {
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width + '%';
        });
    }
    
    // Form validation for contact page
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form elements
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const phone = document.getElementById('phone');
            const address = document.getElementById('address');
            const message = document.getElementById('message');
            
            let isValid = true;
            
            // Reset error states
            document.querySelectorAll('.is-invalid').forEach(el => {
                el.classList.remove('is-invalid');
            });
            
            // Validate name
            if (!name.value.trim()) {
                name.classList.add('is-invalid');
                isValid = false;
            }
            
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.value.trim() || !emailRegex.test(email.value)) {
                email.classList.add('is-invalid');
                isValid = false;
            }
            
            // Validate phone (optional but must be valid if provided)
            if (phone.value.trim() && !/^[\d\s\-+()]{10,}$/.test(phone.value)) {
                phone.classList.add('is-invalid');
                isValid = false;
            }
            
            // Validate message
            if (!message.value.trim() || message.value.trim().length < 10) {
                message.classList.add('is-invalid');
                isValid = false;
            }
            
            // If valid, show success message (in real app, would submit to server)
            if (isValid) {
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
            }
        });
    }
    
    // Initialize Bootstrap tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only for on-page anchors
            if (href.startsWith('#') && href.length > 1) {
                e.preventDefault();
                
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});