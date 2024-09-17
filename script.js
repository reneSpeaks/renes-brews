const header = document.querySelector("header"); 
const menuButton = document.querySelector("#menu-btn");
const closeMenuButton = document.querySelector("#close-menu-btn");

function stickyHeader() {
    window.addEventListener("scroll", function () {
        header.classList.toggle("sticky", window.scrollY > 0);
    });
};

function mobileMenu() {
    menuButton.addEventListener("click", () => {header.classList.toggle("show-mobile-menu"); });
    closeMenuButton.addEventListener("click", () => { menuButton.click(); });
};

window.onload = function () {
    mobileMenu();
    stickyHeader();
};