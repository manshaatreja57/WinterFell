document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const errorMessage = document.getElementById("errorMessage");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        const validPassword = "password123"; // Replace with your password logic

        if (password === validPassword) {
            // Clear any previous error messages
            errorMessage.textContent = "";

            // Store login state in localStorage
            localStorage.setItem("userLoggedIn", true);
            localStorage.setItem("userEmail", email); // Store email as an example

            // Redirect to the main page
            window.location.href = "index.html";
        } else {
            errorMessage.textContent = "Invalid password. Please try again.";
        }
    });
});
