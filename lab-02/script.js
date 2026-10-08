// =========================================
// Web Engineering Lab 02
// JavaScript
// =========================================


// Lab 1 greeting logic
const greeting = document.getElementById("greeting");

if (greeting) {
    greeting.textContent = "Welcome to Web Engineering";
}


// Feedback form
const feedbackForm = document.getElementById("feedback-form");

if (feedbackForm) {

    feedbackForm.addEventListener("submit", function (event) {

        event.preventDefault();

        alert("Thank you for your feedback!");

        feedbackForm.reset();

    });

}