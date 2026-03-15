// FORM HERE

const modal = document.getElementById('contactModal');
const openBtn = document.getElementById('contactBtn');
const closeBtn = document.getElementById('closeModal');

openBtn.addEventListener('click', () => {
    modal.classList.add('modal--open');
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('modal--open');
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('modal--open');
    }
});

document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Form submitted! (Demo only)');
    modal.classList.remove('modal--open');
});

// END FORM HERE

document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header__top');
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;

    function handleScroll() {
        const currentScrollY = window.scrollY;

        // Add class when scrolled past 50px
        if (currentScrollY > 20) {
            header.classList.add('header--scrolled');
            navbar.classList.add('navbar--scrolled');

        } else {
            header.classList.remove('header--scrolled');
            navbar.classList.remove('navbar--scrolled');
        }

        // Optional: Hide header when scrolling down, show when scrolling up


        if (currentScrollY > 1) {
            // Scrolling down - hide header
            navbar.style.transform = 'translateY(-160%)';
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up - show header
            navbar.style.transform = 'translateY(0%)';
            header.style.transform = 'translateY(0%)';
        }

        lastScrollY = currentScrollY;


    }

    let ticking = false;
    window.addEventListener('scroll', function () {
        if (!ticking) {
            window.requestAnimationFrame(function () {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });
});