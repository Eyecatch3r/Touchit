window.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    darkModeToggle.addEventListener("change", function () {
        const body = document.body;
        const darkModeEnabled = darkModeToggle.checked;

        if (darkModeEnabled) {
            body.classList.add("dark-mode");
            localStorage.setItem('mode', 'dark');
        } else {
            body.classList.remove("dark-mode");
            localStorage.setItem('mode', 'light');
        }
    });
});