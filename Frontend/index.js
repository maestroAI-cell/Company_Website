const menuButton = document.querySelector('.hero__menu-btn');

const nav = document.querySelector('.header__nav');

menuButton.addEventListener('click', function() {
    nav.classList.toggle('active');
});

