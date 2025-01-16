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
});
