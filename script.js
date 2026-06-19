const navWrapper = document.querySelector(".nav-wrapper");
const navLinks = document.querySelectorAll(".nav-links > li > a:not(.contact-btn)");
const indicator = document.querySelector(".nav-indicator");

function moveIndicator(link) {
    const wrapperRect = navWrapper.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();

    indicator.style.width = `${linkRect.width}px`;
    indicator.style.left = `${linkRect.left - wrapperRect.left}px`;
    indicator.style.opacity = "1";
}

navLinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
        moveIndicator(link);
    });
});

navWrapper.addEventListener("mouseleave", () => {
    indicator.style.opacity = "0";
});