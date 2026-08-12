
// Smooth scroll for the Learn More button
const learnButton = document.querySelector(".learn-button");
const valuesSection = document.querySelector(".values");

learnButton.addEventListener("click", function (event) {
    event.preventDefault();

    valuesSection.scrollIntoView({
        behavior: "smooth"
    });
});



// Automatically update the copyright year
const copyright = document.querySelector(".footer-copyright p");

if (copyright) {
    copyright.textContent =
        "© " + new Date().getFullYear() + " Infinity Tech. All Rights Reserved";
}