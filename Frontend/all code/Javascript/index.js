const menuButton = document.querySelector('.header__menu-btn');

const nav = document.querySelector('.header__nav');

menuButton.addEventListener('click', function() {
    nav.classList.toggle('active');
});

