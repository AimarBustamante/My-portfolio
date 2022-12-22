//* Nav Menu

const sideMenu = document.getElementById("side-menu");

function openMenu(){
    sideMenu.style.right = "0";
}

function closeMenu(){
    sideMenu.style.right = "-50%";
}

//* Language Toggler

const check = document.querySelector(".toggler");

check.addEventListener("click",language);

function language(){
    
    let id = check.checked;

    if (id == true){
        location.href = "es/index.html";
    }else{
        location.href = "../index.html"
    }
}

//* Scroll Reveal

ScrollReveal().reveal('nav');
ScrollReveal().reveal('#header', { delay: 500 });
ScrollReveal().reveal('.header-text', { delay: 1000 });
ScrollReveal().reveal('#about', { delay: 500 });
ScrollReveal().reveal('.about-col-1', { delay: 1000 });
ScrollReveal().reveal('.about-col-2', { delay: 1500 });
ScrollReveal().reveal('#services', { delay: 500 });
ScrollReveal().reveal('.services-list', { delay: 1000 });
ScrollReveal().reveal('#portfolio', { delay: 500 });
ScrollReveal().reveal('.work-list', { delay: 1000 });
ScrollReveal().reveal('#contact', { delay: 500 });
ScrollReveal().reveal('.contact-left', { delay: 1000 });
ScrollReveal().reveal('.contact-right', { delay: 1500 });
