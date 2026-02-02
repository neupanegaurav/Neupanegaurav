"use strict";

document.addEventListener("DOMContentLoaded", function () {
    /**
     * Initialize AOS
     */
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    /**
     * Preloader
     */
    const preloader = document.getElementById("preloader");
    if (preloader) {
        window.addEventListener("load", function () {
            setTimeout(function () {
                preloader.style.opacity = "0";
                setTimeout(function () {
                    preloader.style.display = "none";
                }, 500);
            }, 500);
        });
    }

    /**
     * Sticky Navbar & Scroll Spy
     */
    const navbar = document.getElementById("main-nav");

    function toggleNavbarAttributes() {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }

    toggleNavbarAttributes();
    window.addEventListener("scroll", toggleNavbarAttributes);


    /**
     * Mobile Menu handling
     */
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.getElementById('navbarContent');
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                bsCollapse.hide();
            }
        });
    });

    /**
     * GLightbox - Portfolio
     */
    const lightbox = GLightbox({
        selector: '.glightbox',
        touchNavigation: true,
        loop: true,
        autoplayVideos: true
    });

});
