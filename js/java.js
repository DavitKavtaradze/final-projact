const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu,button-div" );

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})