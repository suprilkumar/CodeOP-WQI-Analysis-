
//Not tested functions
document.getElementById('menu-button').addEventListener('click', function () {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

document.getElementById('profile-button').addEventListener('click', function () {
    const dropdown = document.getElementById('profile-dropdown');
    dropdown.classList.toggle('hidden');
});

function toggleMenu() {
    document.getElementById('menu').classList.toggle('hidden');
  }



//Working functions
// Toggle mobile menu
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Change navbar opacity on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.remove('nav-transparent');
        navbar.classList.add('nav-opaque');
    } else {
        navbar.classList.remove('nav-opaque');
        navbar.classList.add('nav-transparent');
    }
});



const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 4000,
    delay: 600,
});

sr.reveal('.heading__text', { origin: 'top' });