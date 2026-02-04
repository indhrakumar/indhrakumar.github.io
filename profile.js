const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const navlink = document.querySelectorAll(".navbar a");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  navbar.classList.toggle("active");
});
navlink.forEach(link => {
  link.addEventListener("click", () => {
    menuIcon.classList.remove("active");
      navbar.classList.remove("active");
    });
});
const root = document.documentElement;
const home      = document.getElementById("home");
const education = document.getElementById("education");
const skills    = document.getElementById("skills");
const career    = document.getElementById("career");
const contact   = document.getElementById("contact");
const defaultColor = getComputedStyle(root).getPropertyValue("--main-color");
const skillColor   = getComputedStyle(root).getPropertyValue("--skill-color");
const careerColor  = getComputedStyle(root).getPropertyValue("--c-color");

function changeMainColor() {
  const middle = window.scrollY + window.innerHeight / 2;

  if (middle >= skills.offsetTop &&
      middle < skills.offsetTop + skills.offsetHeight) {
    root.style.setProperty("--main-color", skillColor);
  }

  else if (middle >= career.offsetTop &&
           middle < career.offsetTop + career.offsetHeight) {
    root.style.setProperty("--main-color", careerColor);
  }
  else {
    root.style.setProperty("--main-color", defaultColor);
  }
}

window.addEventListener("scroll", changeMainColor);
window.addEventListener("load", changeMainColor);


