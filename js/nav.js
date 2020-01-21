const element = document.querySelector(".navigation");
const element2 = document.querySelector(".nav-container");
window.onscroll = function() {
  if (window.pageYOffset > 80) {
    element.classList.remove("nav-unSticky");
    element.classList.add("nav-sticky");
    element2.style.height = "3rem";
  } else {
    element.classList.remove("nav-sticky");
    element.classList.add("nav-unSticky");
    element2.style.height = "4rem";
  }
};

const mobileNav = document.querySelector(".mobile-nav-icon");
mobileNav.onclick = function() {
  let navItems = document.querySelector(".mobile-nav-items");
  if (navItems.style.display === "inline-block") {
    navItems.style.display = "none";
  } else {
    navItems.style.display = "inline-block";
  }
};
