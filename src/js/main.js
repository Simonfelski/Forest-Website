const burgerBtn = document.querySelector(".burger-icon");
const barsIcon = document.querySelector(".fa-bars");
const xIcon = document.querySelector(".fa-times");
const nav = document.querySelector(".nav__items");
const navLinks = document.querySelectorAll(".nav__items-link");
const footerYear = document.querySelector(".footer__year");


const handleCurrentYear = () => {
  const year =(new Date).getFullYear();
  footerYear.innerText = year;
}


const handleNav = () => {
  nav.classList.toggle("show")
}

const closeMenu = () => {
  nav.classList.remove("show")
}


handleCurrentYear();
burgerBtn.addEventListener("click", handleNav);
nav.addEventListener("click", closeMenu);




let section = document.querySelectorAll("section");
// let navLinks = document.querySelectorAll(header nav a);

window.onscroll = () => {

  section.forEach(sec =>{

    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if(top >= offset && top < offset + height) {
        navLinks.forEach(links =>{
          links.classList.remove("active");
          document.querySelector("nav__items-link[href*=" + id + "]").classList.add("active");
        });
    };
  });
};