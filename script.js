document.addEventListener('DOMContentLoaded', () => {
    // Get the counter element
    const counterElement = document.querySelector('.count-child');
    
    if (!counterElement) {
        console.error('Counter element not found');
        return;
    }

    // Function to get current count from localStorage
    function getCount() {
        return parseInt(localStorage.getItem('pageViews')) || 0;
    }

    // Function to increment and update the count
    function updateCount() {
        const newCount = getCount() + 1;
        localStorage.setItem('pageViews', newCount);
        counterElement.textContent = newCount.toString();
    }

    // Initialize the counter
    updateCount();

    // Theme switcher code
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    const html = document.documentElement;

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        enableDarkMode();
    }

    function enableDarkMode() {
        html.classList.add('dark');
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
        localStorage.setItem('theme', 'dark');
    }

    function disableDarkMode() {
        html.classList.remove('dark');
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
        localStorage.setItem('theme', 'light');
    }

    themeToggle.addEventListener('click', () => {
        if (html.classList.contains('dark')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

    // Updated animation code
    function initializeAnimations() {
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // Add appear class when element comes into view
                if (entry.isIntersecting) {
                    // Small delay to ensure animation triggers
                    setTimeout(() => {
                        entry.target.classList.add('appear');
                    }, 100);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '50px'
        });

        animatedElements.forEach(element => {
            // Reset any existing animations
            element.classList.remove('appear');
            observer.observe(element);
        });
    }

    // Initialize animations
    initializeAnimations();

    // Re-initialize on resize (in case of orientation change)
    window.addEventListener('resize', initializeAnimations);
});
