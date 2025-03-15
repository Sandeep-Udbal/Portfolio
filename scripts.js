document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio Loaded Successfully!");

    const darkModeToggle = document.querySelector(".dark-mode-toggle");
    const toggleIcon = document.querySelector(".toggle-icon");
    const body = document.body;

    // Check if dark mode is enabled in local storage
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        toggleIcon.textContent = "☀️"; // Light mode icon
    } else {
        toggleIcon.textContent = "🌙"; // Dark mode icon
    }

    // Toggle dark mode on button click
    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
            toggleIcon.textContent = "☀️"; // Switch to light mode
        } else {
            localStorage.setItem("dark-mode", "disabled");
            toggleIcon.textContent = "🌙"; // Switch to dark mode
        }
    });

    // Additional Theme Toggle Functionality
    const toggleButton = document.getElementById("theme-toggle");

    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-theme");
    }

    toggleButton.addEventListener("click", () => {
        body.classList.toggle("dark-theme");

        if (body.classList.contains("dark-theme")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
});
