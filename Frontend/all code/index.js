const menuButton = document.querySelector('.header__menu-btn');

const nav = document.querySelector('.header__nav');

menuButton.addEventListener('click', function() {
    nav.classList.toggle('active');
});

// Automatically update the copyright year
const copyright = document.querySelector(".footer-copyright p");

if (copyright) {
    copyright.textContent =
        "© " + new Date().getFullYear() + " Presprint Plc. All Rights Reserved";
}
