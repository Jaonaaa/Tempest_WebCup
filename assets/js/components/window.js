let windowScrollY = 0;
let navbar = document.querySelector(".navbar");
let hamburgerIcon = document.querySelector(".hamburger-icon");
window.addEventListener("scroll", () => {
  // if (window.scrollY != 0) {
  //   navbar.classList.add("scrolled");
  // } else {
  //   navbar.classList.remove("scrolled");
  // }

  if (windowScrollY < window.scrollY) {
    navbar.classList.add("hidden");
  } else {
    navbar.classList.remove("hidden");
  }
  windowScrollY = window.scrollY;
});
