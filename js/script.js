// Nav Menu

const sideMenu = document.getElementById("side-menu");

function openMenu() {
	sideMenu.style.right = "0";
}

function closeMenu() {
	sideMenu.style.right = "-50%";
}

// Language Toggler

const check = document.querySelector(".toggler");

check.addEventListener("click", language);

function language() {
	location.href = check.checked ? "../es/index.html" : "../index.html";
}

// To top btn

const scrollTopButton = document.querySelector("#scroll-top-button");
const nav = document.querySelector("#nav");

const onScroll = (event) => {
	const scrollPosition = event.target.scrollingElement.scrollTop;

	scrollTopButton.classList.toggle("visible", scrollPosition > 0);
	nav.classList.toggle("scrolled", scrollPosition > 0);
};

const scrollToTop = () => {
	window.scrollTo({ top: 0, behavior: "smooth" });
};

document.addEventListener("scroll", onScroll);

// Load More

// Scroll Reveal

ScrollReveal().reveal("nav");
ScrollReveal().reveal("#header", { delay: 500 });
ScrollReveal().reveal(".header-text", { delay: 1000 });
ScrollReveal().reveal("#about", { delay: 500 });
ScrollReveal().reveal(".about-col-1", { delay: 1000 });
ScrollReveal().reveal(".about-col-2", { delay: 1500 });
ScrollReveal().reveal("#services", { delay: 500 });
ScrollReveal().reveal(".services-list", { delay: 1000 });
ScrollReveal().reveal("#portfolio", { delay: 500 });
ScrollReveal().reveal(".work-list", { delay: 1000 });
ScrollReveal().reveal("#contact", { delay: 500 });
ScrollReveal().reveal(".contact-left", { delay: 1000 });
ScrollReveal().reveal(".contact-right", { delay: 1500 });
