
// Automatically update the copyright year
const copyright = document.querySelector(".footer-copyright p");

if (copyright) {
    copyright.textContent =
        "© " + new Date().getFullYear() + " Presprint Plc. All Rights Reserved";
}