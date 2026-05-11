// ==========================
// MOBILE MENU
// ==========================

const mobileMenu = document.getElementById('mobileMenu');
const navbar = document.getElementById('navbar');

mobileMenu.addEventListener('click', () => {

    navbar.classList.toggle('active');

    // CHANGE ICON
    const icon = mobileMenu.querySelector('i');

    if(navbar.classList.contains('active')){
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }

});

// ==========================
// LANGUAGE TOGGLE
// ==========================

const langToggle = document.getElementById('langToggle');

const englishElements = document.querySelectorAll('.english-text');
const hindiElements = document.querySelectorAll('.hindi-text');

let currentLang = localStorage.getItem('language') || 'en';

// INITIAL LOAD

function setLanguage(lang){

    if(lang === 'hi'){

        englishElements.forEach(el => {
            el.classList.add('hidden');
        });

        hindiElements.forEach(el => {
            el.classList.remove('hidden');
        });

        langToggle.innerText = 'English';

        document.body.style.fontFamily = "'Noto Sans Devanagari', sans-serif";

    } else {

        englishElements.forEach(el => {
            el.classList.remove('hidden');
        });

        hindiElements.forEach(el => {
            el.classList.add('hidden');
        });

        langToggle.innerText = 'हिंदी';

        document.body.style.fontFamily = "'Poppins', sans-serif";
    }

    currentLang = lang;

    localStorage.setItem('language', lang);

}

// APPLY SAVED LANGUAGE

setLanguage(currentLang);

// TOGGLE BUTTON CLICK

langToggle.addEventListener('click', () => {

    if(currentLang === 'en'){
        setLanguage('hi');
    } else {
        setLanguage('en');
    }

});

// ==========================
// CLOSE MOBILE MENU
// ==========================

const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {

    link.addEventListener('click', () => {

        navbar.classList.remove('active');

        const icon = mobileMenu.querySelector('i');

        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');

    });

});

// ==========================
// HEADER SCROLL EFFECT
// ==========================

const header = document.getElementById('header');

window.addEventListener('scroll', () => {

    if(window.scrollY > 50){

        header.style.background = "rgba(0,0,0,0.92)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";

    } else {

        header.style.background = "rgba(0,0,0,0.75)";
        header.style.boxShadow = "none";

    }

});

// ==========================
// SMOOTH SCROLL
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){

            target.scrollIntoView({
                behavior:'smooth'
            });

        }

    });

});

// ==========================
// SIMPLE IMAGE ANIMATION
// ==========================

const images = document.querySelectorAll('.gallery-grid img, .plot-image img');

images.forEach(image => {

    image.addEventListener('mouseenter', () => {
        image.style.transform = 'scale(1.03)';
    });

    image.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)';
    });

});

// ==========================
// PAGE LOADER EFFECT
// ==========================

window.addEventListener('load', () => {

    document.body.style.opacity = '1';

});

// INITIAL BODY STYLE

document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';
