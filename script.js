document.addEventListener("DOMContentLoaded", function () {
    // Header background change on scroll
    let header = document.querySelector("header");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.style.background = "#022047";
            header.style.transition = "0.4s ease-in-out";
        } else {
            header.style.background = "#03152b";
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            let targetId = this.getAttribute("href").substring(1);
            let targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for fixed header
                    behavior: "smooth"
                });
            }
        });
    });

    // Button hover animation
    let buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.05)";
            this.style.transition = "0.2s ease-in-out";
        });
        button.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });
    });

    // Interactive social icons hover effect
    let socialIcons = document.querySelectorAll(".social-links img");
    socialIcons.forEach(icon => {
        icon.addEventListener("mouseenter", function () {
            this.style.transform = "rotate(10deg) scale(1.1)";
        });
        icon.addEventListener("mouseleave", function () {
            this.style.transform = "rotate(0) scale(1)";
        });
    });
});
