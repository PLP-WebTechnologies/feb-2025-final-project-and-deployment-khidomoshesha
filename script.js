// Theme toggle logic
const toggleButton = document.getElementById('theme-toggle-button');
const body = document.body;

// Set initial icon based on mode
function setThemeIcon() {
    toggleButton.textContent = body.classList.contains('dark-mode') ? '🌙' : '☀️';
}

// Toggle dark mode
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    setThemeIcon();

    // Optional: Store theme preference in local storage
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Load stored theme preference on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
    }
    setThemeIcon();

    // Set current year in footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- Contact Form Validation ---
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent actual form submission for this demo

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim(); // Optional
            const message = document.getElementById('message').value.trim();
            const emailError = document.getElementById('emailError');

            let isValid = true;
            emailError.textContent = ''; // Clear previous email errors
            formStatus.textContent = ''; // Clear previous form status
            formStatus.className = ''; // Clear status styling

            // Name validation
            if (name === '') {
                displayError(document.getElementById('name'), 'Name is required.');
                isValid = false;
            } else {
                clearError(document.getElementById('name'));
            }

            // Email validation
            if (email === '') {
                displayError(document.getElementById('email'), 'Email is required.');
                isValid = false;
            } else if (!validateEmail(email)) {
                emailError.textContent = 'Please enter a valid email address.';
                displayError(document.getElementById('email')); // Mark field
                isValid = false;
            } else {
                clearError(document.getElementById('email'));
            }

            // Message validation
            if (message === '') {
                displayError(document.getElementById('message'), 'Message is required.');
                isValid = false;
            } else {
                clearError(document.getElementById('message'));
            }

            if (isValid) {
                formStatus.textContent = 'Form submitted successfully! (This is a demo - no data was sent)';
                formStatus.classList.add('success');
                contactForm.reset(); // Clear the form
                emailError.textContent = ''; // Ensure email error is cleared on success
                // In a real scenario, you would send data to a server here
                // For example, using fetch()
            } else {
                formStatus.textContent = 'Please correct the errors above.';
                formStatus.classList.add('error');
            }
        });
    }

    // --- Helper function to validate email format ---
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // --- Helper functions to display/clear errors (optional visual feedback) ---
    function displayError(inputElement, message) {
        // You can enhance this to show message next to the field or change border color
        if (inputElement) inputElement.style.borderColor = 'red';
        // For a general form message, formStatus is used.
        // If you want specific messages next to fields, you'd need more spans in HTML
    }

    function clearError(inputElement) {
        if (inputElement) inputElement.style.borderColor = '#ddd'; // Reset to default
    }
});
