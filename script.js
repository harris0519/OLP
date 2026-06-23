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
document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("animate-lawyers");

    const cards = document.querySelectorAll(".lawyer-card.reveal");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("active");
                }, index * 120);

                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    cards.forEach(card => observer.observe(card));
});
