document.addEventListener("DOMContentLoaded", function () {

    // Get all navigation links
    const navLinks = document.querySelectorAll(".header__nav a");

    // Add a click event to each navigation link
    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            console.log("Opening: " + link.textContent);
        });
    });

    // Get all service cards
    const serviceCards = document.querySelectorAll(".service-card");

    // Make service cards clickable
    serviceCards.forEach(function (card) {
        card.addEventListener("click", function () {
            const serviceName = card.querySelector("h3").textContent;

            alert("You selected: " + serviceName);
        });
    });

});