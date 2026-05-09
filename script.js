// MOBILE MENU

const mobileMenu = document.getElementById('mobileMenu');
const navbar = document.getElementById('navbar');

mobileMenu.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// LANGUAGE TOGGLE

const langToggle = document.getElementById('langToggle');

let currentLang = 'en';

langToggle.addEventListener('click', () => {

    const english = document.querySelectorAll('.english-text');
    const hindi = document.querySelectorAll('.hindi-text');

    if(currentLang === 'en'){

        english.forEach(el => {
            el.classList.add('hidden');
        });

        hindi.forEach(el => {
            el.classList.remove('hidden');
        });

        langToggle.innerText = 'English';

        currentLang = 'hi';

    } else {

        english.forEach(el => {
            el.classList.remove('hidden');
        });

        hindi.forEach(el => {
            el.classList.add('hidden');
        });

        langToggle.innerText = 'हिंदी';

        currentLang = 'en';
    }

});

// CLOSE MOBILE MENU

const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});
