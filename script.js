"use strict";

let navbar = document.querySelector("header");
let navlinks = document.querySelectorAll(".navbar-nav .nav-link");
let logo = [
  document.querySelector(".logo-stroke"),
  ...document.querySelectorAll(".logo"),
];

window.addEventListener("scroll", (e) => {
  e.preventDefault();

  if (window.scrollY >= 100) {
    navbar.classList.add("navbar-light", "bg-light");
    navbar.classList.remove("navbar-dark", "bg-transparent");
    logo.forEach((el) => el.classList.add("solid"));
    navlinks.forEach((el) => el.classList.add("solid"));
  } else {
    navbar.classList.remove("navbar-light", "bg-light");
    navbar.classList.add("navbar-dark", "bg-transparent");
    logo.forEach((el) => el.classList.remove("solid"));
    navlinks.forEach((el) => el.classList.remove("solid"));
  }
});
