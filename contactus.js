document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const feedbackMessage = document.getElementById('feedbackMessage');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // You can add your form submission logic here.
        // For demonstration purposes, let's just display a feedback message.

        feedbackMessage.innerHTML = '<p>Thank you for contacting us! We will get back to you soon.</p>';

        // Clear form fields after submission
        contactForm.reset();
    });
});
