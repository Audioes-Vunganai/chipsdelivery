// Smooth scrolling for anchor links
document.querySelector("html").style.scrollBehavior = "smooth";

// Mobile menu toggle
const mobileBtn = document.getElementById("mobile-btn");
const mobileMenu = document.getElementById("mobile-menu");
const mobileIcon = document.getElementById("mukuru");
mobileBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("translate-x-full");
  mobileIcon.classList.toggle("fa-bars");
  mobileIcon.classList.toggle("text-white");
  mobileIcon.classList.toggle("fa-x");
  mobileIcon.classList.toggle("text-primary");
});


